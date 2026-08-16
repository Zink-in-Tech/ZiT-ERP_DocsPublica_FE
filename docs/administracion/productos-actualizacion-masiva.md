---
title: Actualización masiva de productos | Zink ERP
sidebar_label: Actualización masiva de productos
description: >-
  Actualizá varios productos a la vez: costos, precios, datos, etiquetas o
  reinicio de stock, desde selección en grilla o mediante archivo.
sidebar_position: 4
keywords:
  - actualización masiva
  - precios masivos
  - costos productos
  - etiquetas productos
  - reiniciar stock
  - inventario masivo
---

## Resumen

Permite actualizar múltiples productos en una sola operación: costos, precios, datos generales, etiquetas o **reinicio de stock**, desde selección en grilla o mediante archivo según la opción disponible en pantalla.

**Reiniciar stock** deja todos los productos seleccionados con el valor indicado (por defecto 0) y genera un movimiento de inventario de ajuste manual.

---

## Antes de empezar

- Definí qué productos vas a modificar (filtros o selección).
- Verificá permisos para editar productos y, si aplica, listas de precios.
- Hacé una exportación o respaldo si el cambio es masivo y crítico.
- Si vas a reiniciar stock, confirmá que corresponde poner ese valor en todos los seleccionados: la acción se aplica aunque haya stock reservado.

---

## Procedimiento

1. Entrá a **Actualización masiva de productos**.
2. Elegí el flujo **manual** (o por archivo si vas a actualizar costos desde una planilla).
3. Seleccioná los productos a incluir.
4. Elegí la acción:
   - costos
   - precios
   - datos
   - etiquetas
   - **Reiniciar stock**
5. Completá los valores o subí archivo si corresponde.
6. Revisá el resumen de cambios.
7. Confirmá la actualización.

### Reiniciar stock

1. Seleccioná los productos.
2. Elegí **Reiniciar stock**.
3. Indicá el **stock deseado**. El campo arranca en **0**.
4. Confirmá el resumen, por ejemplo: “Se reiniciará el stock de 15 productos a 0”.

El sistema actualiza el stock de cada producto seleccionado y deja un movimiento de inventario de ajuste manual. No hay selector de depósito: se actualiza el stock del producto en la sucursal.

---

## Casos frecuentes

### Ajuste de precios de lista

Actualizás varios ítems tras una política comercial o notificación de la central.

### Corrección de costos

Alineás costos luego de una compra o importación de proveedor.

Si los productos tienen activo **Recalcular precios al modificar el costo** y listas automáticas, un cambio de costo puede arrastrar precios de venta. Revisá esa regla en [Productos](./productos.md#costo-y-recalculo-de-precios) antes de confirmar un lote grande.

Con **Costo multi-moneda**, un cambio masivo de costos en ARS/USD no reemplaza actualizar la [cotización](../configuracion/preferencias.md#cotizacion-de-moneda): si el costo está en USD, el equivalente en pesos depende de la cotización vigente.

### Poner stock en cero (o en un valor fijo)

Usá **Reiniciar stock** cuando varios productos deben quedar con la misma cantidad, por ejemplo al cerrar un recuento o al empezar de cero. Para un solo producto o un ajuste con motivo (rotura, pérdida, recuento), preferí [Registro de inventario](../inventario/inventarios.md) o [Toma de inventario](../inventario/inventarios-ubicacion.md).

---

## Si algo sale mal

- **Se actualizaron productos incorrectos**
  - Revisá filtros y selección antes de confirmar; corregí con una nueva pasada acotada.
- **No puedo editar precios**
  - Revisá permisos del perfil y reglas de listas en [Preferencias](../configuracion/preferencias.md).
- **El stock no quedó como esperaba**
  - Confirmá que elegiste **Reiniciar stock** y el valor indicado (0 u otro).
  - Revisá el movimiento de inventario generado y el stock reservado en operaciones abiertas.

---

## Buenas prácticas

- Probá con pocos productos antes de un cambio masivo.
- Coordiná con [Notificación de cambio de precio](./notificar-cambio-precio.md) si operás con sucursales.
- No uses **Reiniciar stock** para corregir un ítem suelto: conviene el [Registro de inventario](../inventario/inventarios.md).

---

## Ver también

- [Administración](./administracion.md)
- [Productos](./productos.md)
- [Productos — costo y recálculo](./productos.md#costo-y-recalculo-de-precios)
- [Importación masiva](./productos-importacion-masiva.md)
- [Registro de inventario](../inventario/inventarios.md)
- [Toma de inventario](../inventario/inventarios-ubicacion.md)
