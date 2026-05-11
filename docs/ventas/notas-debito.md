---
title: Notas de débito
description: Registrá recargos o ajustes sobre ventas realizadas y actualizá la cuenta corriente del cliente.
sidebar_position: 31
---

## Resumen

Las notas de débito permiten registrar ajustes adicionales sobre ventas ya realizadas.

Se utilizan para aplicar recargos, diferencias de precio o cualquier ajuste que incremente el importe de una operación.

Impactan la cuenta corriente del cliente.

---

## Antes de empezar

- Tener una venta previamente registrada o un cliente asociado.
- Definir el motivo del ajuste (recargo, diferencia, actualización de precio).
- Seleccionar el cliente y, cuando corresponda, la venta o comprobante relacionado. Asociarla a una venta mejora la trazabilidad del ajuste.

---

## Ubicación dentro del sistema

Las notas de débito forman parte del **proceso post-venta**.

Se utilizan después de haber registrado una venta:

Venta → Nota de débito

👉 Permiten ajustar operaciones aumentando el importe registrado.

---

## Qué permite hacer

- Aplicar recargos a una venta
- Ajustar diferencias de precio
- Incrementar saldos en cuenta corriente
- Registrar cargos adicionales posteriores a la venta

---

## Procedimiento

1. Crear una nueva nota de débito.
2. Seleccionar la venta asociada (si corresponde).
3. Definir los importes o conceptos a ajustar.
4. Verificar los valores.
5. Confirmar la nota de débito.

Si el sistema exige comprobante relacionado, elegí la venta desde el listado de ventas asociadas al cliente. Si el flujo permite un ajuste sin venta específica, registrá una observación clara para explicar el motivo.

---

## Estados

| Estado     | Descripción |
|------------|------------|
| BORRADOR   | Editable. Permite modificar datos antes de confirmar. |
| CONFIRMADO | No editable. Aplica los ajustes correspondientes. |

---

## Qué cambia y qué no cambia

**La nota de débito:**

- ✔️ Incrementa la cuenta corriente del cliente
- ✔️ Permite ajustar operaciones
- ❌ No genera una nueva venta
- ❌ No modifica la operación original

---

## Casos frecuentes

### Diferencia de precio

Se ajusta una venta que quedó con un valor incorrecto.

### Recargo adicional

Se aplica un costo extra posterior a la venta.

### Ajuste manual

Se corrige un importe por fuera del flujo habitual.

Usalo con cuidado y documentá el motivo, especialmente si no queda asociado a una venta concreta.

---

## Recomendaciones de uso

Las notas de débito deben utilizarse cuando una operación ya fue registrada pero requiere un ajuste adicional que incrementa su importe.

Es ideal en situaciones como:

- Diferencias detectadas después de la venta
- Recargos por servicios adicionales
- Ajustes administrativos

👉 Usalas en lugar de modificar ventas confirmadas para mantener la trazabilidad.

---

## Si algo sale mal

- **No podés modificar la nota**
  - Puede estar en estado CONFIRMADO.

- **El ajuste no se refleja correctamente**
  - Verificá los importes cargados.
  - Revisá que la venta o comprobante relacionado corresponda al cliente seleccionado.

- **Diferencias en cuenta corriente**
  - Revisá la operación asociada.

---

## Buenas prácticas

- Asociá la nota a una venta cuando sea posible.
- Verificá los importes antes de confirmar.
- Registrá claramente el motivo del ajuste.
- Evitá modificar ventas ya cerradas.

---

## Ver también

- [Ventas](./ventas.md)
- [Notas de crédito](./notas-credito.md)
- [Flujo de ventas](./flujo-ventas.md)
