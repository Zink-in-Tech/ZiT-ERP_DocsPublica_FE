---
title: Ventas
description: Registrá la venta final, gestioná la entrega de mercadería y el impacto en stock y cuenta corriente.
keywords:
  - ventas
  - venta comercial
  - cobrar venta
  - cobro
  - pago inmediato
  - cuenta corriente
  - consumidor final
  - venta entregada
  - realizar cobro en ventas
sidebar_position: 5
---

## Resumen

La venta es la etapa final del flujo comercial en Zink ERP.

Representa el cierre de la operación y es el momento en el que el sistema impacta stock y cuenta corriente según el estado.

Puede generarse desde un pedido o registrarse directamente, según el tipo de operación.

También podés encontrar este proceso como **venta comercial**, **venta directa**, **venta con cuenta corriente**, **venta con cobro inmediato** o **cobro de venta**.

---

## Antes de empezar

- Definí correctamente el tipo de cliente:
  - Consumidor Final (pago inmediato)
  - Contacto (puede generar cuenta corriente)
- Verificá que los productos tengan precios válidos.
- Para registrar cobros en ventas comerciales, el usuario debe tener permiso para **realizar cobro en ventas**.
- Algunas modificaciones (precios, fechas, descuentos) pueden requerir permisos especiales.
- Revisá la configuración de **Proceso de Pago** en preferencias:
  - **Inmediato**: al confirmar la venta se abre el flujo de cobro.
  - **Diferido**: la venta puede quedar como deuda del contacto para cobrarse luego.

---

## Ubicación dentro del flujo

La venta es la última etapa del proceso:

Cotización → Presupuesto → Pedido → **Venta**

- Puede generarse automáticamente desde un pedido en estado PREPARADO.
- También puede crearse directamente sin pasar por etapas anteriores.

---

## Qué cambia y qué no cambia

**La venta:**

- ✔️ Descarga stock (al marcar ENTREGADO)
- ✔️ Impacta cuenta corriente (según cliente)
- ✔️ Puede generar comprobante
- ❌ No es editable una vez confirmada (según estado)

---

## Procedimiento

1. Crear una nueva venta (o generarla desde un pedido).
2. Seleccionar el contacto:
   - Consumidor Final → pago inmediato
   - Contacto → puede generar deuda
3. Agregar productos y cantidades.
4. Ajustar precios o descuentos si corresponde (según permisos).
5. Confirmar la venta.
6. Si corresponde, registrar el cobro.
7. Si aplica:
   - gestionar despacho
8. Marcar como ENTREGADO para:
   - descontar stock
   - actualizar cuenta corriente

---

## Cobro de la venta

El cobro depende de tres factores:

| Factor | Qué define |
|--------|------------|
| Cliente | Si es **Consumidor Final**, normalmente se espera pago inmediato. Si es un contacto, puede usarse cuenta corriente según configuración. |
| Proceso de Pago | Define si la venta abre el cobro al confirmar o si permite cobrar más tarde. |
| Permisos | Para abrir y guardar el cobro, el usuario necesita permiso para **realizar cobro en ventas**. |

Cuando el cobro se registra correctamente, el sistema puede abrir el comprobante o continuar con el circuito fiscal según la configuración de la organización.

Si el usuario confirma una venta con contacto y el proceso de pago es diferido, la deuda queda asociada a la cuenta corriente del contacto y puede cobrarse luego desde Finanzas, Cuenta corriente o Pagos.

---

## Estados

| Estado     | Descripción |
|------------|------------|
| BORRADOR   | Editable. Permite modificar productos y datos. |
| CONFIRMADO | No editable. Permite avanzar al despacho. |
| DESPACHAR  | Control del inventario según configuración. |
| ENTREGADO  | Se descuenta stock y se impacta cuenta corriente. |
| RECHAZAR   | Vuelve a BORRADOR (no disponible en estados finales). |
| CANCELADO  | Flujo cerrado. No editable. |

### Ciclo de vida

**Estado inicial:** BORRADOR · **Estado final (éxito):** ENTREGADO · **Al rechazar:** vuelve a **BORRADOR** (no disponible desde ENTREGADO ni CANCELADO) · **Cierre sin éxito:** CANCELADO.

```mermaid
stateDiagram-v2
  direction LR
  [*] --> BORRADOR: Crear
  BORRADOR --> CONFIRMADO: Confirmar
  CONFIRMADO --> DESPACHAR: Despachar
  DESPACHAR --> ENTREGADO: Entregar
  CONFIRMADO --> BORRADOR: Rechazar
  DESPACHAR --> BORRADOR: Rechazar
  ENTREGADO --> [*]: Fin — stock y cuenta corriente
  BORRADOR --> CANCELADO: Cancelar
  CONFIRMADO --> CANCELADO: Cancelar
  DESPACHAR --> CANCELADO: Cancelar
  CANCELADO --> [*]: Fin — flujo cerrado
  note right of BORRADOR
    Estado inicial
    (también destino al rechazar)
  end note
  note right of ENTREGADO
    Estado final exitoso
  end note
```

---

## Casos frecuentes

### Venta desde pedido

El sistema genera automáticamente la venta al completar un pedido.

### Venta directa

Se crea una venta sin pasar por cotización, presupuesto o pedido.

### Venta en mostrador

Se registra con pago inmediato y puede marcarse directamente como ENTREGADO.

El cobro en este tipo de venta depende del permiso para **realizar cobro en ventas**.

### Venta con contacto y pago diferido

Se confirma la venta y el saldo queda pendiente en la cuenta corriente del cliente.

Usá este caso cuando el cliente compra a crédito, tiene condiciones comerciales o se acuerda cobrar luego.

### Venta con contacto y pago inmediato

Se confirma la venta y se abre el formulario de cobro.

Usá este caso cuando querés mantener el historial del cliente pero cobrar en el momento.

---

## Si algo sale mal

- **No se abre el formulario de cobro**
  - Revisá si el proceso de pago está configurado como inmediato o diferido.
  - Si debería cobrarse en el momento, revisá el permiso para realizar cobro en ventas.
  - Verificá que la venta haya sido confirmada correctamente.

- **El formulario de cobro aparece, pero no permite guardar**
  - Revisá que haya un medio de pago cargado.
  - Verificá que la suma de medios de pago coincida con el total.
  - Si usás Mercado Pago, el pago debe estar aprobado antes de guardar.

- **No podés marcar como ENTREGADO**
  - Verificá que el pago esté cargado (Consumidor Final).
  - Si no podés registrar el cobro, revisá el permiso para realizar cobro en ventas.

- **No podés modificar la venta**
  - Puede estar en un estado no editable.

- **Problemas con precios**
  - Revisá lista de precios o permisos.

---

## Buenas prácticas

- Verificá el cliente antes de confirmar.
- Controlá precios y descuentos.
- Para ventas en mostrador, cargá el pago antes de finalizar.
- Usá el flujo de despacho si trabajás con logística.

---

## Ver también

- [Pedidos](./pedidos.md)
- [POS](./pos.md)
- [Flujo de ventas](./flujo-ventas.md)
- [Pagos](../finanzas/pagos.md)
- [Perfiles](../administracion/perfiles.md)
