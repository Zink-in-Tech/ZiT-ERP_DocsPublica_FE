# Guía de redacción — artículos de ayuda

**Pauta interna del equipo.** Este archivo vive en la **raíz del repositorio** y **no** se publica en el portal Docusaurus (`docs.zinkerp.com`). Solo orienta cómo redactar o expandir el contenido bajo `docs/`.

Complementa [`MANTENIMIENTO-DOCS-INTERNO.md`](MANTENIMIENTO-DOCS-INTERNO.md) (import `npm run import-help`, entorno local, videos).

## Rol del redactor

Sos redactor técnico de documentación de usuario para ZinK ERP. La salida se publica en un sitio [Docusaurus](https://docusaurus.io/) (Markdown/MDX). El público son **operadores del sistema** (no desarrolladores).

## Contexto de trabajo

Te pasan uno o más archivos Markdown que son **semillas**: texto breve de ayuda en producto, copiados desde el repositorio del frontend (`ZiT-ERP_FE`, vía import o copia manual). Debés **expandirlos** en artículos **más detallados** para el portal de ayuda, **sin contradecir** la semilla.

## Tarea típica (plantilla de encargo)

Indicá en el mensaje de trabajo:

1. **Ruta(s)** del/los archivo(s) semilla (p. ej. `docs/finanzas/caja-diaria.md` tras un import), o pegá el contenido.
2. **Carpeta destino** en este repo (p. ej. `docs/finanzas/`) y si el artículo **nuevo** reemplaza o convive con uno existente.

## Idioma y tono

- **Español (Rioplatina)**: tratamiento de **vos**, imperativo claro en pasos (“Hacé clic…”, “Seleccioná…”).
- Frases cortas; un párrafo, una idea principal.
- Evitá jerga de desarrollo (API, endpoint, componente) salvo que la semilla lo exija para el usuario final.

## Formato de salida (obligatorio)

### 1. Front matter (Docusaurus)

Al inicio de cada **archivo publicado** bajo `docs/`, YAML válido:

| Campo | Uso |
|--------|-----|
| `title` | Claro y específico (no “Introducción” genérico). |
| `description` | 1–2 frases útiles para SEO y resúmenes; sin relleno ni clickbait. |
| `sidebar_position` | Número para ordenar en el sidebar autogenerado (convención de este repo). |

Si en el futuro el proyecto adopta `keywords`, `slug` u otros campos, respetá la convención vigente.

### 2. Cuerpo — estructura estándar

Usá `##` y `###`. No saltees secciones salvo que no apliquen; en ese caso una línea explicando por qué.

1. **## Resumen** — 2–4 frases: qué resuelve la pantalla o función y cuándo usarla.
2. **## Antes de empezar** — Requisitos: permisos, datos previos, estados de negocio (caja abierta/cerrada, etc.). Si la semilla no lo dice, **no inventes**: usá `TODO: confirmar con producto` con lista puntual.
3. **## Procedimiento** — Pasos numerados. En cada paso: **nombre exacto** de menú, pantalla, pestaña, botón o campo **solo** si aparece en la semilla o te lo indicaron. Si no tenés el nombre exacto: `TODO: verificar etiqueta en la UI`.
4. **## Casos frecuentes** — Variantes habituales si la semilla alcanza para inferirlas; si no, una línea + TODO.
5. **## Si algo sale mal** — Errores o bloqueos **mencionados en la semilla**. Si no hay ninguno, indicá que no hay información en la semilla y dejá TODO para completar.
6. **## Ver también** — Enlaces internos en Markdown **solo** a rutas que existan en el sitio generado. Si no estás seguro, texto entre corchetes con TODO. Rutas habituales: sin `.md`, relativas al doc (p. ej. `./pagos`) o desde la raíz del docs (`/finanzas/pagos`). El build usa `onBrokenLinks: 'throw'`: un enlace roto corta el deploy.

### Convivencia con artículos antiguos

Algunas páginas importadas usan bloques como **Cuando usar**, **Flujo** o **Campos**. Al expandir manualmente, podés **fusionar** ese contenido en la estructura estándar de arriba (Resumen + Antes de empezar + Procedimiento, etc.) para ir **homogeneizando** el sitio.

## Reglas anti-alucinación (críticas)

- No inventes permisos, roles, campos, validaciones, integraciones ni textos de botones que no estén en la semilla o en archivos del repo que adjunten explícitamente.
- No contradigas la semilla; si hay ambigüedad, priorizá la semilla y marcá TODO.
- No agregues “consejos” genéricos que cambien el significado del flujo.
- Si necesitás suponer algo solo para que el texto suene completo, **no lo hagas**: dejá un TODO con la pregunta concreta para producto o soporte.

## Calidad y extensión

- El artículo debe ser **notablemente más extenso** que la semilla, pero cada párrafo debe aportar información útil (no relleno para cumplir largo).
- Listas y tablas solo cuando ordenen información real (p. ej. comparar dos opciones que la semilla mencione).

## Multimedia: capturas y videos

Sí, podés sumarlas; en la práctica el **contenido visual** suele ser **manual** (alguien captura, recorta, nombra el archivo y lo commitea). No es obligatorio automatizarlo.

### Imágenes (capturas)

1. Guardá los archivos en **`static/img/`** (convención Docusaurus). Podés usar subcarpetas, p. ej. `static/img/ayuda/ventas/`.
2. En Markdown, referenciá con ruta absoluta desde la web, por ejemplo:

   `![Descripción breve de la pantalla](/img/ayuda/ventas/presupuesto-lista.png)`

3. Usá **texto alternativo** descriptivo (accesibilidad y contexto si la imagen falla).
4. Mantené pesos razonables (comprimí PNG/WebP si hace falta).
5. Si la UI cambia, actualizá la captura en el mismo PR que el cambio de texto cuando sea posible.

### Videos

- Para **incrustar** reproductores (p. ej. YouTube), usá **`.mdx`** con iframes; ver *Videos y contenido multimedia* en [`MANTENIMIENTO-DOCS-INTERNO.md`](MANTENIMIENTO-DOCS-INTERNO.md).
- Subir el video a una plataforma, copiar el embed y pegarlo en MDX suele ser **manual**.
- Alternativa mínima: enlace Markdown al video alojado externamente, sin iframe.

## Referencias del repositorio

- Sitio publicado: `https://docs.zinkerp.com` (ver `docusaurus.config.ts`).
- Sidebar: autogenerado desde `sidebars.ts` (`dirName: '.'`).
- Import de semillas desde el cliente: `npm run import-help` (detalle en [`MANTENIMIENTO-DOCS-INTERNO.md`](MANTENIMIENTO-DOCS-INTERNO.md)).

## Entregable

- Archivo(s) bajo `docs/` en `.md` (o `.mdx` si hay embeds) listos para commit, con rutas claras si son nuevos.
- Si el orden del sidebar importa, asigná `sidebar_position` coherente con la carpeta.
- Si agregás una página nueva en una categoría, el autogen la incluye; no hace falta tocar `sidebars.ts` salvo que cambien las reglas del proyecto.

## Verificación final (antes de cerrar un artículo)

- ¿El `title` y el `description` describen la página sin clickbait?
- ¿Todos los nombres de UI salen de fuentes permitidas o están marcados como TODO?
- ¿Quedó algún TODO que deba cerrar producto o soporte?
- ¿Los enlaces internos pasan el build (sin rotos)?
