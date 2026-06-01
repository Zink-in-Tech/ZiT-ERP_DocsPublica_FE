---
title: "Datos de la Organización | ZinkERP Docs"
sidebar_label: "Datos de la Organización"
description: "Configurá logo, razón social, CUIT y direcciones que figuran en comprobantes e informes de tu organización. Incluye configuración inicial, impacto operativo y enlaces relacionados."
sidebar_position: 71
keywords:
  - datos organización
  - razón social
  - CUIT
  - logo comprobantes
  - dirección fiscal
---

## Resumen

Configurás los datos de la organización que aparecen en facturas y comprobantes. Impactan todos los comprobantes emitidos: deben coincidir con tu situación fiscal.

Incluyen imagen/logo, nombre, razón social, CUIT, direcciones (facturación y física), teléfono, mail y moneda base.

---

## Cuándo usarlo

- Al dar de alta la organización o abrir un nuevo punto de venta.
- Cuando cambian datos fiscales (razón social, CUIT, domicilio).
- Antes de habilitar facturación electrónica o integraciones.

---

## Procedimiento

1. Entrá a la configuración de **Datos de la organización**.
2. Completá imagen, nombre, razón social, CUIT, dirección de facturación, dirección física, teléfono, mail y moneda base.
3. Guardá los cambios.
4. Verificá un comprobante de prueba si facturás.

---

## Campos principales

| Campo | Qué es |
|-------|--------|
| Imagen | Logo (recomendado 240×240 px). Aparece en comprobantes. |
| Nombre | Referencia interna de la organización. |
| Razón social | Nombre legal o de fantasía en informes y comprobantes. |
| CUIT | Identificador fiscal. |
| Dirección facturación | Domicilio fiscal para facturación. |
| Dirección física | Ubicación operativa o depósito. |
| Teléfono / Mail | Contacto; el mail puede usarse para envío de comprobantes. |
| Moneda base | Moneda de la organización (actualmente AR$). |

---

## Qué cambia y qué no cambia

- ✔️ Actualiza datos en **nuevos** comprobantes e informes que usen esos campos.
- ❌ No modifica operaciones ya registradas ni sustituye datos de [contactos](../administracion/contactos.md).

---

## Si algo sale mal

- **Facturación rechazada o datos incorrectos en PDF**
  - Revisá CUIT y dirección de facturación contra tu constancia fiscal.
- **El logo no se ve bien**
  - Usá imagen cuadrada ~240×240 px y volvé a cargar.

---

## Buenas prácticas

- Revisá razón social y CUIT al menos una vez al año.
- Mantené el mail operativo si enviás comprobantes por correo.

---

## Ver también

- [Configuración](./configuracion.md)
- [Preferencias](./preferencias.md)
- [Primeros pasos](../primeros-pasos.md)
