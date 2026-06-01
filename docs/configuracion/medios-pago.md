---
title: "Medios de pago: caja, POS y cobranzas | ZinkERP Docs"
sidebar_label: "Medios de pago: caja, POS y cobranzas"
description: "Aprendé a configurar medios de pago en ZinkERP. Incluye efectivo, transferencia, tarjeta, Mercado Pago y caja diaria. Incluye configuración inicial, impacto operativo y enlaces relacionados."
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

Los medios de pago indican cómo entra o sale dinero en ZinkERP: efectivo, transferencia, tarjeta, Mercado Pago, cuenta corriente u otros medios habilitados para la organización.

Se usan al cobrar ventas, registrar pagos, operar POS y revisar la [Caja diaria](../finanzas/caja-diaria.md).

---

## Antes de empezar

- Definir qué medios acepta la organización.
- Tener permisos para configurar preferencias o medios habilitados.
- Si usás Mercado Pago, completar la [integración](../integraciones/mercado-pago.md).
- Confirmar si el punto de venta opera con caja propia, caja por usuario o caja global.

<!-- TODO(producto): confirmar si la habilitación/deshabilitación de medios se administra desde Preferencias, punto de venta o una pantalla específica. -->

---

## Procedimiento

1. Revisá los medios de pago habilitados para la organización.
2. Activá o desactivá los medios que correspondan.
3. Si aplica, asociá el medio al punto de venta o sucursal que lo usará.
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

---

## Si algo sale mal

- **No aparece un medio de pago**
  - Revisá configuración, permisos y punto de venta activo.
- **La caja no coincide**
  - Revisá si el cobro fue cargado con otro medio o si la venta quedó en cuenta corriente.
- **Mercado Pago no confirma**
  - Verificá que el pago esté aprobado y que la integración esté activa.

---

## Ver también

- [Pagos](../finanzas/pagos.md)
- [Caja diaria](../finanzas/caja-diaria.md)
- [POS](../ventas/pos.md)
- [Mercado Pago](../integraciones/mercado-pago.md)
