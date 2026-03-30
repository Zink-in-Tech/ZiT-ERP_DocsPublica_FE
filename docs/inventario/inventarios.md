---
title: Registro de inventario
description: Registrá ajustes de stock que no provienen de compras o ventas y mantené la consistencia del inventario.
sidebar_position: 2
---

## Resumen

El registro de inventario permite ajustar el stock de productos cuando los movimientos no provienen de compras o ventas.

Se utiliza para corregir diferencias, registrar pérdidas, devoluciones o cargar stock inicial.

Todos los movimientos quedan registrados para auditoría.

---

## Antes de empezar

- Tener productos configurados.
- Verificá el stock actual antes de realizar ajustes.
- **TODO: confirmar con producto** — permisos necesarios para ajustes manuales.

---

## Ubicación dentro del sistema

El registro de inventario forma parte del control de stock:

Compras → Inventario → Ventas  
       ↘ Ajustes

👉 Se utiliza para corregir o registrar movimientos no contemplados en el flujo principal.

---

## Cuándo usar registro de inventario

Usalo cuando:

- Hay diferencias entre stock real y sistema
- Necesitás registrar roturas o pérdidas
- Recibís devoluciones sin proceso formal
- Cargás stock inicial

---

## Qué cambia y qué no cambia

**El registro de inventario:**

- ✔️ Modifica el stock
- ✔️ Registra historial de movimientos
- ✔️ Permite correcciones
- ❌ No genera compras ni ventas
- ❌ No impacta cuenta corriente

---

## Procedimiento

1. Seleccioná tipo de movimiento:
   - Ingreso
   - Egreso
   - Ajuste manual
   - Inicialización
2. (Opcional) Seleccioná tipo de evento:
   - Desecho
   - Devolución
3. Buscá el producto.
4. Ingresá la cantidad.
5. Confirmá el movimiento.

---

## Casos frecuentes

### Ajuste por diferencia

Se corrige el stock cuando no coincide con el conteo físico.

### Rotura o pérdida

Se registra como egreso.

### Stock inicial

Se carga al comenzar a usar el sistema.

---

## Recomendaciones de uso

El registro de inventario debe utilizarse con cuidado, ya que modifica directamente el stock.

Usalo cuando:

- No existe un documento previo (compra/venta)
- Necesitás corregir el sistema

👉 Evitá usarlo para movimientos que deberían registrarse como compra o venta.

---

## Si algo sale mal

- **Stock incorrecto**
  - Revisá movimientos previos.

- **Error en cantidad**
  - Verificá antes de confirmar.

---

## Buenas prácticas

- Revisá historial antes de ajustar.
- Usá eventos para categorizar movimientos.
- Evitá ajustes innecesarios.

---

## Ver también

- [Toma de inventario](./inventarios-ubicacion.md)
- [Consulta de stock](./productos-consulta-inter-org.md)
- [Compras](../compras/compras.md)
- [Ventas](../ventas/ventas.md)