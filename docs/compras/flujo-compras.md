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
- Tener permisos para crear o editar órdenes de compra y compras.
- Para pagar al proveedor desde el flujo, el usuario debe tener permiso para **registrar pagos**.
- Definir días de vencimiento de pago por proveedor o desde preferencias.

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
- Puede ofrecer registrar el pago al proveedor si hay importe pendiente y el usuario tiene permiso

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
  - Verificá productos y cantidades.

- **No podés registrar el pago**
  - Revisá permiso para registrar pagos.
  - Verificá que la compra tenga importe pendiente.

---

## Ver también

- [Orden de compra](./orden-compras.md)
- [Compras](./compras.md)
- [Pagos](../finanzas/pagos.md)
- [Cuenta corriente](../finanzas/cuenta-corriente.md)
