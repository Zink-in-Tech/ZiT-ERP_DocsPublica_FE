---
title: 'Glosario de Zink ERP: estados, módulos y términos operativos | Zink ERP'
sidebar_label: 'Glosario de Zink ERP: estados y términos operativos'
description: 'Glosario de Zink ERP: estados, módulos y términos operativos'
sidebar_position: 99
keywords:
  - glosario
  - estados
  - BORRADOR
  - CONFIRMADO
  - cuenta corriente
  - caja diaria
---

## Estados

| Término | Definición |
|---------|------------|
| BORRADOR | Estado editable inicial de una operación. Ver [Ventas](./ventas/ventas.md) y [Compras](./compras/compras.md). |
| CONFIRMADO | Estado en el que la operación queda validada y normalmente deja de ser editable. |
| DESPACHAR | Estado de ventas usado para preparar o controlar mercadería antes de entregar. |
| ENTREGADO | Estado final exitoso de una venta; descuenta stock e impacta cuenta corriente. |
| INGRESADO | Estado final exitoso de una compra; ingresa mercadería al stock. |
| PREPARADO | Estado de pedido listo para avanzar hacia la venta. Ver [Pedidos](./ventas/pedidos.md). |
| CANCELADO | Cierre sin éxito de una operación. |
| RECHAZAR | Acción que vuelve una operación comercial a BORRADOR cuando el flujo lo permite. |

## Términos operativos

| Término | Definición |
|---------|------------|
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
| Facturante | Integración de facturación electrónica. Ver [Facturante](./integraciones/facturante.md). |
| Mercado Pago | Integración de cobros externos. Ver [Mercado Pago](./integraciones/mercado-pago.md). |

---

## Ver también

- [Cómo funciona Zink ERP](./arquitectura.md)
- [Primeros pasos](./primeros-pasos.md)
- [Problemas frecuentes](./problemas-frecuentes.md)
