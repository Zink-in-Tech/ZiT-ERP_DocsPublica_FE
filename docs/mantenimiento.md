---
sidebar_position: 4
title: Mantenimiento del sitio
description: Cómo sincronizar ayudas desde el ERP, publicar videos y levantar el sitio en local (equipo técnico).
---

Esta página es para **quien edita este sitio de documentación** (no para usuarios finales del ERP). El detalle también está en el [README del repositorio](https://github.com/ZinkInTech/ZiT-ERP_DocsPublica_FE).

## Sincronizar contenido con el ERP

Las páginas bajo carpetas como `administracion/`, `ventas/`, etc. se pueden **regenerar** desde los Markdown del cliente web:

```bash
npm run import-help
```

Por defecto se lee `../ZiT-ERP_FE/src/help/content` (repo hermano). Otra ruta:

```bash
node scripts/import-erp-help.mjs /ruta/al/repo/ZiT-ERP_FE/src/help/content
```

Revisá el diff antes de commitear: podés ajustar redacción en el ERP o afinar aquí después de importar.

## Videos y contenido multimedia

Podés usar páginas **`.mdx`** con iframes (por ejemplo YouTube). Si el archivo es `.md`, renombralo a `.mdx` cuando necesites HTML o componentes embebidos.

## Requisitos locales

[Node.js](https://nodejs.org/) **20 o superior**.

```bash
npm install
npm run start
```

Sitio de desarrollo: `http://localhost:3000`.
