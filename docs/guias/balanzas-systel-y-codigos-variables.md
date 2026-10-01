---
title: 'Balanzas Systel y códigos variables en Zink ERP'
sidebar_label: Balanzas Systel
description: 'Alineá balanzas Systel con Zink ERP: PLU de 6 dígitos, etiquetas EAN-13, decimales del código variable y prueba en Ventas y POS.'
sidebar_position: 8
keywords:
  - Systel
  - balanza Systel
  - códigos variables
  - PLU
  - etiquetas por peso
  - productos pesables
---

## Objetivo

Ordenar la configuración entre **balanzas Systel** y Zink ERP para que la lectura de etiquetas sea consistente y el equipo sepa qué revisar si algo falla.

Antes de empezar, leé [Qué son los códigos variables](./codigos-variables.md) para entender la estructura de 13 dígitos y la configuración del producto.

---

## Qué necesitás antes de usar este circuito

- producto en Zink ERP con **Cód. variable** y PLU de **6 dígitos**;
- **Decimales del Código Variable** en [Preferencias](../configuracion/preferencias.md) alineados con la balanza;
- etiqueta real emitida desde la Systel;
- prueba en **Ventas** (y en **POS** si operás por mostrador).

---

## Alineación balanza Systel ↔ Zink ERP

Zink ERP **no se conecta** a la balanza. La coincidencia se logra configurando ambos lados con el mismo criterio:

| Tema | En la balanza Systel | En Zink ERP |
|------|----------------------|-------------|
| PLU del producto | Código de 6 dígitos impreso en la etiqueta | Mismo valor en **Código de barras** + **Cód. variable** activo |
| Formato de etiqueta | EAN-13 de 13 dígitos con valor embebido | El lector debe enviar los **13 dígitos completos** al escanear |
| Decimales del valor | Según manual Systel (0 o 2 decimales, según modelo) | **Preferencias → Decimales del Código Variable** = misma convención |
| Prefijo del código | Prefijo habitual `20` u otro del fabricante | Va **dentro** de los 6 dígitos del PLU; no hay campo aparte en el ERP |
| Precio unitario / lista | Precio por kg o referencia en balanza | Solo la **lista por defecto** del producto; en venta manda el valor de la etiqueta |
| Impuesto en etiqueta | Según programación de la balanza | En Ventas, el impuesto de línea queda **bloqueado** para productos con código variable |

Validá la programación concreta en el **manual de tu modelo Systel**. Los pasos exactos de la balanza pueden variar entre equipos.

---

## Checklist de coincidencia

Antes de dar por implementado un producto pesable:

1. **PLU en Systel** = **Código de barras** en Zink ERP (6 dígitos exactos).
2. Producto con **Cód. variable** marcado.
3. **Decimales del Código Variable** en Preferencias = configuración de impresión de la Systel.
4. **Lista por defecto** del producto coherente (precio de catálogo; la venta usa el valor de la etiqueta).
5. Etiqueta de prueba escaneada en **Ventas**: producto correcto e importe esperado.
6. Si operás en mostrador, repetir la prueba en **POS** y comparar totales.

---

## Circuito recomendado

1. Programá el producto en la balanza Systel (PLU, precio de referencia, decimales).
2. Creá o editá el producto en [Productos](../administracion/productos.md) con **Cód. variable** y el PLU de 6 dígitos.
3. Revisá [Preferencias](../configuracion/preferencias.md) → **Decimales del Código Variable**.
4. Emití una etiqueta desde la balanza.
5. Escaneala en **Ventas** → Nueva venta.
6. Verificá producto, importe y total.
7. Si usás **POS**, repetí la prueba y compará con Ventas.

---

## Qué revisar cuando la lectura no coincide

### Producto incorrecto

Compará los **6 primeros dígitos** de la etiqueta con el **Código de barras** del producto en el ERP.

### Importe mal interpretado

Revisá **Decimales del Código Variable** en Preferencias y la programación de decimales en la Systel. Reprogramá la balanza o ajustá Preferencias hasta que coincidan.

### Lectura correcta en Ventas pero distinta en POS

Es un caso frecuente: POS y Ventas pueden mostrar totales distintos para la misma etiqueta. Validá siempre en **Ventas** primero; ver [Problemas frecuentes con códigos variables](./problemas-frecuentes-codigos-variables.md).

### Consulta de precios no muestra el precio de la etiqueta

Comportamiento esperado. Esa pantalla muestra precio de catálogo, no el importe decodificado.

---

## Buenas prácticas

- Validá siempre con **etiquetas reales**, no solo con el alta del producto.
- No des por hecho que dos balanzas Systel están configuradas igual.
- Documentá internamente qué productos usan código variable.
- Capacitá a cajeros y depósito con el mismo criterio: PLU de 6 dígitos, no EAN-13 completo en el producto.

---

## Ver también

- [Qué son los códigos variables y cómo usarlos](./codigos-variables.md)
- [Problemas frecuentes con códigos variables](./problemas-frecuentes-codigos-variables.md)
- [Preferencias](../configuracion/preferencias.md)
- [Ventas](../ventas/ventas.md)
- [POS](../ventas/pos.md)
- [Zink ERP para locales con balanza](../rubros/zinkerp-para-locales-con-balanza.md)
