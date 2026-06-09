---
title: Caja diaria | Zink ERP
sidebar_label: Caja diaria
description: >-
  La caja diaria es un panel de control que muestra el estado financiero del
  negocio en una fecha determinada. Permite visualizar en un solo lugar: en Zink
  ERP.
keywords:
  - caja diaria
  - cierre de caja
  - efectivo en caja
  - cobros del día
  - pagos del día
  - medios de pago
  - caja global
  - conciliación
  - Mercado Pago
sidebar_position: 4
---

## Resumen

La caja diaria es un panel de control que muestra el estado financiero del negocio en una fecha determinada.

Permite visualizar en un solo lugar:

- dinero disponible
- ventas y compras
- ingresos y egresos
- [medios de pago](../configuracion/medios-pago.md)
- movimientos fiscales

Es la herramienta principal para controlar que el negocio esté funcionando correctamente a nivel financiero.

---

## Antes de empezar

- Tener registradas ventas, compras, pagos, ingresos o egresos.
- Definir si la organización controla caja por operador o de forma global.
- Para ver o seleccionar caja de otros usuarios, el perfil debe tener permiso de **caja global**.
- Para modificar caja inicial, el perfil debe tener permiso para editar caja inicial.

---

## Ubicación dentro del sistema

Entrá desde **Finanzas → Caja diaria**.

Pagos / Ingresos / Egresos → Caja diaria

👉 Es el resultado consolidado de todas las operaciones del negocio.

---

## Cómo leer la caja diaria

La pantalla está organizada en bloques que representan distintos aspectos del negocio.

---

### 🧾 Información general

- **Caja diaria**: fecha seleccionada
- **Caja inicial**: dinero con el que se inicia el día
- **Efectivo en caja**: dinero disponible actual
- **Cantidad de ventas**: número de operaciones realizadas
- **Usuario**: si el perfil tiene permiso de caja global, permite revisar la caja de un operador específico

👉 Estos valores permiten entender rápidamente la actividad del día.

---

### 🧮 Totales operativos

- **Total ventas**: suma de ventas realizadas
- **Total compras**: suma de compras registradas

👉 Incluyen operaciones independientemente de si fueron cobradas o pagadas.

Por eso puede haber diferencia entre **Total ventas** y **Total ingresos ventas**: una venta puede quedar en cuenta corriente y cobrarse más tarde.

---

### 💳 Ingresos por ventas

Detalle de cómo se cobraron las ventas:

- efectivo
- transferencia
- tarjeta
- cuenta corriente
- Mercado Pago
- otros

👉 Permite entender cómo ingresa el dinero al negocio.

Si una venta quedó a cuenta corriente, no necesariamente aumenta el efectivo del día. Cuando se registra el cobro, ese movimiento aparece según el medio de pago usado.

---

### 💸 Egresos por compras

Detalle de cómo se pagaron las compras:

- efectivo
- transferencia
- tarjeta
- cuenta corriente
- otros

👉 Muestra cómo sale el dinero hacia proveedores.

---

### 📊 Movimientos adicionales

- **Ingresos**: dinero ingresado manualmente
- **Egresos**: gastos o retiros
- **Notas de crédito/débito**: ajustes financieros

👉 Representan movimientos fuera del flujo principal.

---

### 🧾 Información fiscal

- **Importe fiscal pendiente**
- **Importe fiscal autorizado**

👉 Permite controlar el estado fiscal de las operaciones.

---

### 📅 Informe entre fechas

Permite obtener el mismo análisis para un rango de fechas.

👉 Útil para análisis semanal o mensual.

---

## Qué cambia y qué no cambia

**La caja diaria:**

- ✔️ Consolida toda la información financiera
- ✔️ Permite análisis operativo
- ✔️ Puede mostrar caja por fecha y, según permisos, por usuario
- ✔️ Permite cargar o ajustar caja inicial si el perfil lo habilita
- ✔️ Ayuda a detectar errores
- ❌ No reemplaza la cuenta corriente
- ❌ No registra movimientos

La caja diaria lee movimientos generados en ventas, compras, pagos, ingresos, egresos y notas. Si necesitás corregir el origen de un importe, revisá la operación que generó ese movimiento.

---

## Casos frecuentes

### Cierre de caja

Al finalizar el día:

- comparar efectivo real vs sistema
- detectar diferencias
- revisar medios de pago
- dejar comentarios de actividad si hace falta

---

### Control de medios de pago

Ver [Medios de pago](../configuracion/medios-pago.md) si necesitás revisar qué opciones están disponibles para cobrar o pagar.

Analizar cómo se están cobrando las ventas:

- mucho efectivo
- mucho crédito
- transferencias

---

### Control de gastos

Revisar egresos e identificar desvíos.

### Control por operador

Si el usuario tiene permiso de caja global, puede filtrar por operador para analizar quién registró los movimientos del día.

Usalo cuando haya diferencias de caja o cuando varias personas operen ventas/cobros durante la misma jornada.

---

## Recomendaciones de uso

La caja diaria debe revisarse todos los días.

Es clave para:

- detectar errores rápidamente
- evitar pérdidas
- controlar el flujo de dinero

👉 Si no revisás la caja, no estás controlando el negocio.

---

## Si algo sale mal

- **Diferencias en efectivo**
  - Revisá pagos, ingresos y egresos.
  - Confirmá que la caja inicial sea correcta.
  - Revisá si algún cobro fue cargado con otro medio de pago.

- **Totales inconsistentes**
  - Verificá ventas o compras no registradas correctamente.
  - Compará Total ventas contra Total ingresos ventas: no miden exactamente lo mismo.
  - Revisá si hubo ventas a cuenta corriente.

- **Medios de pago incorrectos**
  - Revisá cómo se cargaron los pagos.
  - Si usás Mercado Pago, confirmá que el cobro haya quedado aprobado.

- **No aparece un cobro**
  - Revisá la fecha seleccionada.
  - Verificá si estás filtrando por un usuario específico.
  - Confirmá que el pago fue guardado y aplicado al contacto correcto.
  - Revisá la cuenta corriente del cliente.

- **No podés ver caja de otros usuarios**
  - Revisá el permiso de caja global en el perfil.

---

## Buenas prácticas

- Revisar al cierre de cada jornada
- Comparar con dinero real
- Analizar medios de pago
- Controlar movimientos manuales

---

## Ver también

- [Finanzas](./finanzas.md)
- [Pagos](./pagos.md)
- [Ingresos](./ingresos.md)
- [Egresos](./egresos.md)
- [Cuenta corriente](./cuenta-corriente.md)
- [Ventas](../ventas/ventas.md)
- [Perfiles](../administracion/perfiles.md)
