---
title: "Impuestos | ZinkERP Docs"
sidebar_label: "Impuestos"
description: "Configurá tributos que afectan precios y operaciones comerciales en el sistema. Incluye procedimiento, impacto en el sistema y solución de problemas frecuentes."
sidebar_position: 6
keywords:
  - impuestos
  - IVA
  - tributos productos
---

## Resumen

Los impuestos permiten definir cargas o tributos que se aplican sobre los productos.

Impactan directamente en los precios finales y se utilizan en listas de precios, compras, presupuestos, pedidos y ventas.

Cada impuesto puede ser de monto fijo o porcentaje, pero no ambos.

---

## Antes de empezar

- Definí si el impuesto será:
  - monto fijo
  - porcentaje
- Verificá cómo impacta en precios finales.

---

## Procedimiento

1. Crear impuesto.
2. Completar:
   - código
   - nombre
   - tipo (monto fijo o porcentaje)
3. Guardar.
4. Asignar el impuesto a productos según corresponda.

---

## Campos principales

### Código

Identificador corto para búsquedas.

### Nombre

Nombre visible en listados y comprobantes.

### Tipo de cálculo

- Monto fijo: se suma al precio
- Porcentaje: se aplica sobre el precio

---

## Casos frecuentes

### Impuesto porcentual

Se aplica sobre el valor del producto.

### Impuesto fijo

Se suma directamente al precio.

---

## Si algo sale mal

- **Cálculo incorrecto de precios**
  - Revisá el tipo de impuesto configurado.

- **Impuesto no aplicado**
  - Verificá que esté asignado al producto.

---

## Ver también

- [Administración](./administracion.md)
- [Productos](./productos.md)
- [Ventas](../ventas/ventas.md)