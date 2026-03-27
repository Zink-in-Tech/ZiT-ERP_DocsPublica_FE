---
title: Productos
sidebar_position: 2
---
## Resumen

- Son los artículos que usás en inventario y operaciones (presupuestos, pedidos, ventas, órdenes de compra, compras).
- Podés crear por Alta Rápida (campos esenciales) o Formulario Completo (todas las opciones).
- Incluyen listas de precios, stock, ubicación y etiquetas; impactan stock y precios en ventas/compras.
- Valida Stock: si está activo, el sistema valida stock antes de permitir una venta.
- No podés eliminar un producto que tenga movimientos asociados.

## CuandoUsar

- Dar de alta o editar artículos del catálogo.
- Agregar un producto urgente durante una venta o compra (Alta Rápida).
- Configurar precios, stock mínimo, ubicación y listas de precios.

## Flujo

- Alta Rápida: código, descripción, código de barras, precio.
- Formulario Completo: dimensiones, stock, listas de precios, etiquetas. Editar precios desde el diálogo específico o el formulario completo.

## Campos

## Código Interno

Código alfanumérico de uso interno. Sirve para búsquedas en grilla y formularios.

## Descripción

Texto descriptivo del producto. Sirve para búsquedas.

## Unidad

Cantidad de unidades por defecto en operaciones con este producto.

## Unidad de Medida

Unidad utilizada (cantidad, kgs, cm3, litros). Si no existe, solicitarla por medio de la ayuda.

## Unidad Mínima de Venta

Controla las unidades que se pueden vender (mínimo por operación).

## Unidades x Bulto

Cantidad de unidades que contiene un bulto cerrado del producto.

## Stock

Solo se define en el alta; después cambia por compras, ventas o inventario.

## Costo

Precio de compra por unidad. Base para el cálculo de precios en listas.

## Listas de Precios

Público, Mayorista, Distribuidora, Franquicia, Promoción (opcional). Cada lista: Precio Calculado (desde costo, % ganancia, impuesto) o Precio Manual. Botón "APLICAR A TODAS" para misma configuración.

## Código de Barras

Sirve para búsqueda y carga en operaciones comerciales. Podés generarlo o descargarlo con el ícono de varita (dentro del campo) o escanearlo con la cámara del celular usando el botón de cámara junto al campo.

## Código Variable

Hasta 6 dígitos (EAN13); el resto determina precio. Útil para balanzas y productos a granel.

## Ubicación

Lugar o sector del almacén donde se encuentra el producto.

## Etiquetas

Agrupadores para categorizar; se usan para búsqueda de productos relacionados en presupuestos, pedidos, ventas.

## Valida Stock

Si está activo, el sistema valida stock disponible antes de permitir una venta.

## Actualizar Precios al Recibir Compras

Si está activo, los precios calculados se actualizan al recibir una compra que modifique el costo. Se desactiva si alguna lista está en modo MANUAL.

## Reglas

- Productos creados con Alta Rápida podés completarlos después desde el formulario completo.
- No podés eliminar un producto que tenga movimientos asociados.

## BuenasPracticas

- Usá Alta Rápida durante ventas o compras cuando hace falta agregar un producto urgente.
- Configurá etiquetas para organizar el catálogo y facilitar búsquedas.
- Activá "Actualizar precios al recibir compras" solo si querés que los precios se ajusten automáticamente con el costo.
