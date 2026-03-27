---
title: Toma de Inventario
sidebar_position: 57
---
## Resumen

- Registrá existencias por ubicación (depósito, sector, estante) en una sola operación.
- Impacta el stock del producto: la cantidad ingresada se registra directamente como stock.
- Importante: si el producto está en varias ubicaciones, el sistema reconoce un único stock con una sola ubicación.
- Sirve para conteo físico por ubicación y para cargar o actualizar stock con ubicación.
- No genera comprobantes; solo actualiza stock.

## CuandoUsar

- Realizar un conteo físico por ubicación (depósito, sector, estante).
- Cargar o actualizar stock con ubicación en una sola operación.
- Tener en cuenta: varias ubicaciones se consolidan en un único stock con una ubicación.

## Flujo

- Elegí ubicación física. Buscá producto por código o descripción. Ingresá cantidad (se registra como stock). Repetí por producto/ubicación según corresponda.

## Campos

## Ubicación

Ubicación física del artículo (depósito, sector, estante). Sirve para picking y reportes.

## Código / Descripción de producto

Código o descripción del producto. Si la búsqueda devuelve varios, elegí el correcto.

## Cantidad

Cantidad a registrar; se ingresa directamente como stock. Importante: si el producto está en varias ubicaciones, el sistema reconoce un único stock con una sola ubicación.

## Reglas

- La cantidad ingresada se registra directamente como stock.
- Producto en varias ubicaciones: el sistema reconoce un único stock con una sola ubicación.

## BuenasPracticas

- Realizá la toma por ubicación en orden para facilitar el conteo físico.
- Verificá que la ubicación esté bien configurada en el producto si se usa para picking.
