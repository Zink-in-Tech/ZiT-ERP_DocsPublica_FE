---
title: 'Informe Productos faltantes'
sidebar_label: Informe Productos faltantes
description: 'Lista productos faltantes: ventas incumplidas respecto de lo pedido.'
sidebar_position: 62
keywords:
  - productos faltantes
  - pedido vs venta
  - incumplimiento
  - picking
---

## Resumen

Lista productos **faltantes**: ventas incumplidas respecto de lo pedido. Un ítem aparece cuando fue registrado en un **pedido**, al confirmar o vender se informan **menores cantidades** que las pedidas, y el sistema cruza pedido con la **venta** asociada.

Sirve para detectar incumplimientos, roturas de stock en el camino pedido→venta y revisar procesos.

---

## Cuándo usarlo

- Para ver qué quedó sin cumplir respecto del pedido del cliente.
- Para analizar causas: stock al preparar, picking, cancelación parcial.
- Para auditoría de cumplimiento de pedidos.

---

## Procedimiento

1. En **Informes**, abrí **Productos faltantes**.
2. Aplicá filtros (fechas, organización, contacto) según la pantalla.
3. Consultá la grilla: producto, cantidades pedidas vs vendidas/entregadas, faltante.
4. Exportá si la opción está disponible.

---

## Reglas de uso

- Solo considera productos de **pedidos** comparados con la **venta** asociada.
- Si la venta registra la misma cantidad que el pedido, no hay faltante para ese ítem.
- La visibilidad depende de permisos de menú.

---

## Si algo sale mal

- **No aparece un faltante esperado**
  - Verificá que exista pedido confirmado y venta vinculada con menor cantidad.
- **No veo el informe**
  - Revisá permisos con tu administrador.

---

## Buenas prácticas

- Revisá con periodicidad para detectar patrones (producto, depósito, cliente).
- Combiná con [Stock crítico](./informe-stock-critico.md) si la causa es stock insuficiente al preparar.

---

## Ver también

- [Informes](./informes.md)
- [Pedidos](../ventas/pedidos.md)
- [Ventas](../ventas/ventas.md)
