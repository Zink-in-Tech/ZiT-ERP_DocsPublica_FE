---
title: POS (Punto de venta)
description: Registrá ventas rápidas en mostrador con carga ágil de productos y cobro inmediato.
sidebar_position: 6
---

## Resumen

El POS permite registrar ventas de forma rápida, especialmente en mostrador, en una única operación.

A diferencia del flujo completo de ventas, el POS está pensado para operaciones inmediatas donde no es necesario pasar por cotización, presupuesto o pedido.

Permite cargar productos, cobrar y generar la venta directamente.

---

## Antes de empezar

- Verificá que los productos tengan precios configurados.
- Confirmá los medios de pago disponibles.
- El usuario debe tener permiso para **realizar cobro en ventas**.
- Algunas configuraciones dependen de preferencias del sistema.
- **TODO: confirmar con producto** — comportamiento de listas de precios según cliente.

---

## Ubicación dentro del sistema

El POS es una **forma alternativa de generar ventas**, independiente del flujo comercial tradicional.

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

1. Ingresar productos:
   - por código de barras
   - por búsqueda
2. Ajustar cantidades si es necesario.
3. (Opcional) Seleccionar cliente.
4. Aplicar descuentos o recargos.
5. Revisar el total.
6. Abrir el diálogo de pago. Esta acción depende del permiso para **realizar cobro en ventas**.
7. Confirmar el cobro:
   - se genera la venta automáticamente

---

## Campos principales

### Producto

Ingreso por código o búsqueda.

### Ítems

Lista editable con cantidades, precios y descuentos.

### Totales

Subtotal, descuentos y total final.

### Cliente

Por defecto Consumidor Final.

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

- **Precios incorrectos**
  - Revisá lista de precios o cliente seleccionado.

- **Problemas con medios de pago**
  - Verificá configuración del sistema.

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
