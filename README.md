# La Llorona · web

Web del estudio de tatuaje La Llorona (Montequinto, Sevilla). Dirección de diseño en [DESIGN.md](DESIGN.md).

## Tecnología

- **Astro** (salida estática) + **TypeScript**. Es una web de contenido con interactividad puntual (menú, visor, “prepara tu mensaje”), así que no hace falta React: los scripts son TypeScript plano y pesan unos pocos KB.
- **CSS propio** con variables (`src/styles/global.css`) y estilos por componente.
- **Fuentes autoalojadas** con Fontsource (Grenze Gotisch + Archivo): sin peticiones a Google.
- **Imágenes** optimizadas por Astro (AVIF/WebP, `srcset`, carga diferida).
- Sin cookies, sin analítica, sin base de datos.

## Uso

Requiere Node 22.

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run check
```

`npm run dev` sirve en http://localhost:4321 · `npm run build` genera `dist/` · `npm run check` comprueba tipos.

## Dónde se cambia cada cosa

| Qué | Archivo |
|---|---|
| Teléfono, WhatsApp, dirección, horario, Instagram, titular legal | `src/data/site.ts` |
| Residentes y sus Instagram | `src/data/artists.ts` |
| Fotos de trabajos, hero y estudio | `src/data/gallery.ts` + carpetas en `src/assets/` |
| Textos del manifiesto | `src/components/Manifesto.astro` |
| Colores y tipografía | `src/styles/global.css` |

### Cambiar fotos

1. Copia la foto (JPG/PNG/WebP, cuanto más grande mejor) a `src/assets/trabajos/`, `src/assets/estudio/` o `src/assets/residentes/`.
2. En `src/data/gallery.ts` (o `artists.ts`), pon la ruta en `image` (`'trabajos/nombre.jpg'`) y escribe un `alt` que describa el tatuaje.
3. Las piezas con foto se pueden ampliar en el visor automáticamente. `size` decide el hueco: `feature`, `tall`, `regular`, `wide`.
4. Si añades `category` a varias piezas (mínimo 2 estilos con 3 piezas cada uno), aparecen los filtros.

### Canal de contacto

- Por defecto, “Pide tu cita” abre un **mensaje directo de Instagram** (`ig.me/m/lallorona.sevilla`).
- Si se rellena `whatsapp` en `site.ts`, todos los botones pasan a WhatsApp y “Prepara tu mensaje” abre WhatsApp con el texto ya escrito.
- “Prepara tu mensaje” **no envía ni guarda datos**: compone el texto en el navegador; con Instagram lo copia al portapapeles y abre el chat.
- Si en el futuro se quiere un formulario que llegue al estudio, la opción más simple es **Netlify Forms** (con campo trampa antispam y aviso de privacidad actualizado).

### Marcas provisionales

`showDraftMarks: true` en `site.ts` muestra etiquetas “Texto provisional” y “Foto pendiente”. Ponlo a `false` cuando el estudio apruebe los textos y estén todas las fotos.

## Desplegar en Netlify

1. Sube el proyecto a un repositorio de GitHub.
2. En Netlify: *Add new site → Import from Git*, elige el repositorio. `netlify.toml` ya define `npm run build` y la carpeta `dist`.
3. Cuando tengas dominio, cámbialo en `astro.config.mjs` (`site`), `src/data/site.ts` (`url`) y `public/robots.txt`.

No hace falta ninguna variable de entorno.

## Pendiente de confirmar con el estudio

- [ ] **Fotos**: trabajos (8 para la portada), foto principal del hero, 2 del espacio, retratos de residentes (opcional).
- [ ] **Logotipo** en SVG (ahora se usa una marca provisional: lágrima + nombre en gótica) e imagen social `public/og.png` (regenerable con `node scripts/make-social.mjs`).
- [ ] **Textos** del manifiesto y de “El estudio” (redactados como propuesta).
- [ ] **WhatsApp / teléfono**, si quieren usarlos.
- [ ] **Horario** (o confirmar que es solo con cita).
- [ ] **Código postal** y forma de citar la ubicación (la bio dice “Montequinto, Sevilla”).
- [ ] **Titular legal** (nombre/razón social, NIF, correo) para `/privacidad/`.
- [ ] Estilos de cada residente (para mostrarlos junto al nombre y activar filtros).
- [ ] **Dominio** definitivo.
