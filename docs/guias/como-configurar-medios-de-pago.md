---
title: 'Cómo configurar medios de pago en Zink ERP'
sidebar_label: Configurar medios de pago
description: 'Guía paso a paso para definir medios de pago en Zink ERP, probar cobros en POS o ventas y validar el impacto correcto en caja diaria.'
sidebar_position: 4
keywords:
  - medios de pago
  - efectivo
  - transferencia
  - tarjeta
  - caja diaria
---

## Objetivo

Dejar configurados los medios de pago que usa el negocio para cobrar y pagar sin errores de caja ni confusión operativa.

---

## Qué necesitás antes de empezar

- Acceso a configuración o preferencias.
- Saber qué medios usa realmente el negocio.
- Definir si hay integración externa, por ejemplo [Mercado Pago](../integraciones/mercado-pago.md).

---

## Paso a paso

### Paso 1: Definir qué medios van a existir

Ejemplos comunes:

- efectivo;
- transferencia;
- tarjeta;
- Mercado Pago;
- cuenta corriente.

### Paso 2: Revisar qué medios deben quedar habilitados

No hace falta exponer opciones que el equipo no usa. Conviene mostrar solo las necesarias para cada operación.

### Paso 3: Validar el uso real

Probá un circuito corto:

1. hacé una venta de prueba;
2. cobrá con un medio concreto;
3. revisá el impacto en [Caja diaria](../finanzas/caja-diaria.md).

### Paso 4: Probar casos reales

Revisá especialmente:

- cobro en efectivo;
- cobro con transferencia;
- cobro mixto si el negocio lo usa;
- cobro con integración externa si aplica.

---

## Errores comunes

### El medio no aparece al cobrar

Revisá permisos, configuración del punto de venta y medios habilitados.

### La caja no refleja lo esperado

Verificá si el cobro quedó en cuenta corriente o si se registró con otro medio.

### Mercado Pago no confirma

Revisá que la integración esté completa y que el pago esté aprobado.

---

## Preguntas frecuentes

### ¿Conviene cargar muchos medios desde el inicio?

No necesariamente. Conviene empezar por los que realmente usa el equipo y crecer después.

### ¿Un medio de pago cancela deuda por sí solo?

No. La deuda se cancela al registrar correctamente el pago aplicado.

---

## Ver también

- [Medios de pago](../configuracion/medios-pago.md)
- [POS](../ventas/pos.md)
- [Pagos](../finanzas/pagos.md)
- [Caja diaria](../finanzas/caja-diaria.md)

