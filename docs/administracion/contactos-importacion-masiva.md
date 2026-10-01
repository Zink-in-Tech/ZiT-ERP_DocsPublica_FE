---
title: 'Importación masiva de contactos desde CSV'
sidebar_label: Contactos - Importación masiva
description: 'Cargá muchos clientes o proveedores de una vez desde un archivo CSV y revisá el resultado de cada importación.'
sidebar_position: 2
keywords:
  - importación contactos
  - carga masiva clientes
  - migración contactos
---

## Resumen

Permite cargar múltiples contactos (clientes o proveedores) en una sola operación desde un archivo.

Cada importación queda registrada con su estado, cantidad de registros procesados y un archivo de resultado.

Es útil para migraciones o cargas iniciales de datos.

Se hace desde **Administración → Contactos**, con el ícono **Importación masiva de contactos** del listado. Se abre la pantalla **Contactos / Importación masiva**.

A diferencia de la [importación de productos](./productos-importacion-masiva.md), acá no hay asistente para relacionar columnas: el archivo tiene que respetar el formato del archivo ejemplo.

---

## Antes de empezar

- Descargá el archivo ejemplo desde la pantalla con **Descargar archivo ejemplo**.
- El archivo tiene que ser **CSV**, de hasta 500 KB y 500 registros.
- Respetá las columnas y el orden del archivo ejemplo.
- Verificá que las columnas obligatorias estén completas.

---

## Procedimiento

1. Entrá a **Administración → Contactos** y tocá el ícono **Importación masiva de contactos**.
2. Tocá **Descargar archivo ejemplo** y completalo con los datos de tus contactos.
3. Tocá **Subir archivo de importación** y elegí el archivo CSV.
4. Esperá a que el **Estado** pase a finalizado.
5. Tocá **Ver detalle importación** para revisar los registros OK y con error.
6. Si hubo errores, descargá el archivo de resultado, corregí esas filas y volvé a importarlas.

---

## Campos principales

### Archivo

Nombre del archivo importado.

### Estado

Indica si la importación está en proceso o finalizada.

### Registros OK / Error / Total

Cantidad de registros procesados correctamente o con error.

### Resultado

Archivo descargable con detalle de errores.

---

## Casos frecuentes

### Migración desde Excel

Carga inicial de clientes o proveedores.

### Corrección de errores

Se ajusta el archivo según el resultado y se vuelve a importar.

---

## Si algo sale mal

- **Errores en la importación**
  - Revisá el archivo de resultado para identificar las filas incorrectas.

- **Archivo rechazado**
  - Confirmá que sea un archivo CSV de hasta 500 KB y 500 registros.
  - Verificá que tenga las mismas columnas que el archivo ejemplo.
  - Si tenés más de 500 contactos, dividilos en varios archivos.

---

## Ver también

- [Administración](./administracion.md)
- [Contactos](./contactos.md)
- [Importación de productos](./productos-importacion-masiva.md)
