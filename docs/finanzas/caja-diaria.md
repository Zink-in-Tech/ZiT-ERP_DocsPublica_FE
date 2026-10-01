---
title: 'Caja diaria'
sidebar_label: Caja diaria
description: 'Controlá el dinero del día en Caja diaria: ventas, compras, ingresos, egresos y medios de pago, con altas rápidas desde el botón +.'
keywords:
  - caja diaria
  - cierre de caja
  - efectivo en caja
  - cobros del día
  - pagos del día
  - medios de pago
  - caja global
  - monitor consolidado
  - ver consolidado
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

Quienes supervisan la sucursal también pueden abrir el **monitor global**: una vista consolidada de todos los operadores del día.

Es la herramienta principal para controlar que el negocio esté funcionando correctamente a nivel financiero.

---

## Antes de empezar

- Tener registradas ventas, compras, pagos, ingresos o egresos.
- Definir si la organización controla caja por operador o de forma global.

**Permisos que suelen necesitarse:**

| Permiso | Para qué sirve |
|---------|----------------|
| **Ver caja global** | Filtrar por operador, ver la caja de otros usuarios y abrir el monitor consolidado. |
| **Informe Caja Diaria** | Generar el informe PDF entre fechas (desde el Centro de informes o desde la pantalla de caja). |
| **Editar caja inicial** | Cargar o modificar la caja inicial del día (permiso aparte). |

Si no tenés alguno de estos permisos, pedile al administrador que los revise en [Perfiles](../administracion/perfiles.md).

---

## Ubicación dentro del sistema

Entrá desde **Finanzas → Caja diaria**.

Pagos / Ingresos / Egresos → Caja diaria

👉 Es el resultado consolidado de todas las operaciones del negocio.

El **monitor global** no está en el menú lateral: se abre desde la propia pantalla de Caja diaria (ver más abajo).

---

## Cómo leer la caja diaria

![Caja diaria con fecha, caja inicial, efectivo en caja, totales y tarjetas de ingresos y egresos con su botón +](/img/ayuda/finanzas/caja-diaria-01.png)

La pantalla está organizada en bloques que representan distintos aspectos del negocio.

En la parte superior derecha tenés accesos rápidos: selector de operador, actividad del día (**Ver actividad**), **Imprimir** y, si tu perfil lo permite, **Ver consolidado**. Cada tarjeta tiene además un botón **+** para cargar movimientos (ver [Altas rápidas](#altas-rapidas)).


---

### 🧾 Información general

- **Caja diaria**: fecha seleccionada
- **Caja inicial**: dinero con el que se inicia el día
- **Efectivo en caja**: dinero disponible actual
- **Cantidad de ventas**: número de operaciones realizadas
- **Usuario**: si el perfil tiene permiso **Ver caja global**, permite revisar la caja de un operador específico
- **Act. automática en X min**: indica cuándo se actualizará sola la pantalla, con una barra de progreso
- **Actualizar ahora**: refresca los datos al instante, sin esperar la actualización automática
- **Imprimir**: genera una impresión o PDF de lo que ves en pantalla (fecha y operador si aplica)

👉 Estos valores permiten entender rápidamente la actividad del día.

La pantalla se actualiza sola cada pocos minutos. Si dejás la pestaña en segundo plano, la actualización automática se pausa hasta que vuelvas a la pantalla.

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

### ➕ Altas rápidas con el botón + {#altas-rapidas}

Podés registrar movimientos sin salir de Caja diaria. Cada tarjeta tiene un botón **+** junto a su título:

| Tarjeta | Botón **+** | Qué abre |
|---------|-------------|----------|
| **Total ingresos ventas** | **Nuevo cobro** | El diálogo **Registrar cobro**. |
| **Total egresos compras** | **Nuevo pago** | El diálogo **Registrar pago**. |
| **Notas de crédito** | **Nueva nota de crédito** | El alta de una nota de crédito. |
| **Notas de débito** | **Nueva nota de débito** | El alta de una nota de débito. |
| **Total otros ingresos** | **Agregar ingreso** | El alta de un ingreso con la fecha del día. |
| **Total otros egresos** y **Total alivios de caja** | **Agregar egreso** | El alta de un egreso con la fecha del día. |

1. Entrá a **Finanzas → Caja diaria**.
2. Tocá el **+** de la tarjeta que corresponda.
3. Completá el movimiento. En cobros y pagos, elegí el **Contacto**, el **Medio de pago** y el **Importe**.
4. Guardá. La caja se actualiza con el nuevo movimiento.

Cada botón aparece solo si tu perfil tiene permiso para crear ese tipo de movimiento.

#### Cargar un movimiento de un concepto puntual

Si el movimiento tiene que quedar asociado a un **concepto** concreto (por ejemplo, *Retiro del dueño*):

1. Tocá la fila del concepto (›) dentro de la tarjeta de ingresos o egresos.
2. En el detalle vas a ver el **Total del día** de ese concepto.
3. Tocá **Agregar ingreso con este concepto** o **Agregar egreso con este concepto**. El alta se abre con la fecha y el concepto ya cargados.

También podés tocar **Ver listado** para ir a todos los movimientos del concepto.

#### Gestionar conceptos

Si el concepto que necesitás no existe, no hace falta salir del alta. En el formulario del ingreso o egreso, tocá el engranaje **Gestionar conceptos** junto al campo **Concepto** para crear, editar o desactivar conceptos. Al cerrar, el selector se actualiza solo. Ver [Conceptos](../administracion/conceptos.md).

---

### 📊 Monitor global (vista consolidada)

Resumen de **toda la sucursal** en la fecha que tengas seleccionada en Caja diaria. Es solo lectura y no reemplaza la caja individual de cada operador.

**Para quién**

Coordinadores o administradores con permiso **Ver caja global** (el mismo que permite filtrar por operador).

**Cómo abrirlo**

1. Entrá a **Finanzas → Caja diaria**.
2. Elegí la fecha del día que querés supervisar.
3. Arriba a la derecha, junto al operador, actividad e imprimir, tocá **Ver consolidado**.

No aparece en el menú lateral: solo desde Caja diaria.

**Qué muestra**

- Cantidad y total de **ventas** y de **cobros**, por separado
- **Ticket promedio** de la sucursal
- **Ingresos**, **egresos** y **saldo en efectivo**  
  👉 El saldo es el efectivo en caja, no la suma de todos los cobros (cobros con tarjeta o transferencia no impactan igual que el efectivo)
- **Distribución por medio de cobro**: monto y porcentaje
- **Desglose por operador**: ventas realizadas, cobros registrados, ticket promedio y porcentaje sobre los totales

**Actualización**

- Se refresca sola cada 5 minutos, con indicador y barra de progreso
- Podés usar **Actualizar ahora** en cualquier momento
- Si la pestaña queda en segundo plano, la actualización automática se pausa

**Impresión**

Desde el monitor podés **Imprimir** o guardar en PDF el consolidado del día.

**Alcance**

- Solo la sucursal en la que estás trabajando
- Solo lectura: no permite modificar movimientos
- Misma fecha que la Caja diaria desde la que lo abriste

---

### 🖨️ Imprimir resumen del día

En Caja diaria y en el monitor global podés imprimir lo que ves en pantalla. No es lo mismo que el informe entre fechas:

| | **Imprimir (pantalla)** | **Informe entre fechas** |
|---|-------------------------|---------------------------|
| **Qué imprime** | Lo que ves en pantalla | Un rango de fechas, en un PDF |
| **Fecha / operador** | Respeta el filtro actual | No respeta operador |
| **Permiso** | Caja diaria | Informe Caja Diaria |

👉 Usá **Imprimir** para el cierre del día o del operador. Usá **Informe entre fechas** para análisis semanal, mensual o de auditoría.

---

### 📅 Informe entre fechas

Permite obtener el mismo análisis para un rango de fechas.

Podés iniciarlo desde la card en el [Centro de informes](../informes/informes.md) o desde la pantalla de Caja diaria, según cómo esté configurado tu acceso.

👉 Útil para análisis semanal o mensual. Requiere permiso **Informe Caja Diaria**.

---

## Qué cambia y qué no cambia

**La caja diaria:**

- ✔️ Consolida toda la información financiera
- ✔️ Permite análisis operativo
- ✔️ Puede mostrar caja por fecha y, según permisos, por usuario
- ✔️ Permite cargar o ajustar caja inicial si el perfil lo habilita
- ✔️ Ofrece monitor consolidado para supervisar toda la sucursal
- ✔️ Ayuda a detectar errores
- ❌ No reemplaza la cuenta corriente
- ✔️ Permite cargar cobros, pagos, notas, ingresos y egresos con el botón **+**

La caja diaria lee movimientos generados en ventas, compras, pagos, ingresos, egresos y notas. Si necesitás corregir el origen de un importe, revisá la operación que generó ese movimiento.

---

## Casos frecuentes

### Cierre de caja

Al finalizar el día:

- comparar efectivo real vs sistema
- detectar diferencias
- revisar medios de pago
- dejar comentarios de actividad si hace falta
- imprimir el resumen del día o el consolidado para archivo

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

---

### Control por operador

Si tenés permiso **Ver caja global**, podés filtrar por operador para analizar quién registró los movimientos del día.

Con el mismo permiso también podés abrir **Ver consolidado** y ver a todos los operadores a la vez: ventas, cobros y participación sobre los totales.

Usalo cuando:

- haya diferencias de caja
- varias personas operen ventas y cobros en la misma jornada
- quien vende y quien cobra no sea la misma persona

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

- **No veo el botón + en una tarjeta**
  - Tu perfil no tiene permiso para crear ese tipo de movimiento. Revisalo en [Perfiles](../administracion/perfiles.md).

- **No podés ver caja de otros usuarios**
  - Revisá el permiso **Ver caja global** en [Perfiles](../administracion/perfiles.md).

- **No veo el botón Ver consolidado**
  - Confirmá que tu perfil tenga permiso **Ver caja global**.

- **El monitor consolidado no muestra datos**
  - Verificá que la fecha sea la correcta.
  - Confirmá que haya movimientos registrados en la sucursal ese día.

- **El saldo del monitor no coincide con todos los cobros**
  - El saldo refleja **efectivo en caja**. Cobros con tarjeta, transferencia u otros medios no suman igual que los ingresos totales.

---

## Buenas prácticas

- Revisar al cierre de cada jornada
- Comparar con dinero real
- Analizar medios de pago
- Controlar movimientos manuales
- Revisar el monitor global durante el día si supervisás varios operadores
- Usar **Imprimir** al cierre para guardar el consolidado de sucursal, además de la caja individual de cada operador

---

## Ver también

- [Finanzas](./finanzas.md)
- [Pagos](./pagos.md)
- [Ingresos](./ingresos.md)
- [Egresos](./egresos.md)
- [Cuenta corriente](./cuenta-corriente.md)
- [Conceptos](../administracion/conceptos.md)
- [Ventas](../ventas/ventas.md)
- [Informes](../informes/informes.md)
- [Perfiles](../administracion/perfiles.md)
