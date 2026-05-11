---
title: POS (Punto de venta)
description: Registrá ventas rápidas en mostrador con carga ágil de productos y cobro inmediato.
keywords:
  - POS
  - punto de venta
  - venta rápida
  - venta mostrador
  - cobrar
  - cobro
  - no puedo cobrar
  - consumidor final
  - permiso de cobro
sidebar_position: 6
---

## Resumen

El POS permite registrar ventas de forma rápida, especialmente en mostrador, en una única operación.

A diferencia del flujo completo de ventas, el POS está pensado para operaciones inmediatas donde no es necesario pasar por cotización, presupuesto o pedido.

Permite cargar productos, cobrar y generar la venta directamente.

También podés encontrarlo o buscarlo como **punto de venta**, **venta rápida**, **venta de mostrador**, **cobro en POS** o **venta a Consumidor Final**.

---

## Antes de empezar

- Verificá que los productos tengan precios configurados.
- Confirmá los medios de pago disponibles.
- El usuario debe tener permiso para **realizar cobro en ventas**.
- Algunas configuraciones dependen de preferencias del sistema.
- **TODO: confirmar con producto** — comportamiento de listas de precios según cliente.

---

## Ubicación dentro del sistema

Entrá desde **Gestión Operativa → POS**.

El POS es una **forma alternativa de generar ventas**, independiente del flujo comercial tradicional.

![Pantalla inicial de POS con buscador de producto, cliente Consumidor Final y total de la venta](/img/ayuda/ventas/pos-01.png)

En Zink ERP existen dos formas de registrar una venta:

### Flujo de ventas (proceso completo)

Cotización → Presupuesto → Pedido → Venta

👉 Pensado para operaciones con negociación, tiempos y etapas.

### POS (venta directa)

POS → Venta

👉 Pensado para operaciones inmediatas, sin etapas previas.

- Genera una venta directamente
- No requiere cotización, presupuesto ni pedido
- Está optimizado para rapidez y volumen

---

## Qué cambia y qué no cambia

**El POS:**

- ✔️ Genera una venta automáticamente
- ✔️ Registra el pago en el momento
- ✔️ Puede emitir comprobante
- ❌ No utiliza etapas intermedias del flujo
- ❌ No permite trabajar por proceso

---

## Procedimiento

1. Ingresá productos desde el campo **Escanear o buscar producto**:
   - por código de barras
   - por búsqueda
2. Ajustar cantidades si es necesario.

![POS con un producto agregado, total actualizado y botón Finalizar habilitado](/img/ayuda/ventas/pos-02-producto-agregado.png)

3. (Opcional) Seleccioná cliente con **[F3] Cliente**. Si no seleccionás uno, la venta queda asociada a **Consumidor Final**.

![Diálogo de POS para seleccionar cliente o volver a Consumidor Final](/img/ayuda/ventas/pos-03-seleccionar-cliente.png)

4. Aplicá descuentos o recargos si corresponde:
   - **[F6] Descuento**
   - **[F9] Recargo**

![Diálogo de descuento del POS con campos de porcentaje y monto](/img/ayuda/ventas/pos-04-descuento.png)

5. Revisar el total.
6. Usá **Finalizar (F2)** para abrir el diálogo de pago. Esta acción depende del permiso para **realizar cobro en ventas**.

![Confirmación de finalización de venta en POS antes de guardar y cobrar](/img/ayuda/ventas/pos-05-finalizar.png)

7. Confirmar el cobro:
   - se genera la venta automáticamente

Si necesitás ver o elegir entre varios resultados, usá **[F4] Listado**.

---

## Campos principales

### Producto

Ingreso por código de barras o búsqueda manual.

### Ítems

Lista editable con cantidades, precios y descuentos.

### Totales

Subtotal, descuentos y total final.

### Cliente

Por defecto Consumidor Final.

Si seleccionás un contacto, pueden cambiar condiciones comerciales, listas de precios o comportamiento de cuenta corriente según la configuración de la organización.

### Finalizar

Acción para cerrar la venta y avanzar al cobro.

Si el botón aparece deshabilitado, revisá que haya productos cargados y que el usuario tenga permiso para realizar cobro en ventas.

---

## Casos frecuentes

### Venta en mostrador

Se cargan productos, se cobra y se finaliza en una sola operación.

### Cliente ocasional

Se utiliza Consumidor Final sin generar cuenta corriente.

### Venta rápida sin logística

No se requiere pasar por pedido ni despacho.

---

## Recomendaciones de uso

El POS está pensado para operaciones de venta **rápidas, directas y sin etapas intermedias**.

Es ideal en negocios donde:

- La venta se concreta en el momento
- No hay negociación previa
- El producto se entrega inmediatamente
- El cobro se realiza en la misma operación

### Ejemplos típicos

- Panaderías
- Food trucks
- Locales de consumo masivo
- Tiendas con alto volumen de operaciones en mostrador

👉 En estos casos, el POS permite máxima agilidad evitando pasos innecesarios del flujo completo.

---

## Si algo sale mal

- **No podés confirmar la venta**
  - Verificá que el pago esté cargado.
  - Si no podés abrir o completar el cobro, revisá que tu usuario tenga permiso para realizar cobro en ventas.
  - Si **Finalizar (F2)** está deshabilitado, verificá que haya al menos un producto cargado.

- **Precios incorrectos**
  - Revisá lista de precios o cliente seleccionado.

- **Problemas con medios de pago**
  - Verificá configuración del sistema.

- **No encontrás el producto**
  - Probá con código de barras, descripción o **[F4] Listado**.

![Mensaje de POS cuando no se encuentra un producto por código o descripción](/img/ayuda/ventas/pos-06-producto-no-encontrado.png)

---

## Buenas prácticas

- Usá código de barras para agilizar la carga.
- Revisá el total antes de cobrar.
- Confirmá el cliente si afecta precios.
- Usá POS solo cuando no necesitás trabajar por etapas.

---

## Ver también

- [Ventas](./ventas.md)
- [Consulta de precios](./consulta-precio.md)
- [Flujo de ventas](./flujo-ventas.md)
