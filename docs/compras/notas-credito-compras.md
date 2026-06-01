---
title: "Notas de crédito de compras: devoluciones a proveedores | ZinkERP Docs"
sidebar_label: "Notas de crédito de compras: devoluciones a proveedores"
description: "Aprendé a registrar ajustes a favor de la organización por devoluciones o errores en compras a proveedores. Incluye procedimiento, estados, impacto operativo y solución de problemas."
sidebar_position: 4
keywords:
  - nota de crédito compras
  - devolución proveedor
  - ajuste proveedor
  - cuenta corriente proveedor
---

## Resumen

Las notas de crédito de compras sirven para ajustar una compra ya registrada cuando hay devolución al proveedor, error de precio o corrección a favor de la organización.

La documentación disponible no confirma una pantalla específica separada para este flujo; tratá esta guía como criterio operativo hasta validar el circuito exacto en producto.

<!-- TODO(producto): confirmar pantalla, estados y permisos de notas de crédito de compras. -->

---

## Antes de empezar

- Tener la compra o comprobante de proveedor asociado.
- Definir si el ajuste es por mercadería, importe o ambos.
- Revisar cuenta corriente del proveedor.
- Si hay movimiento físico, validar stock antes de confirmar.

---

## Procedimiento

1. Identificá la compra original.
2. Registrá el ajuste asociado al proveedor.
3. Indicá productos, cantidades o importes a corregir.
4. Verificá impacto en cuenta corriente.
5. Si hay devolución física, registrá o verificá el movimiento de inventario correspondiente.

---

## Qué cambia y qué no cambia

- ✔️ Puede reducir deuda con el proveedor o generar saldo a favor.
- ✔️ Mantiene trazabilidad contra la compra original.
- ✔️ Puede requerir ajuste de stock si vuelve mercadería al proveedor.
- ❌ No reemplaza editar una compra en estado editable.
- ❌ No debe usarse para gastos no relacionados con compras.

---

## Casos frecuentes

### Devolución parcial al proveedor

Usala cuando devolvés parte de los ítems de una compra ya ingresada y necesitás ajustar deuda y stock.

### Error de precio

Usala si el proveedor corrige el importe después de confirmar la compra.

---

## Si algo sale mal

- **La cuenta corriente no cambia**
  - Verificá que el ajuste esté confirmado y asociado al proveedor correcto.
- **El stock no coincide**
  - Revisá [Registro de inventario](../inventario/inventarios.md) y movimientos de compra.

---

## Ver también

- [Compras](./compras.md)
- [Flujo de compras](./flujo-compras.md)
- [Cuenta corriente](../finanzas/cuenta-corriente.md)
- [Registro de inventario](../inventario/inventarios.md)
