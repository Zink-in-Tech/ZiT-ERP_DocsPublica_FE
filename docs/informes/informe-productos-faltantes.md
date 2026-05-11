---
title: Informe Productos faltantes
sidebar_position: 62
---
## Resumen

- Lista los productos que el sistema detecta como **faltantes**: son **ventas incumplidas sobre lo pedido**.
- Un producto aparece como faltante cuando fue registrado en un **pedido**, al confirmar el pedido se informan **menos cantidades de las pedidas**, y en la **venta** se registran menos ítems o cantidades que las del pedido.
- El sistema cruza pedido confirmado con la venta asociada y marca como faltante la diferencia (lo que se pidió y no se entregó/vendió).
- Sirve para detectar incumplimientos, roturas de stock en el camino pedido→venta, y para planificar reposición o revisar procesos.

## Cuándo usar

- Para ver qué productos quedaron sin cumplir respecto a lo que el cliente había pedido (pedido vs venta efectiva).
- Para analizar causas: falta de stock al preparar, errores de picking, cancelación parcial, etc.
- Para priorizar reposición o atención al cliente cuando hubo faltantes.
- Para auditoría de cumplimiento de pedidos.

## Procedimiento

1. El cliente hace un **pedido** con productos y cantidades.
2. Al **confirmar** el pedido, en algún punto del flujo (preparación, picking o venta) se informan **menores cantidades** que las pedidas.
3. La **venta** asociada al pedido se registra con menos ítems o cantidades que el pedido original.
4. El sistema detecta esa diferencia y la considera **faltante**: lo pedido que no se entregó/vendió.
5. El informe Productos faltantes lista esos productos (y cantidades faltantes, según el diseño). Podés filtrar por fechas u otros criterios y exportar.

## Campos principales

## Filtros

Según la pantalla: rango de fechas, organización, contacto (cliente), etc., para acotar a pedidos/ventas de un período o cliente.

## Columnas típicas

Producto (código, descripción), cantidad pedida, cantidad vendida/entregada, cantidad faltante, cliente, pedido, venta, etc. La estructura depende del diseño del informe.

## Reglas de uso

- Solo se consideran productos que provienen de **pedidos**; la comparación es entre lo pedido (confirmado) y lo registrado en la **venta** asociada.
- Si en la venta se registra la misma cantidad que en el pedido, no hay faltante para ese ítem.
- La visibilidad del informe depende de los permisos de menú.

## Buenas prácticas

- Revisá el informe con periodicidad para detectar patrones de faltantes (mismo producto, mismo depósito, mismo cliente) y corregir causas (stock, picking, comunicación con el cliente).
- Combiná con el informe de stock crítico para ver si los faltantes se deben a stock insuficiente al momento de preparar.
