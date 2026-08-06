---
title: 'Formulario de documento V2: cabecera, ítems y atajos | Zink ERP'
sidebar_label: Formulario de documento (V2)
description: >-
  Patrón compartido del formulario rediseñado en órdenes de compra, compras,
  cotizaciones, presupuestos, pedidos y ventas: cabecera, ítems, pie y atajos.
sidebar_position: 8
keywords:
  - formulario V2
  - Probar V2
  - accesos rápidos
  - F2 guardar
  - F4 listado
  - ítems documento
---

## Objetivo

Describir el **formulario de documento V2** compartido por las pantallas comerciales rediseñadas (excepto POS). Cada módulo enlaza acá y solo documenta lo propio.

Aplica a: [órdenes de compra](../compras/orden-compras.md), [compras](../compras/compras.md), [cotizaciones](../ventas/cotizaciones.md), [presupuestos](../ventas/presupuestos.md), [pedidos](../ventas/pedidos.md) y [ventas](../ventas/ventas.md).

El **POS** tiene su propia interfaz; ver [POS](../ventas/pos.md).

---

## Convivencia V1 / V2

En pantallas con formulario nuevo puede aparecer el banner:

- **Probar V2** — entra al formulario rediseñado.
- **Volver a V1** — vuelve al formulario clásico.

La organización o preferencia puede dejar activa una u otra. Esta guía describe el **V2**.

---

## Estructura del formulario

1. **Cabecera:** contacto a ancho completo (con ver/alta de contacto) · número del documento · fila compacta de fechas y condiciones · interruptor **Enviar comprobante** (cuando aplica).
2. **Ítems:** sección **ITEMS** / **N Ítems** · tabla en escritorio / acordeón en celular.
3. **Pie:** observación · totales · botones de acción.

### Toolbar de ítems

| Control | Para qué sirve |
|---------|----------------|
| **Agregar Items** (en cotización: **Agregar Producto**) | Suma una línea. No hay atajo de tecla **+**. |
| **Listado (F4)** | Abre el listado de productos. |
| **Nuevo producto** | Alta rápida (si tu perfil tiene permiso). |
| Chip **⌨️ Accesos rápidos** | Muestra u oculta atajos; depende de la preferencia de accesos. |

Algunas pantallas agregan botones propios (**Stock crítico**, **Faltantes**, etc.).

### Pie y guardado

Botones habituales (no todos en todas las pantallas):

- **Regresar** · **Limpiar** · **Guardar** (hint **F2**) · **Guardar y Nuevo** · **Cancelar**

Al guardar aparece confirmación tipográfica del estilo **GUARDAR COMPRA** / **GUARDAR VENTA**, con **Confirmar** (↵) y **Cancelar** (Esc).

---

## Atajos comunes

| Tecla | Acción |
|-------|--------|
| **F2** | Guardar |
| **F4** | Listado de productos |
| **Enter** | Avanza entre campos de la línea (producto → precio/cantidad/impuestos según el documento) |
| **Esc** | Cancela el diálogo o sale de la acción actual |

### Accesos rápidos en búsqueda de productos

Preferencia: **Permitir accesos rápidos en búsqueda de productos**.

| Tecla | Acción (si está activo) |
|-------|-------------------------|
| **/** | Ir al precio del ítem anterior |
| **\*** | Ir a la cantidad del ítem anterior |

**Dónde funcionan hoy:** Compras, Presupuestos, Pedidos y Ventas.

En **Órdenes de compra** y **Cotizaciones** el chip puede verse, pero **/** y **\*** no están implementados: no los uses ni los documentes como operativos ahí.

---

## Totales

Según el documento, el pie puede mostrar:

- Subtotal · Descuento · Recargo · Envío · **TOTAL**

Órdenes de compra y cotizaciones son más simples (sin el mismo set de ajustes).

---

## Qué no cambió con el V2

- La cadena Cotización → Presupuesto → Pedido → Venta.
- Que stock y cuenta corriente impactan al **final** del circuito (venta **Entregado** / compra **Aprobado**).
- Reglas de negocio por etapa (estados, generación del documento hijo en borrador).

---

## Ver también

- [Flujo de ventas](../ventas/flujo-ventas.md)
- [Flujo de compras](../compras/flujo-compras.md)
- [Preferencias](../configuracion/preferencias.md)
- [POS](../ventas/pos.md) (interfaz distinta)
