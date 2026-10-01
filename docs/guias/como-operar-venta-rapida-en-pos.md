---
title: 'Cómo operar una venta rápida en POS en Zink ERP'
sidebar_label: Venta rápida en POS
description: 'Guía paso a paso para registrar una venta de mostrador en POS: cargar productos, elegir cliente, cobrar y validar el resultado en caja diaria.'
sidebar_position: 5
keywords:
  - venta rápida
  - POS
  - punto de venta
  - mostrador
  - cobro
  - caja diaria
---

## Objetivo

Completar una venta de mostrador en POS: cargar productos, cobrar y confirmar que quede registrada correctamente en ventas y caja.

---

## Qué necesitás antes de empezar

- Productos con precio configurado. Si falta alguno, revisá [Cómo configurar tu primer producto](./como-configurar-tu-primer-producto.md).
- [Medios de pago](../configuracion/medios-pago.md) habilitados para el punto de venta.
- Permiso para **realizar cobro en ventas**.
- Si vendés por peso o con etiqueta de balanza, validá antes [Códigos variables](./codigos-variables.md).

---

## Cuándo usar POS

Usalo cuando la venta se concreta en el momento, el producto se entrega al instante y no necesitás cotización, presupuesto ni pedido previo.

Si la operación tiene etapas comerciales, conviene [Flujo de ventas](../ventas/flujo-ventas.md) o [Ventas](../ventas/ventas.md).

---

## Paso a paso

### Paso 1: Entrar al POS

1. Andá a **Gestión Operativa → POS**.
2. Confirmá que el cliente muestre **Consumidor Final** o elegí uno con **[F3] Cliente** si la lista de precios o la cuenta corriente del contacto aplican.

### Paso 2: Cargar productos

3. Escaneá o buscá cada producto en **ESCANEAR O BUSCAR PRODUCTO**.
4. Ajustá cantidades con **+/−** o **[F8] Cantidad**. Descuento por línea: **[F7] Desc. ítem**. Eliminar: **[DEL]**.
5. Si hay muchos resultados similares, usá **[F4] Listado**. **[F5] Panel** abre el panel de productos.

### Paso 3: Revisar total y ajustes

6. Verificá subtotal y total antes de cobrar.
7. Si corresponde, aplicá **[F6] Descuento** o **[F9] Recargo** globales.

### Paso 4: Cobrar y finalizar

8. Usá **Finalizar (F2)** para confirmar (**FINALIZAR**).
9. Elegí el [medio de pago](../configuracion/medios-pago.md) con las tarjetas **Efectivo** (**E**), **Tarjeta** (**T**) o **Mercado Pago** (**M**), u otro medio con **+**.
10. Si cobrás en efectivo y necesitás vuelto, abrí la calculadora con **F4**. Para repartir el cobro, usá **Dividir**.
11. Guardá con **Guardar** (**F2**). El sistema genera la venta.
12. En **Venta registrada** podés **Imprimir**, emitir **Fiscal (F10)** o **Nueva venta (ESC)**.

### Paso 5: Validar el resultado

13. Revisá que el total cobrado sea el esperado.
14. Si tu turno lo requiere, controlá el impacto en [Caja diaria](../finanzas/caja-diaria.md).

---

## Errores comunes

### Finalizar deshabilitado

No hay productos cargados, falta permiso para realizar cobro en ventas, o la venta se está guardando (**Guardando…**).

### El precio no coincide

Revisá el cliente seleccionado, la [lista de precios](../configuracion/listas-precio.md) del contacto y la lista por defecto de la organización.

### No encuentra el producto

Probá código de barras exacto, búsqueda por descripción o **[F4] Listado**. Si usás etiqueta de balanza, revisá [Códigos variables](./codigos-variables.md).

### El medio de pago no aparece

Revisá [Medios de pago](../configuracion/medios-pago.md), permisos y configuración del punto de venta.

### La caja no refleja lo cobrado

Verificá que el cobro no haya quedado en cuenta corriente ni registrado con otro medio.

---

## Preguntas frecuentes

### ¿POS reemplaza al flujo de ventas?

No. POS resuelve ventas rápidas. El flujo completo sirve para operaciones con etapas o seguimiento.

### ¿Puedo vender a un cliente con cuenta corriente?

Sí, si seleccionás el contacto y la configuración del negocio lo permite. Revisá el comportamiento de cobro antes de operar en vivo.

### ¿Qué hago si trabajo con productos por peso?

Validá el circuito con [Códigos variables](./codigos-variables.md) y [Balanzas Systel](./balanzas-systel-y-codigos-variables.md) antes de la primera venta real.

---

## Ver también

- [POS](../ventas/pos.md)
- [Para cajeros](../roles/cajeros.md)
- [Cómo configurar medios de pago](./como-configurar-medios-de-pago.md)
- [Consulta de precios](../ventas/consulta-precio.md)
- [Caja diaria](../finanzas/caja-diaria.md)
