---
title: 'Formulario de documentos: cabecera, ítems y atajos'
sidebar_label: Formulario de documentos
description: 'Cómo usar el formulario de documentos de Zink ERP en ventas, pedidos, presupuestos, cotizaciones, compras y notas: cabecera, ítems y atajos.'
sidebar_position: 8
keywords:
  - formulario de documentos
  - formulario V2
  - accesos rápidos
  - F2 guardar
  - F4 listado
  - ítems documento
---

## Resumen

El **formulario de documentos** es la pantalla estándar para cargar y editar documentos comerciales en Zink ERP. Desde el 16/09/2026 es el único formulario: ya no hay que elegir entre una versión anterior y una nueva. En la aplicación y en Novedades también aparece como **Formularios V2**.

Se usa en [ventas](../ventas/ventas.md), [pedidos](../ventas/pedidos.md), [presupuestos](../ventas/presupuestos.md), [cotizaciones](../ventas/cotizaciones.md), [compras](../compras/compras.md), [órdenes de compra](../compras/orden-compras.md), [notas de crédito](../ventas/notas-credito.md) y [notas de débito](../ventas/notas-debito.md). Cada guía de módulo explica lo propio de ese documento; acá está lo que comparten.

El **POS** tiene su propia pantalla; ver [POS](../ventas/pos.md).

## Antes de empezar

- Necesitás permiso para crear o editar el documento que vas a cargar.
- Para usar **/** y **\*** en la carga de ítems, activá la preferencia **Permitir accesos rápidos en búsqueda de productos**. Ver [Preferencias](../configuracion/preferencias.md).

## Procedimiento

### Partes del formulario

1. **Cabecera:** el **Contacto** ocupa todo el ancho, con botones para ver sus datos o dar de alta uno nuevo. Arriba a la derecha está el número del documento: en un alta dice **Se asignará al guardar**. Debajo hay una fila con fechas y condiciones y, cuando aplica, el ícono de sobre **Enviar comprobante**.
2. **Ítems:** la sección muestra la cantidad de ítems cargados. En la computadora se ve como tabla; en el celular, cada línea es un acordeón.
3. **Pie:** observación, totales y botones de acción.

### Barra de ítems

| Control | Para qué sirve |
|---------|----------------|
| **Agregar ítems** (en cotizaciones: **Agregar producto**) | Suma una línea. |
| **Listado (F4)** | Abre el listado de productos. |
| **Nuevo producto** | Alta rápida de un producto, si tu perfil tiene permiso. |
| **⌨️ Accesos rápidos** | Muestra u oculta la ayuda de atajos. |

Algunos documentos suman botones propios, como **Stock crítico** o **Faltantes**.

Si buscás un producto y aparece un solo resultado, se selecciona solo y el cursor pasa a la línea siguiente. Es útil si cargás con lector de código de barras.

### Guardar

Los botones habituales son **Regresar**, **Limpiar** (solo en altas), **Guardar** (con la pista **F2**) y **Guardar y nuevo**. No todos aparecen en todos los documentos.

Al guardar se abre una confirmación del estilo **GUARDAR VENTA** o **GUARDAR COMPRA**, con **Confirmar** (↵) y **Cancelar** (Esc). Mientras se guarda, los botones quedan bloqueados para evitar un doble envío.

En el celular, una barra fija abajo muestra el subtotal, el total y **Guardar**.

### Atajos

| Tecla | Acción |
|-------|--------|
| **F2** | Guardar |
| **F4** | Abrir el listado de productos |
| **Enter** | Avanzar entre los campos de la línea, o confirmar el guardado |
| **Esc** | Cancelar el diálogo o la acción actual |
| **/** | Ir al precio del ítem anterior (con accesos rápidos activos) |
| **\*** | Ir a la cantidad del ítem anterior (con accesos rápidos activos) |

**/** y **\*** funcionan en compras, presupuestos, pedidos y ventas.

### Totales

Según el documento, el pie muestra **Subtotal**, **Descuento**, **Recargo**, **Envío** y **Total**. Órdenes de compra y cotizaciones tienen un pie más simple.

### Qué se mantiene igual

- La cadena cotización → presupuesto → pedido → venta.
- El stock y la cuenta corriente se actualizan al final del circuito: venta **Entregado** o compra **Aprobado**.
- Los estados de cada documento y la generación del documento siguiente en borrador.

## Si algo sale mal

- **No puedo guardar:** revisá que el contacto esté cargado y que todas las líneas tengan producto, cantidad y precio válidos.
- **No veo un botón de la barra de ítems:** puede depender de tus permisos o del tipo de documento.
- **/** o **\*** no hacen nada: activá **Permitir accesos rápidos en búsqueda de productos** en Preferencias, o revisá que estés en compras, presupuestos, pedidos o ventas.
- **Se cortó internet al guardar una venta:** Zink ERP te muestra el comprobante y te deja reintentar sin repetir la venta. Ver [Ventas](../ventas/ventas.md).

## Ver también

- [Flujo de ventas](../ventas/flujo-ventas.md)
- [Flujo de compras](../compras/flujo-compras.md)
- [Duplicar documentos](./duplicar-documentos.md)
- [Compartir y enviar documentos](./compartir-y-enviar-documentos.md)
- [Preferencias](../configuracion/preferencias.md)
- [POS](../ventas/pos.md)
