---
title: "Zink ERP para locales con balanza: códigos variables y operación por peso | Zink ERP"
sidebar_label: Para locales con balanza
description: >-
  Recorrido recomendado para negocios que trabajan con balanza, etiquetas por
  peso y códigos variables, con foco en operación diaria y validación real en
  Zink ERP.
sidebar_position: 4
keywords:
  - ERP con balanza
  - códigos variables
  - balanza Systel
  - productos por peso
  - etiquetas
---

## Objetivo

Concentrar en una sola página el recorrido recomendado para negocios que venden productos etiquetados desde balanza o que necesitan operar con lectura variable.

---

## Qué hace diferente a este rubro

Además de vender y cobrar, estos negocios necesitan que la lectura del código represente correctamente el producto y el valor variable que viene en la etiqueta.

Eso hace que la configuración de producto y la validación operativa sean más sensibles que en una venta con código fijo.

---

## Circuito recomendado

### Base del circuito

- [Productos](../administracion/productos.md)
- [POS](../ventas/pos.md)
- [Consulta de precios](../ventas/consulta-precio.md)

### Guías clave

- [Qué son los códigos variables y cómo usarlos](../guias/codigos-variables.md)
- [Balanzas Systel y códigos variables](../guias/balanzas-systel-y-codigos-variables.md)
- [Problemas frecuentes con códigos variables](../guias/problemas-frecuentes-codigos-variables.md)

### Control posterior

- [Inventario](../inventario/inventario.md)
- [Registro de inventario](../inventario/inventarios.md)
- [Caja diaria](../finanzas/caja-diaria.md)

---

## Validación mínima recomendada

Antes de dar por implementado el circuito:

1. configurá el producto base;
2. emití una etiqueta real desde la balanza;
3. probala en el punto de lectura real;
4. verificá producto, valor y resultado final;
5. controlá stock y cobro.

---

## Errores comunes

### El lector toma el código, pero el producto sale mal

Revisá el vínculo entre código base y producto.

### La lectura encuentra el producto, pero el valor es incorrecto

Validá si la balanza está informando peso, importe o cantidad bajo el criterio esperado.

### La operación vende, pero el control de stock queda desordenado

Revisá recuento físico, configuración del producto y uso correcto del circuito por parte del equipo.

---

## Ver también

- [Para cajeros](../roles/cajeros.md)
- [Para depósito](../roles/deposito.md)
- [Zink ERP para dietéticas](./zinkerp-para-dieteticas.md)
