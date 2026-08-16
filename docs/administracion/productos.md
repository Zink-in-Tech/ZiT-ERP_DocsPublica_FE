---
title: 'Productos en Zink ERP: catálogo, datos comerciales y stock | Zink ERP'
sidebar_label: Productos
description: >-
  Configurá productos en Zink ERP con precios, stock, códigos, listas, costo
  multi-moneda (ARS/USD) y recálculo de precios para operar mejor en POS,
  ventas, compras e inventario.
keywords:
  - productos
  - artículos
  - catálogo
  - stock
  - stock mínimo
  - precios
  - listas de precios
  - costo
  - costo multi-moneda
  - cotización USD
  - recalcular precios
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
- Si vas a cargar costos en dólares, activá **Costo multi-moneda** en [Preferencias](../configuracion/preferencias.md#costo-multi-moneda) y revisá la cotización.
- Revisá el default de **Actualizar listas de precio al actualizar costo** si querés que los productos nuevos recalculen precios solos.

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

### Configuración completa

Usala para dejar el producto listo para ventas, compras, inventario e informes.

| Campo | Para qué sirve |
|-------|----------------|
| Nombre o descripción | Identifica el producto en búsquedas, comprobantes e informes. |
| Código o SKU | Ayuda a encontrar y diferenciar productos similares. |
| Código de barras | Permite operar más rápido en POS o consultas con lector. |
| Unidad de medida | Define cómo se interpreta la cantidad vendida o comprada. |
| Costo | Base para márgenes, reposición e informes. Podés cargarlo en ARS o USD si la organización tiene costo multi-moneda activo. |
| Recalcular precios al modificar el costo | Si está activo, al cambiar el costo se recalculan solos los precios de las listas automáticas. |
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

La documentación publicada hoy se centra en productos de catálogo usados en ventas, compras e inventario. Si en tu operación aparecen tipos especiales o reglas distintas, conviene validarlas con el equipo antes de aplicarlas en producción.

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

Para dejar **varios productos** con el mismo stock (por ejemplo 0), usá **Reiniciar stock** en [Actualización masiva de productos](./productos-actualizacion-masiva.md). Esa acción genera un movimiento de inventario y se aplica aunque haya stock reservado.

### Editar stock directo vs registro de inventario

Editar el stock directo puede servir para una corrección puntual durante la carga inicial, pero deja menos contexto operativo.

El [Registro de inventario](../inventario/inventarios.md) es preferible cuando querés explicar por qué cambió la cantidad: ajuste físico, rotura, pérdida, recuento o diferencia detectada. Ese registro ayuda a mantener trazabilidad y facilita auditoría.

---

## Costo y recálculo de precios

El costo es el precio de compra por unidad. Sirve para márgenes, reposición e informes, y es la base de las [listas de precio](../configuracion/listas-precio.md) en modo automático.

Las ventas, el POS y las listas de precio siguen operando en **ARS**. El USD, si lo usás, es solo para cargar el **costo del producto** y convertirlo a pesos con una cotización manual.

### Cómo se carga el costo

En la pestaña de precios hay **un solo campo de costo**. Si la organización tiene **Costo multi-moneda** activo en [Preferencias](../configuracion/preferencias.md), ese campo incluye un selector **ARS / USD**:

| Moneda | Qué cargás | Qué pasa |
|--------|------------|----------|
| **ARS** | El costo en pesos | Se usa tal cual. |
| **USD** | El costo en dólares | El sistema calcula el **costo en pesos (ARS)** con la cotización vigente. |

Con moneda **USD** aparece un bloque de solo lectura **Costo en pesos (ARS)** con el monto grande y la fórmula:

`US$ × cotización = AR$`

Ejemplo: costo **US$ 10** y cotización **1 USD = 1200 ARS** → costo en pesos **AR$ 12.000**.

Junto al equivalente en pesos hay un lápiz para abrir **Cotización de moneda** (si tu perfil tiene permiso para editar cotización). Detalle de accesos y impacto al guardar: [Preferencias](../configuracion/preferencias.md#costo-multi-moneda).

Si **Costo multi-moneda** está apagado, el costo se carga solo en ARS (sin selector ni bloque de conversión).

### Recalcular precios al modificar el costo

En la misma pestaña hay un interruptor:

- **Recalcular precios al modificar el costo**
- Ayuda en pantalla: *Si está activo, los precios se recalculan solos cuando cambia el costo.*

Ese interruptor afecta los **precios** de las listas automáticas (con % o ganancia). **No** “recalcula el costo”: el costo lo cargás vos (o lo trae una compra).

Si está activo, el sistema recalcula precios cuando cambia el costo:

- al editar el costo a mano en el producto;
- al actualizar el costo desde una [compra](../compras/compras.md) (si en el ítem marcás actualizar costo);
- al cambiar la [cotización USD → ARS](../configuracion/preferencias.md#cotizacion-de-moneda), para productos con costo en USD (y precios si el interruptor está activo).

**No aplica** a listas con **precio manual**. Si el producto tiene alguna lista en modo manual, el interruptor queda desactivado.

### Quién manda: preferencia, producto y compra

| Nivel | Rol |
|-------|-----|
| [Preferencias](../configuracion/preferencias.md#actualizar-listas-de-precio-al-actualizar-costo) (*Actualizar listas de precio al actualizar costo*) | Valor **por defecto** del interruptor al **crear** productos nuevos. |
| Producto (este interruptor) | Manda sobre cada artículo ya creado. |
| [Compra](../compras/compras.md#actualizar-costo-desde-la-compra) | Por ítem decidís si se actualiza el costo; si se actualiza y el interruptor del producto está ON, también se recalculan precios. |

---

## Casos frecuentes

### Alta rápida
Para agregar productos durante una venta o compra.

### Configuración completa
Para definir precios, stock y comportamiento.

### Stock mínimo
Permite detectar productos que necesitan reposición desde informes o controles operativos.

### Los precios no se actualizan al cambiar el costo

1. Revisá que el interruptor **Recalcular precios al modificar el costo** esté activo en el producto.
2. Confirmá que la lista no esté en **precio manual**.
3. Si el cambio vino de una compra, verificá que el ítem tenga marcada la actualización de costo.

### Costo en dólares (USD)

1. Activá **Costo multi-moneda** en [Preferencias](../configuracion/preferencias.md#costo-multi-moneda).
2. En el producto, elegí **USD** en el selector del costo y cargá el valor en dólares.
3. Revisá el bloque **Costo en pesos (ARS)** y la cotización vigente.
4. Si querés que las listas automáticas sigan el costo, dejá activo **Recalcular precios al modificar el costo**.

### Producto con código variable

Para productos etiquetados desde balanza (PLU de 6 dígitos, etiqueta escaneada de 13):

- Activá **Cód. variable** junto a **Código de barras**.
- Cargá **exactamente 6 dígitos numéricos** (= PLU de la balanza). No guardes el EAN-13 completo.
- Si escaneás una etiqueta de 13 dígitos en el formulario, el ERP guarda solo los **primeros 6**.
- No podés activar **Cód. variable** si el código de barras ya tiene 13 dígitos (EAN-13 fijo).
- Solo podés editar la **lista de precio por defecto**; el resto aparece grisado.

Configurá también **Decimales del Código Variable** en [Preferencias](../configuracion/preferencias.md). Guía completa: [Qué son los códigos variables](../guias/codigos-variables.md).

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

- **No ves el selector ARS/USD en el costo**
  - Revisá que **Costo multi-moneda** esté activo en [Preferencias](../configuracion/preferencias.md#costo-multi-moneda).

- **El costo en pesos no coincide con lo esperado**
  - Revisá el valor en USD del producto y la cotización vigente (ícono **$** en el encabezado o Preferencias).
  - Recordá: ventas y listas siguen en ARS; el USD solo convierte el costo.

- **El interruptor de recálculo está grisado**
  - Alguna lista del producto está en **precio manual**. Pasala a modo automático o ajustá ese precio a mano.

- **No podés abrir Cotización de moneda**
  - Con preferencia ON todos ven el valor de cotización; editar requiere permiso para **editar cotización de moneda**. Ver [Perfiles](./perfiles.md).

---

## Listado y preferencias

La grilla prioriza **Descripción** y **Precio**. En pantallas chicas algunas columnas se ocultan solas; si no entran todas, deslizá horizontalmente.

En computadora, el menú **Columnas** permite mostrar u ocultar columnas (por ejemplo **Producto Franquicia**) sin borrar datos del producto. Al final de ese menú podés marcar **“Recordar preferencias de este listado”**: guarda en este navegador —por usuario y sucursal— las columnas visibles y las **filas por página** (50, 100 o 150).

No guarda anchos, orden de columnas, número de página, ordenamiento ni la búsqueda rápida. Si desmarcás la opción, deja de restaurar y se borra lo guardado para esa sucursal y pantalla.

---

## Buenas prácticas

- Usá etiquetas para organizar. Ejemplos: **Nuevos**, **Liquidación**, **Temporada** para filtrar en informes y ventas.
- Configurá correctamente [listas de precio](../configuracion/listas-precio.md).
- Activá **Recalcular precios al modificar el costo** solo si querés que los precios se ajusten solos cuando cambia el costo.
- Activá validación de stock si corresponde.
- En el listado, dejá visibles Descripción y Precio; ocultá Producto Franquicia si no trabajás con franquicias.

---

## Preguntas frecuentes

### ¿Cuándo conviene alta rápida y cuándo ficha completa?

Alta rápida sirve para no frenar una operación. La ficha completa conviene para dejar el producto bien preparado a mediano plazo.

### ¿Puedo corregir stock desde el producto?

Para carga inicial puede servir. Para diferencias operativas conviene usar [Registro de inventario](../inventario/inventarios.md). Si necesitás poner el mismo stock en varios productos, usá **Reiniciar stock** en [Actualización masiva](./productos-actualizacion-masiva.md).

### ¿Qué hago si vendo productos por peso?

Revisá [Códigos variables](../guias/codigos-variables.md) y [Balanzas Systel](../guias/balanzas-systel-y-codigos-variables.md) antes de operar en vivo.

### ¿Por qué no se recalcularon los precios al cambiar el costo?

Porque el interruptor del producto está apagado, la lista es de precio manual, o en la compra no se marcó actualizar costo en ese ítem.

### ¿Puedo vender o facturar en dólares?

No con esta preferencia. **Costo multi-moneda** solo permite cargar el costo del producto en USD y convertirlo a ARS. Ventas, POS y listas de precio siguen en pesos.

### ¿Qué pasa si cambio la cotización del dólar?

Al guardar, el sistema pide confirmación porque **recalcula el costo en ARS de todos los productos con moneda de costo USD**. Si esos productos tienen el interruptor de recálculo activo, también se actualizan los precios de las listas automáticas.

### ¿La preferencia “Actualizar listas de precio al actualizar costo” manda sobre el producto?

No. Es el valor inicial al **crear** productos. Después manda el interruptor de cada producto. Ver [Preferencias](../configuracion/preferencias.md#actualizar-listas-de-precio-al-actualizar-costo).

---

## Ver también

- [Tutorial en video: ingresar y administrar productos](../guias/como-ingresar-y-administrar-productos.mdx)
- [Administración](./administracion.md)
- [Preferencias](../configuracion/preferencias.md) (costo multi-moneda, cotización y default de recálculo)
- [Listas de precio](../configuracion/listas-precio.md)
- [Ventas](../ventas/ventas.md)
- [Compras](../compras/compras.md)
- [Registro de inventario](../inventario/inventarios.md)
- [Actualización masiva de productos](./productos-actualizacion-masiva.md)
- [Consulta de stock](../inventario/productos-consulta-inter-org.md)
- [Cómo configurar tu primer producto](../guias/como-configurar-tu-primer-producto.md)
- [Qué son los códigos variables y cómo usarlos](../guias/codigos-variables.md)
- [Problemas frecuentes con códigos variables](../guias/problemas-frecuentes-codigos-variables.md)
