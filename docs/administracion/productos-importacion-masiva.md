---
title: Importación de Productos
description: Cargá el catálogo de productos en lote desde CSV o Excel con archivo de resultado y control de errores.
sidebar_position: 3
keywords:
  - importación productos
  - carga masiva productos
  - CSV productos
  - migración catálogo
---

## Resumen

Permite incorporar múltiples productos en una sola operación desde un archivo. Los productos cargados correctamente quedan disponibles en ventas, compras e inventario.

Cada importación registra estado, cantidad procesada y archivo de resultado con errores por fila.

---

## Antes de empezar

- Descargá el **archivo ejemplo** desde la pantalla.
- Verificá que existan las **unidades de medida** referenciadas en el archivo.
- Revisá columnas obligatorias antes de subir.

---

## Procedimiento

1. Descargá el archivo ejemplo.
2. Completá el archivo con los productos a importar.
3. Subí el archivo desde la pantalla de importación.
4. Procesá la importación.
5. Revisá el resultado:
   - estado (en proceso / finalizado)
   - registros OK y con error
6. (Opcional) Descargá el archivo de resultado para corregir filas con error.
7. Corregí y volvé a importar solo las filas fallidas si el flujo lo permite.

---

## Si algo sale mal

- **Muchas filas con error**
  - Descargá el archivo de resultado e identificá columna o dato inválido.
- **Archivo rechazado**
  - Verificá formato (CSV/Excel según lo indicado en pantalla) y encabezados.
- **Unidad de medida inexistente**
  - Creá o corregí la unidad antes de reimportar esa fila.

---

## Buenas prácticas

- Probá primero con un lote chico en entornos de prueba.
- Mantené códigos únicos y descripciones consistentes para búsquedas posteriores.

---

## Ver también

- [Administración](./administracion.md)
- [Productos](./productos.md)
- [Actualización masiva](./productos-actualizacion-masiva.md)
