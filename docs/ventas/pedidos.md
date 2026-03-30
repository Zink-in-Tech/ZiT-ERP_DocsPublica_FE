---
title: Pedidos
description: Registrá pedidos confirmados para preparar mercadería y generar automáticamente la venta.
sidebar_position: 4
---

## Resumen

Los pedidos permiten registrar una compra confirmada por el cliente y organizar la preparación de la mercadería antes de generar la venta.

Funcionan como un paso intermedio entre la intención de compra y la venta final, especialmente útil cuando hay procesos de picking o preparación en depósito.

Al completar la preparación, el sistema genera automáticamente la venta asociada.

---

## Antes de empezar

- El contacto **no puede ser Consumidor Final**.
- Verificá que los productos tengan precios válidos.
- Algunas modificaciones pueden requerir permisos especiales.

---

## Cuándo usar pedidos

Usá pedidos cuando:

- El cliente ya confirmó la compra.
- Necesitás preparar mercadería antes de entregarla.
- Trabajás con picking o depósito.
- Querés separar el proceso de venta en etapas.

---

## Qué cambia y qué no cambia

**El pedido:**

- ✔️ Organiza la preparación de productos
- ✔️ Permite generar una venta automáticamente
- ❌ No impacta stock directamente
- ❌ No genera deuda hasta la venta

👉 El impacto ocurre cuando se genera la venta.

---

## Procedimiento

1. Creá un pedido.
2. Seleccioná el contacto (no puede ser Consumidor Final).
3. Agregá productos y cantidades.
4. Confirmá el pedido.
5. Pasá a EN_PREPARACION.
6. Prepará la mercadería (picking).
7. Marcá como PREPARADO:
   - Se genera automáticamente la venta asociada

---

## Estados

| Estado         | Descripción |
|----------------|------------|
| BORRADOR       | Editable. |
| CONFIRMADO     | Listo para preparación. |
| EN_PREPARACION | En proceso de picking. |
| PREPARADO      | Genera la venta asociada. |
| RECHAZAR       | Vuelve a BORRADOR. |
| CANCELADO      | Flujo cerrado. |

---

## Casos frecuentes

### Preparación en depósito
Se usa EN_PREPARACION para organizar el picking.

### Venta diferida
Primero se prepara el pedido, luego se genera la venta.

---

## Si algo sale mal

- **No podés avanzar de estado**
  - Verificá que el pedido esté correctamente confirmado.

- **No se genera la venta**
  - Confirmá que el pedido esté en PREPARADO.

---

## Buenas prácticas

- Confirmá antes de enviar a preparación.
- Revisá cantidades antes de marcar PREPARADO.
- Usá picking si tenés ubicaciones configuradas.

---

## Ver también

- [Presupuestos](./presupuestos.md)
- [Ventas](./ventas.md)