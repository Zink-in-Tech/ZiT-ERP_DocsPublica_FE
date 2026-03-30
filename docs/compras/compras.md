---
title: Compras
description: Registrá la compra a proveedores, ingresá mercadería y generá el impacto en stock y cuenta corriente.
sidebar_position: 3
---

## Resumen

Las compras representan la instancia final del proceso de abastecimiento en Zink ERP.

Es donde se registra la operación con el proveedor, se ingresa la mercadería al stock y se impacta la cuenta corriente.

Puede generarse a partir de una orden de compra o registrarse directamente.

---

## Antes de empezar

- Tener proveedores cargados como contactos.
- Verificá que los productos estén configurados.
- Algunas modificaciones pueden requerir permisos especiales.
- **TODO: confirmar con producto** — comportamiento de recepción parcial o diferencias.

---

## Ubicación dentro del flujo

Orden de compra → Compra

La compra es la etapa final del proceso.

- Puede generarse desde una orden de compra
- También puede registrarse directamente

---

## Qué cambia y qué no cambia

**La compra:**

- ✔️ Ingresa stock
- ✔️ Impacta cuenta corriente
- ✔️ Registra la operación con el proveedor
- ❌ No es editable una vez confirmada (según estado)

---

## Procedimiento

1. Crear una nueva compra (o generarla desde una orden).
2. Seleccionar el proveedor.
3. Agregar productos y cantidades.
4. Verificar precios y condiciones.
5. Confirmar la compra.
6. Registrar el ingreso de mercadería:
   - se actualiza el stock
7. Verificar impacto en cuenta corriente.

---

## Estados

| Estado     | Descripción |
|------------|------------|
| BORRADOR   | Editable. |
| CONFIRMADO | No editable. |
| INGRESADO  | Se actualiza el stock. |
| CANCELADO  | Flujo cerrado. |

---

## Casos frecuentes

### Compra desde orden

Se genera la compra a partir de una orden previamente registrada.

### Compra directa

Se registra la compra sin planificación previa.

### Recepción de mercadería

Se confirma la llegada de productos y se actualiza el stock.

---

## Recomendaciones de uso

Las compras deben utilizarse cuando la operación con el proveedor ya está definida y la mercadería está lista para ser ingresada.

Es ideal en situaciones como:

- Recepción de productos
- Compras confirmadas
- Ingreso de stock

👉 Evitá registrar compras si todavía estás planificando (usar órdenes de compra).

---

## Si algo sale mal

- **Stock incorrecto**
  - Verificá cantidades antes de confirmar.

- **Diferencias con proveedor**
  - Revisá valores registrados.

- **No podés modificar**
  - Puede estar en estado CONFIRMADO o INGRESADO.

---

## Buenas prácticas

- Verificá la mercadería antes de ingresarla.
- Controlá precios y cantidades.
- Usá órdenes de compra para planificar.
- Registrá correctamente el proveedor.

---

## Ver también

- [Órdenes de compra](./orden-compras.md)
- [Flujo de compras](./compras.md)