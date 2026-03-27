---
title: Registro de Inventario
sidebar_position: 55
---
## Resumen

- Registrá movimientos de stock que no son compra ni venta (ajustes, inicialización, desecho, devolución).
- Impacta el stock del producto; los movimientos quedan registrados para auditoría.
- Los movimientos de compras, ventas y toma de inventario se reflejan automáticamente en el sistema.
- Tipos de movimiento: Ingreso, Egreso, Ajuste Manual, Inicialización. Tipo de evento: Desecho, Devolución.
- Sirve para ver el historial de movimientos de un producto.

## CuandoUsar

- Registrar un ingreso o egreso de stock que no sea por compra o venta (rotura, devolución, ajuste).
- Cargar stock inicial de un producto.
- Corregir diferencias entre stock real y el que muestra el sistema.
- Ver movimientos de un producto.

## Flujo

- Elegí tipo de movimiento (Ingreso, Egreso, Ajuste Manual, Inicialización) y tipo de evento si aplica (Desecho, Devolución).
- Buscá producto por código o descripción. Indicá cantidad. Registrá.

## Campos

## Tipo de Movimiento

Ingreso, Egreso, Ajuste Manual o Inicialización. Define si el stock sube o baja y en qué contexto.

## Tipo Evento

Desecho o Devolución (según el tipo de movimiento). Sirve para categorizar el motivo.

## Código / Descripción de producto

Código o descripción del producto. Si la búsqueda devuelve varios, elegí el correcto.

## Cantidad

Cantidad a registrar en el movimiento. Importante: verificá antes de confirmar.

## Reglas

- Los movimientos de compras, ventas y toma de inventario se reflejan automáticamente; no los cargás acá.
- Este registro es para movimientos no contemplados por compras/ventas (roturas, devoluciones, ajustes).

## BuenasPracticas

- Usá Ajuste Manual o Inicialización con cuidado; verificá cantidades antes de confirmar.
- Revisá movimientos previos del producto para entender el stock actual antes de un ajuste.
