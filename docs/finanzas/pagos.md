---
title: Pagos
description: Registrá cobros y pagos, aplicalos a comprobantes y mantené actualizada la cuenta corriente.
keywords:
  - pagos
  - cobros
  - cobrar venta
  - cuenta corriente
  - medios de pago
  - pago parcial
  - Mercado Pago
  - realizar cobro en ventas
sidebar_position: 3
---

## Resumen

Los pagos permiten registrar cobros a clientes y pagos a proveedores, aplicando montos sobre comprobantes existentes.

Son el mecanismo que transforma deuda en dinero, impactando tanto la cuenta corriente como la caja.

---

## Antes de empezar

- Tener comprobantes registrados.
- Verificar saldo en cuenta corriente.
- Para registrar cobros asociados a ventas, el usuario debe tener permiso para **realizar cobro en ventas**.
- Mercado Pago debe estar aprobado antes de registrar.
- **TODO: confirmar con producto** — manejo de anticipos.

---

## Ubicación dentro del sistema

Cuenta corriente → Pago → Caja

👉 Es el paso donde se cancela la deuda.

---

## Qué permite hacer

- Cancelar deudas
- Aplicar pagos parciales o totales
- Registrar múltiples medios de pago
- Enviar comprobantes al contacto

---

## Qué cambia y qué no cambia

**El pago:**

- ✔️ Reduce deuda
- ✔️ Registra ingreso o egreso
- ✔️ Impacta medios de pago
- ❌ No genera deuda nueva

---

## Procedimiento

1. Seleccioná el contacto.
2. Elegí tipo de pago (cliente/proveedor).
3. Seleccioná comprobantes.
4. Ingresá medios de pago.
5. Confirmá.

---

## Relación con ventas

En ventas comerciales, el cobro puede aparecer en dos momentos:

| Momento | Qué ocurre |
|---------|------------|
| Al confirmar la venta | Si el cliente es Consumidor Final o si el proceso de pago está configurado como inmediato, el sistema abre el formulario de cobro. |
| Después de confirmar | Si la venta queda en cuenta corriente, el cobro puede registrarse luego desde Pagos o desde la cuenta corriente del contacto. |

En ambos casos, si el cobro corresponde a una venta, el usuario necesita permiso para **realizar cobro en ventas**.

---

## Casos frecuentes

### Cobro total

Se cancela completamente la deuda.

### Pago parcial

Se distribuye el pago en varios comprobantes.

### Múltiples medios de pago

Ejemplo: efectivo + transferencia.

### Cobro desde una venta

La venta queda asociada al comprobante y el pago se aplica sobre ese importe.

Si se trata de Consumidor Final o pago inmediato, el sistema puede abrir el cobro automáticamente al confirmar la venta.

---

## Recomendaciones de uso

Siempre aplicá pagos sobre comprobantes.

👉 Evitá registrar pagos sin aplicación, ya que rompe la trazabilidad.

---

## Si algo sale mal

- **Monto incorrecto**
  - Verificá antes de confirmar.

- **No podés guardar**
  - Revisá reglas de aplicación.
  - Si el pago corresponde a una venta, verificá que tu usuario tenga permiso para realizar cobro en ventas.

- **Mercado Pago no permite confirmar**
  - Verificá que el pago haya sido solicitado y aprobado.
  - Si el estado no está aprobado, no guardes el cobro como finalizado.

- **El total no coincide**
  - Revisá que la suma de los medios de pago coincida con el importe del comprobante.

---

## Buenas prácticas

- Validá montos antes de confirmar.
- Usá observaciones para claridad.
- Enviá comprobantes al contacto.

---

## Ver también

- [Cuenta corriente](./cuenta-corriente.md)
- [Caja diaria](./caja-diaria.md)
- [Ventas](../ventas/ventas.md)
- [Perfiles](../administracion/perfiles.md)
