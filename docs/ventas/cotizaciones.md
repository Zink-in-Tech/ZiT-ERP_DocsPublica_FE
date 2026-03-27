---
title: Cotizaciones
sidebar_position: 20
---
## Resumen

- Mostrá precios por varias listas (Mayorista, Minorista, etc.) en una sola pantalla para que el cliente compare.
- No impacta stock ni cuenta corriente; es solo oferta comercial.
- Una vez definida la lista, podés aprobar como presupuesto y seguir el flujo comercial.
- Útil cuando el cliente aún no definió volumen o lista a aplicar.
- No genera comprobante hasta que se convierta en presupuesto.

## CuandoUsar

- El cliente pide comparar precios según volumen o tipo (mayorista, minorista).
- Tenés varias listas activas y aún no está definido cuál aplicar.
- Es una negociación abierta; el precio final se cierra después.
- Si el precio ya está definido, podés crear directamente un presupuesto.

## Flujo

BORRADOR → Aprobar como presupuesto

- Crear, editar, ver detalle, filtrar o eliminar (listado). Aprobar: elegís lista y se genera presupuesto en BORRADOR.
- Visualizar o imprimir: descargar, imprimir, enviar al cliente.

## Campos

## Contacto

Cliente de la cotización. Opcional: si no cargás ninguno, la cotización no queda asociada a un cliente.

## Fecha y vigencia

Fecha de emisión y días de vigencia (vencimiento). Modificar puede requerir permisos especiales.

## Ítems

Productos con cantidad y precios por cada lista configurada. Las columnas dependen de las listas activas. Cambios manuales pueden requerir permisos especiales.

## Listas de precios

Cada lista activa aparece como columna (ej. Minorista, Mayorista) para que el cliente compare y defina qué opción aplicar.

## Observaciones

Texto libre para condiciones comerciales, plazos, forma de pago y comentarios.

## Estados

| Estado   | Descripción                          |
| -------- | ------------------------------------ |
| BORRADOR | Editable. Podés aprobar como presupuesto eligiendo la lista. |

## Reglas

- Los precios deben estar correctamente configurados en las listas.
- Cambios manuales de precios pueden requerir permisos especiales.
- Al aprobar se elige la lista y se genera un presupuesto en BORRADOR.

## BuenasPracticas

- Verificá las listas de precios antes de aprobar.
- Confirmá vigencia si el cliente tarda en responder.
- Usá observaciones para dejar claras condiciones y plazos.
