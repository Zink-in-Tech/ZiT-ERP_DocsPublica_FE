---
title: Facturante (facturación electrónica)
description: Vinculá Facturante con ZinK ERP para emitir comprobantes electrónicos. Requisitos, pasos del asistente y plazos AFIP en Argentina.
sidebar_position: 3
---

## Resumen

**Facturante** es el proveedor que permite **emitir comprobantes electrónicos** desde ZinK ERP sin tener que usar a mano otro programa aparte para cada factura.

En **Argentina**, los datos suelen estar alineados con lo que exige **AFIP**. Después de hacer los trámites en el ente, la habilitación puede demorar **hasta 24 horas**: es normal, no es un fallo del ERP.

---

## Qué resuelve

- Centralizás la emisión de comprobantes desde el mismo sistema donde operás el negocio.
- Reducís errores de carga manual entre sistemas distintos.
- Trabajás con un proveedor especializado en facturación electrónica.

---

## Antes de empezar

- Contar con los **datos fiscales** de la organización (CUIT, razón social, condición frente al IVA, punto de venta, domicilios, etc.).
- Tener avanzados los **trámites en AFIP** que correspondan a tu caso (el asistente suele recordarte plazos y documentación).
- Permisos de **administrador de organización** (o el rol que el producto exija) para abrir **Preferencias → Integraciones** y usar **Gestionar** en Facturante.

---

## Procedimiento en el ERP (resumen del asistente)

El orden puede ajustarse según la versión del producto; en general incluye:

1. **Aviso de plazos** (incluye la demora posible de AFIP).
2. **Instructivo y/o términos y condiciones** (por ejemplo un PDF). Leelo con calma antes de confirmar.
3. **Formulario** con datos fiscales, domicilios, CUIT, razón social, punto de venta, condición IVA y demás campos que pida el flujo.
4. **Confirmación** y mensaje de **éxito** o **error** con el detalle que muestre el sistema.

Si algo falla, anotá el **texto del mensaje** y, si aparece, un **código o referencia** para soporte.

Cuando la configuración fiscal ya quedó activa, el botón **Gestionar** puede no estar disponible para Facturante. Para cambios posteriores, trabajá con soporte o con la persona administradora de la organización.

---

## Pasos fuera del ERP

- Completar lo que AFIP exija para tu contribuyente antes o durante el proceso.
- Revisar la **documentación y TyC del proveedor** (enlace abajo).

---

## Plazos y limitaciones

- Tras el trámite en AFIP, la habilitación puede tardar **hasta 24 horas**.
- Hasta que el ente y el proveedor reflejen el alta, podés ver demoras aunque el ERP esté bien configurado.

---

## Si algo sale mal

- Verificá que los **datos fiscales** coincidan exactamente con AFIP (CUIT, razón social, punto de venta).
- Revisá que no quede un trámite **pendiente** en el sitio de AFIP.
- Si el mensaje habla de **servicio no disponible**, puede ser una caída temporal del proveedor o del ente: reintentá más tarde.

---

## Enlaces oficiales del proveedor

- [Términos y condiciones Facturante](https://www.facturante.com/Content/facturante/TerminosYCondiciones_Facturante2023.pdf) (PDF) — **verificar URL vigente** antes de compartir en soporte o en material impreso.

:::caution Salís del sitio de documentación

Los enlaces anteriores llevan a sitios ajenos a ZinK ERP. Revisá siempre la URL en la barra del navegador antes de cargar datos sensibles.

:::

:::info Instructivo AFIP

El asistente puede mostrar o descargar un **instructivo AFIP** desde el ERP. Si no aparece en tu pantalla, pedilo a soporte o a la persona administradora antes de avanzar con trámites sensibles.

:::

---

## Ver también

- [Integraciones — inicio](/integraciones)
- [Cómo funcionan las integraciones](/integraciones/como-funciona)
- [Problemas frecuentes](/integraciones/problemas-frecuentes)
