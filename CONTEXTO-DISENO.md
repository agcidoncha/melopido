# Melopido — contexto para rediseño visual

Web SEO de fundas de almohada de seda de morera. HTML/CSS/JS estático, sin build ni framework, subido por FTP a hosting compartido (Apache, `.htaccess`). No usar WordPress, Shopify, ni ningún CMS — el sitio es y debe seguir siendo estático.

## Lo que NO se puede tocar sin autorización

- **URLs y nombres de archivo**: todas las páginas son `.html` en la raíz (`index.html`, `funda-almohada-seda-90x45.html`, etc.). Son URLs indexadas en Google — no renombrar, no mover de carpeta, no añadir `/` al final.
- **Textos, títulos, encabezados**: no reescribir copy en esta fase. El rediseño es solo visual (CSS + estructura de wrappers si hace falta), no de contenido.
- **`<title>`, `meta description`, `canonical`, JSON-LD, `og:*`**: no tocar.
- **Clases/IDs que usa `script.js`** (imprescindible mantener exactamente estos nombres):
  `.menu-icon`, `.menu-overlay`, `menu-open` (clase de `body`), `.desktop-menu-toggle`, `.desktop-menu`, `.desktop-menu-overlay`, `.desktop-menu-close`, `desktop-menu-open` (clase de `body`), `#claim-text`, `#claim-sub`, `is-visible`/`is-hidden`, `#hero-title`, `#hero-sub`, `.hero-bg-1`, `.hero-bg-2`, `hero-fade`/`hero-visible`, `.product-colors span` (con `data-color`), `#amazon-link`, `#selected-color-desktop`, `#selected-color-mobile`, `#product-image`, `.product` (con `data-size`), `.product-thumb`, `.mobile-menu a`, `.mobile-close`, `.mobile-toggle-row`, `.mobile-item`, `.mobile-submenu`/`open`, `.js-open-video`, `#video-modal`, `#close-video-modal`, `.video-modal-overlay`, `#melopido-video`, `#video-custom-play`, `.desktop-toggle-row`, `.desktop-menu-item`, `active`.
  → Si el nuevo diseño necesita estructura distinta, **añadir clases nuevas**, no renombrar ni eliminar estas.

## Estructura de páginas (17 archivos)

- `index.html` — home.
- `funda-de-almohada-de-seda.html` — guía/pilar de contenido.
- 6 páginas de producto por medida: `funda-almohada-seda-{75x50,90x45,110x45,120x45,135x45,150x45}.html`. Casi idénticas entre sí (plantilla + número de medida). Cada una tiene un selector de color en JS que cambia foto + enlace de Amazon.
- Contenido/SEO: `beneficios-funda-almohada-seda.html`, `funda-almohada-seda-arrugas.html`, `funda-almohada-seda-cabello.html`, `funda-seda-vs-algodon-saten.html`, `colores-funda-almohada-seda.html`, `tallas-funda-almohada-seda.html`, `instrucciones-de-uso.html`.
- Legales: `avisolegal.html`, `privacidad.html`.

## Sistema de diseño actual

- **Colores** (único bloque de tokens en `styles.css`, `:root`): `--bg:#f8f4ef; --text:#57524f; --dark:#1f1f1f; --accent:#dd8f91; --card:#f4efe8; --border:#e7ddd2;`
- **Tipografías**: Montserrat (400/500/600), Playfair Display (500), y **Pontiac** — ⚠️ el archivo (`Fontspring-DEMO-pontiac_bold.woff2`) es una versión DEMO sin licencia de producción, hay que sustituirla antes de publicar cualquier rediseño.
- **Responsive**: un único breakpoint `@media (max-width: 768px)`. No hay tablet/desktop-grande específico.
- **Layout**: mezcla flexbox/grid, ~215 clases, sin sistema de componentes formal.
- Componentes existentes: header + menú móvil/desktop, hero, grid de 6 tallas, selector de color de producto, footer móvil/desktop, modal de vídeo.

## Objetivo del rediseño (Claude Design)

Imagen premium, elegante, limpia, ligada a seda de morera, orientada a conversión, rápida en móvil, coherente entre páginas — manteniendo intactos textos, URLs y metadatos SEO. Cambios solo en `styles.css` (+ clases nuevas si hace falta en el HTML, nunca renombrando las existentes).

## Pendiente de resolver (no relacionado con el diseño, pero relevante)

- Varias URLs antiguas de una instalación de WordPress previa (venta de joyería, ej. `estuche-para-relojes/`, `collares-y-colgantes/`) siguen indexadas en Google y devuelven 200 con contenido de la home en vez de 404/410 — pendiente de arreglar a nivel de servidor (`.htaccess` real, no versionado en este repo).
- Imágenes sin usar (`.psd`, JPG a resolución completa) no deberían subirse al repo/hosting — ver `images/`.
