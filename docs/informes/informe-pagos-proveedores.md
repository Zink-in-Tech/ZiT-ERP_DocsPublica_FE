---
title: 'Informe Pagos a proveedores'
sidebar_label: Informe Pagos a proveedores
description: 'Consultá los pagos a proveedores de un período con medio de pago, monto y usuario, y exportalos a CSV o PDF.'
sidebar_position: 75
keywords:
  - informe pagos
  - pagos a proveedores
  - egresos proveedores
  - exportar pagos
---

## Resumen

El informe **Pagos a proveedores** lista los pagos registrados en un rango de fechas. Muestra el total general y la cantidad de movimientos, y podés exportarlo a CSV o PDF.

Los pagos anulados no se incluyen.

---

## Antes de empezar

- Los pagos tienen que estar registrados en [Pagos](../finanzas/pagos.md).
- El rango de fechas puede ser de hasta 31 días.
- Tu perfil necesita permiso para ver este informe. Revisalo en [Perfiles](../administracion/perfiles.md).

---

## Procedimiento

1. Entrá a **Informes** y abrí la tarjeta **Informe de pagos a proveedores** (categoría **Finanzas**).
2. Indicá **Fecha desde** y **Fecha hasta**. Por defecto se cargan los últimos 7 días.
3. Si querés ver un solo proveedor, elegilo en **Contacto (opcional)**.
4. Tocá **Consultar**.
5. Revisá la tabla. Cada fila muestra:

   | Columna | Qué indica |
   |---------|------------|
   | **Fecha de pago** | Fecha en que se registró el pago. |
   | **Contacto** | Proveedor al que se le pagó. |
   | **Medio de pago** | Efectivo, transferencia, tarjeta u otro medio. |
   | **Monto** | Importe del pago. |
   | **Nº de pago** | Número del pago en Zink ERP. |
   | **Usuario creador** | Quién registró el pago. |
   | **Registro** | Fecha y hora de carga. |

6. Arriba de la tabla vas a ver el **Total general** y la **Cantidad de movimientos**.
7. Para guardar el resultado, usá **Exportar CSV** o **Exportar PDF**. El archivo incluye la fila de total general.

También podés usar el buscador de la tabla para encontrar un pago puntual.

---

## Si algo sale mal

- **No me deja consultar**
  - El rango no puede superar los 31 días. Dividí el período en tramos más cortos.
- **Falta un pago**
  - Revisá si está anulado: los pagos anulados no aparecen.
  - Confirmá que la fecha del pago esté dentro del rango.
- **No veo la tarjeta del informe**
  - Pedile al administrador que revise tus permisos en [Perfiles](../administracion/perfiles.md).

---

## Ver también

- [Informes](./informes.md)
- [Compras por proveedor](./informe-compras-proveedor.md)
- [Cobros de clientes](./informe-cobros-clientes.md)
- [Pagos](../finanzas/pagos.md)
