# Melopido — contexto del proyecto (actualizado)

Web SEO de fundas de almohada de seda de morera. HTML/CSS/JS estático, sin build ni framework, subido por FTP a hosting compartido (Apache, `.htaccess`). No usar WordPress, Shopify, ni ningún CMS — el sitio es y debe seguir siendo estático.

Repositorio: [github.com/agcidoncha/melopido](https://github.com/agcidoncha/melopido) (rama `main`). Titular del sitio: MEPERMO S.L.

**Estado**: el rediseño (ver más abajo) ya está terminado en local y subido al repositorio de GitHub. **Todavía no se ha subido al servidor real (melopido.shop sigue con el diseño antiguo).**

## Lo que NO se puede tocar sin autorización

- **URLs y nombres de archivo**: todas las páginas son `.html` en la raíz (`index.html`, `funda-almohada-seda-90x45.html`, etc.). Son URLs indexadas en Google — no renombrar, no mover de carpeta, no añadir `/` al final.
- **Textos, títulos, encabezados**: no reescribir copy salvo que se acuerde explícitamente. Excepción ya hecha: en las 6 páginas de producto, el botón "Instrucciones de uso" se sustituyó por dos botones ("Comprar" + "Instrucciones de uso" como enlace secundario) — ver más abajo.
- **`<title>`, `meta description`, `canonical`, JSON-LD, `og:*`**: no tocar.
- **Clases/IDs que usa `script.js`** (imprescindible mantener exactamente estos nombres):
  `.menu-icon`, `.menu-overlay`, `menu-open` (clase de `body`), `.desktop-menu-toggle`, `.desktop-menu`, `.desktop-menu-overlay`, `.desktop-menu-close`, `desktop-menu-open` (clase de `body`), `#claim-text`, `#claim-sub`, `is-visible`/`is-hidden`, `#hero-title`, `#hero-sub`, `.hero-bg-1`, `.hero-bg-2`, `hero-fade`/`hero-visible`, `.product-colors span` (con `data-color`), `#amazon-link`, `.js-amazon-link` (clase nueva, ver más abajo), `#selected-color-desktop`, `#selected-color-mobile`, `#product-image`, `.product` (con `data-size`), `.product-thumb`, `.mobile-menu a`, `.mobile-close`, `.mobile-toggle-row`, `.mobile-item`, `.mobile-submenu`/`open`, `.js-open-video`, `#video-modal`, `#close-video-modal`, `.video-modal-overlay`, `#melopido-video`, `#video-custom-play`, `.desktop-toggle-row`, `.desktop-menu-item`, `active`.

## Estructura de páginas (17 archivos)

- `index.html` — home.
- `funda-de-almohada-de-seda.html` — guía/pilar de contenido.
- 6 páginas de producto por medida: `funda-almohada-seda-{75x50,90x45,110x45,120x45,135x45,150x45}.html`.
- Contenido/SEO: `beneficios-funda-almohada-seda.html`, `funda-almohada-seda-arrugas.html`, `funda-almohada-seda-cabello.html`, `funda-seda-vs-algodon-saten.html`, `colores-funda-almohada-seda.html`, `tallas-funda-almohada-seda.html`, `instrucciones-de-uso.html`.
- Legales: `avisolegal.html`, `privacidad.html` (antes no existía como archivo real, se creó durante este proyecto).

## Sistema de diseño actual (ya aplicado a las 17 páginas)

- **Paleta pastel** (tokens en `styles.css`, `:root`): crema (`--bg:#f8f3ee`), rosa empolvado (`--accent:#d99a97`, `--accent-deep:#c17d7a`), sage suave (`--sage:#c9d6c4`), tinta oscura para texto (`--dark:#3a3431`). Sin negro ni dorado (se probó y se descartó por "parecer un burdel").
- **Tipografías**: Montserrat + Playfair Display + **Pontiac** (para el logotipo). Pontiac es un archivo DEMO de Fontspring sin licencia de producción — **decisión tomada: se queda así, no se sustituye** (pendiente solo si el usuario cambia de opinión).
- **Botones de producto**: "Lo Quiero" (naranja, Amazon, con icono) + "Comprar" (rosa Melopido, con icono de bolsa, clase `.js-amazon-link` — apunta a Amazon como marcador temporal hasta tener pasarela de pago propia) + "Instrucciones de uso" (enlace de texto secundario, separado por una barra vertical).
- **Footer**: fondo claro, marca en fila superior con línea separadora, 3 grupos de enlaces (Fundas/Información/Más) en fila con los enlaces en línea junto al título (no apilados, no en columnas rígidas).
- **Cards**: todos los bloques (hero de contenido, guía SEO, footer, producto) usan tarjetas redondeadas de `1120px` de ancho máximo, mismo ancho entre sí para que todo quede alineado.
- **Responsive**: un único breakpoint `@media (max-width: 768px)`.
- **Caché**: `styles.css` y `script.js` se referencian con `?v=1` en las 17 páginas — **cada vez que se modifique cualquiera de los dos archivos, hay que subir ese número (`v=2`, `v=3`...) en las 17 páginas** para que a los visitantes no se les quede la versión vieja cacheada (el `.htaccess` real cachea `.js`/`.css` durante bastante tiempo).

## Pendiente

- **Subir el rediseño al servidor real** (hoy solo está en local + GitHub).
- **Venta directa**: plan acordado = Stripe Checkout + función backend mínima (ver detalle en `project_venta_directa_melopido.md`, memoria de Claude). Falta: (1) definir precio por talla, (2) conectar herramienta de facturación/Verifactu (lo gestiona el usuario mismo, no necesita asesoría externa).
- Limpieza de imágenes: ya se hizo (se quitaron los `.psd` y los JPG a resolución completa sin usar, ~350 MB en total). No queda peso muerto conocido en `images/`.
- URLs antiguas de WordPress (joyería) indexadas: ya resuelto por el usuario con redirecciones 301 reales en el `.htaccess` del servidor.
