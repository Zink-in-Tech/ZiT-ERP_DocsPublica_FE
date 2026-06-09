---
sidebar_position: 3
title: >-
  Primeros pasos en Zink ERP: configuración inicial y primera operación | Zink
  ERP
sidebar_label: Primeros pasos
description: >-
  Esta guía te ayuda a empezar a usar ZinK ERP de forma correcta, configurando
  lo necesario y entendiendo cómo operar desde el primer momento.
keywords:
  - configuración inicial
  - onboarding
  - primera venta
  - preferencias
  - usuarios y perfiles
---

## Resumen

Esta guía te ayuda a empezar a usar ZinK ERP de forma correcta, configurando lo necesario y entendiendo cómo operar desde el primer momento.

El objetivo es evitar errores comunes y lograr control desde el inicio.

---

## Antes de empezar

- Tener usuario y acceso al sistema.
- Definir quién será administrador.
- Relevar el tipo de operación antes de configurar: venta rápida/POS, venta comercial por etapas, compras, stock, caja, cuenta corriente e integraciones.

---

## Paso 1: Acceso al sistema

1. Ingresá a la URL del sistema.
2. Iniciá sesión con tu usuario y contraseña.
3. Si corresponde, seleccioná la organización.

### Consideraciones

- El email se usa para recuperación de contraseña.
- Usuarios inactivos no pueden ingresar.
- Usuarios bloqueados deben ser habilitados por un administrador.

---

## Paso 2: Entender cómo funciona el sistema

Antes de operar, es importante entender la lógica general:

- Ventas → generan ingresos
- Compras → generan egresos
- Inventario → controla stock
- Finanzas → controla dinero

Recomendado: [Cómo funciona ZinK ERP](./arquitectura.md)

---

## Paso 3: Configuración inicial (administradores)

Antes de operar, configurá el sistema correctamente.

### 3.1 Datos de la organización

Configurá razón social, CUIT, direcciones, logo y moneda. Ver [Datos de la organización](./configuracion/datos-org.md) y el hub [Configuración](./configuracion/configuracion.md).

Impacta en comprobantes e informes.

### 3.2 Preferencias

Definí [listas de precio](./configuracion/listas-precio.md), [medios de pago](./configuracion/medios-pago.md), vencimientos, formatos de comprobantes, comportamiento de ventas y compras, y manejo de stock, caja y pagos. Ver [Preferencias](./configuracion/preferencias.md).

Estas configuraciones afectan toda la operación.

### 3.3 Usuarios y perfiles

Creá usuarios, asigná perfiles y definí permisos. Ver [Usuarios](./administracion/usuarios.md) y [Perfiles](./administracion/perfiles.md).

Cada usuario verá y podrá hacer solo lo que le corresponde.

### 3.4 Organizaciones (si aplica)

Si trabajás con múltiples sucursales, configurá cada organización, asigná responsables y vinculá contactos. Ver [Alta de organización](./administracion/organizacion-alta.md) y [Múltiples sucursales](./administracion/multi-sucursal.md).

### 3.5 Configuración mínima por tipo de negocio

| Tipo de operación | Configuración clave |
|-------------------|---------------------|
| Mostrador o retail | POS, medios de pago, lista de precios default, permisos de cobro y control diario de caja. |
| Venta comercial por etapas | Cotizaciones, presupuestos, pedidos, condiciones del cliente, cuenta corriente y permisos por etapa. |
| Negocio con stock | Productos, ubicaciones, inventarios, stock mínimo y reglas de salida de mercadería. |
| Operación con facturación o cobros externos | Integraciones, datos fiscales, puntos de venta y permisos de administración. |

No hace falta configurar todo el ERP el primer día. Conviene empezar por el circuito real del negocio y sumar módulos cuando el equipo ya domina la operación básica.

---

## Paso 4: Primera operación recomendada

Para validar que todo funciona correctamente, elegí una opción según tu negocio:

### Opción A: Venta rápida

Seguí [POS](./ventas/pos.md) y verificá el impacto en [Caja diaria](./finanzas/caja-diaria.md).

### Opción B: Venta con flujo

Seguí [Cotizaciones](./ventas/cotizaciones.md) → [Presupuestos](./ventas/presupuestos.md) → [Ventas](./ventas/ventas.md) → [Pagos](./finanzas/pagos.md). Consultá el mapa completo en [Flujo de ventas](./ventas/flujo-ventas.md).

### Opción C: Compra

Seguí [Órdenes de compra](./compras/orden-compras.md) → [Compras](./compras/compras.md) y verificá stock en [Registro de inventario](./inventario/inventarios.md).

---

## Paso 5: Validaciones clave

Después de operar, verificá:

- stock actualizado (inventario)
- deuda registrada (cuenta corriente)
- dinero reflejado (caja diaria)

Esto confirma que el sistema está funcionando correctamente.

---

## Uso cotidiano

En el día a día:

- Entrá por tablero o dashboard
- Usá los módulos según la operación
- Consultá ayuda contextual en cada pantalla

---

## Casos frecuentes

### Usuario nuevo

Debe tener perfil y permisos asignados.

### Error en operación

Revisá el flujo utilizado, los datos cargados y el impacto en inventario y finanzas.

---

## Si algo sale mal

- **No podés ingresar**
  - Usuario inactivo o bloqueado
- **No ves opciones**
  - Falta de permisos
- **Resultados incorrectos**
  - Revisá configuración inicial (preferencias, listas, perfiles)

---

## Buenas prácticas

- Definir roles desde el inicio
- Validar primera operación completa
- Controlar caja diariamente
- Capacitar al equipo

---

## Ver también

- [Cómo funciona ZinK ERP](./arquitectura.md)
- [Primeros resultados](./primeros-4-dias.md)
- [Aprender por rol](./roles/aprender-por-rol.md)
- [Configurar tu primer producto](./guias/como-configurar-tu-primer-producto.md)
- [Configurar medios de pago](./guias/como-configurar-medios-de-pago.md)
- [Flujo de ventas](./ventas/flujo-ventas.md)
- [Inventario](./inventario/inventario.md)
- [Finanzas](./finanzas/finanzas.md)
