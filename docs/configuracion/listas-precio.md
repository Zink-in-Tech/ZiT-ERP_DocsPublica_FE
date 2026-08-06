---
title: 'Listas de precio: clientes, POS y ventas | Zink ERP'
sidebar_label: 'Listas de precio: clientes, POS y ventas'
description: >-
  Las listas de precio definen qué valor usa Zink ERP para vender, cotizar o
  consultar un producto en cada contexto comercial.
sidebar_position: 72
keywords:
  - listas de precio
  - precios por cliente
  - lista por defecto
  - cotizaciones
  - POS
  - precio manual
  - recalcular precios
---

## Resumen

Las listas de precio definen qué valor usa Zink ERP para vender, cotizar o consultar un producto en cada contexto comercial.

Una organización puede trabajar con una lista por defecto y, cuando corresponde, asignar listas específicas a contactos. Esto permite manejar precios mayoristas, minoristas, promociones o condiciones comerciales diferenciadas.

En el producto, cada lista puede estar en modo **automático** (se calcula desde el costo con % o ganancia) o **precio manual**. El interruptor **Recalcular precios al modificar el costo** solo impacta las listas automáticas. Detalle en [Productos](../administracion/productos.md#costo-y-recalculo-de-precios).

---

## Antes de empezar

- Tener productos cargados en [Productos](../administracion/productos.md).
- Definir qué listas necesita la organización: por ejemplo, minorista, mayorista o promoción.
- Revisar la lista por defecto en [Preferencias](./preferencias.md).
- Confirmar permisos para modificar productos, precios y preferencias.

---

## Procedimiento

1. Creá o revisá la lista de precio disponible para la organización.
2. Cargá precios en los productos desde la ficha del producto o desde procesos masivos, si están habilitados.
3. Asigná la lista al contacto cuando ese cliente o proveedor tenga una condición comercial específica.
4. Configurá la **Lista de Precios por Defecto** en [Preferencias](./preferencias.md).
5. Validá el resultado desde [Consulta de precios](../ventas/consulta-precio.md), [Cotizaciones](../ventas/cotizaciones.md), [Ventas](../ventas/ventas.md) o [POS](../ventas/pos.md).

---

## Qué cambia y qué no cambia

- ✔️ Cambia el precio sugerido o aplicado en operaciones comerciales.
- ✔️ Puede cambiar el precio visible en POS, cotizaciones, presupuestos, pedidos y ventas.
- ✔️ Puede afectar informes que filtran o calculan por lista.
- ❌ No modifica stock.
- ❌ No cambia de forma retroactiva comprobantes ya confirmados.

---

## Automática vs precio manual

| Modo | Qué hace | Relación con el costo |
|------|----------|------------------------|
| Automática | El precio se calcula desde el costo (margen o %). | Si el producto tiene **Recalcular precios al modificar el costo**, al cambiar el costo (en ficha, compra o cotización USD) se actualiza solo. |
| Precio manual | El precio lo cargás vos y queda fijo hasta que lo edites. | No se recalcula al cambiar el costo. Si hay listas manuales en el producto, el interruptor de recálculo se desactiva. |

El valor por defecto del interruptor al **crear** productos está en [Preferencias](./preferencias.md#actualizar-listas-de-precio-al-actualizar-costo) (*Actualizar listas de precio al actualizar costo*).

Las listas siempre se expresan en **ARS**. Aunque el costo del producto esté en USD (con [Costo multi-moneda](./preferencias.md#costo-multi-moneda)), el precio de venta se calcula sobre el costo convertido a pesos.

---

## Cómo se aplica en operaciones

| Contexto | Comportamiento esperado |
|----------|-------------------------|
| Consumidor Final | Usa la lista por defecto de la organización. |
| Contacto con lista asignada | Puede tomar la lista propia del contacto. |
| Cotizaciones | Permite comparar o seleccionar precios por lista. |
| Ventas y POS | Calcula precios según cliente, lista por defecto y configuración del producto. |
| Informes | Algunos reportes permiten filtrar o analizar ventas por lista de precio. |

---

## Casos frecuentes

### Cliente mayorista

Asigná una lista mayorista al contacto para que ventas y POS puedan tomar esa condición al seleccionarlo.

### Precio incorrecto en POS

Revisá el cliente seleccionado, la lista del contacto, la lista por defecto de la organización y el precio cargado en el producto.

### Cambio masivo de precios

Usá [Actualización masiva de productos](../administracion/productos-actualizacion-masiva.md) si necesitás modificar muchos precios a la vez.

### El precio no bajó/subió al cambiar el costo

1. Confirmá que la lista sea automática (no precio manual).
2. Revisá el interruptor del producto.
3. Si el cambio vino de una compra, verificá que el ítem tuviera marcada la actualización de costo.

---

## Si algo sale mal

- **No aparece el precio esperado**
  - Revisá producto, lista asignada al contacto y lista por defecto.
- **La consulta de precios no muestra listas**
  - Revisá la opción de consulta de precios en [Preferencias](./preferencias.md).
- **Un informe no coincide con ventas**
  - Confirmá que estás filtrando por la misma lista usada en las operaciones.
- **El interruptor de recálculo está desactivado**
  - Hay al menos una lista en precio manual en ese producto. Ver [Productos](../administracion/productos.md#costo-y-recalculo-de-precios).

---

## Ver también

- [Preferencias](./preferencias.md)
- [Productos](../administracion/productos.md#costo-y-recalculo-de-precios)
- [Contactos](../administracion/contactos.md)
- [Consulta de precios](../ventas/consulta-precio.md)
- [POS](../ventas/pos.md)
- [Cotizaciones](../ventas/cotizaciones.md)
