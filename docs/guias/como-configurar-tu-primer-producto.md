---
title: Cómo configurar tu primer producto en Zink ERP | Zink ERP
sidebar_label: Configurar tu primer producto
description: >-
  Guía paso a paso para crear tu primer producto en Zink ERP con nombre, código,
  precio, stock, listas e información clave para vender, comprar y controlar
  inventario.
sidebar_position: 3
keywords:
  - primer producto
  - alta de producto
  - código de barras
  - listas de precio
  - stock
---

## Objetivo

Crear un producto que quede realmente listo para operar en ventas, compras, POS, consulta de precios e inventario.

---

## Qué necesitás antes de empezar

- Tener acceso a [Productos](../administracion/productos.md).
- Tener definidas o al menos previstas las [listas de precio](../configuracion/listas-precio.md).
- Saber si el producto maneja stock, ubicación o validación de cantidad.

---

## Paso a paso

### Paso 1: Crear el producto

Completá como mínimo:

- nombre o descripción clara;
- código interno o SKU si usás uno;
- código de barras si el producto se leerá con escáner;
- unidad de medida;
- costo;
- al menos un precio usable.

### Paso 2: Revisar precios

Si tu organización usa varias listas:

1. completá la lista principal;
2. revisá listas mayoristas, minoristas u ofertas si aplican;
3. validá que el precio visible en [Consulta de precios](../ventas/consulta-precio.md) sea el esperado.

### Paso 3: Configurar stock

Definí:

- stock inicial si corresponde;
- stock mínimo;
- ubicación;
- si el sistema debe validar stock al vender.

### Paso 4: Revisar comportamiento operativo

Antes de guardar, confirmá:

- impuestos aplicables;
- etiquetas útiles;
- si el producto se venderá por unidad, peso o lectura especial;
- si puede requerir [códigos variables](./codigos-variables.md).

### Paso 5: Probar el producto

Hacé una validación simple:

1. buscalo en [Consulta de precios](../ventas/consulta-precio.md);
2. probalo en [POS](../ventas/pos.md) o [Ventas](../ventas/ventas.md);
3. confirmá que el precio, el nombre y el comportamiento sean correctos.

---

## Errores comunes

### El producto aparece pero no se puede vender

Revisá precio, permisos, validación de stock y si está activo.

### El precio no coincide

Revisá listas de precio, cliente seleccionado y configuración comercial.

### El producto no se encuentra con lector

Controlá el código de barras cargado y el formato usado por el lector o la balanza.

---

## Preguntas frecuentes

### ¿Conviene cargar stock directo?

Para carga inicial puede servir. Para correcciones posteriores, preferí [Registro de inventario](../inventario/inventarios.md) o [Toma de inventario](../inventario/inventarios-ubicacion.md).

### ¿Qué pasa si después cambio el precio?

Depende de cómo manejen listas, promociones y procesos internos. Lo importante es validar el impacto antes de vender.

---

## Ver también

- [Productos](../administracion/productos.md)
- [Listas de precio](../configuracion/listas-precio.md)
- [Consulta de precios](../ventas/consulta-precio.md)
- [Qué son los códigos variables y cómo usarlos](./codigos-variables.md)

