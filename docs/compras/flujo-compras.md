---
title: Flujo de compras
description: Entendé cómo funciona el proceso completo desde la orden de compra hasta el registro de la compra en Zink ERP.
sidebar_position: 1
---

## Resumen

El flujo de compras en Zink ERP organiza el proceso desde la solicitud al proveedor hasta el registro final de la compra.

Permite trabajar en etapas, manteniendo control y trazabilidad de cada operación.

---

## Antes de empezar

- Tener productos configurados.
- Tener proveedores cargados como contactos.
- **TODO: confirmar con producto** — requisitos específicos según configuración.

---

## Flujo completo

Orden de compra → Compra

---

## Cómo funciona el flujo

Cada etapa permite avanzar en el proceso:

- Se registra lo que se necesita comprar
- Se confirma la operación con el proveedor
- Se registra el impacto en el sistema

Esto permite:

- control de compras
- trazabilidad
- organización operativa

---

## Etapas del proceso

### Orden de compra

- Representa lo que se solicita al proveedor
- Permite definir cantidades y condiciones
- No impacta stock ni cuenta corriente

👉 Funciona como propuesta o planificación de compra

---

### Compra

- Representa la operación final
- Registra ingreso de mercadería
- Impacta stock
- Impacta cuenta corriente

---

## Qué cambia en cada etapa

| Etapa           | Stock | Cuenta corriente | Objetivo |
|-----------------|------|------------------|----------|
| Orden de compra | ❌   | ❌               | Planificar |
| Compra          | ✔️   | ✔️               | Ejecutar |

---

## Casos frecuentes

### Compra planificada

Se genera una orden de compra y luego se registra la compra.

### Compra directa

Se registra la compra sin orden previa.

---

## Si algo sale mal

- **Datos incorrectos**
  - Revisá información antes de confirmar.

- **Problemas de stock**
  - Verificá productos y cantidades.

---

## Ver también

- [Orden de compra](./orden-compras.md)
- [Compras](./compras.md)