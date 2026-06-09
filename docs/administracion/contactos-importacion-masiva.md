---
title: 'Importación masiva de contactos: carga desde archivo | Zink ERP'
sidebar_label: Contactos - Importación masiva
description: >-
  Permite cargar múltiples contactos (clientes o proveedores) en una sola
  operación desde un archivo.
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

---

## Antes de empezar

- Descargá el archivo ejemplo desde la pantalla.
- Asegurate de respetar el formato requerido.
- Verificá que las columnas obligatorias estén completas.

---

## Procedimiento

1. Descargar archivo ejemplo.
2. Preparar archivo con los datos de contactos.
3. Subir archivo desde la pantalla.
4. Procesar importación.
5. Revisar resultado:
   - estado (en proceso / finalizado)
   - registros OK
   - registros con error
6. (Opcional) Descargar archivo de resultado.

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
  - Revisar archivo de resultado para identificar filas incorrectas.

- **Archivo rechazado**
  - Verificar formato y columnas obligatorias.

---

## Ver también

- [Administración](./administracion.md)
- [Contactos](./contactos.md)
