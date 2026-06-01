---
title: "Delegar autorización de comprobantes en ARCA | ZinkERP Docs"
sidebar_label: "Delegar autorización de comprobantes en ARCA"
description: "Paso a paso para crear un punto de venta y delegar el servicio de autorización de comprobantes fiscales en ARCA a Fernando Ariel Demaio (Zink in Tech)."
sidebar_position: 6
slug: /integraciones/delegacion-autorizacion-comprobantes-arca
---

## Resumen

Para emitir factura electrónica desde **ZinkERP** necesitamos que tu empresa (o tu contador) haga un trámite rápido en **ARCA**. Son solo dos pasos y no hace falta compartir clave fiscal.

1. crear un **punto de venta nuevo**;
2. delegar el servicio de **Facturación Electrónica** a **Fernando Ariel Demaio (Zink in Tech)**, **CUIT 20-31499393-5**.

Después de eso, **nosotros terminamos la configuración desde nuestro lado** para que la empresa pueda facturar desde ZinK ERP.

> **Importante:** no hace falta compartir clave fiscal.

---

:::caution Importante

Usá un **punto de venta nuevo**, distinto del que ya uses para factura manual, controlador fiscal u otro sistema.

:::

---

## Quién puede hacer este trámite

Esta sección es el mismo instructivo, pero pensado para quien va a ejecutar el trámite:

- la persona dueña de la empresa;
- la persona administrativa;
- el estudio contable o contador.

Lo único que tienen que hacer en ARCA es:

1. crear el punto de venta;
2. delegar el servicio;
3. pasarnos el número de punto de venta y confirmar que la delegación quedó hecha.

La delegación debe hacerse a:

- **Fernando Ariel Demaio**
- **Zink in Tech**
- **CUIT 20-31499393-5**

> **Tranquilidad:** la delegación solo aplica al servicio de **Facturación Electrónica**. No da acceso a nada más.

---

## Antes de empezar

Prepará esto antes de ingresar:

- **CUIT** y **clave fiscal** con nivel suficiente para operar los servicios de ARCA;
- acceso al servicio **Administración de Puntos de Venta y Domicilios**;
- acceso al servicio **Administrador de Relaciones**;
- el criterio fiscal correcto de la empresa: **Monotributo** o **Responsable Inscripto / IVA**.

Si alguno de esos servicios no aparece en el menú, pedile a la persona que administra la clave fiscal que revise los permisos.

---

## Paso 1: Crear el punto de venta en ARCA

1. Ingresá a [ARCA](https://www.arca.gob.ar/) con CUIT y clave fiscal.
2. Abrí el servicio **Administración de Puntos de Venta y Domicilios**.
3. Seleccioná la opción para **A/B/M de puntos de venta**.
4. Tocá **Agregar**.
5. Ingresá un **número de punto de venta nuevo**.
6. Si ARCA lo pide, completá el nombre de fantasía.
7. Cuando el sistema solicite el tipo de facturación, elegí la opción que corresponda a tu situación fiscal.

### Qué opción elegir al crear el punto de venta

| Situación fiscal | Opción a seleccionar en ARCA |
|------------------|------------------------------|
| Monotributo | **Factura Electrónica - Monotributo - Webservices** |
| Responsable inscripto en IVA | **Factura Electrónica - RI IVA - Aplicativo y Webservices** |

8. Seleccioná el domicilio asociado al punto de venta.
9. Confirmá la operación.
10. Guardá ese número, lo vamos a necesitar al final del trámite.

:::note Recomendación

Si ya emitís comprobantes por otro sistema, no reutilices ese punto de venta. Para ZinK ERP conviene dejar uno exclusivo.

:::

---

## Paso 2: Delegar el servicio de facturación electrónica

1. Volvé al menú principal de clave fiscal.
2. Abrí el servicio **Administrador de Relaciones**.
3. Ingresá en **Nueva Relación**.
4. Si ARCA te lo pide, seleccioná la persona o empresa representada con la que querés operar.
5. Tocá **Buscar** para elegir el servicio.
6. Entrá en el organismo **ARCA**.
7. Entrá en la agrupación **Webservices**.
8. Seleccioná el servicio **Facturación Electrónica**.
9. En el campo de representante o usuario autorizado, cargá el CUIT **20-31499393-5**.
10. Verificá que corresponda a **Fernando Ariel Demaio (Zink in Tech)**.
11. Revisá el resumen.
12. Tocá **Confirmar**.
13. Si querés, guardá la constancia del trámite.

:::info Qué significa esta delegación

La empresa sigue siendo dueña de sus comprobantes y de su punto de venta.

La delegación solo nos autoriza a hacer la gestión técnica de **Facturación Electrónica** para esa CUIT. No da acceso a otros servicios de ARCA.

:::

---

## Qué nos tenés que enviar cuando terminás

Cuando termines el trámite, pasanos:

| Dato | Ejemplo |
|------|---------|
| CUIT de la empresa | `30-71234567-8` |
| Número de punto de venta nuevo creado en ARCA | `00012` |
| Confirmación de delegación | `Delegación hecha a Fernando Ariel Demaio - CUIT 20-31499393-5` |
| Constancia del trámite | `PDF o captura de confirmación` |

Con eso, desde Zink in Tech hacemos el resto:

- vinculamos la delegación;
- terminamos la configuración;
- dejamos listo el circuito para emitir desde ZinK ERP.

Antes de darnos el ok final, revisá este checklist:

- [ ] CUIT de la empresa
- [ ] Número de punto de venta nuevo creado en ARCA
- [ ] Delegación confirmada a Fernando Ariel Demaio – CUIT 20-31499393-5
- [ ] (Opcional) Constancia del trámite

---

## Qué revisar si algo no sale bien

| Problema | Qué revisar |
|---------|-------------|
| No aparece el servicio de puntos de venta | Confirmá que el usuario tenga acceso a **Administración de Puntos de Venta y Domicilios**. |
| No aparece **Administrador de Relaciones** | Revisá los permisos de clave fiscal y quién administra la representación de la empresa. |
| No encontrás la opción correcta de punto de venta | Verificá si la empresa es **Monotributo** o **Responsable Inscripto** antes de confirmar. |
| El sistema no permite delegar | Revisá que hayas entrado por **Nueva Relación** y que estés seleccionando **ARCA → Webservices → Facturación Electrónica**. |
| El CUIT del autorizado da error | Controlá que esté cargado exactamente como **20-31499393-5**. |
| Ya existe un punto de venta similar | No lo reutilices sin validarlo antes con soporte o con tu estudio contable. |

---

## Enlaces oficiales útiles

- [ARCA: guía para delegar servicios y aceptar delegaciones](https://serviciosweb.arca.gob.ar/genericos/guiasPasoPaso/VerGuia.aspx?id=160)
- [ARCA: cómo facturar electrónicamente en Monotributo](https://www.arca.gob.ar/facturacion/monotributo/factura-electronica.asp)
- [ARCA: tipos de puntos de venta para factura electrónica](https://www.arca.gob.ar/facturacion/documentos/puntos-de-venta.pdf)

---

## Preguntas frecuentes

### ¿Tengo que compartir mi clave fiscal?

No. La clave fiscal no se comparte. El trámite correcto es delegar el servicio desde ARCA.

### ¿La delegación nos da acceso total a ARCA?

No. La delegación aplica solo al servicio de **Facturación Electrónica** para operar en nombre de tu CUIT. No da acceso a nada más.

### ¿Puedo usar un punto de venta que ya tenía?

No conviene. ARCA indica que para factura electrónica por este medio debe usarse un punto de venta específico y distinto del manual u otros sistemas.

### ¿Después del trámite ya puedo emitir desde ZinK ERP?

Todavía falta la activación técnica de nuestro lado. Cuando nos confirmás la delegación y el punto de venta, terminamos la configuración inicial. En general lo dejamos listo en el mismo día.

---

## Ver también

- [Integraciones con servicios externos](/integraciones)
- [Cómo funcionan las integraciones](/integraciones/como-funciona)
