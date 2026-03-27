---
title: Notas de Crédito
sidebar_position: 10
---
## Resumen

- Registrá un crédito a favor del cliente (devolución, bonificación, descuento o corrección).
- Cada ítem se asocia a una venta existente e indica motivo e importe a creditar.
- Impacta la cuenta corriente del contacto (reduce la deuda) y se envía a AFIP al confirmar.
- No impacta stock; el movimiento de mercadería se gestiona aparte si corresponde.
- Solo en estados permitidos podés cancelar la nota según las reglas del sistema.

## CuandoUsar

- El cliente devolvió mercadería o se anuló parte de una venta.
- Concedés un descuento o bonificación después de emitida la factura.
- Corregís un error que implica devolver dinero o bajar la deuda del cliente.

## Flujo

BORRADOR → CONFIRMADO

- Listado: crear, editar, ver detalle, filtrar o eliminar (según permisos).
- Comprobante: descargar o imprimir. Factura electrónica: enviar a AFIP cuando corresponda.
- Cancelación solo en estados permitidos, según reglas del sistema.

## Campos

## Contacto

Cliente al que se emite la nota. Debe coincidir con el contacto de la/s venta/s asociada/s en los ítems. Importante: si no coincide, el sistema no permitirá confirmar.

## Fecha

Fecha de emisión del comprobante.

## Ítems

Cada ítem: venta asociada (factura), motivo (concepto), importe a creditar, observación opcional. El crédito se registra en la cuenta corriente del contacto.

## Observaciones

Texto libre para comentarios de la nota.

## Estados

| Estado    | Descripción                                      |
| --------- | ------------------------------------------------ |
| BORRADOR  | Editable. En preparación.                        |
| CONFIRMADO| No editable. Impacta cuenta corriente y AFIP.   |

## Reglas

- El contacto debe coincidir con el de la/s venta/s de los ítems.
- Cada ítem debe tener venta, motivo e importe.
- La cancelación solo está permitida en ciertos estados; consultá las reglas del sistema.

## BuenasPracticas

- Verificá que el contacto coincida con el de la venta asociada antes de confirmar.
- Usá el motivo correcto para cada ítem (fiscal y organizativo).
- Revisá importes antes de confirmar para evitar errores en cuenta corriente.
