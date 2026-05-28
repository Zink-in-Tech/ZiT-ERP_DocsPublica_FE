---
title: Notas de débito
description: Registrá recargos o ajustes que incrementan el importe adeudado por el cliente; siempre asociadas a una venta.
sidebar_position: 31
keywords:
  - nota de débito
  - recargo
  - diferencia de precio
  - ajuste cliente
  - incrementar deuda
---

## Resumen

Las notas de débito registran ajustes que **aumentan** lo que el cliente debe: recargos, diferencias de precio o cargos posteriores a la venta.

Son **comprobantes asociados a una venta**: no podés emitir una nota de débito sin vincularla a una venta existente.

Impactan la cuenta corriente al confirmarse. No generan una venta nueva.

---

## Antes de empezar

- Tener la **venta** a la que corresponde el ajuste (obligatorio).
- Definir motivo: recargo, diferencia, actualización de precio.

---

## Ubicación dentro del sistema

Proceso **post-venta**:

Venta → Nota de débito

---

## Cuándo usarla

- Detectaste una diferencia de precio después de facturar.
- Aplicás un recargo por servicio adicional vinculado a esa venta.

No uses nota de débito para corregir a favor del cliente; en ese caso corresponde [Nota de crédito](./notas-credito.md).

---

## Qué cambia y qué no cambia

- ✔️ Incrementa cuenta corriente del cliente
- ✔️ Queda trazada a la venta origen
- ❌ No genera venta nueva
- ❌ No puede emitirse sin venta asociada

---

## Procedimiento

1. Creá una nueva nota de débito.
2. Seleccioná la **venta asociada** (obligatorio).
3. Definí importes o conceptos a ajustar.
4. Verificá valores.
5. Confirmá (**CONFIRMADO**).

---

## Estados

| Estado     | Descripción |
|------------|------------|
| BORRADOR   | Editable. |
| CONFIRMADO | No editable; aplica el ajuste. |

---

## Casos frecuentes

### Diferencia de precio

La venta quedó por debajo del valor correcto; la ND incrementa la deuda sobre esa misma venta.

### Recargo adicional

Flete, instalación u otro cargo posterior a la operación original.

---

## Si algo sale mal

- **No podés guardar sin venta**
  - Debés elegir una venta del cliente; no existe emisión de ND suelta.
- **No podés modificar**
  - Estado **CONFIRMADO**.
- **El saldo no subió como esperabas**
  - Verificá importes y que la venta asociada sea la correcta.

---

## Buenas prácticas

- Revisá la venta origen antes de confirmar.
- Evitá modificar ventas confirmadas; usá la nota para trazabilidad.
- Revisá [Cuenta corriente](../finanzas/cuenta-corriente.md) después de confirmar.

---

## Ver también

- [Ventas](./ventas.md)
- [Notas de crédito](./notas-credito.md)
- [Flujo de ventas](./flujo-ventas.md)
- [Finanzas](../finanzas/finanzas.md)
