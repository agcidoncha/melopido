# Sistema de Diseño Melopido

Melopido es una tienda online española especializada en **fundas de almohada de seda de morera premium** ("fundas de almohada de seda de morera"), vendida a través de su propia web de marketing orientada a SEO (melopido.shop) y de su tienda en Amazon. La línea de producto son 6 tallas de funda (de 75×50 a 150×45 cm) en 7 colores, posicionada como un producto de cuidado de piel/cabello durante el sueño (seda de 22 momme, hipoalergénica, reduce el encrespamiento y las arrugas).

**⚠️ Nota de alcance:** la descripción de la empresa menciona joyería junto con las fundas de seda, pero ninguna de las fuentes adjuntas (codebase, archivos subidos, repo de GitHub) contiene contenido, páginas, imágenes o textos de joyería — el sitio y todos los activos tratan al 100% sobre fundas de almohada de seda. Este sistema de diseño cubre únicamente la línea de fundas de seda. Si la joyería es una línea de producto real, por favor adjunta su web/activos/textos por separado para poder añadirla como sección propia.

## Fuentes utilizadas
- Carpeta local montada `Nueva claude melopido.shop/` — el sitio estático completo (17 páginas HTML, `styles.css`, `script.js`, `images/`, `fonts/`) y su propio brief de diseño `CONTEXTO-DISENO.md`.
- Repo de GitHub **agcidoncha/melopido** (https://github.com/agcidoncha/melopido) — contenido idéntico a la carpeta local; explóralo más a fondo para ver el HTML/CSS/JS exacto de cada página (páginas de producto SEO, páginas legales, sitemap) no reproducidas aquí en detalle.
- Archivos de fuentes, logo e iconos/imágenes subidos por el usuario.

Vuelve a explorar el repo de GitHub directamente para todo lo que no esté cubierto aquí — p. ej. las 6 páginas de producto casi idénticas por talla, las páginas de contenido SEO (arrugas, cabello, seda-vs-algodón) y las páginas legales.

## Componentes
`Button`, `ColorSwatch`, `SizeCard`, `FeatureIcon`, `ContentCard`, `CareCard`, `Header`, `FooterDesktop` — ver `components/` (agrupados en `core/`, `commerce/`, `content/`, `layout/`). El sitio original no tiene un sistema de componentes formal (~215 clases CSS escritas a mano, según su propio brief de diseño), así que este conjunto se ha creado a partir de los patrones de UI reales que se repiten en el sitio — nada inventado más allá de lo que aparece en las páginas reales.

### Añadidos intencionales
Ninguno más allá de los componentes anteriores — cada componente corresponde a un patrón real y repetido del sitio en producción (selector de color de producto, tarjeta de talla, icono de beneficio en el hero, tarjeta SEO, tarjeta de instrucción de cuidado, cabecera, pie de página).

## Fundamentos de contenido
- **Idioma y voz:** español de España, tuteo informal en todo momento ("Cuida tu piel mientras duermes", "Cuídate mientras duermes"). Tono cálido y centrado en beneficios, nunca agresivamente comercial.
- **Patrón de titulares:** beneficio + verdad de producto, p. ej. "100% Seda Mulberry. Un lujo que transforma vuestro descanso." Mezcla algo tú/vosotros (el copy de producto dice "vuestro descanso") — una ligera inconsistencia, pero siempre con un tono cálido y cercano.
- **Estructura:** frases cortas y directas en el hero, luego párrafos de 2–3 frases con **negrita** en la afirmación clave (hipoalergénica, prevenir las arrugas, evita la ruptura del cabello). Los datos tipo lista se presentan como listas en línea separadas por puntos ("22 momme · Seda premium · Máxima calidad"), no como listas con viñetas.
- **CTAs:** acción + flecha ("Descubre nuestras fundas ›", "Ver guía completa ›"); el CTA comercial es directo ("Lo Quiero").
- **Sin emoji** en ningún texto ni en la interfaz.
- **SEO-first:** cada página está escrita en torno a una palabra clave/talla/tema concreto (URL propia, `<title>`/meta description propios) — los cambios de copy se restringen históricamente para no romper el posicionamiento (ver `CONTEXTO-DISENO.md`).

## Fundamentos visuales
- **Paleta:** base crema cálida (`--bg #f8f4ef`), una crema de tarjeta ligeramente más oscura (`--surface-card #f4efe8`), bordes neutros suaves (`#e7ddd2`), texto de cuerpo gris cálido (`#57524f`), titulares casi negros (`#1f1f1f`), y un único acento — rosa empolvado (`--accent #dd8f91`, más intenso `--accent-strong #e07a7a`, más suave `--accent-soft #f5a9aa` para insignias). El CTA de Amazon usa su propio naranja (`#f39200`) como única excepción semántica. Los colores de producto son el único lugar donde aparece color saturado (azul marino, granate, azul pavo real, marfil, negro, gris, topo).
- **Tipografía:** Playfair Display (serifa, 500) para todos los momentos de titular — H1 del hero, títulos de producto, H2/H3 de sección. Montserrat (400/500/600) para todo lo demás — cuerpo de texto, etiquetas, navegación, botones. Una fuente de titular de demostración "Pontiac" (bold) se usa solo para el lockup de la palabra "melopido" en cabecera/pie.
- **Fondos:** crema plano, sin degradados salvo dos utilitarios sutiles — un velo de izquierda a derecha que se desvanece sobre la foto del hero (para legibilidad del texto) y un suave degradado crema de arriba a abajo en el pie de página de escritorio. Sin patrones, sin texturas, sin ilustraciones de fondo.
- **Imágenes:** fotografía lifestyle cálida y de foco suave (dormitorio, brillos de la seda) para tomas de hero/marketing; fotografía de producto/color limpia sobre fondo blanco para tomas de muestra y detalle. Sin blanco y negro, sin grano marcado.
- **Animación:** mínima — solo fundidos cruzados. La frase de la cabecera rota cada 4s (fade ~0,35s), el fondo/titular del hero se funde en un intervalo (~1,2s la imagen, 0,5s el texto), los menús deslizantes usan `cubic-bezier(0.77,0,0.175,1)` en 0,35s. Sin rebotes, sin efectos "spring", sin parallax.
- **Estados hover/press:** hover = escala 1.1× + sombra suave (swatches de color), elevación -4px + sombra suave (tarjetas de contenido), opacidad 0,8→1 (enlaces de pie/nav). Press = scale(0.97) en el botón de Amazon móvil. Sin hover que oscurezca el color.
- **Bordes y sombras:** bordes de 1px en `--border` casi en todas partes (tarjetas, inputs, swatches); las sombras se usan con moderación y solo para elevación real — elevación al hover de tarjetas, el resplandor naranja del CTA de Amazon, el modal de vídeo y los submenús. Sin sombras decorativas en elementos estáticos.
- **Radios de esquina:** píldora (999px) para CTAs principales e insignias de menú, 20–24px para tarjetas de sección/contenido, 12px para tarjetas de talla y contenedores de foto, 6px para los botones de Amazon/producto, círculos para swatches, insignias de icono y la insignia del menú móvil.
- **Layout:** contenedores centrados de `max-width: 1200px` (1120px para secciones de tarjetas), márgenes generosos de 40px (16–20px en móvil). Un único breakpoint en 768px — sin layout de tablet dedicado. La cabecera es `position: fixed`; en móvil una barra fija inferior (Fundas / Medidas / Colores / Amazon) sustituye al pie de escritorio.
- **Transparencia/blur:** solo en overlays — un velo negro del 35–72% detrás de los menús deslizantes y el modal de vídeo (sin backdrop-blur).

## Iconografía
- Todos los iconos son **ilustraciones de línea dibujadas a mano** (no una fuente de iconos, no un estilo geométrico tipo Lucide/Heroicons) — insignias circulares con trazo rosa sobre blanco para iconos de navegación/beneficios (`assets/icons/nav/`), y trazo azul marino sobre círculo melocotón para el set de instrucciones de cuidado (`assets/icons/care/`). Cada icono existe en pares claro/oscuro (`-oscuro`) más variantes pequeñas (`-80`) para contextos compactos (filas del menú móvil).
- Sin emoji, sin caracteres unicode como iconos — el único glifo unicode usado en la interfaz es la flecha `›` en CTAs y filas de menú, y `✕`/`×` para botones de cierre.
- Copia cada icono desde `assets/icons/` en lugar de aproximarlo con una fuente de iconos o emoji.

## Logo
- `assets/logo.png` — el lockup completo (marca rosa de esquinas redondeadas + palabra "melopido"), usado como referencia canónica del logo en todo este sistema.
- `assets/logo-mark.svg` — la marca en vectorial tal como se entregó, pero **se renderiza sin estilo/invisible**: sus clases `st0`/`st1` no tienen ningún relleno definido en ninguna parte del código fuente (la página original debía tener un `<style>` en línea que no sobrevivió a la exportación). Usa `logo.png` como activo fiable y pide al usuario una exportación SVG corregida antes de usar la marca vectorial en producción.

## Aviso de sustitución de fuente
"Pontiac" (`Fontspring-DEMO-pontiac_bold.woff2`) es un **archivo de demostración, no licenciado para producción** (así lo señala el propio brief de diseño del sitio). Se mantiene en este sistema solo para la fidelidad de prototipado del logotipo. **Por favor, proporciona un archivo de fuente con licencia para producción** antes de publicar, o aprueba un sustituto de Google Fonts (p. ej. una tipografía de titular redondeada y bold similar) si no se va a comprar una licencia de producción.

## Índice
- `styles.css` — hoja de estilos raíz, importa todo lo que hay bajo `tokens/`.
- `tokens/` — `colors.css`, `typography.css` (+ `@font-face`), `spacing.css` (radios/sombras/movimiento).
- `assets/` — `logo.png`, `logo-mark.svg`, `fonts/`, `icons/nav/`, `icons/care/`, `imagery/` (fotos de hero, fotografía de swatches de color, tomas de detalle de producto).
- `guidelines/` — 13 tarjetas de muestra de fundamentos (grupos Colors, Type, Spacing, Brand) que se muestran en la pestaña de Sistema de Diseño.
- `components/` — `core/Button`, `commerce/{ColorSwatch,SizeCard,FeatureIcon}`, `content/{ContentCard,CareCard}`, `layout/{Header,FooterDesktop}`.
- `ui_kits/website/` — recreación interactiva navegable: pantallas de Inicio, Producto (talla + selector de color funcional), Colores y Contenido/guía.
- `SKILL.md` — archivo de skill portable para usar en Claude Code.
