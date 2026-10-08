---
title: 'Pagos'
sidebar_label: Pagos
description: 'Los pagos permiten registrar cobros a clientes y pagos a proveedores, aplicando montos sobre comprobantes existentes.'
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
- Aplicar el monto sobre uno o varios comprobantes. Si queda una diferencia sin aplicar, el sistema puede generar o requerir un comprobante de ajuste, como una nota de crédito, según el flujo.

---

## Ubicación dentro del sistema

Cuenta corriente → Pago → Caja

👉 Es el paso donde se cancela la deuda.

---

## Qué permite hacer

- Cancelar deudas
- Aplicar pagos parciales o totales
- Registrar múltiples [medios de pago](../configuracion/medios-pago.md)
- Enviar comprobantes al contacto
- Aplicar el cobro o pago completo sobre comprobantes relacionados

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
4. Ingresá [medios de pago](../configuracion/medios-pago.md).
5. Confirmá con **Guardar** (atajo **F2**, visible en el botón).

---

## Cobro rápido (Consumidor Final / post-venta)

Cuando el sistema abre el cobro al confirmar una venta (o desde POS), el formulario prioriza velocidad:

- **Total a cobrar** bien visible y estado en una línea: **Total exacto · Completo**, **Restan…** o **Vuelto…**.
- Tres tarjetas rápidas: **Efectivo** (**E**), **Tarjeta** (**T**) y **Mercado Pago** (**M**); el importe se completa con el total.
- Con **Tarjeta**, elegí el tipo de tarjeta y, si querés, los **últimos 4 dígitos** (como figuran en el cupón). El número completo no se pide.
- Acciones compactas: lápiz (editar importe), **F4** + calculadora (vuelto en efectivo) y **+** para otros medios.
- **Dividir** reparte el cobro entre varios medios; con dos medios, el segundo se completa solo con lo que resta.
- **F2** guarda el movimiento. Mientras guarda, la acción queda bloqueada para evitar doble envío.

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

Al abrir el cobro desde una venta, el formulario se muestra de inmediato; el saldo de cuenta corriente puede cargarse unos segundos después en segundo plano.

Desde el detalle de la venta, el listado de pagos muestra medio de pago (con datos de cheque o transferencia), hora, observación e importe **imputado a esa venta** (no el total del pago si saldó varios comprobantes).

### Aplicar saldo a favor {#aplicar-saldo-a-favor}

Si el cliente tiene notas de crédito o pagos a cuenta, y además ventas pendientes, podés aplicar esos créditos de una vez. Hace falta permiso para registrar cobros. El botón no aparece en Consumidor Final ni si no hay crédito o ventas pendientes.

Dónde:

- Pagos de una venta con saldo: **Aplicar saldo a favor**.
- **Cuenta corriente → Clientes**: menú de la fila y acciones de los movimientos.
- Ficha del contacto → **Historial comercial**.
- Cobro a cliente, con medio nota de crédito o créditos disponibles: **Aplicar varios saldos**.

La vista previa no graba hasta que confirmás. Aplica primero las notas de crédito y después los pagos a cuenta, del más antiguo al más reciente, sobre todas las ventas pendientes. Podés destildar créditos; las ventas no se eligen una por una. Las notas de crédito se usan completas. El último pago a cuenta puede quedar en parte. Tenés que aceptar que no se puede deshacer. Podés enviar la constancia por email.

Si una nota de crédito es mayor que la deuda, no se aplica nada: excluí esa nota o andá al cobro para aplicar de a uno. Para imputar un saldo a una venta puntual, seguí eligiendo los comprobantes en el cobro.

### Diferencia o saldo a favor

Si el pago supera o no coincide con los comprobantes seleccionados, revisá la aplicación antes de guardar. El sistema no debería dejar montos sin aplicar sin trazabilidad; puede pedir corregir el importe o generar un comprobante de ajuste.

---

## Recomendaciones de uso

Siempre aplicá pagos sobre comprobantes.

👉 Evitá registrar pagos sin aplicación, ya que rompe la trazabilidad.

---

## Si algo sale mal

- **Monto incorrecto**
  - Verificá antes de confirmar.

- **El sistema pide corregir datos**
  - Revisá el mensaje: suele indicar un campo incompleto o inválido. Corregí y guardá de nuevo; reintentar sin cambiar nada vuelve a fallar.

- **No podés guardar / error de conexión**
  - Revisá reglas de aplicación.
  - Si el pago corresponde a una venta, verificá que tu usuario tenga permiso para realizar cobro en ventas.
  - Si el aviso ofrece **Reintentar**, usalo cuando el problema sea de conexión.

- **Mercado Pago no permite confirmar**
  - Verificá que el pago haya sido solicitado y aprobado.
  - Si el estado no está aprobado, no guardes el cobro como finalizado.

- **El total no coincide**
  - Revisá que la suma de los medios de pago coincida con el importe del comprobante.
  - Revisá también que el monto aplicado a comprobantes coincida con el total del pago.

---

## Buenas prácticas

- Validá montos antes de confirmar.
- Usá observaciones para claridad.
- Enviá comprobantes al contacto.

---

## Ver también

- [Finanzas](./finanzas.md)
- [Cuenta corriente](./cuenta-corriente.md)
- [Caja diaria](./caja-diaria.md)
- [Medios de pago](../configuracion/medios-pago.md)
- [Ventas](../ventas/ventas.md)
- [Perfiles](../administracion/perfiles.md)
