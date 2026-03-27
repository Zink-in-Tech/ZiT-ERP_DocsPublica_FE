---
sidebar_position: 1
title: Introducción
---

Bienvenido a la documentación pública de **ZinK ERP**. Aquí encontrarás guías de uso, conceptos del producto y material de referencia.

## Qué encontrarás

- **Introducción**, **Arquitectura** y **Primeros pasos** como resumen del producto.
- Guías por módulo (**Administración**, **Ventas**, **Informes**, etc.) generadas a partir de las mismas ayudas que ves dentro del ERP; el texto se adapta a este sitio (títulos y navegación Docusaurus).

## Sincronizar con el ERP

Las páginas bajo carpetas como `administracion/`, `ventas/`, etc. se pueden **volver a generar** desde los Markdown del cliente web con:

```bash
npm run import-help
```

Por defecto se lee `../ZiT-ERP_FE/src/help/content` (repo hermano). Si la ruta es otra:

```bash
node scripts/import-erp-help.mjs /ruta/al/repo/ZiT-ERP_FE/src/help/content
```

Revisá el diff antes de commitear: podés ajustar redacción en el ERP o editar aquí después de importar.

## Videos y contenido multimedia

Podés **incrustar videos de YouTube** (u otros proveedores) en páginas `.mdx` con iframes o componentes. En `.md`, renombrá a `.mdx` cuando necesites HTML embebido.

## Requisitos locales (para colaboradores)

Para previsualizar o compilar este sitio necesitás [Node.js](https://nodejs.org/) **20 o superior**.

```bash
npm install
npm run start
```

El sitio de desarrollo queda en `http://localhost:3000`.
