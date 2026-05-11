---
title: Ventas
description: Registrá la venta final, gestioná la entrega de mercadería y el impacto en stock y cuenta corriente.
sidebar_position: 5
---

## Resumen

La venta es la etapa final del flujo comercial en Zink ERP.

Representa el cierre de la operación y es el momento en el que el sistema impacta stock y cuenta corriente según el estado.

Puede generarse desde un pedido o registrarse directamente, según el tipo de operación.

---

## Antes de empezar

- Definí correctamente el tipo de cliente:
  - Consumidor Final (pago inmediato)
  - Contacto (puede generar cuenta corriente)
- Verificá que los productos tengan precios válidos.
- Para registrar cobros en ventas comerciales, el usuario debe tener permiso para **realizar cobro en ventas**.
- Algunas modificaciones (precios, fechas, descuentos) pueden requerir permisos especiales.

---

## Ubicación dentro del flujo

La venta es la última etapa del proceso:

Cotización → Presupuesto → Pedido → **Venta**

- Puede generarse automáticamente desde un pedido en estado PREPARADO.
- También puede crearse directamente sin pasar por etapas anteriores.

---

## Qué cambia y qué no cambia

**La venta:**

- ✔️ Descarga stock (al marcar ENTREGADO)
- ✔️ Impacta cuenta corriente (según cliente)
- ✔️ Puede generar comprobante
- ❌ No es editable una vez confirmada (según estado)

---

## Procedimiento

1. Crear una nueva venta (o generarla desde un pedido).
2. Seleccionar el contacto:
   - Consumidor Final → pago inmediato
   - Contacto → puede generar deuda
3. Agregar productos y cantidades.
4. Ajustar precios o descuentos si corresponde (según permisos).
5. Confirmar la venta.
6. Si aplica:
   - gestionar despacho
7. Marcar como ENTREGADO para:
   - descontar stock
   - actualizar cuenta corriente

---

## Estados

| Estado     | Descripción |
|------------|------------|
| BORRADOR   | Editable. Permite modificar productos y datos. |
| CONFIRMADO | No editable. Permite avanzar al despacho. |
| DESPACHAR  | Control del inventario según configuración. |
| ENTREGADO  | Se descuenta stock y se impacta cuenta corriente. |
| RECHAZAR   | Vuelve a BORRADOR (no disponible en estados finales). |
| CANCELADO  | Flujo cerrado. No editable. |

---

## Casos frecuentes

### Venta desde pedido

El sistema genera automáticamente la venta al completar un pedido.

### Venta directa

Se crea una venta sin pasar por cotización, presupuesto o pedido.

### Venta en mostrador

Se registra con pago inmediato y puede marcarse directamente como ENTREGADO.

El cobro en este tipo de venta depende del permiso para **realizar cobro en ventas**.

---

## Si algo sale mal

- **No podés marcar como ENTREGADO**
  - Verificá que el pago esté cargado (Consumidor Final).
  - Si no podés registrar el cobro, revisá el permiso para realizar cobro en ventas.

- **No podés modificar la venta**
  - Puede estar en un estado no editable.

- **Problemas con precios**
  - Revisá lista de precios o permisos.

---

## Buenas prácticas

- Verificá el cliente antes de confirmar.
- Controlá precios y descuentos.
- Para ventas en mostrador, cargá el pago antes de finalizar.
- Usá el flujo de despacho si trabajás con logística.

---

## Ver también

- [Pedidos](./pedidos.md)
- [POS](./pos.md)
- [Flujo de ventas](./flujo-ventas.md)
