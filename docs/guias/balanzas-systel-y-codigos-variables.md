---
title: Balanzas Systel y códigos variables en Zink ERP | Zink ERP
sidebar_label: Balanzas Systel
description: >-
  Guía práctica para operar productos etiquetados con balanzas Systel y códigos
  variables en Zink ERP, con controles previos y problemas frecuentes.
sidebar_position: 6
keywords:
  - Systel
  - balanza Systel
  - códigos variables
  - etiquetas por peso
  - productos pesables
---

## Objetivo

Ordenar el uso de productos etiquetados desde balanzas Systel para que la lectura en Zink ERP sea consistente y el equipo entienda qué revisar si algo falla.

---

## Qué necesitás antes de usar este circuito

- producto correctamente configurado en Zink ERP;
- criterio definido de lectura por código variable;
- etiqueta emitida por la balanza;
- prueba real en el punto donde se va a operar.

---

## Circuito recomendado

1. Configurá el producto base en [Productos](../administracion/productos.md).
2. Confirmá con el equipo operativo qué dato trae la etiqueta.
3. Emití una etiqueta desde la balanza Systel.
4. Probala en [POS](../ventas/pos.md) o en la operación donde se vaya a usar.
5. Verificá producto, cantidad/peso y resultado final.

---

## Qué revisar cuando la lectura no coincide

### Producto incorrecto

Revisá el código base usado para vincular la etiqueta con el producto del ERP.

### Peso o importe mal interpretado

Validá que la lógica esperada por el negocio coincida con el dato que efectivamente imprime la balanza.

### Lectura correcta pero precio incorrecto

Revisá listas de precio, configuración del producto y criterio comercial del punto de venta.

---

## Buenas prácticas

- Validá siempre con etiquetas reales.
- No des por hecho que dos balanzas están configuradas igual.
- Documentá internamente qué productos usan lectura variable y cuáles no.
- Si el negocio opera por peso, capacitá a cajeros y depósito sobre el mismo criterio.

---

## Ver también

- [Qué son los códigos variables y cómo usarlos](./codigos-variables.md)
- [POS](../ventas/pos.md)
- [Consulta de precios](../ventas/consulta-precio.md)
- [Productos](../administracion/productos.md)
- [Zink ERP para locales con balanza](../rubros/zinkerp-para-locales-con-balanza.md)
