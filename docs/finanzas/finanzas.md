---
title: 'Finanzas: caja, pagos, ingresos y cuenta corriente'
sidebar_label: Finanzas
description: 'El módulo de finanzas permite entender y controlar cómo circula el dinero dentro del negocio.'
keywords:
  - finanzas
  - caja
  - cuenta corriente
  - pagos
  - ingresos
  - egresos
  - deuda
  - flujo financiero
  - conciliación
  - monitor consolidado
  - ver caja global
sidebar_position: 1
---

## Resumen

El módulo de finanzas permite entender y controlar cómo circula el dinero dentro del negocio.

Integra la información proveniente de ventas, compras y pagos para ofrecer una visión completa de:

- cuánto te deben
- cuánto debés
- cuánto dinero tenés disponible

Es clave para tomar decisiones financieras y evitar errores operativos.

---

## Antes de empezar

- Tener registradas ventas y/o compras.
- Tener contactos cargados (clientes y proveedores).
- Configurar conceptos para ingresos y egresos manuales.
- Definir si la organización controla caja por operador o de forma global.

**Permisos frecuentes en finanzas:**

| Permiso | Para qué sirve |
|---------|----------------|
| Registrar pagos | Cobrar a clientes y pagar a proveedores. |
| Ingresos / Egresos | Cargar movimientos manuales fuera de ventas y compras. |
| **Ver caja global** | Filtrar por operador, ver caja de otros y abrir el monitor consolidado. |
| **Informe Caja Diaria** | Informe PDF entre fechas (Centro de informes o pantalla de caja). |
| **Editar caja inicial** | Cargar o modificar la caja inicial del día. |

Detalle de cada permiso en [Perfiles](../administracion/perfiles.md). Operación de caja en [Caja diaria](./caja-diaria.md).

---

## Cómo funciona el sistema financiero

En Zink ERP, el dinero se gestiona en tres niveles:

### 1. Cuenta corriente (deuda)

Registra lo que:

- los clientes te deben
- vos debés a proveedores

Se genera automáticamente con:

- ventas
- compras

---

### 2. Pagos (cancelación)

Permiten:

- cobrar a clientes
- pagar a proveedores

Actualizan la cuenta corriente y registran cómo se pagó.

---

### 3. Caja (dinero real)

La [Caja diaria](./caja-diaria.md) muestra:

- el dinero disponible
- los movimientos diarios por fecha y, según permisos, por operador

Quienes supervisan la sucursal pueden abrir el **monitor consolidado** (**Ver consolidado** en Caja diaria): vista de solo lectura con todos los operadores del día.

Se alimenta de:

- pagos
- ingresos
- egresos

---

## Flujo financiero

Venta / Compra → Cuenta Corriente → Pago → Caja

Esto significa:

1. Generás una venta o compra (se crea deuda)
2. Registrás un pago (cancelás deuda)
3. El dinero impacta en caja

Los ingresos y egresos manuales no pasan por cuenta corriente. Se usan para movimientos fuera del circuito principal de ventas, compras y pagos.

---

## Qué hace cada componente

| Componente        | Función |
|------------------|--------|
| Cuenta corriente | Control de deuda |
| Pagos            | Cancelación de deuda |
| Caja diaria      | Control del dinero por día y operador |
| Monitor consolidado | Resumen de toda la sucursal en el día (desde Caja diaria) |
| Ingresos         | Entradas manuales |
| Egresos          | Salidas manuales |

---

## Procedimiento de control diario

1. Revisá ventas y compras registradas.
2. Controlá cuenta corriente de clientes y proveedores.
3. Registrá cobros y pagos pendientes.
4. Cargá ingresos o egresos manuales solo si el movimiento no corresponde a ventas, compras o pagos.
5. Revisá [Caja diaria](./caja-diaria.md) por fecha y, si corresponde, por operador.
6. Si supervisás varios operadores, abrí **Ver consolidado** para ver ventas, cobros y medios de pago de toda la sucursal.
7. Compará medios de pago contra comprobantes externos.
8. Dejá observaciones cuando haya diferencias o ajustes.
9. Imprimí el resumen del día o el consolidado para archivo al cierre.

---

## Casos frecuentes

### Cobro a cliente

1. Se registra una venta
2. Se genera deuda en cuenta corriente
3. Se registra un pago
4. El dinero se refleja en caja

---

### Pago a proveedor

1. Se registra una compra
2. Se genera deuda
3. Se registra el pago
4. Se refleja salida de dinero

---

### Gasto operativo

Se registra directamente como egreso, sin pasar por cuenta corriente.

---

## Recomendaciones de uso

Para mantener control financiero:

- Registrá siempre ventas y compras correctamente
- Aplicá pagos sobre comprobantes
- Usá ingresos y egresos solo fuera del flujo principal

👉 La consistencia del sistema depende del orden en que trabajes.

---

## Si algo sale mal

- **Saldos incorrectos**
  - Revisá pagos aplicados.
  - Verificá si el movimiento está en el contacto correcto.
  - Revisá notas de crédito, notas de débito o movimientos manuales.

- **Caja no coincide**
  - Verificá ingresos, egresos y pagos.
  - Revisá fecha, operador y medio de pago.
  - Compará Total ventas contra Total ingresos ventas.
  - Recordá que el saldo en caja es efectivo: cobros con tarjeta o transferencia no suman igual que los ingresos totales.

- **No veo el monitor consolidado**
  - Revisá el permiso **Ver caja global** en [Perfiles](../administracion/perfiles.md).
  - El botón **Ver consolidado** está en Caja diaria, no en el menú lateral.

- **No sabés si usar pago, ingreso o egreso**
  - Si cancela deuda de cliente o proveedor, usá Pagos.
  - Si entra dinero fuera de ventas, usá Ingresos.
  - Si sale dinero fuera de compras, usá Egresos.

---

## Buenas prácticas

- Revisá caja diariamente.
- Controlá cuenta corriente con frecuencia.
- Evitá registrar movimientos manuales innecesarios.
- Si supervisás operadores, revisá el monitor consolidado durante la jornada y al cierre.

---

## Ver también

- [Cuenta corriente](./cuenta-corriente.md)
- [Pagos](./pagos.md)
- [Caja diaria](./caja-diaria.md)
- [Ingresos](./ingresos.md)
- [Egresos](./egresos.md)
- [Informes](../informes/informes.md)
- [Perfiles](../administracion/perfiles.md)
