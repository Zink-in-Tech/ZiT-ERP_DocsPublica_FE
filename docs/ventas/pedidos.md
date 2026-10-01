---
title: 'Pedidos'
sidebar_label: Pedidos
description: 'Los pedidos representan una compra confirmada por el cliente y permiten organizar la preparación de la mercadería antes de concretar la venta.'
sidebar_position: 4
---

## Resumen

Los pedidos representan una compra confirmada por el cliente y permiten organizar la preparación de la mercadería antes de concretar la venta.

Son la etapa operativa del flujo de ventas, donde se ejecuta la preparación o logística.

---

## Antes de empezar

- El contacto no puede ser Consumidor Final.
- Verificá que los productos tengan precios válidos.
- Algunas modificaciones pueden requerir permisos especiales.

---

## Ubicación dentro del flujo

Cotización → Presupuesto → Pedido → Venta

El pedido representa el compromiso del cliente y el inicio de la operación.

👉 Al completarse, genera una venta en **Borrador**.

---

## Cuándo usar pedidos

Usá pedidos cuando:

- El cliente confirmó la compra.
- Necesitás preparar mercadería.
- Trabajás con depósito o picking.
- Querés separar operación de venta.

---

## Qué cambia y qué no cambia

**El pedido:**

- ✔️ Organiza la preparación
- ✔️ Representa compromiso de compra
- ✔️ Permite generar venta
- ❌ No impacta stock directamente
- ❌ No genera deuda

👉 El impacto ocurre en la venta.

---

## Procedimiento

![Listado de Pedidos con número, contacto, importe, fechas, envío y estado de cada pedido](/img/ayuda/ventas/pedidos-01.png)

1. Creá un pedido desde **Gestión operativa → Pedidos** (ver [Formulario de documentos](../guias/formulario-documento-v2.md)). Si el cliente te mandó el pedido por mensaje, podés [importarlo desde texto](#importar-pedido-desde-texto).
2. Seleccioná el contacto (no puede ser Consumidor Final).
3. Completá **Pedido**, **Entrega** y totales (descuento, recargo, envío) si aplica.
4. Agregá ítems (**F4** listado; **/** y **\*** con accesos rápidos).
5. Guardá (**F2**) y **Confirmá** el pedido.
6. Usá **Preparar** (pasa a **En preparación**).
7. Cuando esté listo, **Confirmar preparado**:
   - Se genera la venta en **Borrador**

---

## Importar pedido desde texto (beta) {#importar-pedido-desde-texto}

Si el cliente te mandó el pedido por WhatsApp, email u otro canal, podés pegar el mensaje y armar el pedido a partir de él. Es una función en **beta**.

El sistema lee el texto con reglas fijas (cantidades, códigos y descripciones). No guarda nada hasta que confirmás el pedido.

1. En **Gestión operativa → Pedidos**, tocá **Importar desde texto (Beta)**. También lo vas a ver como sugerencia al abrir un pedido nuevo vacío.
2. En el paso **Mensaje**, pegá el texto en el campo **Mensaje** (también podés usar el ícono **Pegar desde el portapapeles**). El **Canal** es opcional y viene marcado en WhatsApp; cambialo a Portal, Email u Otro si corresponde.
3. Tocá **Interpretar mensaje**.
4. En el paso **Conciliar**, revisá:
   - **Cliente**: elegí el contacto y tocá **Confirmar cliente**.
   - **Productos**: cada línea queda como **Listo**, **Revisar** o **Resolver**. Corregí las que no estén en **Listo** eligiendo el producto correcto o ajustando la cantidad, o tocá **Excluir línea** para dejarla afuera. **Continuar al pedido** se habilita cuando el cliente está confirmado y todas las líneas incluidas están en **Listo**.
5. Tocá **Continuar al pedido**. Se abre el formulario del pedido con el cliente y los ítems cargados. Todavía no se guardó.
6. Revisá precios y datos de entrega, y **Guardá** (**F2**).

**Límites:** hasta 80 líneas de texto y 40 productos por mensaje.

---

## Duplicar y compartir

- **Duplicar**: desde **Más acciones** en el listado o con el botón **Duplicar** en el detalle, abrís un pedido nuevo con el mismo cliente, productos y cantidades. Ver [Duplicar documentos](../guias/duplicar-documentos.md).
- **Compartir**: desde el detalle podés copiar un resumen, mandarlo por WhatsApp o email, o descargar el PDF. Ver [Compartir y enviar documentos](../guias/compartir-y-enviar-documentos.md).

---

## Estados

| Estado | Descripción |
|--------|-------------|
| **Borrador** | Editable. |
| **Confirmado** | Listo para preparación. |
| **En preparación** | En picking (acción **Preparar**). |
| **Preparado** | Genera venta en Borrador (acción **Confirmar preparado**). |
| **Rechazado** / **Cancelado** | Cierre o vuelta atrás según acción. |

Acciones del listado: **Confirmar** · **Preparar** · **Confirmar preparado** · **Rechazar** · **Cancelar**.

### Ciclo de vida

**Estado inicial:** Borrador · **Estado final (éxito):** Preparado · **Al rechazar:** vuelve a editable · **Cierre sin éxito:** Cancelado.

```mermaid
stateDiagram-v2
  direction LR
  [*] --> Borrador: Crear
  Borrador --> Confirmado: Confirmar
  Confirmado --> EnPreparacion: Preparar
  EnPreparacion --> Preparado: Confirmar preparado
  Confirmado --> Borrador: Rechazar
  EnPreparacion --> Borrador: Rechazar
  Preparado --> [*]: Fin — genera venta en Borrador
  Borrador --> Cancelado: Cancelar
  Confirmado --> Cancelado: Cancelar
  EnPreparacion --> Cancelado: Cancelar
  Cancelado --> [*]: Fin — flujo cerrado
```

---

## Casos frecuentes

### Preparación en depósito
Se utiliza para organizar picking.

### Venta diferida
Se separa preparación de la venta final.

---

## Recomendaciones de uso

Los pedidos son ideales para operaciones donde la venta no es inmediata.

Usalos cuando:

- Hay logística o preparación
- Se trabaja con stock en depósito
- La entrega no es instantánea

👉 Evitá usarlos para ventas rápidas (usar POS).

---

## Si algo sale mal

- **No podés avanzar de estado**
  - Verificá la secuencia: **Confirmado** → **Preparar** (**En preparación**) → **Confirmar preparado**.
  - Revisá permisos de la etapa en [Perfiles](../administracion/perfiles.md).
- **No se genera la venta**
  - El pedido debe estar en **Preparado**.
  - El contacto no puede ser Consumidor Final (regla de pedidos).
- **Al importar desde texto, una línea queda en Resolver**
  - El sistema no encontró el producto. Buscalo a mano en esa línea o quitala y agregala después en el pedido.
- **No veo Importar desde texto (Beta)**
  - Necesitás permiso para crear pedidos. Revisalo en [Perfiles](../administracion/perfiles.md).
- **Faltantes en la entrega**
  - Revisá el informe [Productos faltantes](../informes/informe-productos-faltantes.md) si hay diferencia entre pedido y venta.

---

## Buenas prácticas

- Confirmá antes de preparar.
- Revisá cantidades.
- Usá estados correctamente.

---

## Ver también

- [Formulario de documentos](../guias/formulario-documento-v2.md)
- [Duplicar documentos](../guias/duplicar-documentos.md)
- [Compartir y enviar documentos](../guias/compartir-y-enviar-documentos.md)
- [Presupuestos](./presupuestos.md)
- [Ventas](./ventas.md)
- [Flujo de ventas](./flujo-ventas.md)
