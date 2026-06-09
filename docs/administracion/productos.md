---
title: 'Productos en Zink ERP: catálogo, datos comerciales y stock | Zink ERP'
sidebar_label: Productos
description: >-
  Configurá productos en Zink ERP con precios, stock, códigos, listas y reglas
  de venta para operar mejor en POS, ventas, compras e inventario.
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

## Para qué sirve esta pantalla

Usá productos cuando necesitás:

- dar de alta artículos nuevos;
- configurar precios y listas;
- cargar códigos o código de barras;
- definir stock mínimo, ubicación o validación;
- preparar productos para venta rápida, venta comercial o depósito.

---

## Antes de empezar

- Definí correctamente listas de precios.
- Verificá unidades de medida.
- Algunas modificaciones pueden requerir permisos especiales.
- Revisá si la organización maneja stock y si los productos nuevos deben validar stock por defecto.

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

### Alta rápida

Usala cuando necesitás cargar un producto durante una operación y seguir trabajando sin completar toda la ficha.

Ejemplo: creá **Remera azul XL** con precio **$8500** para poder agregarla a una venta. Después volvé a la ficha completa para revisar impuestos, unidad de medida, stock mínimo, ubicación y etiquetas.

<!-- TODO(producto): confirmar campos exactos de alta rápida según la pantalla actual. -->

### Configuración completa

Usala para dejar el producto listo para ventas, compras, inventario e informes.

| Campo | Para qué sirve |
|-------|----------------|
| Nombre o descripción | Identifica el producto en búsquedas, comprobantes e informes. |
| Código o SKU | Ayuda a encontrar y diferenciar productos similares. |
| Código de barras | Permite operar más rápido en POS o consultas con lector. |
| Unidad de medida | Define cómo se interpreta la cantidad vendida o comprada. |
| Costo | Base para márgenes, reposición e informes. |
| Listas de precio | Definen precios por contexto comercial. Ver [Listas de precio](../configuracion/listas-precio.md). |
| Impuestos | Aplican tributos configurados para operaciones comerciales. |
| Stock | Cantidad disponible actual. |
| Stock mínimo | Umbral para alertas o informes de reposición. |
| Ubicación | Referencia física para depósito, góndola o control. |
| Validación de stock | Controla si se advierte o impide vender sin cantidad suficiente. |
| Etiquetas | Permiten agrupar, filtrar e informar productos. |

1. Completá datos principales.
2. Cargá costo y precios.
3. Definí stock, stock mínimo y ubicación.
4. Revisá impuestos y validación de stock.
5. Agregá etiquetas útiles.
6. Guardá y probá el producto desde [Consulta de precios](../ventas/consulta-precio.md) o POS.

### Validación mínima recomendada

Antes de dar por listo un producto nuevo:

1. buscá el producto en [Consulta de precios](../ventas/consulta-precio.md);
2. probalo en [POS](../ventas/pos.md) o [Ventas](../ventas/ventas.md);
3. validá que el precio, la descripción y el comportamiento sean correctos;
4. si aplica, probá lectura con código de barras o código variable.

---

## Tipos de producto

La documentación disponible confirma productos de catálogo usados en ventas, compras e inventario. No confirma todavía si existen tipos especiales como servicio, kit o producto compuesto.

<!-- TODO(producto): confirmar si ZinkERP soporta productos tipo servicio, kits o compuestos y documentar reglas de stock, precio e impuestos para cada tipo. -->

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

### Editar stock directo vs registro de inventario

Editar el stock directo puede servir para una corrección puntual durante la carga inicial, pero deja menos contexto operativo.

El [Registro de inventario](../inventario/inventarios.md) es preferible cuando querés explicar por qué cambió la cantidad: ajuste físico, rotura, pérdida, recuento o diferencia detectada. Ese registro ayuda a mantener trazabilidad y facilita auditoría.

---

## Casos frecuentes

### Alta rápida
Para agregar productos durante una venta o compra.

### Configuración completa
Para definir precios, stock y comportamiento.

### Stock mínimo
Permite detectar productos que necesitan reposición desde informes o controles operativos.

### Producto con código variable

Si el artículo se opera por balanza o lectura especial, conviene revisar [Qué son los códigos variables y cómo usarlos](../guias/codigos-variables.md) antes de usarlo en mostrador.

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

- Usá etiquetas para organizar. Ejemplos: **Nuevos**, **Liquidación**, **Temporada** para filtrar en informes y ventas.
- Configurá correctamente [listas de precio](../configuracion/listas-precio.md).
- Activá validación de stock si corresponde.

---

## Preguntas frecuentes

### ¿Cuándo conviene alta rápida y cuándo ficha completa?

Alta rápida sirve para no frenar una operación. La ficha completa conviene para dejar el producto bien preparado a mediano plazo.

### ¿Puedo corregir stock desde el producto?

Para carga inicial puede servir. Para diferencias operativas conviene usar [Registro de inventario](../inventario/inventarios.md).

### ¿Qué hago si vendo productos por peso?

Revisá [Códigos variables](../guias/codigos-variables.md) y [Balanzas Systel](../guias/balanzas-systel-y-codigos-variables.md) antes de operar en vivo.

---

## Ver también

- [Administración](./administracion.md)
- [Ventas](../ventas/ventas.md)
- [Compras](../compras/compras.md)
- [Registro de inventario](../inventario/inventarios.md)
- [Consulta de stock](../inventario/productos-consulta-inter-org.md)
- [Cómo configurar tu primer producto](../guias/como-configurar-tu-primer-producto.md)
- [Qué son los códigos variables y cómo usarlos](../guias/codigos-variables.md)
