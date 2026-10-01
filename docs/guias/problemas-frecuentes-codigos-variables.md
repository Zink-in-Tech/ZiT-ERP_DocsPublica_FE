---
title: 'Problemas frecuentes con códigos variables y balanzas'
sidebar_label: Problemas códigos variables
description: 'Qué revisar cuando falla la lectura de etiquetas de balanza: producto no encontrado, precio incorrecto o diferencias entre pantallas.'
sidebar_position: 9
keywords:
  - problemas códigos variables
  - balanza no encuentra producto
  - precio incorrecto etiqueta
  - POS código variable
  - Systel
---

## Objetivo

Resolver los casos más frecuentes al operar con etiquetas de balanza en Zink ERP, con una referencia rápida de síntoma → causa → qué revisar.

Para configuración inicial, empezá por [Qué son los códigos variables](./codigos-variables.md). Para alinear Systel, ver [Balanzas Systel](./balanzas-systel-y-codigos-variables.md).

---

## Tabla de referencia rápida

| Síntoma | Causa probable | Qué revisar |
|---------|----------------|-------------|
| **“No se encontró producto”** al escanear | PLU inexistente o producto sin **Cód. variable** | Producto → **Cód. variable** ✓; **Código de barras** = **primeros 6** de la etiqueta; no guardar los 13 en el producto |
| Producto existe pero no matchea | PLU distinto al de la balanza | Comparar 6 dígitos de la etiqueta vs **Código de barras** en el ERP |
| **Precio incorrecto** en venta | **Decimales del Código Variable** ≠ balanza | [Preferencias](../configuracion/preferencias.md) → **Decimales del Código Variable**; reprogramar balanza |
| Subtotal distinto entre **Ventas** y **POS** | POS calcula distinto que Ventas para el mismo código | Probar la misma etiqueta en ambas pantallas; validar siempre en **Ventas** primero |
| **Consulta de precios** no coincide con la etiqueta | La pantalla muestra precio de lista, no el importe decodificado | Usar **Ventas** o **POS** para validar; buscar por descripción o PLU de 6 dígitos |
| No puedo marcar **Cód. variable** | **Código de barras** ya es EAN-13 de 13 dígitos | Limpiar el código o usar solo los 6 dígitos del PLU |
| Error al guardar producto | Código de barras ≠ 6 dígitos con flag activo | Exactamente **6 números** |
| Listas de precio “grisadas” | Comportamiento esperado | Configurar solo la **lista por defecto** |
| Importación sin código variable | La importación no carga ese indicador | Crear o editar manualmente esos productos |
| Impuesto no editable en venta | Esperado para código variable | El impuesto de línea queda bloqueado en productos con **Cód. variable** |
| Cantidad rara en **POS** | Se cargó por nombre/PLU y no por el ticket de 13 dígitos | Borrar el ítem y volver a leer el ticket; la cantidad de un código variable queda bloqueada |

---

## Por síntoma — detalle

### No encuentra el producto

1. Abrí el producto en **Administración → Productos**.
2. Confirmá **Cód. variable** activo.
3. Verificá que **Código de barras** tenga **exactamente 6 dígitos** y que coincidan con los **primeros 6** de la etiqueta escaneada.
4. Si cargaste los 13 dígitos completos en el producto, corregilo: el ERP solo guarda el PLU.

### Precio incorrecto

1. Anotá los 6 dígitos centrales de una etiqueta de prueba y el importe que imprime la balanza.
2. Revisá **Preferencias → Decimales del Código Variable**.
3. Compará con la configuración de decimales en la balanza (manual del equipo).
4. Probá de nuevo en **Ventas → Nueva venta**.

### Ventas OK pero POS distinto

1. Escaneá la misma etiqueta en **Ventas** y en **POS**.
2. Compará producto, cantidad e importe de línea.
3. Si Ventas es correcto y POS no, operá con precaución en POS hasta validar con soporte.
4. Para capacitación, usá **Ventas** como referencia de validación.

### Consulta de precios confunde al equipo

Explicá al mostrador que **Consulta de precios** muestra el precio de **catálogo** (lista por defecto), no el importe de una etiqueta ya pesada. Para probar una etiqueta, usá **Ventas**.

---

## Checklist antes de escalar a soporte

- [ ] Etiqueta real escaneada (no solo código tipeado).
- [ ] PLU de 6 dígitos coincide balanza ↔ producto ERP.
- [ ] **Cód. variable** activo en el producto.
- [ ] **Decimales del Código Variable** revisados en Preferencias.
- [ ] Prueba hecha en **Ventas** (no solo en Consulta de precios).
- [ ] Si usan POS, comparación Ventas vs POS documentada.

---

## Ver también

- [Qué son los códigos variables y cómo usarlos](./codigos-variables.md)
- [Balanzas Systel y códigos variables](./balanzas-systel-y-codigos-variables.md)
- [Productos](../administracion/productos.md)
- [Preferencias](../configuracion/preferencias.md)
- [Ventas](../ventas/ventas.md)
- [POS](../ventas/pos.md)
- [Consulta de precios](../ventas/consulta-precio.md)
- [Problemas frecuentes](../problemas-frecuentes.md)
