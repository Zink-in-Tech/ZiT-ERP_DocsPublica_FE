---
title: 'Duplicar documentos: ventas, pedidos y presupuestos'
sidebar_label: Duplicar documentos
description: 'Repetí una venta, un pedido, un presupuesto o una cotización con Duplicar, o convertí una venta en pedido o presupuesto: se abre un alta nueva con el contacto, los productos y las cantidades.'
sidebar_position: 12
keywords:
  - duplicar
  - copiar venta
  - repetir pedido
  - duplicar presupuesto
  - venta a pedido
  - venta a presupuesto
---

## Resumen

**Duplicar** abre un documento nuevo a partir de uno existente, con el mismo contacto, productos y cantidades. Sirve para repetir una venta habitual, un pedido recurrente o un presupuesto parecido sin cargar todo de nuevo.

Está disponible en **Ventas**, **Pedidos**, **Presupuestos** y **Cotizaciones**. Una venta, además, se puede duplicar como **pedido** o como **presupuesto** (ver [Duplicar una venta como pedido o presupuesto](#duplicar-una-venta-como-pedido-o-presupuesto)).

## Antes de empezar

- Necesitás permiso para crear el tipo de documento que vas a duplicar.
- Tené en cuenta qué se copia y qué no:

| Se copia | Se calcula de nuevo | No se copia |
|----------|---------------------|-------------|
| Contacto, productos y cantidades, días de vencimiento y envío según el contacto. | Precios y lista de precios, como en cualquier carga nueva. El número del documento es nuevo. | En ventas, los datos fiscales y los pagos. |

## Procedimiento

1. Entrá al listado del documento (por ejemplo, **Gestión operativa → Ventas**).
2. Elegí una de estas opciones:
   - En la fila del documento, abrí el menú de tres puntos (**Más acciones**) y tocá **Duplicar**.
   - O abrí el detalle del documento y tocá **Duplicar** en la cabecera.
3. Se abre un alta nueva con los datos copiados. Todavía no está guardada.
4. Revisá el contacto, los productos, las cantidades y los precios.
5. Tocá **Guardar** (o **F2**).

## Duplicar una venta como pedido o presupuesto

Sirve cuando el cliente quiere repetir una compra pero antes necesitás prepararla como pedido o enviarle una cotización.

1. Entrá a **Gestión operativa → Ventas**.
2. Elegí una de estas opciones:
   - En la fila de la venta, abrí **Más acciones** y tocá el **+** que está junto a **Duplicar**.
   - O abrí el detalle de la venta, tocá **Duplicar** en la cabecera y elegí el destino.
3. Elegí **Nueva venta**, **Nuevo pedido** o **Nuevo presupuesto**.
4. Se abre el alta del documento elegido con el contacto, los productos y las cantidades de la venta. Arriba del formulario ves de qué venta salió.
5. Revisá los datos y guardá.

Tené en cuenta:

- Los precios y el envío se calculan a hoy, como en cualquier carga nueva. La venta original no se modifica.
- Si algún producto de la venta ya no está disponible, no se copia y el aviso de arriba lo nombra.
- Solo ves los destinos que tu perfil puede crear. Si no podés crear pedidos ni presupuestos, el **+** no aparece y **Duplicar** funciona como siempre.

## Si algo sale mal

- **No veo Duplicar:** tu perfil puede no tener permiso de alta para ese documento, o estás en un documento que no lo ofrece (compras, órdenes de compra y notas de crédito o débito no tienen esta opción).
- **No veo el + junto a Duplicar en ventas:** tu perfil no tiene permiso para crear pedidos ni presupuestos.
- **Faltan productos en el documento nuevo:** no estaban disponibles al duplicar. El aviso de arriba del formulario indica cuáles.
- **Los precios no son los del documento original:** es lo esperado. Los precios se calculan con la lista vigente, igual que en una carga nueva.
- **Cerré la pantalla sin guardar:** el duplicado no se guarda solo. Volvé a tocar **Duplicar**.

## Ver también

- [Ventas](../ventas/ventas.md)
- [Pedidos](../ventas/pedidos.md)
- [Presupuestos](../ventas/presupuestos.md)
- [Cotizaciones](../ventas/cotizaciones.md)
- [Formulario de documentos](./formulario-documento-v2.md)
