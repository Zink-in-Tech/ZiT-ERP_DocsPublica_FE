---
title: 'Flujo de compras: de la orden de compra al ingreso de mercadería | Zink ERP'
sidebar_label: Flujo de compras
description: >-
  El flujo de compras en ZinK ERP organiza el proceso desde la solicitud al
  proveedor hasta el registro final de la compra.
sidebar_position: 1
---

## Resumen

El flujo de compras en ZinK ERP organiza el proceso desde la solicitud al proveedor hasta el registro final de la compra.

Permite trabajar en etapas, manteniendo control y trazabilidad de cada operación.

---

## Antes de empezar

- Tener productos configurados.
- Tener proveedores cargados como contactos.
- Tener permisos para crear o editar órdenes de compra y compras.
- Para pagar al proveedor desde el flujo, el usuario debe tener permiso para **registrar pagos**.
- Definir días de vencimiento de pago por proveedor o desde preferencias.

---

## Flujo completo

Orden de compra → Compra

```mermaid
flowchart LR
  OC[Orden de compra] --> Co[Compra]
  OC -.->|Concretar operación| Co
```

La flecha punteada indica que la **compra** puede generarse desde una orden confirmada o registrarse **directamente** sin orden previa.

### Ciclo de estados por documento

| Documento        | Estado inicial | Estado final exitoso | Al rechazar      |
|------------------|----------------|----------------------|------------------|
| [Orden de compra](./orden-compras.md) | BORRADOR | CONFIRMADO | — |
| Compra           | BORRADOR       | INGRESADO            | —                |

En compras no existe la acción **Rechazar** como en ventas; el cierre alternativo es **CANCELADO**.

Para ingresos completos o parciales de mercadería, ver [Recepción de mercadería](./recepcion-mercaderia.md). Para devoluciones o ajustes con proveedores, ver [Notas de crédito de compras](./notas-credito-compras.md).

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
- Puede ofrecer registrar el pago al proveedor si hay importe pendiente y el usuario tiene permiso
- Por ítem podés indicar si se **actualiza el costo** del producto; si además el producto tiene recálculo de precios activo, se actualizan las listas automáticas. Ver [Compras](./compras.md#actualizar-costo-desde-la-compra).

---

## Qué cambia en cada etapa

| Etapa           | Stock | Cuenta corriente | Objetivo |
|-----------------|------|------------------|----------|
| Orden de compra | ❌   | ❌               | Planificar |
| Compra          | ✔️   | ✔️               | Ejecutar |

---

## Permisos en el flujo

Cada etapa puede tener permisos propios para ver, crear, editar, eliminar o avanzar. Tener acceso a Compras no implica necesariamente poder crear órdenes, editar compras o registrar pagos.

Para diagnosticar un bloqueo, separá el problema en dos preguntas:

| Pregunta | Dónde revisar |
|----------|---------------|
| ¿El usuario puede entrar a la pantalla? | Permiso de menú o visualización. |
| ¿El usuario puede ejecutar la acción? | Permiso específico de acción, por ejemplo crear, editar, confirmar o registrar pagos. |

El pago a proveedores depende del permiso para **registrar pagos**. La explicación general de permisos está centralizada en [Perfiles](../administracion/perfiles.md).

---

## Casos frecuentes

### Compra planificada

Se genera una orden de compra y luego se registra la compra.

### Compra directa

Se registra la compra sin orden previa.

### Compra con pago posterior

Se registra la compra y la deuda queda pendiente en la cuenta corriente del proveedor hasta que se cargue el pago.

---

## Si algo sale mal

- **Datos incorrectos**
  - Revisá información antes de confirmar.
  - Si la compra ya fue confirmada, puede no ser editable.
- **Problemas de stock**
  - Verificá productos y cantidades antes de **INGRESADO**.
- **No podés registrar el pago**
  - Revisá permiso para registrar pagos.
  - Verificá que la compra tenga importe pendiente.
- **No podés avanzar desde la orden**
  - La orden debe estar **CONFIRMADA** para registrar la compra asociada.

---

## Buenas prácticas

- Usá órdenes de compra para planificar; registrá la compra cuando la mercadería llegue.
- Verificá cantidades y precios antes de confirmar.
- Si el pago es posterior, controlá la deuda en [Cuenta corriente](../finanzas/cuenta-corriente.md).

---

## Ver también

- [Tutorial en video: flujo de compras](../guias/tutorial-flujo-de-compras.mdx)
- [Órdenes de compra](./orden-compras.md)
- [Compras](./compras.md)
- [Recepción de mercadería](./recepcion-mercaderia.md)
- [Notas de crédito de compras](./notas-credito-compras.md)
- [Pagos](../finanzas/pagos.md)
- [Cuenta corriente](../finanzas/cuenta-corriente.md)
