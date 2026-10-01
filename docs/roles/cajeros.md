---
title: 'Zink ERP para cajeros: POS, cobro y caja diaria'
sidebar_label: Para cajeros
description: 'Recorrido para cajeros y atención de mostrador: POS, medios de pago, caja diaria, consulta de precios y errores frecuentes.'
sidebar_position: 3
keywords:
  - cajero
  - POS
  - cobro
  - caja diaria
  - mostrador
---

## Objetivo

Este recorrido ayuda a operar ventas rápidas con seguridad, cobrar correctamente y detectar errores antes de que impacten en caja.

---

## Qué conviene aprender primero

1. [Cómo operar una venta rápida en POS](../guias/como-operar-venta-rapida-en-pos.md)
2. [POS](../ventas/pos.md)
3. [Consulta de precios](../ventas/consulta-precio.md)
4. [Medios de pago](../configuracion/medios-pago.md)
5. [Caja diaria](../finanzas/caja-diaria.md)

---

## Tareas habituales

### Antes de vender

- Verificar precio del producto.
- Confirmar cliente si afecta lista o cuenta corriente.
- Revisar si el medio de pago necesario está habilitado.

### Durante la venta

- Cargar productos correctamente (**F4** = listado si hay varios resultados).
- Aplicar descuentos o recargos si corresponde (**F6** / **F9** en POS).
- Cobrar con el medio correcto (**E** / **T** / **M** en cobro rápido; **F4** = calculadora de vuelto en efectivo; **F2** = guardar cobro).

### Al cerrar turno

- Revisar [Caja diaria](../finanzas/caja-diaria.md) con la fecha del día y tu usuario seleccionado.
- Comparar **Efectivo en caja** con el dinero real del turno.
- Usar **Actualizar ahora** si acabás de registrar un cobro y los totales no se ven al día.
- Imprimir o guardar en PDF tu resumen con **Imprimir** (queda la fecha y tu operador).
- Confirmar que no haya ventas pendientes de cobro.
- Escalar diferencias de caja o cobros rechazados al supervisor.

### Si supervisás el local (coordinador o encargado)

Con permiso **Ver caja global** podés además:

- filtrar la caja de cada operador;
- abrir **Ver consolidado** en Caja diaria para ver toda la sucursal en un solo resumen.

Ese monitor no está en el menú lateral: se abre desde Caja diaria. Detalle en [Caja diaria](../finanzas/caja-diaria.md).

---

## Si trabajás con balanza o productos por peso

Leé estas guías:

- [Qué son los códigos variables](../guias/codigos-variables.md)
- [Balanzas Systel y códigos variables](../guias/balanzas-systel-y-codigos-variables.md)
- [Problemas frecuentes con códigos variables](../guias/problemas-frecuentes-codigos-variables.md)

---

## Problemas comunes

- El sistema no encuentra el producto.
- El precio leído no coincide con la etiqueta.
- No aparece el medio de pago esperado.
- No se puede finalizar el cobro.
- La caja no refleja lo cobrado.
- No ves el botón **Ver consolidado** (suele requerir permiso **Ver caja global**; si no supervisás, no es necesario).

En esos casos, revisá primero [POS](../ventas/pos.md), [Medios de pago](../configuracion/medios-pago.md), [Caja diaria](../finanzas/caja-diaria.md) y [Problemas frecuentes](../problemas-frecuentes.md).
