---
title: Informe Stock Valorado
sidebar_position: 62
---
## Resumen

- Lista todos los productos con stock y costo según filtros elegidos.
- Muestra el valor del inventario por producto: código interno, código de barras, descripción, cantidad, costo unitario, total por ítem, % sobre el total (valor), precio de venta (lista por defecto), margen y ubicación.
- Incluye un resumen ejecutivo (total valorizado, SKUs, unidades, concentración) y totales al pie.
- Permite filtrar por etiquetas de producto y restringir a solo productos con stock > 0.
- Export a PDF, Excel y CSV generados en el front con los criterios aplicados.

## CuandoUsar

- Para conocer el valor total del inventario y su composición por producto.
- Para ver concentración de valor (qué ítems representan la mayor parte del stock valorado).
- Para revisar margen y precio de venta de referencia por producto (análisis profundo de rentabilidad en el informe Pareto).
- Para reportes periódicos de inventario valorado con filtros por etiquetas.

## Flujo

- Entrá a Informes y elegí "Informe Stock Valorado". Aplicá filtros (etiquetas, solo con stock > 0). Consultá; verás el resumen ejecutivo arriba, la tabla ordenada por valor (total ítem) y los totales al pie. Exportá a PDF, Excel o CSV según necesidad.

## Campos

## Filtros

- **Etiquetas**: filtrar (y opcionalmente agrupar) por etiquetas de producto.
- **Solo productos con stock > 0**: si está marcado, solo se listan productos con stock mayor a cero; si está desmarcado, se muestran todos según definición.

## Resumen ejecutivo (arriba)

Total valorizado, cantidad de SKUs, cantidad total de unidades, indicador de concentración (ej. "Top 5 ítems representan X% del valor").

## Columnas del informe

Código interno, código de barras, descripción, cantidad (stock), costo unitario, total ítem, % sobre el total (valor), precio de venta (lista por defecto), margen, margen %, ubicación. Orden por defecto: por total ítem descendente.

## Totales al pie

Monto total valorizado, cantidad de SKUs, cantidad total de unidades.

## Reglas

- El backend solo devuelve JSON; PDF, Excel y CSV se generan en el front con título, fecha, criterios y totales.
- El acceso al informe está controlado por permiso de menú (informes).
- El análisis de rentabilidad/ganancia por producto queda cubierto por el informe Pareto; este informe no lo duplica.

## BuenasPracticas

- Usá el filtro "Solo productos con stock > 0" para no llenar el informe de ceros cuando solo te interesa inventario con existencia.
- Revisá el indicador de concentración para priorizar ítems que representan la mayor parte del valor.
- Combiná con el informe de stock crítico para reposición y con Pareto para análisis de ganancia.
