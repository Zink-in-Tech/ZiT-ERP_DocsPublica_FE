---
title: Presupuestos
description: Formalizá una propuesta comercial con precios definidos y convertí la aceptación del cliente en un pedido.
sidebar_position: 3
---

## Resumen

Los presupuestos permiten registrar una propuesta comercial con precios definidos por un tiempo de vigencia.

No impactan stock ni cuenta corriente hasta que el cliente acepta.  
Al aceptar, el sistema genera automáticamente un **pedido en BORRADOR** para continuar el proceso.

---

## Antes de empezar

- Verificá que los productos tengan precios correctos.
- Definí el contacto (por defecto es Consumidor Final).
- Algunas modificaciones pueden requerir permisos especiales.

---

## Cuándo usar presupuestos

Usá presupuestos cuando:

- El cliente ya tiene una propuesta concreta.
- Querés congelar precios por un período.
- Estás esperando confirmación antes de avanzar.
- Necesitás formalizar una cotización.

---

## Qué cambia y qué no cambia

**El presupuesto:**

- ✔️ Define precios y condiciones
- ✔️ Permite avanzar a pedido al aceptar
- ❌ No impacta stock
- ❌ No genera deuda

---

## Procedimiento

1. Creá un presupuesto.
2. Seleccioná el contacto.
3. Agregá productos y cantidades.
4. Revisá precios.
5. Confirmá el presupuesto.
6. Esperá respuesta del cliente.
7. Si acepta:
   - Se genera automáticamente un pedido en BORRADOR

---

## Estados

| Estado     | Descripción |
|------------|------------|
| BORRADOR   | Editable. |
| CONFIRMADO | No editable. Espera respuesta. |
| ACEPTADO   | Genera pedido en BORRADOR. |
| RECHAZAR   | Vuelve a BORRADOR. |
| CANCELADO  | Flujo cerrado. |

---

## Casos frecuentes

### El cliente necesita tiempo para decidir
El presupuesto mantiene el precio durante la vigencia.

### Convertir una cotización en operación
Se elige la lista y se formaliza en presupuesto.

---

## Si algo sale mal

- **No se puede aceptar**
  - Puede estar vencido.

- **No se genera pedido**
  - Verificá que el estado sea ACEPTADO.

---

## Buenas prácticas

- Controlá la vigencia.
- Usá observaciones para condiciones comerciales.
- Confirmá antes de enviar al cliente.

---

## Ver también

- [Cotizaciones](./cotizaciones.md)
- [Pedidos](./pedidos.md)
- [Ventas](./ventas.md)