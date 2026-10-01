---
title: 'Conceptos'
sidebar_label: Conceptos
description: 'Los conceptos permiten clasificar los movimientos de caja como ingresos o egresos.'
sidebar_position: 5
keywords:
  - conceptos
  - ingresos egresos
  - categoría caja
---

## Resumen

Los conceptos permiten clasificar los movimientos de caja como ingresos o egresos.

Se utilizan para organizar y analizar la información en reportes, pero no impactan la cuenta corriente.

Cada concepto pertenece a un único tipo de movimiento: ingreso o egreso.

---

## Antes de empezar

- Definí qué categorías necesitás para clasificar los movimientos.
- Tené en cuenta que el tipo (ingreso o egreso) no se puede cambiar después.

---

## Procedimiento

Los conceptos no tienen un ítem propio en el menú lateral: se administran desde los formularios donde se usan, con el botón **Gestionar conceptos**.

1. Abrí el alta de un **ingreso** o un **egreso** (desde **Finanzas** o con el botón **+** de [Caja diaria](../finanzas/caja-diaria.md#altas-rapidas)), o el alta de una **nota de crédito** o **nota de débito**.
2. Junto al campo **Concepto** (o **Motivo**, en las notas), tocá el engranaje **Gestionar conceptos**.
3. Se abre la lista de conceptos de ese tipo (por ejemplo, **Conceptos — Ingresos**), con **Código**, **Nombre** y **Activo**. En egresos también vas a ver **Alivio de caja**.
4. Para crear uno nuevo o editar uno existente, completá:
   - **Código**
   - **Nombre**
   - **Activo**
   - **Es alivio de caja** (solo en egresos)

   El **Tipo de movimiento** viene definido y no se puede cambiar.
5. Tocá **Guardar**.
6. Cerrá la lista: el selector del formulario se actualiza solo y ya podés elegir el concepto.

Si un concepto ya no se usa, desactivalo en lugar de borrarlo.

---

## Campos principales

### Tipo de movimiento

Define si el concepto se usa para ingreso o egreso.

### Código

Identificador corto para búsquedas.

### Nombre

Descripción del concepto utilizada en reportes.

---

## Casos frecuentes

### Clasificación de ingresos

Ejemplo: ventas, cobros, ajustes positivos.

### Clasificación de egresos

Ejemplo: gastos, pagos, compras menores.

---

## Si algo sale mal

- **Concepto incorrecto en un movimiento**
  - Revisá el tipo seleccionado (no se puede cambiar después).
- **No veo el engranaje Gestionar conceptos**
  - Tu perfil necesita permiso para ver, crear o editar conceptos. Revisalo en [Perfiles](./perfiles.md).
- **No aparece un concepto en el selector**
  - Puede estar desactivado. Abrí **Gestionar conceptos** y volvé a activarlo.

---

## Ver también

- [Tutorial en video: administrar conceptos](../guias/tutorial-administrar-conceptos.mdx)
- [Administración](./administracion.md)
- [Ingresos](../finanzas/ingresos.md)
- [Egresos](../finanzas/egresos.md)
- [Informe Ingresos](../informes/informe-ingresos.md)
