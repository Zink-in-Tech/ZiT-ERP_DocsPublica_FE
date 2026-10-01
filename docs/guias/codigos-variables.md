---
title: 'Códigos variables: qué son y cómo usarlos'
sidebar_label: Códigos variables
description: 'Configurá productos con código variable (PLU de 6 dígitos) y alineá Preferencias con la balanza para leer etiquetas de 13 dígitos.'
sidebar_position: 7
keywords:
  - códigos variables
  - código variable
  - PLU balanza
  - productos por peso
  - etiqueta 13 dígitos
  - precioVariableDecimales
---

## Objetivo

Explicar qué es un código variable en Zink ERP, cómo configurarlo y qué revisar para que la lectura de etiquetas de balanza funcione en la operación diaria.

---

## Qué es un código variable en Zink ERP

Un producto con **código variable** es un artículo marcado con **Cód. variable** cuyo **PLU de balanza** son **exactamente 6 dígitos numéricos** guardados en **Código de barras**.

No es un EAN-13 fijo de catálogo:

- no aplica Open Food Facts ni el generador EAN-13 del ERP;
- si el código de barras ya tiene **13 dígitos**, **no podés** activar **Cód. variable**.

En la operación, el operador escanea una **etiqueta de 13 dígitos**. Zink ERP:

1. identifica el producto por los **primeros 6 dígitos** (PLU almacenado);
2. interpreta los **6 dígitos siguientes** como valor codificado (importe de la etiqueta);
3. valida el **dígito 13** (verificador).

El valor de la etiqueta lo decodifica el sistema al escanear. En la base de datos del producto solo se guarda el PLU de 6 dígitos, no los 13 completos.

---

## Estructura de la etiqueta (13 dígitos)

```
[ PLU 6 dígitos ][ Valor 6 dígitos ][ Verificador 1 dígito ]
|← producto ERP →|← importe codificado →|← control      →|
```

| Tramo | Posición | Ejemplo `2006870046139` | En Zink ERP |
|-------|----------|-------------------------|-------------|
| PLU / código base | 1–6 | `200687` | **Código de barras** del producto |
| Valor codificado | 7–12 | `004613` | Se decodifica al escanear; no se guarda en el producto |
| Verificador | 13 | `9` | Lo resuelve el sistema al leer la etiqueta |

La interpretación de los 6 dígitos centrales depende de **Decimales del Código Variable** en [Preferencias](../configuracion/preferencias.md). Debe coincidir con la programación de la balanza (por ejemplo, 2 decimales o enteros).

---

## Cuándo se usa

Conviene para productos pesados o a granel con etiqueta impresa en balanza, donde el **importe va embebido en el código** y el operador escanea la etiqueta en lugar de tipear cantidad o precio.

Ejemplos habituales:

- alimentos por kilo;
- productos de mostrador fraccionados;
- mercadería etiquetada desde balanza (p. ej. Systel).

---

## Configuración del producto

### Dónde

**Administración → Productos** → crear o editar. También desde **Alta rápida** en ventas, compras u otros circuitos.

### Campos clave

| Campo en pantalla | Regla |
|-------------------|-------|
| **Cód. variable** | Activar el checkbox. Indica que el producto usa PLU de balanza. |
| **Código de barras** | Con código variable activo: **exactamente 6 dígitos numéricos** (= PLU de la balanza). No guardar el EAN-13 completo de 13 dígitos. |
| **Listas de precio** | Solo es editable la **lista por defecto** de la organización; el resto aparece grisado. |

### Alta con lector en el formulario de producto

Si escaneás una etiqueta de 13 dígitos con **Cód. variable** activo, Zink ERP **guarda solo los primeros 6 dígitos** como código de barras.

### Prefijo

**No hay un campo “prefijo” en el ERP.** Los 6 dígitos del PLU **incluyen** el prefijo que use la balanza (en muchos casos empiezan con `20`, p. ej. `200687`). Ese prefijo se configura en la balanza, no en Zink.

---

## Configuración global (organización)

**Configuración → Preferencias → Configuración general → Código de Barras Variable**

| Campo | Para qué sirve |
|-------|----------------|
| **Decimales del Código Variable** | Define cómo el sistema interpreta los 6 dígitos centrales de la etiqueta. Debe coincidir con la balanza. |

En la misma pestaña también están **Lista de precios por defecto** y **Tipo de redondeo**. Afectan el precio de catálogo; en la venta con etiqueta manda el valor decodificado de la etiqueta.

Ver detalle en [Preferencias](../configuracion/preferencias.md).

---

## Qué tipo de lectura soporta el ERP

| Concepto | Comportamiento en Zink ERP |
|----------|----------------------------|
| **Importe / precio de la etiqueta** | Caso principal en **Ventas** |
| **Peso × precio unitario** | No hay modo configurable; la cantidad queda en 1 y el valor va en el importe decodificado |
| **Cantidad variable** | No; en **Ventas** la cantidad se **bloquea** si el producto es código variable |

No existe una pantalla “tipo de lectura: peso / importe / cantidad”. La alineación con la balanza se hace con el PLU, **Cód. variable** y **Decimales del Código Variable**.

---

## Dónde se escanea — diferencias por pantalla

Todas usan la misma búsqueda al escanear, pero **no muestran el resultado igual**:

| Pantalla | Menú | Soporte | Comportamiento |
|----------|------|---------|----------------|
| **Ventas** | Gestión operativa → Ventas | Completo | Decodifica el valor de la etiqueta; **cantidad bloqueada** |
| **POS** | Gestión operativa → POS | Parcial | Misma búsqueda; el subtotal puede calcularse distinto que en Ventas |
| **Consulta de precios** | Gestión operativa → Consulta de Precios | Limitado | Muestra el **precio de catálogo** (lista por defecto), **no** el importe de la etiqueta |

### Ventas (referencia para validar)

Usá **Ventas** para probar una etiqueta nueva: es donde el circuito de código variable está más completo.

### POS

Si el total en POS no coincide con Ventas para la misma etiqueta, revisá la respuesta del producto escaneado y compará ambas pantallas antes de operar en vivo. Ver [POS](../ventas/pos.md).

### Consulta de precios

Escanear una etiqueta **no muestra el precio impreso en la etiqueta**; muestra el precio de la lista por defecto. Para validar una etiqueta real, usá **Ventas** o **POS**. Ver [Consulta de precios](../ventas/consulta-precio.md).

### Otros módulos

Presupuestos, pedidos, cotizaciones y compras **no** tienen lógica de código variable en la operación diaria (solo alta rápida de producto).

---

## Paso a paso — implementación

1. Programá el producto en la balanza con un PLU de **6 dígitos**.
2. En Zink ERP, creá o editá el producto con **Cód. variable** activo y **Código de barras** = esos 6 dígitos.
3. Configurá la **lista por defecto** del producto.
4. En **Preferencias**, alineá **Decimales del Código Variable** con la balanza.
5. Emití una etiqueta real desde la balanza.
6. Probala en **Ventas** (y después en **POS** si operás por mostrador).
7. Verificá producto, importe y total antes de usar en producción.

Para balanzas Systel, seguí el checklist en [Balanzas Systel y códigos variables](./balanzas-systel-y-codigos-variables.md).

---

## Errores comunes

### “No se encontró producto” al escanear

Revisá que el producto tenga **Cód. variable** activo y que **Código de barras** = **primeros 6 dígitos** de la etiqueta (no los 13).

### Producto existe pero no matchea

Compará los 6 dígitos de la etiqueta con el código cargado en el ERP. El PLU de la balanza y el del producto deben ser idénticos.

### Precio incorrecto en venta

Revisá **Decimales del Código Variable** en Preferencias y reprogramá la balanza si no coinciden.

### Subtotal distinto entre Ventas y POS

Probá la misma etiqueta en ambas pantallas. POS puede calcular distinto que Ventas para el mismo código.

### Consulta de precios no coincide con la etiqueta

Es el comportamiento esperado: esa pantalla muestra precio de lista, no el importe decodificado.

### No puedo marcar Cód. variable

Si **Código de barras** ya es un EAN-13 de 13 dígitos, no podés activarlo. Usá solo los 6 dígitos del PLU.

### Listas de precio grisadas

Comportamiento esperado: configurá solo la **lista por defecto** para productos con código variable.

Más casos en [Problemas frecuentes con códigos variables](./problemas-frecuentes-codigos-variables.md).

---

## Qué el ERP no hace

- No integra balanzas directamente (no hay configuración Systel u otra marca dentro del ERP).
- No tiene campo “prefijo” ni “tipo de lectura peso/importe”.
- No soporta código variable en presupuestos, pedidos ni cotizaciones.
- La importación de productos no carga el indicador de código variable; conviene crear o editar esos productos manualmente.

---

## Preguntas frecuentes

### ¿Todos los productos necesitan código variable?

No. Solo los que se venden con etiqueta de balanza de 13 dígitos.

### ¿Guardo los 13 dígitos en el producto?

No. Guardá solo el PLU de **6 dígitos**.

### ¿Esto reemplaza el código de barras común?

No. Muchos negocios usan código fijo para algunos productos y código variable para los pesables.

### ¿Puedo validar el precio escaneando en Consulta de precios?

No para el importe de la etiqueta. Usá **Ventas** para validar.

---

## Ver también

- [Guías prácticas](./guias-practicas.md)
- [Balanzas Systel y códigos variables](./balanzas-systel-y-codigos-variables.md)
- [Problemas frecuentes con códigos variables](./problemas-frecuentes-codigos-variables.md)
- [Productos](../administracion/productos.md)
- [Preferencias](../configuracion/preferencias.md)
- [Ventas](../ventas/ventas.md)
- [POS](../ventas/pos.md)
- [Zink ERP para locales con balanza](../rubros/zinkerp-para-locales-con-balanza.md)
