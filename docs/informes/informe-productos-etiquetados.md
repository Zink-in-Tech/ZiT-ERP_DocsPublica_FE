---
title: Informe Etiquetas para góndola
sidebar_position: 63
---
## Resumen

- Sirve para **imprimir etiquetas para la góndola del showroom**.
- Permite buscar productos **actualizados según un intervalo de fechas** y la **lista de precio** que querés imprimir.
- Permite **seleccionar el tamaño de la etiqueta** para la impresión.
- Con esos filtros obtenés el listado de productos a etiquetar; luego podés imprimir las etiquetas con los datos (código, descripción, precio, etc.) para colocar en góndola.
- Las etiquetas se configuran en el maestro del producto; este informe filtra por actualización y lista para armar la salida de impresión.

## CuandoUsar

- Para imprimir etiquetas de góndola con precios actualizados (por lista de precio y período de modificación).
- Para refrescar las etiquetas del showroom cuando cambiaron precios o productos en un rango de fechas.
- Para elegir una lista de precio (ej. Público, Oferta) y generar solo los ítems que se actualizaron en ese período.

## Flujo

- Entrá al informe Productos etiquetados desde Informes.
- Indicá el **intervalo de fechas** (productos actualizados en ese período), la **lista de precio** con la que querés imprimir y el **tamaño de la etiqueta**.
- Ejecutá la consulta; la grilla muestra los productos que cumplen los criterios.
- Usá el resultado para imprimir las etiquetas de góndola (precio, código, descripción, etc., según el tamaño y formato elegidos).

## Campos

## Intervalo de fechas

Productos que se hayan actualizado (modificación de datos o precios) dentro de ese rango. Así limitás la impresión a lo que cambió o a un período relevante.

## Lista de precio

Lista de precio con la que querés imprimir las etiquetas (ej. Público, Mayorista, Oferta). El informe usa esa lista para mostrar el precio que irá en la etiqueta.

## Tamaño de etiqueta

Podés elegir el **tamaño de la etiqueta** para la impresión (según los formatos disponibles en el informe). El diseño de la salida se ajusta al tamaño seleccionado.

## Etiqueta / Filtros adicionales

Según el diseño del informe, podés filtrar además por etiqueta de producto u otros criterios. Las columnas suelen incluir código, descripción, precio (de la lista elegida), etiquetas.

## Reglas

- Solo se listan productos que cumplan el intervalo de fechas y la lista de precio seleccionados (y etiquetas si aplica).
- La visibilidad del informe depende de los permisos de menú.

## BuenasPracticas

- Usá el intervalo de fechas para no reimprimir todo el catálogo: por ejemplo “última semana” o “desde la última impresión” para etiquetas actualizadas.
- Elegí la lista de precio que realmente se muestra en góndola para que las etiquetas coincidan con lo que ve el cliente.
