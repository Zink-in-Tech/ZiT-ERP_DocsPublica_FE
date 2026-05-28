---
title: Toma de inventario
description: Registrá el conteo físico de productos por ubicación y actualizá el stock en una sola operación.
keywords:
  - toma de inventario
  - conteo físico
  - stock por ubicación
  - ubicación
  - ajuste masivo de stock
  - validación de stock
  - depósito
sidebar_position: 3
---

## Resumen

La toma de inventario permite registrar el conteo físico de productos y actualizar el stock en una sola operación.

Es una herramienta para sincronizar el sistema con la realidad del depósito.

---

## Antes de empezar

- Tener ubicaciones configuradas.
- Tener productos cargados.
- Definir qué ubicación o depósito se va a contar.
- Tener permiso para cargar inventario.
- Si necesitás modificar la validación de stock del producto durante la toma, el usuario debe tener permiso específico para hacerlo.

---

## Ubicación dentro del sistema

Forma parte del control de inventario:

Compras → Inventario → Ventas  
       ↘ Conteo físico

👉 Se utiliza para actualizar el stock según la realidad.

---

## Cuándo usar toma de inventario

Usala cuando:

- Realizás conteo físico
- Querés actualizar stock completo
- Necesitás validar inventario

---

## Qué cambia y qué no cambia

**La toma de inventario:**

- ✔️ Define el stock real
- ✔️ Actualiza cantidades directamente
- ❌ No registra movimientos intermedios
- ❌ No genera documentos

---

## Procedimiento

Entrá desde **Inventario → Toma de inventario**.

1. Ingresá la ubicación.
2. Buscá productos por descripción, código o listado.
3. Ingresá la cantidad real contada.
4. Agregá todos los productos de la ubicación.
5. Confirmá.

Si el sistema detecta diferencias entre stock actual y stock informado, puede mostrar una confirmación con el detalle de productos y cantidades antes de aplicar el cambio.

---

## Toma de inventario vs ajuste manual

| Herramienta | Cuándo usarla |
|-------------|---------------|
| Toma de inventario | Para conteos físicos por ubicación o correcciones de varios productos. |
| Registro de inventario | Para ajustes puntuales de uno o pocos productos. |

En conteos grandes, la toma de inventario es más segura porque obliga a trabajar por ubicación y reduce ajustes aislados sin contexto.

---

## Casos frecuentes

### Conteo periódico

Se realiza para control de stock.

### Inicio de operación

Se carga stock real.

---

## Recomendaciones de uso

La toma de inventario debe utilizarse para reflejar la realidad física del stock.

Usala cuando:

- Necesitás actualizar el stock completo
- Realizás auditorías

👉 Evitá usar ajustes manuales para conteos grandes.

---

## Si algo sale mal

- **Stock incorrecto**
  - Verificá cantidades ingresadas.
  - Revisá si confirmaste una diferencia entre stock actual y stock informado.
  - Confirmá que elegiste la ubicación correcta.

- **No podés guardar**
  - Verificá que cada producto tenga cantidad mayor a cero.
  - Revisá permisos de inventario.

- **No aparece el producto**
  - Probá buscar por código, descripción o listado.
  - Confirmá que el producto esté activo.

---

## Buenas prácticas

- Contá por ubicación.
- Verificá antes de confirmar.
- Realizá conteos periódicos.

---

## Ver también

- [Inventario](./inventario.md)
- [Registro de inventario](./inventarios.md)
- [Consulta de stock](./productos-consulta-inter-org.md)
- [Productos](../administracion/productos.md)
- [Perfiles](../administracion/perfiles.md)
