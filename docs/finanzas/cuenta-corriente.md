---
title: Cuenta corriente | Zink ERP
sidebar_label: Cuenta corriente
description: >-
  La cuenta corriente permite visualizar el saldo y los movimientos con cada
  contacto, mostrando en todo momento: Se actualiza automáticamente con ventas,
  compras
keywords:
  - cuenta corriente
  - deuda clientes
  - deuda proveedores
  - saldo contacto
  - cobrar deuda
  - pagar proveedor
  - movimientos
  - comprobantes pendientes
  - saldo incorrecto
sidebar_position: 2
---

## Resumen

La cuenta corriente permite visualizar el saldo y los movimientos con cada contacto, mostrando en todo momento:

- cuánto te deben los clientes
- cuánto debés a proveedores

Se actualiza automáticamente con ventas, compras, pagos y notas, y es la base del control financiero del negocio.

Usala cuando necesites responder preguntas como: "qué debe este cliente", "qué le debemos a este proveedor", "qué comprobantes siguen pendientes" o "por qué este cobro no cerró la deuda".

---

## Antes de empezar

- Tener contactos cargados.
- Registrar ventas o compras.
- Para registrar un cobro desde cuenta corriente de clientes, el usuario debe tener permiso para ingresar movimientos/cobros de clientes.
- Para registrar un pago desde cuenta corriente de proveedores, el usuario debe tener permiso para ingresar movimientos/pagos de proveedores.

---

## Ubicación dentro del sistema

Existen dos vistas principales:

| Vista | Ruta operativa |
|-------|----------------|
| Cuenta corriente de clientes | **Finanzas → Cuenta corriente clientes** |
| Cuenta corriente de proveedores | **Finanzas → Cuenta corriente proveedores** |

Venta / Compra → Cuenta corriente → Pago o Cobro

👉 Es donde se registra la deuda antes de cancelarla.

---

## Qué permite hacer

- Ver saldo actual por contacto
- Analizar movimientos históricos
- Identificar deudas pendientes
- Controlar pagos aplicados
- Exportar o revisar movimientos para conciliación
- Registrar cobros o pagos desde el contacto, según permisos

---

## Qué cambia y qué no cambia

**La cuenta corriente:**

- ✔️ Registra deuda automáticamente
- ✔️ Se actualiza con pagos
- ✔️ Mantiene historial
- ❌ No maneja dinero físico
- ❌ No registra pagos directamente

---

## Procedimiento

1. Entrá a la cuenta corriente de clientes o proveedores.
2. Buscá el contacto.
3. Revisá:
   - saldo actual
   - última operación
   - movimientos detallados
4. Analizá comprobantes pendientes.
5. Si corresponde, registrá un cobro o pago.
6. Volvé a revisar el saldo para confirmar que el movimiento aplicó correctamente.

---

## Cómo interpretar el saldo

| Situación | Qué significa |
|-----------|---------------|
| Cliente con saldo pendiente | El cliente tiene deuda asociada a ventas, notas o movimientos no cancelados. |
| Proveedor con saldo pendiente | La organización tiene deuda asociada a compras o movimientos de proveedor. |
| Saldo en cero | No hay deuda pendiente para ese contacto, o los comprobantes fueron compensados. |
| Última operación antigua | Puede indicar que no hubo movimientos recientes o que el cobro/pago se registró en otro contacto. |

La cuenta corriente muestra deuda y trazabilidad. La disponibilidad de dinero se revisa en [Caja diaria](./caja-diaria.md).

---

## Casos frecuentes

### Cliente con deuda

Permite ver cuánto debe y qué comprobantes están pendientes.

### Proveedor a pagar

Permite identificar pagos pendientes y montos.

### Conciliación

Comparar movimientos del sistema con registros externos.

### Cobro desde cuenta corriente

Cuando un cliente tiene deuda, podés registrar un cobro desde la cuenta corriente si el perfil del usuario tiene permiso para hacerlo.

Ese cobro reduce el saldo del contacto y aparece luego en caja diaria según fecha, medio de pago y configuración.

---

## Recomendaciones de uso

Usá cuenta corriente como referencia principal de deuda.

👉 No la confundas con caja: no representa dinero disponible.

---

## Si algo sale mal

- **Saldo incorrecto**
  - Revisá ventas, compras y pagos aplicados.
  - Confirmá que el movimiento se haya registrado sobre el contacto correcto.
  - Verificá si existen notas de crédito, notas de débito o movimientos manuales.

- **El cobro no aparece**
  - Revisá que el pago haya sido guardado correctamente.
  - Verificá la fecha del cobro.
  - Confirmá que el medio de pago esté cargado.
  - Si fue Mercado Pago, verificá que haya quedado aprobado.

- **No podés registrar el cobro o pago**
  - Revisá los permisos del perfil del usuario.
  - Si el botón no aparece o está deshabilitado, puede faltar el permiso de acción correspondiente.

---

## Buenas prácticas

- Controlá saldos regularmente.
- Aplicá pagos correctamente.
- Evitá dejar movimientos sin revisar.

---

## Ver también

- [Finanzas](./finanzas.md)
- [Pagos](./pagos.md)
- [Caja diaria](./caja-diaria.md)
- [Ventas](../ventas/ventas.md)
- [Compras](../compras/compras.md)
- [Perfiles](../administracion/perfiles.md)
