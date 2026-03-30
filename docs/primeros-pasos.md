---
sidebar_position: 3
title: Aspectos Generales
description: Configurá ZinK ERP y empezá a operar tu negocio correctamente desde el primer día.
---

## Resumen

Esta guía te ayuda a empezar a usar ZinK ERP de forma correcta, configurando lo necesario y entendiendo cómo operar desde el primer momento.

El objetivo es evitar errores comunes y lograr control desde el inicio.

---

## Antes de empezar

- Tener usuario y acceso al sistema.
- Definir quién será administrador.
- **TODO: confirmar con producto** — configuración inicial recomendada según tipo de negocio.

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

👉 Recomendado:  
- [Cómo funciona ZinK ERP](./arquitectura.md)

---

## Paso 3: Configuración inicial (administradores)

Antes de operar, configurá el sistema correctamente.

---

### 3.1 Datos de la organización

Configurá:

- razón social
- CUIT
- direcciones
- logo
- moneda

👉 Impacta en comprobantes e informes.

---

### 3.2 Preferencias

Definí:

- listas de precios
- vencimientos
- formatos de comprobantes
- comportamiento de ventas y compras

👉 Estas configuraciones afectan toda la operación.

---

### 3.3 Usuarios y perfiles

- Creá usuarios
- Asigná perfiles
- Definí permisos

👉 Cada usuario verá y podrá hacer solo lo que le corresponde.

---

### 3.4 Organizaciones (si aplica)

Si trabajás con múltiples sucursales:

- configurá cada organización
- asigná responsables
- vinculá contactos

---

## Paso 4: Primera operación recomendada

Para validar que todo funciona correctamente:

---

### 👉 Opción A: Venta rápida

1. Ir a POS
2. Registrar una venta
3. Verificar impacto en caja

---

### 👉 Opción B: Venta con flujo

1. Crear cotización
2. Convertir a presupuesto
3. Convertir a venta
4. Registrar pago

---

### 👉 Opción C: Compra

1. Registrar compra
2. Verificar ingreso de stock
3. Verificar cuenta corriente

---

## Paso 5: Validaciones clave

Después de operar, verificá:

- stock actualizado (inventario)
- deuda registrada (cuenta corriente)
- dinero reflejado (caja diaria)

👉 Esto confirma que el sistema está funcionando correctamente.

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

---

### Error en operación

Revisar:

- flujo utilizado
- datos cargados
- impacto en inventario y finanzas

---

## Recomendaciones de uso

- Seguí los flujos del sistema (no saltear pasos)
- Verificá stock y caja diariamente
- Configurá correctamente antes de operar

👉 El orden en que trabajás impacta directamente en el control del negocio.

---

## Si algo sale mal

- **No podés ingresar**
  - Usuario inactivo o bloqueado

- **No ves opciones**
  - Falta de permisos

- **Resultados incorrectos**
  - Revisar configuración inicial

---

## Buenas prácticas

- Definir roles desde el inicio
- Validar primera operación completa
- Controlar caja diariamente
- Capacitar al equipo

---

## Ver también

- [Cómo funciona ZinK ERP](./arquitectura.md)
- [Flujo de ventas](./ventas/flujo-ventas.md)
- [Inventario](./inventario/inventarios.md)
- [Finanzas](./finanzas/finanzas.md)