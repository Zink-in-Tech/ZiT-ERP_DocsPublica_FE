---
title: Ventas
description: Registrá ventas, controlá entrega de mercadería y gestioná el cobro según el tipo de cliente.
sidebar_position: 5
---

## Resumen

La pantalla de ventas permite registrar operaciones comerciales completas, desde la carga de productos hasta la entrega y el cobro.

A diferencia de otras instancias previas (cotizaciones o presupuestos), la venta **impacta stock y cuenta corriente** según su estado.

El flujo contempla distintas etapas (borrador, confirmación, despacho y entrega) para adaptarse tanto a ventas inmediatas como a entregas programadas.

---

## Antes de empezar

- Definí correctamente el **tipo de cliente**:
  - Consumidor Final (pago inmediato)
  - Contacto (puede generar cuenta corriente)
- Verificá que los productos tengan precios válidos.
- Algunas modificaciones (precios, fechas, descuentos) pueden requerir permisos especiales.

---

## Cuándo usar ventas

Usá ventas cuando:

- Estás registrando una operación real con entrega de productos.
- El cliente ya confirmó la compra.
- Necesitás impactar stock y registrar el ingreso o deuda.
- Querés gestionar despacho antes de entregar la mercadería.

---

## Qué cambia y qué no cambia

**La venta:**

- ✔️ Descarga stock (al marcar ENTREGADO)
- ✔️ Impacta cuenta corriente (según cliente)
- ✔️ Puede generar comprobante
- ❌ No es editable una vez confirmada (según estado)

---

## Procedimiento

1. Creá una nueva venta.
2. Seleccioná el contacto:
   - Consumidor Final → pago inmediato
   - Contacto → puede generar deuda
3. Agregá productos y cantidades.
4. Ajustá precios o descuentos si corresponde (según permisos).
5. Confirmá la venta.
6. Si aplica:
   - Gestioná despacho
7. Marcá como ENTREGADO para:
   - descontar stock
   - actualizar cuenta corriente

---

## Estados

| Estado     | Descripción |
|------------|------------|
| BORRADOR   | Editable. Podés modificar productos y datos. |
| CONFIRMADO | No editable. Permite avanzar al despacho. |
| DESPACHAR  | Control del inventario según configuración. |
| ENTREGADO  | Se descuenta stock y se impacta cuenta corriente. |
| RECHAZAR   | Vuelve a BORRADOR (no disponible en estados finales). |
| CANCELADO  | Flujo cerrado. No editable. |

---

## Casos frecuentes

### Venta en mostrador (Consumidor Final)
Se carga el pago antes de finalizar. Puede pasar directamente a ENTREGADO.

### Venta a cliente con cuenta corriente
El pago se registra luego desde cuenta corriente.

### Venta con entrega diferida
Se confirma primero y luego se gestiona el despacho.

---

## Si algo sale mal

- **No podés marcar como ENTREGADO**
  - Verificá que el pago esté cargado (Consumidor Final).
  
- **No podés modificar la venta**
  - Puede estar en estado no editable.

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

- [Presupuestos](./presupuestos.md)
- [Pedidos](./pedidos.md)
- [POS](./pos.md)