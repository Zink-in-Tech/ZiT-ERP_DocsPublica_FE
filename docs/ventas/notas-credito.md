---
title: "Notas de crédito | ZinkERP Docs"
sidebar_label: "Notas de crédito"
description: "Registrá notas de crédito en ZinkERP para devoluciones, ajustes parciales, cuenta corriente, stock y problemas frecuentes."
sidebar_position: 30
keywords:
  - nota de crédito
  - devolución
  - anular venta
  - ajuste cuenta corriente
  - reclamo cliente
---

## Resumen

Las notas de crédito corrigen o ajustan ventas ya realizadas: devoluciones, anulación total o parcial, o corrección de importes en la cuenta corriente del cliente.

Son **comprobantes asociados a una venta**: no podés emitir una nota de crédito sin vincularla a una venta existente.

Pueden impactar stock según cómo registres la devolución y el circuito de inventario. Siempre afectan la deuda del cliente al confirmarse.

---

## Antes de empezar

- Tener una **venta asociada** registrada (obligatorio: la NC es un comprobante ligado a una venta).
- Definir el motivo: devolución, error, anulación.
- Revisar si necesitás movimiento físico de mercadería además del ajuste comercial.

---

## Ubicación dentro del sistema

Proceso **post-venta**:

Venta → Nota de crédito

No reemplaza la venta original: la ajusta y mantiene trazabilidad.

---

## Cuándo usarla

- El cliente devuelve productos.
- Hubo error de precio o cantidad en una venta confirmada.
- Necesitás anular parcial o totalmente sin editar la venta cerrada.

No uses nota de crédito para corregir una venta que sigue en **BORRADOR**; editá la venta directamente.

---

## Qué cambia y qué no cambia

- ✔️ Ajusta cuenta corriente del cliente
- ✔️ Puede acompañar devolución de stock si el circuito lo registra
- ❌ No crea una venta nueva
- ❌ No sustituye editar una venta confirmada (evitá perder historial)

---

## Procedimiento

1. Creá una nueva nota de crédito.
2. Seleccioná la **venta asociada** (obligatorio).
3. Definí productos o importes a ajustar.
4. Verificá totales.
5. Confirmá la nota (**CONFIRMADO**).

---

## Estados

| Estado     | Descripción |
|------------|------------|
| BORRADOR   | Editable antes de confirmar. |
| CONFIRMADO | No editable; aplica el ajuste. |

La documentación y páginas actuales no confirman estados adicionales para notas de crédito, como **ANULADO** o **RECHAZADO**.

<!-- TODO(producto): validar en el código del producto si notas de crédito soportan ANULADO, RECHAZADO u otros estados y actualizar esta tabla. -->

---

## Notas de crédito parciales

Una nota de crédito puede representar una anulación parcial cuando solo se corrige parte de una venta: algunos ítems, una cantidad menor o una diferencia de importe.

Ejemplo: vendiste 3 remeras y el cliente devuelve 1. En ese caso, asociá la nota a la venta original y cargá solo el ítem o importe que corresponde devolver. Después verificá cuenta corriente y stock; si la devolución física no actualiza inventario automáticamente, registrá el ajuste en [Registro de inventario](../inventario/inventarios.md).

---

## Cuándo usar NC vs nota de débito

| Situación | Documento |
|-----------|-----------|
| El cliente devuelve mercadería o pagó de más | Nota de crédito |
| La venta quedó con un precio mayor al correcto para el cliente | Nota de crédito |
| Faltó cobrar un recargo, flete o diferencia de precio | [Nota de débito](./notas-debito.md) |

Ejemplo: si facturaste una campera a $50.000 y correspondía $45.000, usá nota de crédito por $5.000. Si facturaste $45.000 y correspondía $50.000, usá nota de débito por $5.000.

---

## Casos frecuentes

### Devolución de mercadería

Ajustás la deuda del cliente; verificá si el stock se actualizó. Si no, registrá el movimiento en [Registro de inventario](../inventario/inventarios.md).

### Error en facturación

Corregís importes sin modificar la venta original.

### Anulación parcial

Solo una parte de la operación se revierte.

---

## Si algo sale mal

- **No podés modificar la nota**
  - Puede estar en **CONFIRMADO**.
- **El saldo del cliente no cambió**
  - Verificá que la nota esté confirmada y la venta asociada sea la correcta.
- **El stock no se actualizó**
  - Revisá si el circuito registra devolución desde la nota; si no, cargá inventario manual con trazabilidad.
- **No podés guardar sin venta**
  - El sistema exige una venta asociada; buscá el comprobante correcto por cliente y fecha.
- **Diferencias en cuenta corriente**
  - Revisá importes e ítems; contrastá con [Cuenta corriente](../finanzas/cuenta-corriente.md).

---

## Buenas prácticas

- Siempre asociá la nota a la venta que estás ajustando.
- Documentá el motivo en observaciones.
- Preferí nota de crédito antes que editar ventas confirmadas.

---

## Ver también

- [Ventas](./ventas.md)
- [Notas de débito](./notas-debito.md)
- [Flujo de ventas](./flujo-ventas.md)
- [Cuenta corriente](../finanzas/cuenta-corriente.md)
