---
title: Compras
sidebar_position: 40
---
## Resumen

- Registrá el ingreso de mercadería al inventario según comprobante del proveedor.
- El comprobante tiene estados: editable, confirmado, controlar, aprobado; impacta stock y cuenta corriente proveedor.
- Al APROBAR el stock ingresa y se actualiza la cuenta corriente del proveedor.
- El contacto (proveedor) no puede ser Consumidor Final.
- RECHAZAR vuelve a BORRADOR; CANCELADO cierra el flujo.

## CuandoUsar

- Recibiste mercadería y el comprobante del proveedor; registrás ítems, costos y vencimiento de pago.
- Necesitás control físico (CONTROLAR) antes de dar por aprobada la compra.
- El costo de los ítems impacta en el producto; si tiene actualización automática, se actualizan las listas de precios.

## Flujo

BORRADOR → CONFIRMADO → CONTROLAR → APROBADO

- RECHAZAR vuelve a BORRADOR (no disponible en APROBADO ni CANCELADO).
- CANCELADO finaliza el flujo.

## Campos

## Contacto

Proveedor de la compra. No puede ser Consumidor Final.

## Número de Comprobante

Número del comprobante entregado por el proveedor. Importante: verificá que coincida con el comprobante físico.

## Fecha de Creación

Se asigna automáticamente. Cambiarla requiere permisos especiales.

## Fecha de entrega estimada

Si no la cargás, se usa la fecha actual.

## Días Vencimiento Pago

Días hasta considerar el pago vencido. Por defecto en preferencias o en el contacto. Cambiarlo puede requerir permisos especiales.

## Ítems

Productos y cantidades del comprobante. El costo impacta en el producto; si tiene actualización automática, se actualizan las listas de precios.

## Observaciones

Texto libre para condiciones de entrega, acuerdos o comentarios.

## Estados

| Estado    | Descripción |
| --------- | ----------- |
| BORRADOR  | Editable. Podés modificar ítems, contacto y montos. |
| CONFIRMADO| No editable. Siguiente: control físico (CONTROLAR). |
| CONTROLAR | Refleja la necesidad de control físico de los artículos antes de aprobar. |
| APROBADO  | Stock ingresado; cuenta corriente proveedor actualizada. No editable. |
| RECHAZAR  | Vuelve a BORRADOR. No disponible en APROBADO ni CANCELADO. |
| CANCELADO | Flujo cerrado. No editable. |

## Reglas

- El contacto (proveedor) no puede ser Consumidor Final.
- Agregar ítem: botón o tecla "+".

## BuenasPracticas

- Verificá número de comprobante y costos antes de confirmar.
- Revisá si actualizar costo por ítem al cargar para no modificar productos que no corresponda.
