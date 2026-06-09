---
title: 'Ajustes de inventario: registrar diferencias de stock | Zink ERP'
sidebar_label: Registro de inventario
description: >-
  El registro de inventario permite ajustar el stock de productos cuando los
  movimientos no provienen de compras o ventas.
keywords:
  - inventario
  - stock
  - ajuste de stock
  - movimiento de inventario
  - stock inicial
  - rotura
  - pérdida
  - devolución
  - validación de stock
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
- Tener permiso para agregar, editar o eliminar inventarios según la operación.
- Si necesitás modificar la validación de stock del producto desde inventario, el usuario debe tener el permiso específico para modificar validación de stock.
- Confirmá que el movimiento no corresponda a una compra o venta que debería registrarse por su flujo normal.

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

Entrá desde **Inventario → Inventarios**.

1. Creá un nuevo inventario.
2. Seleccioná tipo de movimiento:
   - Ingreso
   - Egreso
   - Ajuste manual
   - Inicialización
3. (Opcional) Seleccioná tipo de evento:
   - Desecho
   - Devolución
4. Buscá el producto o escaneá código.
5. Ingresá la cantidad.
6. Si corresponde y tenés permiso, marcá validación de stock para el producto.
7. Confirmá el movimiento.

---

## Relación con compras y ventas

El stock puede cambiar por distintos caminos:

| Origen | Cuándo usarlo |
|--------|---------------|
| Compra | Cuando ingresa mercadería desde un proveedor y debe impactar cuenta corriente. |
| Venta | Cuando se entrega o vende mercadería a un cliente. |
| Inventario | Cuando necesitás corregir, inicializar o ajustar stock sin documento comercial. |

Usar inventario para corregir una compra o venta mal cargada puede ocultar el origen del problema. Primero revisá el documento que generó el movimiento.

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
  - Verificá si hubo compras, ventas, toma de inventario o ajustes manuales recientes.

- **Error en cantidad**
  - Verificá antes de confirmar.

- **No podés agregar o editar inventario**
  - Revisá permisos de inventario en el perfil.

- **No podés cambiar validación de stock**
  - Revisá el permiso específico para modificar validación de stock desde inventario.

---

## Buenas prácticas

- Revisá historial antes de ajustar.
- Usá eventos para categorizar movimientos.
- Evitá ajustes innecesarios.

---

## Ver también

- [Inventario](./inventario.md)
- [Toma de inventario](./inventarios-ubicacion.md)
- [Consulta de stock](./productos-consulta-inter-org.md)
- [Compras](../compras/compras.md)
- [Ventas](../ventas/ventas.md)
- [Productos](../administracion/productos.md)
- [Perfiles](../administracion/perfiles.md)
