---
title: Primeros resultados con ZinK ERP
description: Empezá a usar ZinK ERP paso a paso y validá el funcionamiento completo del sistema en pocos días.
sidebar_position: 4
---

## Resumen

Esta guía te permite comenzar a usar ZinK ERP de forma práctica, recorriendo las funcionalidades clave en pocos días.

El objetivo es que puedas:

- configurar el sistema
- realizar operaciones reales
- entender cómo impacta cada acción

👉 Dedicando aproximadamente 1 hora por día.

---

## Cómo usar esta guía

- No es necesario completar todo en un solo día
- Podés avanzar a tu ritmo
- Cada paso está pensado para validar el sistema

---

## Día 1 — Configuración básica

**Objetivo:** preparar la base del sistema.

---

### Tareas

- Crear 2 contactos  
- Crear conceptos:
  - 3 de ingresos
  - 3 de egresos  
- Crear 3 productos  
- Revisar:
  - Preferencias  
  - Datos de la organización  
  - Perfil de usuario  

---

### Qué estás validando

- estructura básica del sistema  
- configuración inicial  
- datos necesarios para operar  

---

## Día 2 — Compras e inventario

**Objetivo:** entender cómo ingresa el stock.

---

### Tareas

- Registrar un ingreso  
- Registrar un egreso  
- Registrar inventario de productos ([Registro de inventario](./inventario/inventarios.md))  
- Crear 2 órdenes de compra ([Órdenes de compra](./compras/orden-compras.md)):
  - cancelar una  
  - confirmar otra y registrar la [Compra](./compras/compras.md) asociada  
- Marcar la compra como **INGRESADO** y verificar stock  
- Explorar [actualización masiva](./administracion/productos-actualizacion-masiva.md)  
- Revisar movimientos de inventario  

---

### Qué estás validando

- cómo se carga stock  
- cómo se corrige  
- cómo funciona el flujo de compras  

👉 Compras → Inventario

---

## Día 3 — Ventas completas

**Objetivo:** recorrer el flujo de ventas.

---

### Tareas

- Actualizar un contacto ([Contactos](./administracion/contactos.md))  
- Crear [cotización](./ventas/cotizaciones.md) o [presupuesto](./ventas/presupuestos.md)  
- Crear [pedido](./ventas/pedidos.md) y [venta](./ventas/ventas.md)  
- Registrar venta a consumidor final (o usar [POS](./ventas/pos.md))  
- Registrar [pago](./finanzas/pagos.md)  
- Revisar [cuenta corriente](./finanzas/cuenta-corriente.md), [caja diaria](./finanzas/caja-diaria.md) e [informes](/informes)  

---

### Qué estás validando

- flujo comercial completo  
- impacto en stock  
- impacto en finanzas  

👉 Cotización / Presupuesto → Pedido → Venta → Pago

---

## Día 4 — Finanzas y control

**Objetivo:** entender el dinero del negocio.

---

### Tareas

- Revisar pagos  
- Registrar pago a proveedor  
- Registrar cobro a cliente  
- Verificar saldos  
- Crear sucursal  
- Actualizar precios  
- Revisar notificaciones  

---

### Qué estás validando

- cómo se cancela deuda  
- cómo se mueve el dinero  
- cómo se coordinan sucursales  

👉 Cuenta corriente → Pago → Caja

---

## Qué deberías entender al finalizar

- cómo vender correctamente  
- cómo comprar y controlar stock  
- cómo registrar pagos  
- cómo analizar la caja  

Es decir: cómo funciona tu negocio dentro de ZinK ERP.

---

## Recomendaciones

- No saltees pasos  
- Validá cada operación  
- Revisá inventario y caja diariamente  

---

## Si algo sale mal

- **Un paso no coincide con lo que ves en pantalla**
  - Revisá permisos en [Perfiles](./administracion/perfiles.md) y la guía específica del módulo.
- **Stock o caja no cierran**
  - Verificá que la venta o compra esté en el estado final correcto (**ENTREGADO** / **INGRESADO**) y que los pagos estén registrados.

## Soporte

Si tenés dudas, consultá con tu administrador o la ayuda dentro del sistema.

---

## Ver también

- [Cómo funciona ZinK ERP](./arquitectura.md)
- [Flujo de ventas](./ventas/flujo-ventas.md)
- [Inventario](./inventario/inventarios.md)
- [Finanzas](./finanzas/finanzas.md)