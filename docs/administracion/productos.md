---
title: Productos
description: Gestioná el catálogo de productos que se utilizan en ventas, compras e inventario.
keywords:
  - productos
  - artículos
  - catálogo
  - stock
  - stock mínimo
  - precios
  - listas de precios
  - validación de stock
  - ubicación
sidebar_position: 2
---

## Resumen

Los productos son la base operativa del sistema y se utilizan en todo el flujo comercial y de inventario: cotizaciones, presupuestos, pedidos, ventas, órdenes de compra y compras.

Definen precios, stock, ubicación y comportamiento en las operaciones, impactando directamente en ventas y compras.

---

## Antes de empezar

- Definí correctamente listas de precios.
- Verificá unidades de medida.
- Algunas modificaciones pueden requerir permisos especiales.
- Revisá si la organización maneja stock y si los productos nuevos deben validar stock por defecto.

---

## Cuándo usar productos

Usá esta pantalla cuando:

- Necesitás dar de alta artículos.
- Querés actualizar precios, stock o configuración.
- Tenés que configurar listas de precios o etiquetas.

---

## Qué cambia y qué no cambia

**El producto:**

- ✔️ Impacta en todas las operaciones comerciales
- ✔️ Define precios y stock
- ✔️ Define stock mínimo para alertas e informes
- ✔️ Puede controlar si se valida stock disponible al vender
- ❌ No se puede eliminar si tiene movimientos

---

## Procedimiento

1. Crear producto:
   - Alta rápida o formulario completo
2. Configurar:
   - precios
   - stock
   - stock mínimo
   - ubicación
   - validación de stock
   - etiquetas
3. Guardar

---

## Relación con stock

El stock del producto se usa en ventas, POS, pedidos, compras, inventarios e informes.

| Campo | Para qué sirve |
|-------|----------------|
| Stock | Cantidad disponible actual. |
| Stock mínimo | Umbral para alertas o informes de reposición. |
| Ubicación | Referencia física para búsqueda y control. |
| Validación de stock | Controla si el sistema debe impedir o advertir operaciones sin stock suficiente. |

Si la organización tiene manejo de stock activo, ventas y POS pueden validar la cantidad disponible antes de confirmar.

Para cambiar stock por una diferencia física, preferí [Registro de inventario](../inventario/inventarios.md) o [Toma de inventario](../inventario/inventarios-ubicacion.md) en lugar de editar sin revisar el origen.

---

## Casos frecuentes

### Alta rápida
Para agregar productos durante una venta o compra.

### Configuración completa
Para definir precios, stock y comportamiento.

### Stock mínimo
Permite detectar productos que necesitan reposición desde informes o controles operativos.

---

## Si algo sale mal

- **No podés eliminar**
  - El producto tiene movimientos asociados.

- **No podés vender por falta de stock**
  - Revisá stock disponible.
  - Verificá si el producto valida stock.
  - Revisá inventarios, compras o ventas recientes.

- **El stock no coincide**
  - Revisá movimientos de inventario.
  - Confirmá si hubo toma de inventario o ajustes manuales.

---

## Buenas prácticas

- Usá etiquetas para organizar.
- Configurá correctamente listas de precios.
- Activá validación de stock si corresponde.

---

## Ver también

- [Ventas](../ventas/ventas.md)
- [Compras](../compras/compras.md)
- [Registro de inventario](../inventario/inventarios.md)
- [Consulta de stock](../inventario/productos-consulta-inter-org.md)
