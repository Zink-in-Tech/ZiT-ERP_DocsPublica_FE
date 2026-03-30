---
title: Flujo de ventas
description: Entendé cómo funciona el proceso completo desde cotización hasta venta en Zink ERP.
sidebar_position: 1
---

## Resumen

El flujo de ventas en Zink ERP está dividido en distintas etapas que permiten avanzar desde una propuesta inicial hasta la concreción de la venta.

Cada etapa cumple una función específica y, al avanzar, genera automáticamente la siguiente en estado BORRADOR, manteniendo la relación entre ellas.

---

## Flujo completo

Cotización → Presupuesto → Pedido → Venta

---

## Cómo funciona el flujo

Cada vez que avanzás en el proceso:

- Se genera un nuevo documento
- El nuevo documento queda en estado BORRADOR
- Se mantiene la relación con el documento anterior

Esto permite:

- trazabilidad completa
- control por etapas
- flexibilidad para modificar antes de cerrar

---

## Etapas del proceso

### Cotización

- Comparación de precios
- Negociación
- No genera impacto operativo

👉 Cuando el cliente acepta, se genera un presupuesto.

---

### Presupuesto

- Precio definido
- Condiciones comerciales
- Vigencia

👉 Al aceptar, se genera un pedido.

---

### Pedido

- Preparación de mercadería
- Proceso logístico

👉 Al completar, se genera la venta.

---

### Venta

- Cierre de la operación
- Impacta stock y cuenta corriente

---

## Qué cambia en cada etapa

| Etapa        | Stock | Cuenta corriente | Objetivo |
|--------------|------|------------------|----------|
| Cotización   | ❌   | ❌               | Comparar |
| Presupuesto  | ❌   | ❌               | Formalizar |
| Pedido       | ❌   | ❌               | Preparar |
| Venta        | ✔️   | ✔️               | Ejecutar |

---

## Ventajas del flujo

- Evita errores operativos
- Permite trabajar por etapas
- Mantiene historial completo
- Facilita control y seguimiento

---

## Casos frecuentes

### Venta rápida
Podés ir directo a venta sin pasar por etapas previas.

### Venta con negociación
Cotización → Presupuesto → Venta

### Venta con logística
Cotización → Presupuesto → Pedido → Venta

---

## Ver también

- [Cotizaciones](./cotizaciones.md)
- [Presupuestos](./presupuestos.md)
- [Pedidos](./pedidos.md)
- [Ventas](./ventas.md)