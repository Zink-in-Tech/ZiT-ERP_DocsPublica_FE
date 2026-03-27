---
title: Informe Stock crítico
sidebar_position: 61
---
## Resumen

- Lista los productos con stock actual menor al stock mínimo configurado en el producto (sin unidades disponibles).
- Permite filtrar por proveedor (contacto) para ver solo productos de un proveedor determinado.
- Las columnas incluyen código, código de barras, descripción, stock actual, stock mínimo y precio.
- Sirve para planificar reposición y evitar roturas de stock.

## CuandoUsar

- Para identificar productos que requieren compra o reposición.
- Para revisar por proveedor qué ítems están bajo el mínimo.
- Para tomar decisiones de compra o producción según prioridad.

## Flujo

- Elegí el informe Stock crítico desde Informes. Opcional: filtrá por contacto (proveedor). Consultá; la grilla muestra los productos con stock por debajo del mínimo. Podés exportar o usar los datos para generar órdenes de compra.

## Campos

## Contacto (proveedor)

Filtro opcional. Si seleccionás un proveedor, solo se listan productos asociados a ese contacto con stock bajo el mínimo.

## Columnas del informe

Código, código de barras, descripción, stock actual, stock mínimo, precio. El stock mínimo es el definido en el maestro del producto.

## Reglas

- Solo se listan productos con stock actual menor al stock mínimo configurado.
- El permiso de menú controla si el informe está visible.

## BuenasPracticas

- Revisá este informe con frecuencia para reponer a tiempo. Combiná con el informe de productos faltantes para priorizar.
