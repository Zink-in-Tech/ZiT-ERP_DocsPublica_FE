---
title: 'Listas de precio: clientes, POS y ventas | Zink ERP'
sidebar_label: 'Listas de precio: clientes, POS y ventas'
description: >-
  Las listas de precio definen qué valor usa ZinkERP para vender, cotizar o
  consultar un producto en cada contexto comercial.
sidebar_position: 72
keywords:
  - listas de precio
  - precios por cliente
  - lista por defecto
  - cotizaciones
  - POS
---

## Resumen

Las listas de precio definen qué valor usa ZinkERP para vender, cotizar o consultar un producto en cada contexto comercial.

Una organización puede trabajar con una lista por defecto y, cuando corresponde, asignar listas específicas a contactos. Esto permite manejar precios mayoristas, minoristas, promociones o condiciones comerciales diferenciadas.

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

<!-- TODO(producto): confirmar desde UI si la creación de listas se realiza en una pantalla propia, desde productos o desde configuración avanzada. -->

---

## Qué cambia y qué no cambia

- ✔️ Cambia el precio sugerido o aplicado en operaciones comerciales.
- ✔️ Puede cambiar el precio visible en POS, cotizaciones, presupuestos, pedidos y ventas.
- ✔️ Puede afectar informes que filtran o calculan por lista.
- ❌ No modifica stock.
- ❌ No cambia de forma retroactiva comprobantes ya confirmados.

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

---

## Si algo sale mal

- **No aparece el precio esperado**
  - Revisá producto, lista asignada al contacto y lista por defecto.
- **La consulta de precios no muestra listas**
  - Revisá la opción de consulta de precios en [Preferencias](./preferencias.md).
- **Un informe no coincide con ventas**
  - Confirmá que estás filtrando por la misma lista usada en las operaciones.

---

## Ver también

- [Preferencias](./preferencias.md)
- [Productos](../administracion/productos.md)
- [Contactos](../administracion/contactos.md)
- [Consulta de precios](../ventas/consulta-precio.md)
- [POS](../ventas/pos.md)
- [Cotizaciones](../ventas/cotizaciones.md)
