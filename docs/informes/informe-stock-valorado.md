---
title: Informe Stock Valorado | Zink ERP
sidebar_label: Informe Stock Valorado
description: Lista productos con stock y costo según filtros.
sidebar_position: 63
keywords:
  - stock valorado
  - valor inventario
  - inventario valorizado
---

## Resumen

Lista productos con stock y costo según filtros. Muestra valor por ítem (cantidad, costo unitario, total, % del total, precio de venta de lista por defecto, margen, ubicación) y un resumen ejecutivo (total valorizado, SKUs, unidades, concentración).

Permite filtrar por etiquetas y restringir a productos con stock mayor a cero. Exportá PDF, Excel o CSV desde el front.

---

## Cuándo usarlo

- Para conocer el valor total del inventario y su composición.
- Para ver concentración de valor (qué ítems representan la mayor parte).
- Para reportes periódicos con filtros por etiquetas.

El análisis de ganancia por producto en profundidad está en [80/20](./informe-8020.md); este informe no lo duplica.

---

## Procedimiento

1. En **Informes**, abrí **Stock Valorado**.
2. Aplicá filtros (etiquetas, solo con stock > 0).
3. Consultá resumen ejecutivo, tabla y totales al pie.
4. Exportá a PDF, Excel o CSV según necesidad.

---

## Campos principales

| Elemento | Descripción |
|----------|-------------|
| Etiquetas | Filtrar o agrupar por etiquetas de producto. |
| Solo stock > 0 | Si está marcado, excluye productos sin existencia. |
| Resumen ejecutivo | Total valorizado, SKUs, unidades, concentración (ej. top 5 ítems). |

---

## Si algo sale mal

- **Totales que no cierran con expectativa**
  - Verificá costos en [Productos](../administracion/productos.md).
- **No veo el informe**
  - Revisá permisos de menú.

---

## Buenas prácticas

- Usá “solo stock > 0” para evitar ruido de productos sin existencia.
- Revisá concentración para priorizar ítems de mayor valor.
- Combiná con [Stock crítico](./informe-stock-critico.md) para reposición.

---

## Ver también

- [Informes](./informes.md)
- [Informe 80/20](./informe-8020.md)
