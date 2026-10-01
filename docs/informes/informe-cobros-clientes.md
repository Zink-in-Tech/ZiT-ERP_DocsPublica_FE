---
title: 'Informe Cobros de clientes'
sidebar_label: Informe Cobros de clientes
description: 'Consultá los cobros a clientes de un período con medio de pago, monto y usuario, y exportalos a CSV o PDF.'
sidebar_position: 76
keywords:
  - informe cobros
  - cobros de clientes
  - ingresos clientes
  - exportar cobros
---

## Resumen

El informe **Cobros de clientes** lista los cobros registrados en un rango de fechas. Muestra el total general y la cantidad de movimientos, y podés exportarlo a CSV o PDF.

No incluye los cobros anulados ni los cobros a **Consumidor Final**.

---

## Antes de empezar

- Los cobros tienen que estar registrados en [Pagos](../finanzas/pagos.md) o al cobrar una venta.
- El rango de fechas puede ser de hasta 31 días.
- Tu perfil necesita permiso para ver este informe. Revisalo en [Perfiles](../administracion/perfiles.md).

---

## Procedimiento

1. Entrá a **Informes** y abrí la tarjeta **Informe de cobros de clientes** (categoría **Finanzas**).
2. Indicá **Fecha desde** y **Fecha hasta**. Por defecto se cargan los últimos 7 días.
3. Si querés ver un solo cliente, elegilo en **Contacto (opcional)**.
4. Tocá **Consultar**.
5. Revisá la tabla. Cada fila muestra:

   | Columna | Qué indica |
   |---------|------------|
   | **Fecha de cobro** | Fecha en que se registró el cobro. |
   | **Contacto** | Cliente que pagó. |
   | **Medio de pago** | Efectivo, transferencia, tarjeta, Mercado Pago u otro medio. |
   | **Monto** | Importe cobrado. |
   | **Nº de cobro** | Número del cobro en Zink ERP. |
   | **Usuario creador** | Quién registró el cobro. |
   | **Registro** | Fecha y hora de carga. |

6. Arriba de la tabla vas a ver el **Total general** y la **Cantidad de movimientos**.
7. Para guardar el resultado, usá **Exportar CSV** o **Exportar PDF**. El archivo incluye la fila de total general.

---

## Si algo sale mal

- **No me deja consultar**
  - El rango no puede superar los 31 días. Dividí el período en tramos más cortos.
- **El total no coincide con la caja diaria**
  - Este informe no incluye los cobros a Consumidor Final, por ejemplo ventas de mostrador sin cliente identificado. La [Caja diaria](../finanzas/caja-diaria.md) sí los suma.
  - Los cobros anulados tampoco aparecen.
- **No veo la tarjeta del informe**
  - Pedile al administrador que revise tus permisos en [Perfiles](../administracion/perfiles.md).

---

## Ver también

- [Informes](./informes.md)
- [Pagos a proveedores](./informe-pagos-proveedores.md)
- [Pagos](../finanzas/pagos.md)
- [Caja diaria](../finanzas/caja-diaria.md)
- [Cuenta corriente](../finanzas/cuenta-corriente.md)
