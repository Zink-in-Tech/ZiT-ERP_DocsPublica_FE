---
title: 'Recepción de mercadería: ingreso parcial y stock'
sidebar_label: 'Recepción de mercadería: ingreso parcial y control de stock'
description: 'La recepción de mercadería es el control operativo entre lo comprado y lo que efectivamente ingresa al stock.'
sidebar_position: 5
keywords:
  - recepción de mercadería
  - ingreso parcial
  - compras
  - stock
  - proveedores
  - Control
  - Aprobado
---

## Resumen

La recepción de mercadería es el control operativo entre lo comprado y lo que efectivamente ingresa al stock.

En el flujo actual, el stock impacta cuando la [compra](./compras.md) pasa a **Aprobado**. Si recibís parcialmente, documentá la diferencia, usá el estado **Control** si necesitás revisar, y evitá aprobar cantidades no recibidas sin trazabilidad.

---

## Antes de empezar

- Tener una orden de compra o compra registrada.
- Comparar remito, factura o comprobante del proveedor contra lo recibido.
- Revisar permisos para confirmar, controlar y aprobar compras.
- Validar ubicación física si el depósito la usa.

---

## Procedimiento

1. Abrí la compra pendiente de revisión o aprobación.
2. Compará productos, cantidades y precios contra la mercadería recibida.
3. Si hay diferencia, registrá observaciones (y pasá a **Control** si tu circuito lo usa).
4. Cuando lo recibido esté validado, **Aprobá** la compra.
5. Verificá que el stock se actualice.
6. Revisá cuenta corriente del proveedor si la compra genera deuda o pago.

---

## Qué cambia y qué no cambia

- ✔️ Al **Aprobar** la compra, aumenta el stock disponible.
- ✔️ La compra puede impactar cuenta corriente del proveedor.
- ✔️ Sirve para detectar faltantes, sobrantes o errores de proveedor.
- ❌ No conviene aprobar cantidades no recibidas sin dejar trazabilidad.

---

## Casos frecuentes

### Recepción completa

Las cantidades recibidas coinciden con la compra. Confirmá y **Aprobá**; revisá stock.

### Recepción parcial

Recibís menos unidades de las solicitadas. Dejá observación, usá **Control** si hace falta y validá con el equipo si corresponde esperar el saldo o ajustar la compra antes de **Aprobar**.

### Diferencia de producto

No ingreses productos equivocados como si fueran correctos. Registrá el caso y coordiná con proveedor.

---

## Si algo sale mal

- **El stock no aumentó**
  - Verificá que la compra esté en estado **Aprobado**.
- **La deuda no coincide**
  - Revisá importes, cantidades y pagos asociados.
- **Recibí menos de lo comprado**
  - Documentá la diferencia antes de aprobar.

---

## Ver también

- [Cómo recibir mercadería y actualizar stock](../guias/como-recibir-mercaderia-y-actualizar-stock.md)
- [Compras](./compras.md)
- [Órdenes de compra](./orden-compras.md)
- [Flujo de compras](./flujo-compras.md)
- [Registro de inventario](../inventario/inventarios.md)
- [Stock crítico](../informes/informe-stock-critico.md)
