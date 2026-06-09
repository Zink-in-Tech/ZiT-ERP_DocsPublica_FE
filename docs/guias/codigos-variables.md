---
title: Qué son los códigos variables y cómo usarlos en Zink ERP | Zink ERP
sidebar_label: Códigos variables
description: >-
  Entendé para qué sirven los códigos variables, cómo se leen en Zink ERP y en
  qué casos se usan para productos por peso, importe o cantidad.
sidebar_position: 5
keywords:
  - códigos variables
  - código variable
  - productos por peso
  - balanza
  - código de barras
---

## Objetivo

Explicar qué es un código variable, cuándo conviene usarlo y qué tener en cuenta para que la lectura funcione correctamente en la operación diaria.

---

## Qué es un código variable

Un código variable es un código de barras cuyo valor no identifica solo al producto, sino también un dato de la operación impreso por balanza o etiquetadora.

Según el formato usado por el negocio, ese dato variable puede representar:

- peso;
- importe;
- cantidad;
- o una combinación interpretada por la lógica del sistema.

---

## Cuándo se usa

Es especialmente útil en negocios que venden productos pesables o fraccionados, por ejemplo:

- alimentos por kilo;
- productos de mostrador con peso variable;
- mercadería etiquetada desde balanza.

En esos casos, el operador no necesita tipear la cantidad manualmente: la lectura trae ese dato desde la etiqueta.

---

## Cómo se usa en Zink ERP

En la práctica, el circuito suele ser:

1. el producto base se configura en el sistema;
2. la balanza imprime una etiqueta con el código variable;
3. el operador escanea ese código en POS, ventas o el punto de consulta que corresponda;
4. el sistema interpreta el producto y el valor variable contenido en el código.

---

## Qué revisar antes de implementarlo

- que el producto base esté correctamente cargado;
- que el formato del código coincida con el criterio usado por la balanza;
- que el circuito de lectura esté validado en operación real;
- que el equipo sepa cuándo usar lectura de etiqueta y cuándo carga manual.

---

## Errores comunes

### El producto no se identifica

Puede haber una diferencia entre el código configurado en el producto y el prefijo o estructura emitida por la balanza.

### El valor leído no coincide

Revisá si la balanza está enviando peso, importe o cantidad y cómo se espera interpretarlo en la operación.

### El lector funciona pero el resultado es incorrecto

Conviene validar una etiqueta real de punta a punta, no solo el alta del producto.

---

## Preguntas frecuentes

### ¿Todos los productos necesitan código variable?

No. Solo los que se operan con ese tipo de etiqueta o lectura.

### ¿Esto reemplaza el código de barras común?

No siempre. Muchos negocios usan ambos: código fijo para algunos productos y variable para los pesables.

---

## Ver también

- [Balanzas Systel y códigos variables](./balanzas-systel-y-codigos-variables.md)
- [Productos](../administracion/productos.md)
- [POS](../ventas/pos.md)
- [Consulta de precios](../ventas/consulta-precio.md)
- [Zink ERP para locales con balanza](../rubros/zinkerp-para-locales-con-balanza.md)
