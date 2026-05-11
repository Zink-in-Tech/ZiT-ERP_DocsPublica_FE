# Auditoria de documentacion de ayuda

**Uso interno del equipo.** Este documento resume el estado actual del portal de ayuda y propone un plan para cruzar la documentacion con las pantallas reales del ERP, sumar capturas y definir piezas audiovisuales.

## Resumen

El sitio esta bien encaminado como base Docusaurus y el build de produccion pasa correctamente. La estructura por modulos ya cubre las areas principales del ERP: primeros pasos, administracion, ventas, compras, finanzas, inventario, informes e integraciones.

La oportunidad principal no es tecnica sino editorial y de producto: homogeneizar articulos que todavia conservan formato de semilla, cerrar TODOs con producto/soporte y sumar material visual en los flujos donde el usuario necesita reconocer pantallas, estados y botones.

## Estado actual

- Total de paginas revisadas bajo `docs/`: 64.
- Imagenes embebidas en articulos: 0.
- Articulos con TODOs: 23.
- TODOs totales detectados: 25.
- Articulos con secciones heredadas de semilla (`CuandoUsar`, `Flujo`, `Campos`, `Reglas`, `BuenasPracticas`): 30.
- Build verificado con `npm run build`: correcto.

## Hallazgos principales

### 1. Falta soporte visual

No hay capturas ni videos publicados todavia. Para un ERP, esto limita mucho la ayuda porque el usuario necesita confirmar que esta en la pantalla correcta, reconocer estados y entender consecuencias antes de confirmar operaciones.

Prioridad alta para capturas:

- Flujo de ventas: cotizacion, presupuesto, pedido, venta.
- POS: carga de productos, medios de pago y confirmacion.
- Caja diaria: lectura de bloques, medios de pago, movimientos fiscales.
- Pagos: aplicacion a comprobantes y multiples medios de pago.
- Inventario: ajustes y toma de inventario.
- Importaciones masivas: carga de archivo, resultado y errores.
- Integraciones: pantalla de integraciones, WooCommerce, Mercado Pago, Facturante.
- Centro de informes: buscador, fijados, filtros y exportacion.

### 2. Hay mezcla de articulos pulidos y semillas

Algunos articulos siguen la plantilla definida en `GUIA-REDACCION-ARTICULOS-AYUDA.md`, pero otros conservan encabezados importados del ERP. Esto se nota especialmente en `docs/informes/`, `docs/admin/` y parte de `docs/configuracion/`.

Conviene normalizar esos articulos a la estructura publica:

- Resumen
- Antes de empezar
- Procedimiento
- Casos frecuentes
- Si algo sale mal
- Ver tambien

### 3. Los TODOs son buenos, pero deberian gestionarse como backlog

Los TODOs actuales no son ruido: marcan informacion que no deberia inventarse. Aun asi, conviene convertirlos en una lista de validacion con responsables.

Temas recurrentes a confirmar:

- Permisos necesarios para avanzar o modificar datos.
- Comportamiento con multiples cajas, usuarios, organizaciones o ubicaciones.
- Textos exactos de botones y etiquetas en UI.
- Reglas de impacto en stock, cuenta corriente y pagos.
- Comportamiento de integraciones ante errores, revinculacion o cambios sin guardar.

### 4. Los flujos estan explicados, pero faltan puntos de decision

Los articulos de ventas, compras y finanzas explican las etapas, pero pueden mejorar mostrando decisiones operativas:

- Cuando usar flujo completo vs venta directa o POS.
- Que documento genera al aceptar o completar cada etapa.
- Que cambia y que no cambia en stock, cuenta corriente y caja.
- Que estados bloquean edicion o avance.
- Que revisar antes de confirmar.

### 5. Informes necesita una pasada completa

`docs/informes/` concentra muchos articulos con formato de semilla. Es un modulo ideal para capturas porque los usuarios suelen necesitar:

- Identificar filtros obligatorios.
- Entender que significa cada columna.
- Saber cuando exportar o imprimir.
- Interpretar resultados vacios.
- Diferenciar informes parecidos.

## Propuesta de multimedia

### Capturas de pantalla

Usarlas como primera capa porque son rapidas de producir, faciles de mantener y suficientes para la mayoria de articulos.

Formato recomendado:

- Ruta: `static/img/ayuda/<modulo>/<articulo>-<paso>.png`.
- Referencia en Markdown: `![Descripcion clara](/img/ayuda/<modulo>/<archivo>.png)`.
- Capturas limpias, sin datos reales ni informacion sensible.
- Una captura por decision importante, no una captura por cada clic.
- Resaltar con recuadro o flecha solo cuando ayude a ubicar un boton o estado.

### Videos cortos

Usarlos solo para flujos de varias pantallas o con alto riesgo de error.

Candidatos:

- Primeros 4 dias usando el ERP.
- Flujo completo de ventas.
- POS con pago inmediato.
- Cierre y lectura de caja diaria.
- Importacion masiva de productos/contactos.
- Vinculacion WooCommerce.
- Autorizacion Mercado Pago.

Duracion sugerida: 60 a 180 segundos. Mejor varios videos cortos que uno largo.

### Diagramas de flujo

Usarlos cuando el usuario necesita entender estados e impactos antes de operar.

Candidatos:

- Flujo de ventas.
- Flujo de compras.
- Relacion ventas/compras/pagos/cuenta corriente/caja.
- Integraciones: conectar, autorizar, mapear, sincronizar, resolver error.

## Metodo para hacer match con pantallas

1. Armar inventario de pantallas reales del ERP por modulo.
2. Para cada articulo, completar una matriz:
   - archivo de documentacion
   - pantalla o ruta de UI
   - botones/acciones mencionadas
   - campos mencionados
   - estados mencionados
   - permisos requeridos
   - captura necesaria
   - video necesario
   - brechas detectadas
3. Validar contra staging o produccion con datos demo.
4. Corregir documentacion antes de producir multimedia final.
5. Agregar capturas y volver a correr `npm run build`.

## Prioridades sugeridas

### Fase 1 - Alto impacto

- `docs/primeros-pasos.md`
- `docs/primeros-4-dias.md`
- `docs/ventas/flujo-ventas.md`
- `docs/ventas/pos.md`
- `docs/ventas/ventas.md`
- `docs/finanzas/caja-diaria.md`
- `docs/finanzas/pagos.md`
- `docs/inventario/inventarios.md`

### Fase 2 - Reduccion de tickets

- `docs/administracion/productos-importacion-masiva.md`
- `docs/administracion/contactos-importacion-masiva.md`
- `docs/administracion/productos-actualizacion-masiva.md`
- `docs/integraciones/intro.md`
- `docs/integraciones/woocommerce.md`
- `docs/integraciones/mercado-pago.md`
- `docs/integraciones/facturante.md`

### Fase 3 - Normalizacion editorial

- Todo `docs/informes/`.
- Todo `docs/admin/`.
- `docs/configuracion/datos-org.md`.
- `docs/configuracion/preferencias.md`.

## Checklist por articulo

- La pantalla real existe y el articulo usa el nombre correcto.
- Los pasos coinciden con el orden actual de la UI.
- Los botones y campos mencionados tienen etiqueta validada.
- Los estados coinciden con los que ve el usuario.
- El articulo aclara impacto en stock, caja, cuenta corriente o integraciones cuando aplica.
- Hay una seccion "Si algo sale mal" con errores reales o preguntas pendientes.
- Tiene enlaces internos a articulos relacionados.
- Tiene al menos una captura si el usuario debe reconocer una pantalla o tomar una decision.
- Tiene video solo si el flujo cruza varias pantallas o genera muchas consultas.

## Siguiente paso recomendado

Empezar por un piloto chico: elegir un flujo completo, por ejemplo POS o flujo de ventas, validar documentacion contra la UI, corregir el articulo y agregar 3 a 6 capturas. Ese piloto define el estilo visual y el criterio para el resto del portal.
