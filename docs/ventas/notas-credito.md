---
title: Notas de crédito
description: Registrá devoluciones o ajustes sobre ventas realizadas y actualizá la cuenta corriente del cliente.
sidebar_position: 30
---

## Resumen

Las notas de crédito permiten corregir o ajustar ventas ya realizadas.

Se utilizan para registrar devoluciones, anular total o parcialmente una venta o ajustar importes en la cuenta corriente del cliente.

Pueden impactar en stock y siempre afectan la cuenta corriente según el caso.

---

## Antes de empezar

- Tener una venta previamente registrada.
- Tener definido el motivo del ajuste (devolución, error, anulación).
- Revisar si el ajuste también requiere movimiento físico de mercadería. El impacto en stock depende del circuito de inventario configurado y de cómo se registre la devolución.

---

## Ubicación dentro del sistema

Las notas de crédito forman parte del **proceso post-venta**.

Se utilizan después de haber registrado una venta:

Venta → Nota de crédito

👉 Permiten corregir o ajustar operaciones ya cerradas.

---

## Qué permite hacer

- Anular total o parcialmente una venta
- Registrar devoluciones de productos
- Ajustar saldos en cuenta corriente
- Corregir errores en operaciones anteriores

---

## Procedimiento

1. Crear una nueva nota de crédito.
2. Seleccionar la venta asociada (si corresponde).
3. Definir los productos o importes a ajustar.
4. Verificar los valores.
5. Confirmar la nota de crédito.

---

## Estados

| Estado     | Descripción |
|------------|------------|
| BORRADOR   | Editable. Permite modificar datos antes de confirmar. |
| CONFIRMADO | No editable. Aplica los ajustes correspondientes. |

---

## Qué cambia y qué no cambia

**La nota de crédito:**

- ✔️ Ajusta la cuenta corriente del cliente
- ✔️ Puede acompañar una devolución o corrección de stock si el circuito lo registra
- ✔️ Permite corregir operaciones
- ❌ No genera una nueva venta
- ❌ No reemplaza la operación original, la ajusta

---

## Casos frecuentes

### Devolución de mercadería

El cliente devuelve productos y se ajusta la cuenta corriente.

Después de confirmar, verificá si el stock quedó actualizado. Si tu circuito no lo actualiza desde la nota, registrá el movimiento de inventario correspondiente para mantener trazabilidad.

### Error en facturación

Se corrige una venta mal registrada.

### Anulación parcial

Se elimina solo una parte de la operación original.

---

## Recomendaciones de uso

Las notas de crédito deben utilizarse cuando una venta ya fue registrada pero necesita ser corregida.

Es ideal en situaciones como:

- Devoluciones de productos
- Reclamos de clientes
- Errores en precios o cantidades
- Ajustes posteriores a la venta

👉 Es importante utilizarlas en lugar de modificar ventas ya confirmadas para mantener la trazabilidad.

---

## Si algo sale mal

- **No podés modificar la nota**
  - Puede estar en estado CONFIRMADO.

- **El ajuste no impacta correctamente**
  - Verificá la venta asociada.
  - Si esperabas impacto en stock, revisá el movimiento de inventario relacionado.

- **Diferencias en cuenta corriente**
  - Revisá los importes aplicados.

---

## Buenas prácticas

- Asociá siempre la nota a una venta cuando sea posible.
- Verificá los importes antes de confirmar.
- Usá notas de crédito para mantener historial en lugar de editar ventas.
- Documentá el motivo del ajuste.

---

## Ver también

- [Ventas](./ventas.md)
- [Notas de débito](./notas-debito.md)
- [Flujo de ventas](./flujo-ventas.md)
