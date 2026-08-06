---
title: Actualización masiva de productos | Zink ERP
sidebar_label: Actualización masiva de productos
description: >-
  Permite actualizar múltiples productos en una sola operación: costos, precios,
  datos generales o etiquetas, desde selección en grilla o mediante archivo
  según la
sidebar_position: 4
keywords:
  - actualización masiva
  - precios masivos
  - costos productos
  - etiquetas productos
---

## Resumen

Permite actualizar múltiples productos en una sola operación: costos, precios, datos generales o etiquetas, desde selección en grilla o mediante archivo según la opción disponible en pantalla.

---

## Antes de empezar

- Definí qué productos vas a modificar (filtros o selección).
- Verificá permisos para editar productos y, si aplica, listas de precios.
- Hacé una exportación o respaldo si el cambio es masivo y crítico.

---

## Procedimiento

1. Entrá a **Actualización masiva de productos**.
2. Seleccioná los productos a incluir.
3. Elegí la acción:
   - costos
   - precios
   - datos
   - etiquetas
4. Completá los valores o subí archivo si corresponde.
5. Revisá el resumen de cambios.
6. Confirmá la actualización.

---

## Casos frecuentes

### Ajuste de precios de lista

Actualizás varios ítems tras una política comercial o notificación de la central.

### Corrección de costos

Alineás costos luego de una compra o importación de proveedor.

Si los productos tienen activo **Recalcular precios al modificar el costo** y listas automáticas, un cambio de costo puede arrastrar precios de venta. Revisá esa regla en [Productos](./productos.md#costo-y-recalculo-de-precios) antes de confirmar un lote grande.

Con **Costo multi-moneda**, un cambio masivo de costos en ARS/USD no reemplaza actualizar la [cotización](../configuracion/preferencias.md#cotizacion-de-moneda): si el costo está en USD, el equivalente en pesos depende de la cotización vigente.

---

## Si algo sale mal

- **Se actualizaron productos incorrectos**
  - Revisá filtros y selección antes de confirmar; corregí con una nueva pasada acotada.
- **No puedo editar precios**
  - Revisá permisos del perfil y reglas de listas en [Preferencias](../configuracion/preferencias.md).

---

## Buenas prácticas

- Probá con pocos productos antes de un cambio masivo.
- Coordiná con [Notificación de cambio de precio](./notificar-cambio-precio.md) si operás con sucursales.

---

## Ver también

- [Administración](./administracion.md)
- [Productos](./productos.md)
- [Productos — costo y recálculo](./productos.md#costo-y-recalculo-de-precios)
- [Importación masiva](./productos-importacion-masiva.md)
