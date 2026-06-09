---
title: Presupuestos | Zink ERP
sidebar_label: Presupuestos
description: >-
  Los presupuestos permiten formalizar una propuesta comercial con precios
  definidos y condiciones claras.
sidebar_position: 3
---

## Resumen

Los presupuestos permiten formalizar una propuesta comercial con precios definidos y condiciones claras.

Representan un nivel mayor de definición dentro del flujo de ventas, previo al compromiso operativo.

No impactan stock ni cuenta corriente hasta su aceptación.

---

## Antes de empezar

- Verificá que los productos tengan precios correctos.
- Definí el contacto.
- Algunas modificaciones pueden requerir permisos especiales.

---

## Ubicación dentro del flujo

Cotización → Presupuesto → Pedido → Venta

El presupuesto es la etapa donde se formaliza la propuesta.

👉 Al aceptar, se genera un pedido en BORRADOR.

---

## Cuándo usar presupuestos

Usá presupuestos cuando:

- El cliente ya tiene una propuesta definida.
- Querés fijar precios por un período.
- Estás esperando confirmación final.
- Necesitás formalizar una cotización.

---

## Qué cambia y qué no cambia

**El presupuesto:**

- ✔️ Define precios y condiciones
- ✔️ Permite avanzar a pedido
- ❌ No impacta stock
- ❌ No genera deuda

👉 El impacto ocurre al generar la venta.

---

## Procedimiento

1. Creá un presupuesto.
2. Seleccioná el contacto.
3. Agregá productos y cantidades.
4. Revisá precios.
5. Confirmá el presupuesto.
6. Esperá respuesta del cliente.
7. Si acepta:
   - Se genera un pedido en BORRADOR

---

## Estados

| Estado     | Descripción |
|------------|------------|
| BORRADOR   | Editable. |
| CONFIRMADO | No editable. Espera respuesta. |
| ACEPTADO   | Genera pedido en BORRADOR. |
| RECHAZAR   | Vuelve a BORRADOR. |
| CANCELADO  | Flujo cerrado. |

### Ciclo de vida

**Estado inicial:** BORRADOR · **Estado final (éxito):** ACEPTADO · **Al rechazar:** vuelve a **BORRADOR** · **Cierre sin éxito:** CANCELADO.

```mermaid
stateDiagram-v2
  direction LR
  [*] --> BORRADOR: Crear
  BORRADOR --> CONFIRMADO: Confirmar
  CONFIRMADO --> ACEPTADO: Cliente acepta
  CONFIRMADO --> BORRADOR: Rechazar
  ACEPTADO --> [*]: Fin — genera pedido BORRADOR
  BORRADOR --> CANCELADO: Cancelar
  CONFIRMADO --> CANCELADO: Cancelar
  CANCELADO --> [*]: Fin — flujo cerrado
  note right of BORRADOR
    Estado inicial
    (también destino al rechazar)
  end note
  note right of ACEPTADO
    Estado final exitoso
  end note
```

---

## Casos frecuentes

### El cliente evalúa una propuesta final
Se define precio y condiciones.

### Conversión desde cotización
Se selecciona la lista y se formaliza.

---

## Recomendaciones de uso

Los presupuestos son ideales cuando la negociación ya terminó y solo falta confirmación.

Usalos cuando:

- El precio ya está definido
- Querés formalizar condiciones
- El cliente necesita aprobación interna

👉 Evitá usarlos para comparación (eso corresponde a cotización).

---

## Si algo sale mal

- **No podés aceptar el presupuesto**
  - Puede estar **vencido** (revisá días de vencimiento en [Preferencias](../configuracion/preferencias.md)).
  - Verificá que esté en estado **CONFIRMADO** y con ítems cargados.
- **No se genera el pedido**
  - El presupuesto debe quedar en **ACEPTADO**.
  - Revisá permisos de pedidos en [Perfiles](../administracion/perfiles.md).

---

## Buenas prácticas

- Controlá vigencia.
- Usá observaciones.
- Confirmá antes de enviar.

---

## Ver también

- [Cotizaciones](./cotizaciones.md)
- [Pedidos](./pedidos.md)
- [Flujo de ventas](./flujo-ventas.md)
