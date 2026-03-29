# Mantenimiento del sitio de documentación

**Uso interno del equipo.** Este archivo **no** se publica en `docs.zinkerp.com`. Resume cómo sincronizar ayudas, multimedia y entorno local. El [README](README.md) del repo tiene el panorama general; acá el detalle operativo.

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

## Expandir semillas a artículos largos

Pauta de redacción (SEO, tono, anti-alucinación): [`GUIA-REDACCION-ARTICULOS-AYUDA.md`](GUIA-REDACCION-ARTICULOS-AYUDA.md) — también interna, no publicada en el portal.

## Videos y contenido multimedia

Podés usar páginas **`.mdx`** con iframes (por ejemplo YouTube). Si el archivo es `.md`, renombralo a `.mdx` cuando necesites HTML o componentes embebidos.

## Requisitos locales

[Node.js](https://nodejs.org/) **20 o superior**.

```bash
npm install
npm run start
```

Sitio de desarrollo: `http://localhost:3000`.
