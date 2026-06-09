---
title: Informe Stock crítico | Zink ERP
sidebar_label: Informe Stock crítico
description: >-
  Este informe muestra productos cuyo stock actual es menor al stock mínimo
  definido en el maestro del producto.
sidebar_position: 61
keywords:
  - stock crítico
  - stock mínimo
  - reposición
  - informe de stock
---

## Resumen

Este informe muestra productos cuyo **stock actual es menor al stock mínimo** definido en el maestro del producto. Podés filtrar por proveedor (contacto) para armar pedidos a un solo abastecedor.

Columnas habituales: código, código de barras, descripción, stock actual, stock mínimo y precio.

---

## Cuándo usarlo

- Antes de generar [órdenes de compra](../compras/orden-compras.md).
- En rutinas de control de depósito, junto con [Productos faltantes](./informe-productos-faltantes.md).

---

## Procedimiento

1. En **Informes**, abrí **Stock crítico**.
2. (Opcional) Elegí **Contacto (proveedor)**.
3. Consultá. Revisá la grilla de productos bajo el mínimo.
4. Exportá si necesitás compartir la lista o armar la compra.

---

## Campos principales

### Contacto (proveedor)

Filtro opcional. Si seleccionás un proveedor, solo se listan productos asociados a ese contacto con stock bajo el mínimo.

### Columnas del informe

Código, código de barras, descripción, stock actual, stock mínimo, precio. El stock mínimo es el definido en [Productos](../administracion/productos.md).

---

## Si algo sale mal

- **Un producto no aparece aunque esté bajo mínimo**
  - Verificá que tenga **stock mínimo** cargado en el maestro del producto.
- **No veo el informe**
  - Revisá permisos de menú con tu administrador.

---

## Buenas prácticas

- Revisá este informe con frecuencia para reponer a tiempo.
- Combiná con productos faltantes para priorizar incumplimientos de pedido vs falta de stock en depósito.

---

## Ver también

- [Informes](./informes.md)
- [Órdenes de compra](../compras/orden-compras.md)
- [Productos](../administracion/productos.md)
