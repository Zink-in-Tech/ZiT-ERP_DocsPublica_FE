---
title: Presupuestos
sidebar_position: 22
---
## Resumen

- Registrá la oferta de precio para uno o varios artículos; congela precios por el tiempo de vigencia.
- No impacta stock ni cuenta corriente hasta que se acepte y se genere el pedido.
- Al ACEPTAR se crea un pedido asociado en BORRADOR con ítems, cantidades y precios.
- Por defecto el contacto es Consumidor Final; podés cambiarlo.
- RECHAZAR vuelve a BORRADOR; CANCELADO cierra el flujo.

## CuandoUsar

- El cliente pidió precio por un conjunto de artículos y querés congelarlo por unos días.
- Querés formalizar una cotización eligiendo la lista aplicable.
- Cuando el cliente acepta, aceptás el presupuesto y el sistema genera el pedido para editar si hace falta.

## Flujo

BORRADOR → CONFIRMADO → ACEPTADO (crea pedido en BORRADOR)

- RECHAZAR vuelve a BORRADOR (no disponible en ACEPTADO ni CANCELADO).
- CANCELADO finaliza el flujo.

## Campos

## Contacto

Cliente del presupuesto. Por defecto Consumidor Final.

## Fecha de Creación

Se asigna automáticamente. Cambiarla requiere permisos especiales.

## Fecha de entrega estimada

Si no la cargás, se usa la fecha actual.

## Ítems

Productos y cantidades. El precio se toma de la lista vigente; cambiar precio, lista o descuento requiere permisos especiales.

## Descuento y Costo de envío

Pueden heredarse del contacto. Modificarlos requiere permisos especiales.

## Observaciones

Texto libre para condiciones de entrega, forma de pago o acuerdos con el cliente.

## Estados

| Estado   | Descripción |
| -------- | ----------- |
| BORRADOR | Editable. Podés modificar ítems, contacto y fechas. |
| CONFIRMADO | No editable. El cliente puede aceptar o rechazar. |
| ACEPTADO | Se creó el pedido asociado en BORRADOR con ítems, cantidades y precios. |
| RECHAZAR | Vuelve a BORRADOR. No disponible en ACEPTADO ni CANCELADO. |
| CANCELADO | Flujo cerrado. No editable. |

## Reglas

- Una vez vencida la vigencia no se puede aceptar.
- Agregar ítem: botón o tecla "+". Búsqueda de productos relacionados por etiquetas.

## BuenasPracticas

- Verificá la vigencia antes de que venza.
- Usá observaciones para condiciones de entrega y forma de pago.
