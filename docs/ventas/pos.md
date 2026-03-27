---
title: POS (Punto de venta)
sidebar_position: 29
---
## Resumen

- Pantalla de punto de venta (POS) para cobrar rápido en mostrador: cargá productos por código o búsqueda, cantidades, descuentos y registrá el pago.
- El layout está optimizado para uso con teclado y pantalla táctil: campo de producto arriba, ítems en el centro, totales y acciones a la derecha.
- Podés elegir cliente (Consumidor Final por defecto) y aplicar descuentos o recargos sobre el total; al confirmar el cobro se genera la venta y, según configuración, el comprobante.

## CuandoUsar

- Cobrar ventas en mostrador con agilidad (retail, comercio).
- Registrar varias líneas de producto y un pago (efectivo, tarjeta, etc.) en una sola operación.
- Usar atajos de teclado y flujo rápido sin pasar por el formulario completo de ventas.

## Flujo

- Ingresá producto por código de barras o búsqueda; agregá cantidad si es distinta de 1.
- Opcional: asigná un contacto (cliente) o dejá Consumidor Final; aplicá descuento o recargo al total si corresponde.
- Revisá ítems y total; abrí el diálogo de pago y cargá el medio de pago.
- Al confirmar, se genera la venta y podés imprimir o ver el comprobante según la configuración.

## Campos

## Campo producto

- Ingresá código de barras o texto para buscar producto; al encontrar se agrega a la lista con cantidad 1 (editable).

## Lista de ítems

- Producto, cantidad, precio, descuento por ítem y subtotal. Podés editar cantidad, aplicar descuento por línea o eliminar ítem.

## Totales y acciones

- Subtotal, descuento/recargo global, total. Botones para abrir listado de productos, cobrar, ajustar venta (descuento/recargo global) y seleccionar cliente.

## Cliente

- Por defecto Consumidor Final. Si elegís un contacto, puede impactar lista de precios y cuenta corriente según el flujo de ventas.

## Reglas

- Los precios y listas dependen de la configuración y del cliente seleccionado; el stock se descuenta al confirmar la venta si está habilitado el manejo de stock.
- El pago debe registrarse para confirmar la venta (según configuración de proceso de pago).

## BuenasPracticas

- Usá el código de barras cuando sea posible para agilizar la carga.
- Revisá el total antes de abrir el diálogo de pago.
- Si usás modo oscuro, el POS respeta la preferencia de perfil de usuario.
