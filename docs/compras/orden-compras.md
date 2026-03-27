---
title: Órdenes de Compra
sidebar_position: 35
---
## Resumen

- Registrá el pedido que enviás al proveedor antes de recibir la mercadería o el comprobante.
- No impacta stock hasta que se apruebe y se genere la compra asociada.
- Al APROBAR se crea una Compra en BORRADOR con ítems, cantidades y precios para cargar el comprobante.
- El contacto (proveedor) no puede ser Consumidor Final.
- RECHAZAR vuelve a BORRADOR; CANCELADO cierra el flujo.

## CuandoUsar

- Enviás un pedido al proveedor antes de recibir la mercadería o el comprobante.
- Querés solicitar ítems con precios y cantidades; al aprobar se genera la compra para completar con el comprobante.
- Reponés stock crítico: podés filtrar ítems con stock igual o menor al mínimo.

## Flujo

BORRADOR → CONFIRMADO → APROBADO (crea Compra en BORRADOR)

- RECHAZAR vuelve a BORRADOR (no disponible en APROBADO ni CANCELADO).
- CANCELADO finaliza el flujo.

## Campos

## Contacto

Proveedor de la orden. No puede ser Consumidor Final.

## Fecha de Creación

Se asigna automáticamente. Cambiarla requiere permisos especiales.

## Ítems

Productos solicitados al proveedor. El precio debe ser válido; cambiarlo puede requerir permisos especiales.

## Observaciones

Texto libre para plazos, condiciones de entrega o acuerdos con el proveedor.

## Estados

| Estado   | Descripción |
| -------- | ----------- |
| BORRADOR | Editable. Podés modificar ítems, contacto y precios. |
| CONFIRMADO | No editable. Siguiente: aprobar para generar la compra. |
| APROBADO | Se creó la Compra asociada en BORRADOR con ítems, cantidades y precios. |
| RECHAZAR | Vuelve a BORRADOR. No disponible en APROBADO ni CANCELADO. |
| CANCELADO | Flujo cerrado. No editable. |

## Reglas

- Stock crítico: podés filtrar ítems con stock igual o menor al mínimo. Agregar ítem: botón o tecla "+". Búsqueda de productos por etiquetas.
- El contacto (proveedor) no puede ser Consumidor Final.

## BuenasPracticas

- Usá Stock crítico para reponer productos con bajo stock.
- Dejá observaciones claras para el proveedor (plazos, condiciones).
