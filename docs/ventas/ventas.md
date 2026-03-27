---
title: Ventas
sidebar_position: 30
---
## Resumen

- Registrá la salida de mercadería y el ingreso de dinero (efectivo o cuenta corriente).
- El comprobante tiene estados: editable, confirmado, despacho, entregado; impacta stock y cuenta corriente.
- Consumidor Final: pagá el total al confirmar; Contacto: el cobro se registra desde Cuenta Corriente.
- Al marcar ENTREGADO el stock se descuenta y se actualiza la cuenta del cliente.
- RECHAZAR vuelve a BORRADOR; CANCELADO cierra el flujo.

## CuandoUsar

- Registrás una venta en mostrador o por entrega programada.
- El cliente es Consumidor Final y abona en el momento (cargá el pago antes de imprimir).
- El cliente es Contacto y el cobro se anota en cuenta corriente o se registra un pago.
- Necesitás controlar despacho (métodos según preferencias) antes de dar por entregado.

## Flujo

BORRADOR → CONFIRMADO → DESPACHAR → ENTREGADO

- RECHAZAR vuelve a BORRADOR (no disponible en ENTREGADO ni CANCELADO).
- CANCELADO finaliza el flujo.

## Campos

## Contacto

Cliente de la venta. Por defecto Consumidor Final (debe abonar el total al confirmar). Otros contactos: el cobro se registra desde Cuenta Corriente o contactos.

## Fecha de Creación

Se asigna automáticamente. Cambiarla requiere permisos especiales.

## Días Vencimiento Cobro

Días hasta considerar el cobro vencido. Por defecto en preferencias o en el contacto. Consumidor Final: 0.

## Ítems

Productos y cantidades. El precio debe ser válido; cambiar precio, lista o descuento requiere permisos especiales.

## Descuento y Costo de envío

Pueden heredarse del contacto. Modificarlos requiere permisos especiales.

## Observaciones

Texto libre para horarios, condiciones de entrega o acuerdos.

## Estados

| Estado    | Descripción |
| --------- | ----------- |
| BORRADOR  | Editable. Podés modificar ítems, contacto y montos. |
| CONFIRMADO| No editable. Siguiente: control de despacho (según preferencias). |
| DESPACHAR | Control sobre el inventario afectado (métodos según preferencias). |
| ENTREGADO | Stock descontado; Cuenta Corriente actualizada. Consumidor Final con pago cargado puede pasar directo. |
| RECHAZAR  | Vuelve a BORRADOR. No disponible en ENTREGADO ni CANCELADO. |
| CANCELADO | Flujo cerrado. No editable. |

## Reglas

- Agregar ítem: botón o tecla "+". Productos relacionados: búsqueda por etiquetas.
- Consumidor Final debe tener el pago cargado para poder marcar ENTREGADO (o según configuración).

## BuenasPracticas

- Verificá contacto y lista de precios antes de confirmar.
- Para Consumidor Final, cargá el pago completo antes de imprimir el comprobante.
