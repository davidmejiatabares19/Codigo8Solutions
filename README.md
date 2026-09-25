# Código8 Solutions

Abre `index.html`. Para activar el envío, crea una clave pública gratuita en Web3Forms y colócala en `config/email-config.js`. Sin clave, el formulario usa mailto. Reemplaza el dominio en SEO antes de publicar.

## Google Analytics 4
1. Crea una propiedad GA4 y un flujo web para `https://codigo8solutions.com`.
2. Copia el ID de medición con formato `G-XXXXXXXXXX`.
3. Abre `config/analytics-config.js`.
4. Reemplaza `G-REEMPLAZAR` por el ID real.
5. Sube el cambio a GitHub. Cloudflare Pages desplegará automáticamente.
6. Prueba con Google Tag Assistant y el informe En tiempo real.

La analítica se activa después de que el visitante acepta el aviso. Se registran páginas vistas, clics en WhatsApp y envíos del formulario como `generate_lead`.

## SEO implementado
Canonical, meta description, Open Graph, Twitter Card, datos estructurados ProfessionalService, robots.txt, sitemap.xml y etiquetas de indexación. Registra `https://codigo8solutions.com` en Google Search Console y envía `https://codigo8solutions.com/sitemap.xml`.

## Producto LogiSaaS
Menú "Productos" (mega menú) y sección `#productos`. El video y la información se abren en el modal `#logisaasModal`; el enlace `#logisaas` abre el modal directamente. Video: `assets/video/logisaas.mp4` y la portada `assets/images/logisaas-poster.webp`. El botón "Solicitar demo" preselecciona LogiSaaS en el formulario. Con la analítica aceptada se registran `product_view`, `video_start` y `demo_request_click`.
