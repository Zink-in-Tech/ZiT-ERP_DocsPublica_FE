---
title: 'Consulta de precios: listas, stock visible y atención en mostrador | Zink ERP'
sidebar_label: Consulta de precios
description: >-
  La consulta de precios muestra valores según las listas configuradas en
  Preferencias. Podés usarla en mostrador, depósito o en un punto de consulta
  para clientes.
sidebar_position: 10
keywords:
  - consulta de precios
  - consulta precio
  - listas de precios
  - precio producto
  - showroom
  - punto consulta
---

## Resumen

La consulta de precios muestra valores según las listas configuradas en [Preferencias](../configuracion/preferencias.md). Podés usarla en mostrador, depósito o en un punto de consulta para clientes.

No genera documentos ni impacta stock ni cuenta corriente.

---

## Antes de empezar

- Productos y listas de precios cargados.
- Revisá en **Preferencias** qué listas, stock y productos relacionados se muestran en consulta.

---

## Ubicación dentro del sistema

Herramienta **previa a la venta**:

Consulta de precios → Cotización / POS / Venta

Entrá desde el menú habilitado para consulta de precios (según tu organización).

---

## Cuándo usarla

- Responder consultas rápidas sin abrir cotización o venta.
- Validar precio antes de armar una propuesta.
- Mostrar precios en showroom o autoservicio.

---

## Procedimiento

1. Buscá el producto por nombre, código o código de barras.
2. Revisá precios según las listas visibles en pantalla.
3. Si aplica, revisá stock o productos relacionados (según preferencias).
4. Usá la información para cotizar, vender o informar al cliente.

---

## Casos frecuentes

### Mostrador

El vendedor consulta antes de ir a POS o venta comercial.

### Una sola lista visible

Usá esa lista como referencia de precio de sala.

### Varias listas

Confirmá con el cliente qué lista aplica (mayorista, público, oferta).

### Showroom / autoservicio

El cliente consulta sin intervención; la lista expuesta debe estar alineada con la política comercial.

### Etiqueta de balanza (código variable)

Si escaneás una etiqueta de **13 dígitos**, el sistema encuentra el producto por su PLU de 6 dígitos, pero el **precio mostrado es el de catálogo** (lista por defecto), **no** el importe impreso en la etiqueta.

Para validar el valor de una etiqueta real, usá **Ventas** o **POS**. Ver [Qué son los códigos variables](../guias/codigos-variables.md).

---

## Si algo sale mal

- **No aparecen precios**
  - Revisá listas en [Preferencias](../configuracion/preferencias.md) y precios en [Productos](../administracion/productos.md).
- **Lista incorrecta**
  - Ajustá la configuración de consulta de precio en preferencias.
- **Producto no encontrado**
  - Verificá código, nombre y que el producto esté activo.
- **Precio de etiqueta de balanza no coincide**
  - Comportamiento esperado: Consulta de precios muestra precio de lista, no el importe decodificado de la etiqueta. Validá en **Ventas** o **POS**. Ver [Códigos variables](../guias/codigos-variables.md).

---

## Buenas prácticas

- Consultá antes de confirmar cotizaciones o ventas para evitar errores.
- Mantené listas actualizadas, sobre todo si es punto de consulta público.

---

## Ver también

- [Cotizaciones](./cotizaciones.md)
- [POS](./pos.md)
- [Flujo de ventas](./flujo-ventas.md)
- [Preferencias](../configuracion/preferencias.md)
- [Qué son los códigos variables y cómo usarlos](../guias/codigos-variables.md)
- [Problemas frecuentes con códigos variables](../guias/problemas-frecuentes-codigos-variables.md)
