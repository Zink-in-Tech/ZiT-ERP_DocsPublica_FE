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

**URL de producción:** _completar con tu URL de Netlify_

Configuración de build en Netlify: ver [`netlify.toml`](netlify.toml) (`npm run build`, carpeta `build`).

## Contenido

- Fuentes de referencia: ayudas en `ZiT-ERP_FE` (`src/help/content`).
- Para incrustar videos (YouTube), usar páginas `.mdx` y iframes o componentes; ver [introducción](docs/intro.md).

## Licencia

Uso interno / producto ZinK ERP según política de ZinkInTech.
