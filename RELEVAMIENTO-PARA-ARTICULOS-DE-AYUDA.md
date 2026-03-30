# Relevamiento para artículos de ayuda

**Uso interno del equipo.** No se publica en `docs.zinkerp.com`. Completá este formulario **antes o durante** la expansión de una semilla; después pasá el resultado al redactor o al asistente junto con [`GUIA-REDACCION-ARTICULOS-AYUDA.md`](GUIA-REDACCION-ARTICULOS-AYUDA.md).

> El nombre de archivo usa **ARTICULOS** (no “eartículos”).

## Resumen

Este documento **no sustituye** la semilla: sirve para **ordenar** qué dice la semilla, **qué falta** validar con producto o soporte y **qué valor** querés sumar en el artículo final (ejemplos, capturas, video), sin salirte de las **fuentes permitidas**.

## Antes de empezar

- Tené la **semilla** a la vista (`docs/…` tras import o `ZiT-ERP_FE/src/help/content/…`).
- Si vas a encargar la redacción, **duplicá** este archivo o una copia por artículo (p. ej. en un PR como comentario o en un doc interno).

## Procedimiento

1. Completá las secciones **1 a 4** con lo que puedas inferir solo de la semilla y fuentes permitidas.
2. En **3. Qué falta confirmar**, dejá preguntas **concretas** para producto/soporte.
3. Cruzá con **5. Fuentes permitidas**: no uses nada fuera de esa lista para presentar datos como ciertos.
4. Adjuntá el relevamiento completo al pedido de expansión y seguí la plantilla Markdown de la guía para el `.md` final en `docs/`.

---

## Plantilla de expansión de semillas

*(Copiá desde acá abajo por cada artículo.)*

### 1. Datos base

- Ruta de la semilla:
- Módulo:
- Pantalla o función:
- Artículo nuevo o actualización:

### 2. Qué confirma la semilla

- Qué hace:
- Qué no hace:
- Flujo mencionado:
- Estados mencionados:
- Campos mencionados:
- Errores o bloqueos mencionados:

### 3. Qué falta confirmar

- Permisos:
- Etiquetas exactas de UI:
- Casos frecuentes:
- Errores reales:
- Relación con otras pantallas:

### 4. Valor a agregar en la expansión

- Explicación operativa:
- Caso ejemplo:
- Qué cambia / qué no cambia:
- Diferencia con otras funciones:
- Capturas necesarias:
- Video útil:

### 5. Fuentes permitidas para completar

- semilla importada
- capturas oficiales
- indicaciones explícitas del equipo
- material de soporte / onboarding validado

## Casos frecuentes

- **Varios artículos del mismo módulo** — Un relevamiento por pantalla o por archivo `.md` en `docs/`.
- **Re-import que pisa contenido expandido** — Actualizá la sección 2 con la nueva semilla y revisá si cambió lo pendiente en la sección 3.

## Si algo sale mal

- **La semilla contradice la UI** — Priorizá lo que defina producto; documentá la decisión en la sección 3 o en el PR.
- **No hay quien cierre los TODOs** — No expandas con suposiciones: dejá `TODO` explícitos en el artículo según la guía.

## Ver también

- [`GUIA-REDACCION-ARTICULOS-AYUDA.md`](GUIA-REDACCION-ARTICULOS-AYUDA.md) — plantilla del artículo y reglas de redacción.
- [`MANTENIMIENTO-DOCS-INTERNO.md`](MANTENIMIENTO-DOCS-INTERNO.md) — import desde el ERP y entorno local.
