---
title: 'Glosario: estados y términos de Zink ERP'
sidebar_label: Glosario
description: 'Glosario de Zink ERP: estados de cada documento, acciones y términos operativos como cuenta corriente, caja diaria y ARCA.'
sidebar_position: 99
keywords:
  - glosario
  - estados
  - borrador
  - confirmado
  - entregado
  - aprobado
  - cuenta corriente
  - caja diaria
  - dashboard
  - ARCA
---

## Estados

Cada documento muestra su estado en el listado. Estos son los estados que vas a ver y en qué documentos aparecen:

| Estado | Documentos | Qué significa |
|--------|------------|---------------|
| **Borrador** | Todos | Estado inicial. El documento se puede editar. |
| **Confirmado** | Todos | El documento quedó validado y, en general, ya no se edita. |
| **Aceptado** | Presupuestos y cotizaciones | El cliente aceptó la propuesta. Una cotización aceptada genera un presupuesto y un presupuesto aceptado genera un pedido, ambos en Borrador. Ver [Presupuestos](./ventas/presupuestos.md). |
| **En preparación** | Pedidos | El pedido se está preparando en depósito. Ver [Pedidos](./ventas/pedidos.md). |
| **Preparado** | Pedidos | El pedido está listo y generó una venta en Borrador. Ver [Pedidos](./ventas/pedidos.md). |
| **Despachado** | Ventas | Se controló la mercadería antes de entregarla (acción **Despachar**). Ver [Ventas](./ventas/ventas.md). |
| **Entregado** | Ventas | Estado final de una venta: descuenta stock e impacta la cuenta corriente. Ver [Ventas](./ventas/ventas.md). |
| **Control** | Compras | Etapa de revisión de la compra antes de aprobarla. Ver [Compras](./compras/compras.md). |
| **Aprobado** | Compras y órdenes de compra | Estado final exitoso. En compras, ingresa la mercadería al stock y puede impactar la cuenta corriente. Ver [Compras](./compras/compras.md). |
| **Rechazado** | Pedidos | El pedido volvió atrás para corregirlo. Ver [Pedidos](./ventas/pedidos.md). |
| **Cancelado** | Todos | Cierre sin éxito del documento. |

## Acciones sobre los estados

| Acción | Documentos | Qué hace |
|--------|------------|----------|
| **Confirmar** | Todos | Pasa el documento de Borrador a Confirmado. |
| **Preparar** / **Confirmar preparado** | Pedidos | Pasa el pedido a En preparación y después a Preparado. |
| **Despachar** / **Entregar** | Ventas | Pasa la venta a Despachado y después a Entregado. |
| **Controlar** / **Aprobar** | Compras | Pasa la compra a Control y después a Aprobado. |
| **Rechazar** | Ventas, pedidos y compras | Vuelve el documento a un estado editable, cuando el flujo lo permite. |
| **Cancelar** | Todos | Cierra el documento sin éxito. |

## Términos operativos

| Término | Definición |
|---------|------------|
| Dashboard | Pantalla principal al ingresar a Zink ERP: indicadores, alertas y accesos rápidos según tu rol y la organización activa. Ver [Dashboard](./admin/dashboard.md). |
| Cuenta corriente | Saldo y movimientos de deuda con clientes o proveedores. Ver [Cuenta corriente](./finanzas/cuenta-corriente.md). |
| Caja diaria | Panel financiero diario para controlar ingresos, egresos y medios de pago. Ver [Caja diaria](./finanzas/caja-diaria.md). |
| Medio de pago | Forma usada para cobrar o pagar: efectivo, transferencia, tarjeta, Mercado Pago o cuenta corriente. |
| Lista de precio | Conjunto de precios aplicado por defecto o por contacto. Puede ser automática (desde el costo) o de precio manual. Ver [Listas de precio](./configuracion/listas-precio.md). |
| Costo multi-moneda | Preferencia que permite cargar el costo del producto en ARS o USD. No habilita ventas en dólares. Ver [Preferencias](./configuracion/preferencias.md#costo-multi-moneda). |
| Cotización de moneda | Valor de 1 USD en ARS usado para convertir costos en dólares a pesos. Ver [Preferencias](./configuracion/preferencias.md#cotizacion-de-moneda). |
| Recalcular precios al modificar el costo | Interruptor del producto: si está activo, las listas automáticas se recalculan cuando cambia el costo. Ver [Productos](./administracion/productos.md#costo-y-recalculo-de-precios). |
| Contacto | Cliente, proveedor u organización relacionada. Ver [Contactos](./administracion/contactos.md). |
| Organización | Unidad operativa del sistema, como sucursal, franquicia o punto de venta. |
| Stock inter-org | Consulta de disponibilidad de productos entre organizaciones. Ver [Consulta de stock](./inventario/productos-consulta-inter-org.md). |
| POS | Punto de venta para operaciones rápidas de mostrador. Ver [POS](./ventas/pos.md). |
| ARCA | Facturación electrónica nativa de Zink ERP: emite comprobantes autorizados por ARCA (ex AFIP) sin intermediarios. Ver [ARCA](./integraciones/arca.md). |
| Facturante (legado) | Proveedor de facturación electrónica que se usaba antes de la integración nativa con ARCA. Ya no se ofrece. Ver [Facturante (legado)](./integraciones/facturante.md). |
| Mercado Pago | Integración de cobros externos. Ver [Mercado Pago](./integraciones/mercado-pago.md). |

---

## Ver también

- [Cómo funciona Zink ERP](./arquitectura.md)
- [Primeros pasos](./primeros-pasos.md)
- [Problemas frecuentes](./problemas-frecuentes.md)
