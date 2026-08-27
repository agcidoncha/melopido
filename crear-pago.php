<?php
/**
 * Crea una sesión de pago en Stripe Checkout para una funda de almohada de seda.
 *
 * Recibe por POST: "talla" (obligatoria) y "color" (opcional, solo referencia).
 * El precio SIEMPRE se decide aquí, según la talla, buscando en la tabla de
 * abajo — nunca se confía en un precio que venga del navegador.
 */

require __DIR__ . '/stripe-config.php';

// Tabla fija talla -> Price ID de Stripe (entorno de prueba, ver memoria del proyecto)
$preciosPorTalla = [
    '75x50'  => 'price_1TuHAEIbP4qX7UYuhZKNwnu2',
    '90x45'  => 'price_1TuU30IbP4qX7UYuTq4D4uvQ',
    '110x45' => 'price_1TuU4BIbP4qX7UYuFiK0rN8b',
    '120x45' => 'price_1TuU4YIbP4qX7UYuQimf8SIX',
    '135x45' => 'price_1TuU5BIbP4qX7UYu9Qs50A6t',
    '150x45' => 'price_1TuU5ZIbP4qX7UYuMEx4VHa1',
];

$talla = $_POST['talla'] ?? '';
$color = $_POST['color'] ?? '';

if (!isset($preciosPorTalla[$talla])) {
    http_response_code(400);
    die('Talla no válida.');
}

$priceId = $preciosPorTalla[$talla];

$dominio = 'https://' . $_SERVER['HTTP_HOST'];

$datosPeticion = [
    'mode' => 'payment',
    'line_items' => [
        [
            'price' => $priceId,
            'quantity' => 1,
        ],
    ],
    'shipping_address_collection' => [
        // De momento solo España. Para añadir más países en el futuro:
        // añadir el código aquí y decidir el precio de envío correspondiente.
        'allowed_countries' => ['ES'],
    ],
    'shipping_options' => [
        [
            'shipping_rate_data' => [
                'type' => 'fixed_amount',
                'fixed_amount' => [
                    'amount' => 495, // 4,95 € en céntimos
                    'currency' => 'eur',
                ],
                'display_name' => 'Envío estándar',
            ],
        ],
    ],
    'metadata' => [
        'talla' => $talla,
        'color' => $color,
    ],
    // La metadata de arriba solo queda en la "Sesión de compra". Para que
    // también aparezca en el Pago (la pantalla que se mira en el día a día),
    // hay que repetirla aquí para que Stripe la copie al PaymentIntent.
    'payment_intent_data' => [
        'metadata' => [
            'talla' => $talla,
            'color' => $color,
        ],
    ],
    'success_url' => $dominio . '/gracias-por-tu-compra.html?session_id={CHECKOUT_SESSION_ID}',
    'cancel_url' => $dominio . '/funda-almohada-seda-' . $talla . '.html',
];

// Stripe espera los datos en formato "application/x-www-form-urlencoded" con
// claves anidadas tipo line_items[0][price]. http_build_query lo genera solo.
$cuerpoPeticion = http_build_query($datosPeticion);

$ch = curl_init('https://api.stripe.com/v1/checkout/sessions');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $cuerpoPeticion);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . STRIPE_SECRET_KEY,
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$respuesta = curl_exec($ch);
$codigoHttp = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$datos = json_decode($respuesta, true);

if ($codigoHttp !== 200 || empty($datos['url'])) {
    http_response_code(502);
    error_log('Error creando sesión de Stripe: ' . $respuesta);
    die('No se ha podido iniciar el pago. Inténtalo de nuevo en unos minutos.');
}

header('Location: ' . $datos['url']);
exit;
