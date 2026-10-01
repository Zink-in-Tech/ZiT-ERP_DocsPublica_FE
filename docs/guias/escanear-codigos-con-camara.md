---
title: 'Escanear códigos de barras con la cámara del celular'
sidebar_label: Escanear con la cámara
description: 'Usá la cámara del celular o de la computadora para leer códigos de barras EAN-13 en productos, alta rápida, inventarios y toma de inventario.'
sidebar_position: 14
keywords:
  - escanear
  - cámara
  - código de barras
  - EAN-13
  - celular
---

## Resumen

Podés leer **códigos de barras EAN-13** con la cámara del celular o de la computadora, sin lector físico. Es útil para cargar el código de un producto nuevo o para contar stock recorriendo el depósito.

La cámara está disponible en estas pantallas:

| Pantalla | Dónde está el botón | Qué pasa al escanear |
|----------|---------------------|----------------------|
| Ficha del producto | Ícono de cámara en el campo **Código de barras** | Completa el código y, si es EAN-13, intenta traer los datos del producto desde Open Food Facts. |
| Alta rápida de producto | Ícono de cámara en el campo **Código de barras** | Igual que en la ficha. |
| Inventario (alta de movimiento) | **Escanear código de barras** en cada ítem (**Escanear código** en el celular) | Escribe el código en el buscador del ítem para que elijas el producto. |
| Toma inventario | **Escanear código de barras** en cada ítem | Igual que en Inventario. |

En **POS** y **Ventas** se usa un lector de código de barras físico: si la búsqueda encuentra un solo producto, se selecciona solo.

## Antes de empezar

- Entrá a Zink ERP desde [https://ziterp.zinkintech.com](https://ziterp.zinkintech.com) con un navegador actualizado.
- La primera vez, el navegador te va a pedir **permiso para usar la cámara**: aceptalo.
- Cerrá otras aplicaciones que estén usando la cámara.

## Procedimiento

1. Tocá el ícono de cámara o **Escanear código de barras** en la pantalla que estés usando.
2. Apuntá la cámara al código de barras. Si tenés más de una cámara, usá **Cambiar cámara**.
3. Mantené el código quieto hasta que aparezca **✅ Código detectado**. El celular vibra y la ventana se cierra sola.
4. Revisá el resultado:
   - En productos, aparece **Código escaneado** con el número leído.
   - En inventario, aparece **📷 Código escaneado** y el aviso **Verificá el producto**: elegí el producto correcto en el buscador.

## Si algo sale mal

| Mensaje o síntoma | Qué hacer |
|-------------------|-----------|
| **Permisos de cámara denegados** | Habilitá el permiso de cámara para el sitio en la configuración del navegador y volvé a intentar. |
| **No se encontró ninguna cámara** | Revisá que el equipo tenga cámara y que esté conectada. |
| **La cámara está siendo usada por otra aplicación** | Cerrá la otra aplicación (videollamadas, cámara del celular) y volvé a abrir el escáner. |
| No lee el código | Solo se leen códigos **EAN-13**. Mejorá la luz, acercá o alejá un poco la cámara y evitá reflejos. |

## Ver también

- [Productos](../administracion/productos.md)
- [Inventario](../inventario/inventarios.md)
- [Toma inventario](../inventario/inventarios-ubicacion.md)
- [Códigos variables](./codigos-variables.md)
