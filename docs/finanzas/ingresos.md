---
title: "Ingresos | ZinkERP Docs"
sidebar_label: "Ingresos"
description: "Registrá entradas de dinero fuera del flujo de ventas y mantené el control de caja. Incluye procedimiento, impacto en caja y cuenta corriente y solución de problemas."
keywords:
  - ingresos
  - ingreso manual
  - entrada de dinero
  - ajuste de caja
  - aporte de capital
  - reintegro
  - conceptos
  - caja diaria
sidebar_position: 5
---

## Resumen

Los ingresos permiten registrar entradas de dinero que no provienen de ventas.

Se utilizan para mantener control sobre movimientos financieros externos al flujo comercial.

---

## Antes de empezar

- Tener conceptos configurados.
- Tener permiso para agregar ingresos.
- Definir la fecha real del movimiento.
- Confirmar que el movimiento no corresponda a una venta o cobro de cliente.

---

## Ubicación dentro del sistema

Entrá desde **Finanzas → Ingresos**.

Ingreso → Caja diaria

👉 No pasa por cuenta corriente.

---

## Cuándo usar ingresos

- Aportes de dinero
- Reintegros
- Ajustes positivos de caja
- Entradas extraordinarias que no cancelan deuda de clientes

No lo uses para cobrar ventas o deuda de clientes. En esos casos corresponde usar [Pagos](./pagos.md), para que la cuenta corriente quede correctamente aplicada.

---

## Qué cambia y qué no cambia

**El ingreso:**

- ✔️ Aumenta dinero en caja
- ✔️ Permite categorizar
- ✔️ Puede asociarse opcionalmente a un contacto para referencia
- ❌ No impacta deuda
- ❌ No cancela comprobantes pendientes

---

## Procedimiento

1. Creá un nuevo ingreso.
2. Revisá la fecha.
3. (Opcional) asociá contacto.
4. Seleccioná concepto.
5. Ingresá importe.
6. Agregá observación si ayuda a justificar el movimiento.
7. Confirmá.

---

## Casos frecuentes

### Aporte de capital

Ingreso manual para financiar operaciones.

### Ajuste de caja

Corrección puntual.

### Reintegro

Entrada de dinero por devolución o recuperación de un gasto que no corresponde a una venta.

---

## Recomendaciones de uso

Usalos solo fuera del flujo de ventas.

Si el ingreso existe porque un cliente pagó una venta, registralo como pago/cobro y no como ingreso manual.

---

## Si algo sale mal

- **No podés guardar**
  - Verificá que la fecha sea válida.
  - Confirmá que cada ítem tenga concepto e importe mayor a cero.
  - Revisá el permiso para agregar ingresos.

- **La caja no coincide**
  - Verificá la fecha del ingreso.
  - Revisá si correspondía registrar un pago en lugar de un ingreso manual.

- **El saldo del cliente no cambió**
  - Es correcto: los ingresos no impactan cuenta corriente.
  - Si necesitás reducir deuda de un cliente, usá Pagos.

---

## Buenas prácticas

- Usá conceptos claros.
- Registrá observaciones.
- Evitá usar ingresos manuales para compensar errores sin revisar el origen.

---

## Ver también

- [Finanzas](./finanzas.md)
- [Caja diaria](./caja-diaria.md)
- [Pagos](./pagos.md)
- [Cuenta corriente](./cuenta-corriente.md)
- [Conceptos](../administracion/conceptos.md)
