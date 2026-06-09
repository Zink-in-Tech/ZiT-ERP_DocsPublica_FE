---
title: 'Medios de pago: caja, POS y cobranzas | Zink ERP'
sidebar_label: 'Medios de pago: caja, POS y cobranzas'
description: >-
  Configurá medios de pago en Zink ERP para cobrar y pagar con efectivo,
  transferencia, tarjeta, Mercado Pago o cuenta corriente, con impacto correcto
  en caja diaria.
sidebar_position: 73
keywords:
  - medios de pago
  - efectivo
  - transferencia
  - tarjeta
  - Mercado Pago
  - caja diaria
---

## Resumen

Los medios de pago indican cómo entra o sale dinero en Zink ERP: efectivo, transferencia, tarjeta, Mercado Pago, cuenta corriente u otros medios habilitados para la organización.

Se usan al cobrar ventas, registrar pagos, operar POS y revisar la [Caja diaria](../finanzas/caja-diaria.md).

---

## Para qué sirve esta configuración

Definir correctamente medios de pago ayuda a que:

- el equipo vea solo opciones válidas al cobrar o pagar;
- la caja diaria refleje bien el dinero;
- las integraciones externas se usen donde corresponde;
- no se mezclen cobros reales con deuda pendiente.

---

## Antes de empezar

- Definir qué medios acepta la organización.
- Tener permisos para configurar preferencias o medios habilitados.
- Si usás Mercado Pago, completar la [integración](../integraciones/mercado-pago.md).
- Confirmar si el punto de venta opera con caja propia, caja por usuario o caja global.

---

## Procedimiento

1. Revisá los medios de pago habilitados para la organización.
2. Activá solo los que realmente correspondan a la operación.
3. Si aplica, asociá el medio al punto de venta, caja o sucursal.
4. Probá un cobro desde [POS](../ventas/pos.md) o [Pagos](../finanzas/pagos.md).
5. Verificá el impacto en [Caja diaria](../finanzas/caja-diaria.md).

---

## Qué cambia y qué no cambia

- ✔️ Define qué opciones puede elegir el usuario al cobrar o pagar.
- ✔️ Impacta el desglose de caja diaria por efectivo, transferencia, tarjeta, Mercado Pago u otros medios.
- ✔️ Ayuda a conciliar comprobantes externos contra movimientos internos.
- ❌ No cancela deuda por sí solo; la deuda se cancela al confirmar un pago aplicado.
- ❌ No reemplaza la integración externa cuando el medio requiere autorización, como Mercado Pago.

---

## Tipos frecuentes

| Medio | Uso habitual |
|-------|--------------|
| Efectivo | Cobros o pagos en caja física. |
| Transferencia | Movimientos bancarios que se concilian fuera del ERP. |
| Tarjeta | Cobros con terminal o proveedor externo. |
| Mercado Pago | Cobros vinculados a la integración y sucursal autorizada. |
| Cuenta corriente | Operaciones que quedan pendientes para cobrar o pagar después. |

---

## Casos frecuentes

### Cobro mixto

Podés registrar más de un medio en el mismo pago, por ejemplo efectivo + transferencia, siempre que la suma coincida con el importe aplicado.

### Venta a cuenta corriente

La venta puede quedar como deuda del contacto. El dinero aparece en caja cuando se registra el cobro con un medio de pago concreto.

### Punto de venta con Mercado Pago

Primero vinculá Mercado Pago y seleccioná sucursal o punto de venta desde [Integraciones](../integraciones/mercado-pago.md).

### Negocio con pocos medios

Conviene empezar con efectivo, transferencia y los medios realmente usados. Después se agregan otros si la operación lo necesita.

---

## Si algo sale mal

- **No aparece un medio de pago**
  - Revisá configuración, permisos y punto de venta activo.
- **La caja no coincide**
  - Revisá si el cobro fue cargado con otro medio o si la venta quedó en cuenta corriente.
- **Mercado Pago no confirma**
  - Verificá que el pago esté aprobado y que la integración esté activa.

---

## Preguntas frecuentes

### ¿Un medio de pago cancela la deuda automáticamente?

No. La deuda se cancela cuando el pago queda correctamente registrado y aplicado.

### ¿Puedo usar varios medios en un mismo cobro?

Sí, si el circuito lo permite y la suma coincide con el importe final.

### ¿Qué conviene revisar primero si la caja no coincide?

Fecha, medio usado, cuenta corriente, permisos y si el cobro realmente fue confirmado.

---

## Ver también

- [Pagos](../finanzas/pagos.md)
- [Caja diaria](../finanzas/caja-diaria.md)
- [POS](../ventas/pos.md)
- [Mercado Pago](../integraciones/mercado-pago.md)
- [Cómo configurar medios de pago](../guias/como-configurar-medios-de-pago.md)
