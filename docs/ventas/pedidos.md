---
title: Pedidos
sidebar_position: 25
---
## Resumen

- Registrá la solicitud de compra del cliente para preparar mercadería.
- El comprobante tiene estados que reflejan la situación (editable, confirmado, en preparación, preparado).
- En PREPARADO se genera la venta asociada con las cantidades resultantes; impacta stock al despachar.
- El contacto no puede ser Consumidor Final.
- RECHAZAR vuelve a BORRADOR; CANCELADO cierra el flujo.

## CuandoUsar

- El cliente confirmó la compra y querés preparar mercadería.
- Necesitás el informe de picking (artículo, cantidad, ubicación) para preparar por depósito.
- Al terminar la preparación, pasás a PREPARADO y el sistema genera la venta asociada.
- Querés registrar rechazos o cancelaciones antes de generar la venta.

## Flujo

BORRADOR → CONFIRMADO → EN_PREPARACION → PREPARADO

- RECHAZAR vuelve a BORRADOR (no disponible en PREPARADO ni CANCELADO).
- CANCELADO finaliza el flujo.

## Campos

## Contacto

Cliente del pedido. No puede ser Consumidor Final. Importante: debe tener datos válidos para facturación.

## Fecha de Creación

Se asigna automáticamente. Cambiarla requiere permisos especiales.

## Fecha de entrega estimada

Si no la cargás, se usa la fecha actual.

## Ítems

Productos y cantidades. El precio se toma de la lista vigente; cambiar precio, lista o descuento requiere permisos especiales.

## Descuento y Costo de envío

Pueden heredarse del contacto. Modificarlos requiere permisos especiales.

## Observaciones

Texto libre para horarios, condiciones de entrega o acuerdos con el cliente.

## Estados

| Estado        | Descripción |
| ------------- | ----------- |
| BORRADOR      | Editable. Podés modificar ítems, contacto y fechas. |
| CONFIRMADO    | No editable. Siguiente paso: pasar a EN_PREPARACION para picking. |
| EN_PREPARACION| Se procesa con picking; podés obtener el informe (artículo, cantidad, ubicación). |
| PREPARADO     | Se informaron cantidades reales; se crea la venta asociada. No editable. |
| RECHAZAR      | Vuelve a BORRADOR. No disponible en PREPARADO ni CANCELADO. |
| CANCELADO     | Flujo cerrado. No editable. |

## Reglas

- El contacto no puede ser Consumidor Final.
- Agregar ítem: botón o tecla "+". Búsqueda de productos relacionados por etiquetas.
- En estados permitidos podés cancelar según las reglas del sistema.

## BuenasPracticas

- Confirmá el pedido antes de enviarlo a preparación.
- Usá el informe de picking cuando tengas ubicaciones configuradas en los productos.
- Revisá cantidades y condiciones antes de pasar a PREPARADO para evitar errores en la venta generada.
