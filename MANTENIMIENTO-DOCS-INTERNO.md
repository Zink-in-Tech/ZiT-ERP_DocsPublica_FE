# Mantenimiento del sitio de documentación

**Uso interno del equipo.** Este archivo **no** se publica en `docs.zinkerp.com`. Sigue la **misma estructura de secciones** que los artículos públicos bajo `docs/` (plantilla descrita en [`GUIA-REDACCION-ARTICULOS-AYUDA.md`](GUIA-REDACCION-ARTICULOS-AYUDA.md)).

## Resumen

Centralizá **cómo sincronizar** el contenido de ayuda desde el cliente web (`ZiT-ERP_FE`), **cómo enriquecer** semillas con la guía de redacción, **cómo sumar multimedia** y **cómo levantar** el sitio en local. El [README](README.md) ofrece el panorama general del repositorio y el despliegue.

## Antes de empezar

- [Node.js](https://nodejs.org/) **20 o superior** y npm.
- Repositorio `ZiT-ERP_FE` accesible (por defecto **junto a** este repo en el mismo directorio padre, para `npm run import-help`).
- **TODO: confirmar con el equipo** — rutas o convenciones distintas en tu máquina o en CI.

## Procedimiento

### 1. Sincronizar contenido con el ERP

Las páginas bajo carpetas como `administracion/`, `ventas/`, etc. se pueden **regenerar** desde los Markdown del cliente web:

```bash
npm run import-help
```

Por defecto se lee `../ZiT-ERP_FE/src/help/content` (repo hermano). Otra ruta:

```bash
node scripts/import-erp-help.mjs /ruta/al/repo/ZiT-ERP_FE/src/help/content
```

Revisá el **diff** antes de commitear: podés ajustar redacción en el ERP o afinar aquí después de importar.

### 2. Expandir semillas a artículos largos

1. Opcional: completá [`RELEVAMIENTO-PARA-ARTICULOS-DE-AYUDA.md`](RELEVAMIENTO-PARA-ARTICULOS-DE-AYUDA.md) para dejar asentado qué dice la semilla y qué falta confirmar.
2. Seguí la plantilla y criterios de [`GUIA-REDACCION-ARTICULOS-AYUDA.md`](GUIA-REDACCION-ARTICULOS-AYUDA.md) (estructura con **Resumen**, **Antes de empezar**, **Procedimiento**, etc.).

### 3. Videos y contenido multimedia

Usá páginas **`.mdx`** con iframes (p. ej. YouTube). Si el archivo es `.md`, renombralo a `.mdx` cuando necesites HTML o componentes embebidos.

Para ordenar el trabajo de capturas y brechas, generá la matriz interna:

```bash
npm run audit:docs
```

El comando actualiza `AUDITORIA-MATRIZ-MEDIA.md` con:

- artículos con TODOs;
- artículos que conservan secciones heredadas de semilla;
- páginas candidatas a capturas o video;
- rutas sugeridas para guardar imágenes bajo `static/img/ayuda/`.

Para capturar pantallas reales del ERP de test, usá:

```bash
ERP_SCREENSHOT_USER="usuario@test.com" ERP_SCREENSHOT_PASSWORD="***" npm run capture:erp
```

El comando lee `scripts/erp-screenshot-routes.json`, inicia sesión en `ERP_SCREENSHOT_BASE_URL` (por defecto `https://testziterp.azurewebsites.net`) y guarda las imágenes en las rutas indicadas. También actualiza `AUDITORIA-CAPTURAS-ERP.md` con el resultado de cada captura.

Para regenerar capturas del flujo POS sin confirmar una venta:

```bash
ERP_SCREENSHOT_USER="usuario@test.com" ERP_SCREENSHOT_PASSWORD="***" npm run capture:pos
```

El comando actualiza `AUDITORIA-CAPTURAS-POS.md` y genera capturas de producto agregado, selección de cliente, descuento, finalización y producto no encontrado.

Regla importante: este repo puede **leer** el proyecto hermano `../ZiT-ERP_FE` para reutilizar Playwright si está instalado, pero no debe escribir ni modificar archivos dentro del frontend.

Capturas base ya generadas desde el ERP de test:

- `static/img/ayuda/admin/dashboard-01.png`
- `static/img/ayuda/ventas/pos-01.png`
- `static/img/ayuda/ventas/pos-02-producto-agregado.png`
- `static/img/ayuda/ventas/pos-03-seleccionar-cliente.png`
- `static/img/ayuda/ventas/pos-04-descuento.png`
- `static/img/ayuda/ventas/pos-05-finalizar.png`
- `static/img/ayuda/ventas/pos-06-producto-no-encontrado.png`
- `static/img/ayuda/ventas/ventas-01.png`
- `static/img/ayuda/ventas/cotizaciones-01.png`
- `static/img/ayuda/administracion/productos-01.png`
- `static/img/ayuda/administracion/contactos-01.png`
- `static/img/ayuda/informes/informes-01.png`

Estas imágenes todavía deben revisarse antes de insertarlas en artículos publicados. Algunas muestran datos demo del entorno de prueba.

Convención recomendada para capturas:

```text
static/img/ayuda/<modulo>/<articulo>-01.png
static/img/ayuda/<modulo>/<articulo>-02.png
```

En Markdown:

```markdown
![Descripción breve de la pantalla](/img/ayuda/<modulo>/<articulo>-01.png)
```

### 4. Desarrollo local

```bash
npm install
npm run start
```

Sitio de desarrollo: `http://localhost:3000`.

### 5. Build de producción

```bash
npm run build
```

La salida queda en `build/`. El proyecto usa `onBrokenLinks: 'throw'`: corregí enlaces rotos antes de desplegar.

## Casos frecuentes

- **`ZiT-ERP_FE` en otra ruta** — Pasá la ruta absoluta al script `import-erp-help.mjs` como arriba.
- **Solo querés documentación humana** — Editá directamente bajo `docs/` respetando la plantilla; al correr import, revisá conflictos con lo generado desde el ERP.
- **Video embebido en una página** — Renombrá a `.mdx` y agregá el iframe según la documentación de Docusaurus.

## Si algo sale mal

- **Import sin archivos o rutas incorrectas** — Verificá que exista `src/help/content` en el repo del frontend y que la ruta al script sea la correcta.
- **Build falla** — Revisá mensajes de enlaces rotos o errores de MDX; **TODO: completar con equipo** — reglas específicas de CI/Netlify si aplica.

## Ver también

- [`RELEVAMIENTO-PARA-ARTICULOS-DE-AYUDA.md`](RELEVAMIENTO-PARA-ARTICULOS-DE-AYUDA.md) — relevamiento antes de expandir.
- [`GUIA-REDACCION-ARTICULOS-AYUDA.md`](GUIA-REDACCION-ARTICULOS-AYUDA.md) — plantilla y reglas de redacción.
- [`README.md`](README.md) — instalación, build y enlace al sitio publicado.
- Ejemplo de artículo ya alineado a la plantilla: [`docs/ventas/cotizaciones.md`](docs/ventas/cotizaciones.md).

## Continuidad de trabajo

Próximo foco recomendado antes del go-live:

1. Usar POS como artículo piloto.
2. Validar el flujo completo contra la UI real: pantalla inicial, carga de producto, cliente, descuento/recargo, permiso de cobro, finalización y errores frecuentes.
3. Insertar capturas seleccionadas en `docs/ventas/pos.md`.
4. Ajustar términos de búsqueda: POS, punto de venta, venta rápida, cobrar, cobro, pago, permiso, consumidor final.
5. Repetir el criterio en Ventas, Pagos, Productos, Contactos e Informes.

Para permisos, mantener una página central fuerte en `docs/administracion/perfiles.md` y referencias breves en los artículos operativos cuando una acción dependa de un permiso específico.
