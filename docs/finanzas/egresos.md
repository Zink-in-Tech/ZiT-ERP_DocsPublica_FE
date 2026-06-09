---
title: Egresos | Zink ERP
sidebar_label: Egresos
description: >-
  Los egresos permiten registrar salidas de dinero que no provienen de compras.
  Son clave para controlar gastos operativos. en Zink ERP.
keywords:
  - egresos
  - egreso manual
  - salida de dinero
  - gasto operativo
  - retiro
  - ajuste de caja
  - conceptos
  - caja diaria
sidebar_position: 6
---

## Resumen

Los egresos permiten registrar salidas de dinero que no provienen de compras.

Son clave para controlar gastos operativos.

---

## Antes de empezar

- Tener conceptos configurados.
- Tener permiso para agregar egresos.
- Definir la fecha real del movimiento.
- Confirmar que el movimiento no corresponda a una compra o pago a proveedor.

---

## Ubicación dentro del sistema

Entrá desde **Finanzas → Egresos**.

Egreso → Caja diaria

---

## Cuándo usar egresos

- Gastos operativos
- Retiros
- Ajustes negativos de caja
- Salidas extraordinarias que no cancelan deuda de proveedores

No lo uses para pagar compras o deuda de proveedores. En esos casos corresponde usar [Pagos](./pagos.md), para que la cuenta corriente quede correctamente aplicada.

---

## Qué cambia y qué no cambia

**El egreso:**

- ✔️ Reduce dinero en caja
- ✔️ Permite categorizar gastos
- ✔️ Puede asociarse opcionalmente a un contacto para referencia
- ❌ No impacta deuda
- ❌ No cancela comprobantes pendientes

---

## Procedimiento

1. Creá un nuevo egreso.
2. Revisá la fecha.
3. (Opcional) asociá contacto.
4. Seleccioná concepto.
5. Ingresá importe.
6. Agregá observación si ayuda a justificar el movimiento.
7. Confirmá.

---

## Casos frecuentes

### Gastos del negocio

Pagos de servicios, insumos, etc.

### Retiros

Extracciones de dinero.

### Ajuste de caja

Salida manual para corregir o registrar una diferencia detectada en el control diario.

---

## Recomendaciones de uso

Usalos solo fuera del flujo de compras.

Si la salida existe porque se pagó una compra, registrala como pago a proveedor y no como egreso manual.

---

## Si algo sale mal

- **No podés guardar**
  - Verificá que la fecha sea válida.
  - Confirmá que cada ítem tenga concepto e importe mayor a cero.
  - Revisá el permiso para agregar egresos.

- **La caja no coincide**
  - Verificá la fecha del egreso.
  - Revisá si correspondía registrar un pago a proveedor en lugar de un egreso manual.

- **El saldo del proveedor no cambió**
  - Es correcto: los egresos no impactan cuenta corriente.
  - Si necesitás reducir deuda con un proveedor, usá Pagos.

---

## Buenas prácticas

- Registrá todos los gastos.
- Usá conceptos claros.
- Usá observaciones para retiros, ajustes o movimientos no habituales.

---

## Ver también

- [Finanzas](./finanzas.md)
- [Caja diaria](./caja-diaria.md)
- [Pagos](./pagos.md)
- [Cuenta corriente](./cuenta-corriente.md)
- [Conceptos](../administracion/conceptos.md)
