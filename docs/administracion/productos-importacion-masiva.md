---
title: 'Importación de productos: asistida y masiva'
sidebar_label: Importación de productos
description: 'Cargá muchos productos desde un CSV o Excel con la importación asistida y revisá el resultado en el historial de importación masiva.'
sidebar_position: 3
keywords:
  - importación productos
  - importación asistida
  - importación masiva
  - carga masiva productos
  - CSV productos
  - Excel productos
  - migración catálogo
---

## Resumen

Podés cargar muchos productos de una vez desde un archivo **CSV o Excel**. Los productos importados quedan disponibles en cotizaciones, presupuestos, pedidos, ventas, compras e inventario.

Hay dos pantallas, cada una con su función:

| Pantalla | Para qué sirve | Cómo llegás |
|----------|----------------|-------------|
| **Importación asistida** | Subir el archivo, relacionar sus columnas con los datos de Zink ERP y ejecutar la carga. Es la forma de importar productos. | **Administración → Productos** → ícono **Importación masiva de Productos** del listado (o **Importar productos** si el listado está vacío). |
| **Importación masiva** | Ver el historial de importaciones: estado, registros OK y con error, y el archivo de resultado. | Desde el asistente, con **Volver al listado** o **Ir al listado de importaciones** al terminar. |

La importación asistida se presentó como función **beta** en las [novedades del 16 de septiembre de 2026](../novedades/2026-09-16.mdx).

La importación de contactos es distinta: se hace en [Contactos - Importación masiva](./contactos-importacion-masiva.md), con un archivo CSV y sin asistente.

---

## Antes de empezar

- Tené el archivo en **CSV** (`.csv`) o **Excel** (`.xlsx` o `.xls`), de hasta 5 MB. En Excel se toma la primera hoja y la fila 1 como encabezados.
- El archivo tiene que incluir, como mínimo, **código**, **descripción** y **al menos un precio** de lista.
- Verificá que existan las **unidades de medida** que usa el archivo (por ejemplo LTS, CMS, KG o UNIDAD).
- Escribí los precios sin signos ni separador de miles. El separador decimal es el que tenga configurado tu organización.
- No hace falta adaptar el archivo a un formato fijo: el asistente te deja relacionar las columnas. Si querés una referencia, en el historial de **Importación masiva** podés usar **Descargar archivo ejemplo (referencia 22 columnas)**.

---

## Procedimiento

### Importar productos con el asistente

1. Entrá a **Administración → Productos** y tocá el ícono **Importación masiva de Productos**. Se abre **Productos / Importación asistida**.
2. **Subí tu CSV o Excel**: arrastrá el archivo o elegilo desde tu equipo.
3. **Mapeá columnas**: indicá qué dato de Zink ERP representa cada columna. El asistente propone una relación según el nombre de los encabezados; revisala y corregí lo que haga falta.
4. **Configurá la importación**:
   - Elegí qué hacer con los productos que ya existen: **Omitir existentes (no sobrescribe)** o **Actualizar existentes**.
   - Definí los valores por defecto para los datos que el archivo no trae (por ejemplo, unidad de medida, unidad mínima, **Actualiza precio** o **Punto de venta**).
5. **Confirmá el proceso**: revisá la vista previa y ejecutá la importación. Los archivos grandes se procesan en lotes de 500 filas.
6. Al terminar vas a ver cuántas filas se enviaron bien y cuántas fallaron. Desde ahí podés tocar **Ir al listado de importaciones** o **Nueva importación**.

### Revisar el resultado en el historial

1. Abrí **Productos / Importación masiva** (con **Ir al listado de importaciones** o **Volver al listado** desde el asistente).
2. Buscá la importación por **Archivo** y revisá su **Estado** y **Resultado**.
3. Tocá **Ver detalle importación** para ver **Registros ok**, **Registros error** y **Registros totales**.
4. Si hubo errores, usá **Descargar archivo de salida del proceso**, corregí esas filas y volvé a importarlas con **Nueva importación (CSV o Excel)**.

---

## Si algo sale mal

- **El archivo no se acepta**
  - Revisá que sea `.csv`, `.xlsx` o `.xls` y que no supere los 5 MB.
  - En Excel, confirmá que los datos estén en la primera hoja y que la fila 1 tenga los encabezados.
- **El asistente no me deja avanzar del mapeo**
  - Faltan columnas obligatorias. Relacioná al menos el código, la descripción y un precio.
- **Muchas filas con error**
  - Descargá el archivo de salida desde el historial e identificá la columna o el dato inválido.
- **Unidad de medida inexistente**
  - Creá o corregí la unidad antes de volver a importar esa fila.
- **Se pisaron datos de productos que ya tenía**
  - En el paso **Configurá la importación** elegiste **Actualizar existentes**. Para cargar solo productos nuevos, usá **Omitir existentes (no sobrescribe)**.
- **No veo el ícono de importación**
  - Tu perfil necesita permiso para importar productos. Revisalo en [Perfiles](./perfiles.md).

---

## Buenas prácticas

- Probá primero con un archivo chico (diez o veinte productos) y revisá el resultado antes de importar el catálogo completo.
- Mantené códigos únicos y descripciones consistentes para que después sea fácil buscarlos.
- Dejá vacío el código de barras si no lo tenés: no repitas un mismo valor en todas las filas.
- La importación no carga el indicador de **código variable**. Esos productos conviene crearlos o editarlos a mano (ver [Códigos variables](../guias/codigos-variables.md)).

---

## Ver también

- [Productos](./productos.md)
- [Actualización masiva](./productos-actualizacion-masiva.md)
- [Contactos - Importación masiva](./contactos-importacion-masiva.md)
- [Administración](./administracion.md)
