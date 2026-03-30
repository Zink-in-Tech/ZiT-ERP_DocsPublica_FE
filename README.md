# ZinK ERP — Documentación pública

Sitio estático generado con [Docusaurus](https://docusaurus.io/). El contenido se basa en las ayudas del producto y se publica en **Netlify** (build automático desde la rama `master`).

## Requisitos

- [Node.js](https://nodejs.org/) 20 o superior
- npm (incluido con Node)

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run start
```

Abre `http://localhost:3000` y recarga al guardar cambios en la documentación.

## Build de producción

```bash
npm run build
```

La salida queda en la carpeta `build/`, lista para cualquier hosting estático.

## Sitio publicado

Sustituí la URL siguiente por la de tu sitio en Netlify (Dashboard del sitio → **Domain settings** o el dominio `*.netlify.app`):

**URL de producción:** [https://zinkerp-docs.netlify.app](https://zinkerp-docs.netlify.app) (dominio `docs.zinkerp.com` cuando active el DNS).

Configuración de build en Netlify: ver [`netlify.toml`](netlify.toml) (`npm run build`, carpeta `build`).

## Contenido y origen (ERP)

Las guías por módulo se **importan** desde el cliente web `ZiT-ERP_FE`, carpeta `src/help/content`, y se adaptan a Docusaurus (frontmatter, carpetas por módulo, encabezados).

```bash
npm run import-help
```

Por defecto asume el repo `ZiT-ERP_FE` **junto a** este repositorio en el mismo directorio padre. Otra ruta:

```bash
node scripts/import-erp-help.mjs /ruta/a/ZiT-ERP_FE/src/help/content
```

Las páginas [Introducción](docs/intro.md), [Arquitectura](docs/arquitectura.md) y [Primeros pasos](docs/primeros-pasos.md) se mantienen a mano en la raíz de `docs/`.

**Equipo (no publicado en el portal):** import, entorno local, videos, relevamiento previo y guía de redacción están en [`MANTENIMIENTO-DOCS-INTERNO.md`](MANTENIMIENTO-DOCS-INTERNO.md), [`RELEVAMIENTO-PARA-ARTICULOS-DE-AYUDA.md`](RELEVAMIENTO-PARA-ARTICULOS-DE-AYUDA.md) y [`GUIA-REDACCION-ARTICULOS-AYUDA.md`](GUIA-REDACCION-ARTICULOS-AYUDA.md).

## Licencia

Uso interno / producto ZinK ERP según política de ZinkInTech.
