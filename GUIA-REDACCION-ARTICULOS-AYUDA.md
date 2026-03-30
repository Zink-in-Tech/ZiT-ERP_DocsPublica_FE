# Guía de redacción — artículos de ayuda

**Pauta interna del equipo.** No se publica en `docs.zinkerp.com`. Referencia única para expandir semillas y redactar páginas bajo `docs/` con la **misma estructura** que los artículos ya homogeneizados (p. ej. [`docs/ventas/cotizaciones.md`](docs/ventas/cotizaciones.md)).

## Resumen

Definí **rol**, **tono**, **reglas anti-alucinación** y el **formato obligatorio** de salida para que la documentación de usuario sea clara, útil para SEO y coherente en todo el portal. La guía complementa [`MANTENIMIENTO-DOCS-INTERNO.md`](MANTENIMIENTO-DOCS-INTERNO.md) (import desde el ERP, entorno local, videos) y el formulario [`RELEVAMIENTO-PARA-ARTICULOS-DE-AYUDA.md`](RELEVAMIENTO-PARA-ARTICULOS-DE-AYUDA.md) (datos base, brechas y valor a agregar antes de redactar).

**Rol:** redactor técnico de documentación de usuario para ZinK ERP; salida en [Docusaurus](https://docusaurus.io/) (Markdown/MDX). **Público:** operadores del sistema, no desarrolladores.

**Contexto:** recibís **semillas** Markdown del frontend (`ZiT-ERP_FE`, import o copia). Debés **expandirlas** sin **contradecir** la semilla.

## Antes de empezar

- Leé [`MANTENIMIENTO-DOCS-INTERNO.md`](MANTENIMIENTO-DOCS-INTERNO.md) si vas a correr `npm run import-help` o a tocar el entorno local.
- Para artículos nuevos o muy escuetos, completá (vos o producto) [`RELEVAMIENTO-PARA-ARTICULOS-DE-AYUDA.md`](RELEVAMIENTO-PARA-ARTICULOS-DE-AYUDA.md) y adjuntalo al encargo.
- Tené a mano la **semilla** y, si aplica, la **carpeta destino** en este repo (`docs/modulo/…`).
- Recordá: el build usa `onBrokenLinks: 'throw'` — todo enlace interno debe existir o el deploy falla.

## Procedimiento

### 1. Plantilla de encargo (cuando pedís trabajo a otra persona o a un asistente)

Indicá:

1. Opcional pero recomendable: [`RELEVAMIENTO-PARA-ARTICULOS-DE-AYUDA.md`](RELEVAMIENTO-PARA-ARTICULOS-DE-AYUDA.md) completado para ese artículo.
2. Ruta(s) del archivo semilla (p. ej. `docs/finanzas/caja-diaria.md`) o pegá el contenido.
3. Carpeta destino y si el artículo **nuevo** reemplaza o convive con uno existente.

### 2. Plantilla Markdown — artículos publicados en `docs/`

Copiá el bloque siguiente como punto de partida; reemplazá títulos, `description`, `sidebar_position` y el cuerpo según la semilla.

```markdown
---
title: Título específico de la pantalla o flujo
description: Una o dos frases para SEO y resúmenes; concretas y sin relleno ni clickbait.
sidebar_position: 0
---

## Resumen

2–4 frases: qué resuelve la pantalla o función y cuándo usarla. Fusioná acá el contenido que en la semilla venía como “Cuando usar” / “CuandoUsar” si aporta contexto.

## Antes de empezar

- Requisitos: permisos, datos previos, estados de negocio **solo** si la semilla (o el equipo) los indica.
- Si la semilla no lo dice: **no inventes** — usá `TODO: confirmar con producto` con lista puntual.

## Procedimiento

1. Acceso a la pantalla: usá el **nombre exacto** de menú, ítem o ruta **solo** si figura en la semilla o te lo pasaron. Si no: `**TODO: verificar etiqueta en la UI**`.
2. Pasos numerados siguientes, con nombres exactos de pestañas, botones y campos **solo** tomados de fuentes permitidas (semilla, capturas oficiales, indicación explícita del equipo).
3. Tablas de estados, campos o reglas: incluílas cuando la semilla las traiga (p. ej. BORRADOR / CONFIRMADO).

## Casos frecuentes

- Variantes habituales que la semilla permita inferir (viñetas o `###` cortos).
- Si no alcanza: una línea + `TODO`.

## Si algo sale mal

- Errores o bloqueos **mencionados en la semilla**: describilos fielmente.
- Si la semilla no trae ninguno: indicá que no hay información en la semilla y dejá `TODO: completar con producto/soporte`.

## Ver también

- Enlaces internos **solo** a páginas que existan en el sitio.
- Misma carpeta: si el archivo se llama como la carpeta (p. ej. `ventas/ventas.md`), usá `./ventas.md` para no romper el build; en otros casos `./slug` o `/carpeta/slug` según pruebes con `npm run build`.
```

### 3. Idioma y tono

- **Español (Rioplatina):** **vos**, imperativo claro (“Hacé clic…”, “Seleccioná…”).
- Frases cortas; un párrafo, una idea principal.
- Evitá jerga de desarrollo (API, endpoint, componente) salvo que la semilla lo exija para el usuario final.

### 4. Reglas anti-alucinación (críticas)

- No inventes permisos, roles, campos, validaciones, integraciones ni textos de botones fuera de fuentes permitidas.
- No contradigas la semilla; si hay ambigüedad, priorizá la semilla y marcá TODO.
- No agregues “consejos” genéricos que cambien el significado del flujo.
- Si necesitás suponer para que “suene completo”, **no lo hagas**: dejá un TODO con la pregunta concreta.

### 5. Calidad y extensión

- El artículo debe ser **notablemente más extenso** que la semilla; cada párrafo debe aportar (sin relleno).
- Listas y tablas solo cuando ordenen información real.

### 6. Multimedia

- **Imágenes:** `static/img/` (p. ej. `static/img/ayuda/ventas/`); en Markdown `![alt](/img/…/archivo.png)`; texto alt descriptivo; peso razonable.
- **Videos embebidos:** `.mdx` + iframe; detalle en [`MANTENIMIENTO-DOCS-INTERNO.md`](MANTENIMIENTO-DOCS-INTERNO.md). Alternativa: enlace externo.

### 7. Entregable

- `.md` o `.mdx` bajo `docs/` listos para commit; `sidebar_position` coherente con la carpeta.
- Sidebar autogenerado: normalmente no hace falta tocar `sidebars.ts`.

## Casos frecuentes

- **Semilla con secciones “Flujo”, “Campos”, “Reglas”:** fusioná en **Resumen**, **Antes de empezar**, **Procedimiento** y tablas dentro de **Procedimiento** según corresponda.
- **Re-import después de `import-help`:** revisá diff; si la semilla del ERP cambió, actualizá el artículo expandido sin contradecir la nueva semilla.
- **Varios artículos en una carpeta:** mantené convención de `sidebar_position` numérica como en el resto del repo.

## Si algo sale mal

- **`npm run build` falla por enlaces:** corregí la ruta; probá `./archivo.md` cuando el slug sea ambiguo (p. ej. `ventas.md` junto a carpeta `ventas`).
- **Semilla escueta:** no rellenes con suposiciones; dejá TODOs puntuales para producto/soporte.

## Ver también

- [`RELEVAMIENTO-PARA-ARTICULOS-DE-AYUDA.md`](RELEVAMIENTO-PARA-ARTICULOS-DE-AYUDA.md) — formulario previo a la expansión.
- [`MANTENIMIENTO-DOCS-INTERNO.md`](MANTENIMIENTO-DOCS-INTERNO.md) — import, local, videos.
- [`README.md`](README.md) — panorama del repo y URL de despliegue.
- Referencias técnicas: `docusaurus.config.ts`, `sidebars.ts`, sitio publicado `https://docs.zinkerp.com`.

## Verificación final (checklist)

- ¿`title` y `description` describen la página sin clickbait?
- ¿Nombres de UI citados de fuentes permitidas o marcados como TODO?
- ¿TODOs que deba cerrar producto o soporte están explícitos?
- ¿`npm run build` sin enlaces rotos?
