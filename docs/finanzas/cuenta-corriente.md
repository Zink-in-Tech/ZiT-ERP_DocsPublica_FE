---
title: 'Cuenta corriente'
sidebar_label: Cuenta corriente
description: 'Consultá saldo y movimientos por contacto, abrí comprobantes, compartí el saldo y registrá cobros o pagos según permisos.'
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
  - compartir saldo
  - ticket
  - A4
sidebar_position: 2
---

## Resumen

La cuenta corriente muestra el **saldo** y los **movimientos** con cada contacto:

- cuánto te deben los clientes
- cuánto debés a proveedores

Se actualiza con ventas, compras, pagos y notas. Es la base del control de deuda del negocio (no confunde saldo con dinero en caja).

Usala cuando necesites responder: “qué debe este cliente”, “qué le debemos a este proveedor”, “qué comprobantes siguen pendientes” o “por qué este cobro no cerró la deuda”.

---

## Antes de empezar

- Tener contactos cargados.
- Registrar ventas o compras.
- Para registrar un cobro desde cuenta corriente de clientes: permiso para ingresar movimientos/cobros de clientes.
- Para registrar un pago desde cuenta corriente de proveedores: permiso para ingresar movimientos/pagos de proveedores.
- **Compartir** el saldo no requiere un permiso extra: alcanza con poder ver la cuenta corriente.

---

## Ubicación dentro del sistema

| Vista | Ruta operativa |
|-------|----------------|
| Cuenta corriente de clientes | **Finanzas → Cuenta corriente clientes** |
| Cuenta corriente de proveedores | **Finanzas → Cuenta corriente proveedores** |

También podés abrirla desde:

- el listado o la ficha de [Contactos](../administracion/contactos.md) (**Cta Cte Cliente** / **Cta Cte Proveedor**)
- el flujo de cobro/pago asociado al contacto

Venta / Compra → Cuenta corriente → Cobro o Pago

👉 Ahí se ve la deuda y, con permiso, se registra el cobro o el pago.

Hay un [informe Excel de cuenta corriente](../informes/informe-cuenta-corriente.md) aparte del listado operativo de saldos.

---

## Qué permite hacer

- Ver saldo actual por contacto (columnas **Contacto**, **Saldo**, **Última operación**)
- Abrir los **movimientos** con un clic en el **nombre o razón social** (misma acción que el detalle del menú de la fila)
- Analizar comprobantes e importes en la grilla de movimientos
- Abrir el comprobante desde el número en la grilla
- **Compartir** un resumen del saldo (copiar, WhatsApp o email)
- Registrar cobro (cliente) o pago (proveedor) según permisos
- Exportar listado o movimientos (PDF/CSV según la vista)

---

## Qué cambia y qué no cambia

**La cuenta corriente:**

- ✔️ Registra deuda automáticamente con operaciones comerciales
- ✔️ Se actualiza con cobros y pagos
- ✔️ Mantiene historial de movimientos
- ✔️ Permite registrar cobro/pago desde el diálogo (con permiso)
- ❌ No es caja: no representa dinero físico disponible
- ❌ **Compartir** no publica un link externo: solo copia o abre WhatsApp/email con un texto

La disponibilidad de dinero se revisa en [Caja diaria](./caja-diaria.md).

---

## Procedimiento

1. Entrá a la cuenta corriente de clientes o proveedores (o abrila desde el contacto).
2. En el listado, buscá el contacto.
3. Hacé clic en el **nombre o razón social** (o usá el detalle del menú de la fila).
4. En el diálogo de movimientos revisá:
   - **saldo actual** (el color indica el sentido del saldo)
   - la grilla de comprobantes (fecha, importes, saldo acumulado cuando aplica)
5. Si hace falta, abrí un comprobante desde su número.
6. Opcional: usá **Compartir** o registrá un cobro/pago.
7. Volvé a revisar el saldo para confirmar que el movimiento aplicó.

### Compartir saldo

1. Abrí los movimientos del contacto.
2. En la barra de acciones, elegí **Compartir**.
3. Copiá el resumen o envialo por WhatsApp o email.

El texto incluye tipo de cuenta (cliente/proveedor), contacto, saldo y fecha. Usa el **saldo que ves en pantalla** al momento de compartir.

### Comprobantes desde cuenta corriente (cliente)

En cuenta corriente de **cliente**, al abrir una **venta** desde la grilla entrás a la consulta de comprobantes:

- vistas **Nativo** / **Fiscal** cuando corresponde
- formatos **Ticket** / **A4** en fiscal con facturación **ARCA**
- **Enviar por correo** el PDF de la venta (nativo y fiscal en el mismo mensaje, si hay documento fiscal)

Notas de crédito o débito usan el visor unificado (Ticket/A4 en vista fiscal cuando aplica). Cobros asociados y comprobantes de **proveedor** se abren como PDF habitual.

Detalle de envío y A4 también en [Ventas](../ventas/ventas.md).

---

## Cómo interpretar el saldo

| Situación | Qué significa |
|-----------|---------------|
| Cliente con saldo pendiente | El cliente tiene deuda asociada a ventas, notas o movimientos no cancelados. |
| Proveedor con saldo pendiente | La organización tiene deuda asociada a compras o movimientos de proveedor. |
| Saldo en cero | No hay deuda pendiente para ese contacto, o los comprobantes fueron compensados. |
| Última operación antigua | Puede indicar que no hubo movimientos recientes o que el cobro/pago se registró en otro contacto. |

---

## Casos frecuentes

### Cliente con deuda

Permite ver cuánto debe y qué comprobantes están pendientes. Abrí la venta desde el número para revisar o reenviar el comprobante.

### Proveedor a pagar

Permite identificar pagos pendientes y montos. Los comprobantes de compra se abren en PDF.

### Conciliación

Compará movimientos del sistema con registros externos. Podés exportar la grilla para llevar el detalle fuera del sistema.

### Cobro desde cuenta corriente

Cuando un cliente tiene deuda, registrá un cobro desde el diálogo o desde el menú del listado si tu perfil tiene permiso.

Ese cobro reduce el saldo del contacto y aparece luego en caja diaria según fecha, medio de pago y configuración.

### Recordatorio de saldo al contacto

Usá **Compartir** → WhatsApp o email para enviar el saldo actual sin armar el mensaje a mano.

---

## Recomendaciones de uso

Usá cuenta corriente como referencia principal de **deuda**.

👉 No la confundas con caja: no representa dinero disponible.

Antes de compartir, confirmá que el saldo en pantalla es el que querés comunicar.

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

- **No puedo enviar el comprobante por correo**
  - El envío del PDF de la venta requiere email en la ficha del [contacto](../administracion/contactos.md).
  - Desde cuenta corriente de proveedor el PDF se consulta, pero el envío por correo del comprobante de venta aplica al circuito de cliente/ventas.

---

## Buenas prácticas

- Controlá saldos regularmente.
- Aplicá cobros y pagos sobre el contacto correcto.
- Evitá dejar movimientos sin revisar.
- Preferí WhatsApp o email de **Compartir** cuando el destinatario es el contacto; copiar al portapapeles sirve para pegar en otra herramienta.

---

## Ver también

- [Finanzas](./finanzas.md)
- [Pagos](./pagos.md)
- [Caja diaria](./caja-diaria.md)
- [Informe de cuenta corriente](../informes/informe-cuenta-corriente.md)
- [Ventas](../ventas/ventas.md)
- [Compras](../compras/compras.md)
- [Contactos](../administracion/contactos.md)
- [Perfiles](../administracion/perfiles.md)
