---
title: Cómo delegar Facturación Electrónica en ARCA para Zink ERP | Zink ERP
sidebar_label: Delegar autorización de comprobantes en ARCA
description: >-
  Creá un punto de venta en ARCA, delegá Facturación Electrónica, solicitá
  aprobación a soporte y configurá ARCA en Preferencias → Integraciones de
  ZinK ERP.
sidebar_position: 6
slug: /integraciones/delegacion-autorizacion-comprobantes-arca
---

## Comprobantes Fiscales ARCA

## Resumen

Para emitir factura electrónica desde **ZinkERP** necesitamos que tu empresa (o tu contador) haga un trámite rápido en **ARCA**. El núcleo del trámite en ARCA tiene dos pasos y no hace falta compartir clave fiscal.

1. crear un **punto de venta nuevo**;
2. delegar el servicio de **Facturación Electrónica** a **Fernando Ariel Demaio (Zink in Tech)**, **CUIT 20-31499393-5**.

Después de eso, **soporte revisa la delegación** y recién entonces la organización puede completar la configuración en **Preferencias → Integraciones → ARCA** dentro de ZinK ERP.

> **Importante:** no hace falta compartir clave fiscal.

:::info Alcance de esta guía

Esta guía documenta el flujo de **ARCA nativa**.

- Si en tu organización aparece **ARCA** en **Preferencias → Integraciones**, este es el artículo correcto.
- Si en tu organización aparece **Facturante** y no aparece **ARCA**, seguí [Facturante](/integraciones/facturante).
- Si ves ambos servicios, no inicies dos altas en paralelo: confirmá con soporte cuál corresponde a tu organización.

:::

:::info Las tres partes del proceso

(1) **Trámite en ARCA** —este artículo—, (2) **envío de datos a soporte** para aprobar la delegación, (3) **configuración en ZinK ERP** en **Preferencias → Integraciones → ARCA**. No uses **Gestionar** en el ERP hasta que soporte te confirme.

:::

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

## Después del trámite en ARCA — solicitar aprobación a soporte

Cuando terminaste los pasos en ARCA, **contactá a soporte** con estos datos:

**[Escribinos por WhatsApp](https://wa.me/5491135598389?text=Hola%2C%20ya%20termin%C3%A9%20el%20tr%C3%A1mite%20en%20ARCA%20y%20estoy%20listo%20para%20activar%20la%20integraci%C3%B3n%20con%20ZinK%20ERP.%0A%0ACUIT%20de%20la%20empresa%3A%20%0APunto%20de%20venta%20en%20ARCA%3A%20%0ADelegaci%C3%B3n%20confirmada%20a%20Fernando%20Ariel%20Demaio%20(CUIT%2020-31499393-5)%3A%20S%C3%AD)** — se abre con un mensaje listo para enviar; completá CUIT y punto de venta antes de mandarlo.

| Dato | Ejemplo |
|------|---------|
| CUIT de la empresa | `30-71234567-8` |
| Número de punto de venta creado en ARCA | `00012` |
| Confirmación de delegación | Delegación hecha a Fernando Ariel Demaio - CUIT 20-31499393-5 |

Opcional: PDF o captura de la confirmación en ARCA.

**Qué hace soporte:** revisa y **aprueba la delegación** para que ZinK ERP pueda operar con tu CUIT.

**Qué tenés que esperar:** un mensaje de soporte confirmando que podés continuar con la configuración en el ERP.

:::caution Importante

No uses **Gestionar** en **Integraciones → ARCA** hasta recibir esa confirmación.

:::

---

## Configuración en ZinK ERP

Solo cuando **soporte te confirme** que la delegación está aprobada:

1. Iniciá sesión en **ZinK ERP**.
2. Andá a **Preferencias** → pestaña **Integraciones**.
3. En la columna izquierda, seleccioná **ARCA** (facturación electrónica nativa).
4. Tocá **GESTIONAR**.

![Preferencias → Integraciones → ARCA](/img/ayuda/integraciones/arca/preferencias-integraciones-arca-01.png)

5. Completá el formulario:

![Formulario fiscal de ARCA en ZinK ERP](/img/ayuda/integraciones/arca/formulario-fiscal-arca-01.png)

| Campo | Obligatorio | Notas |
|-------|-------------|--------|
| Punto de venta | Sí | El mismo número que creaste en ARCA. |
| Inicio de actividades | Recomendado | Como figura en ARCA. |
| Domicilio fiscal | Recomendado | Puede precargarse desde los datos de la organización. |
| Ingresos brutos | Si aplica | Texto que debe figurar en los comprobantes, según tu situación fiscal. |

6. Tocá **GUARDAR**.

Si la configuración ya existía, **Gestionar** sirve para actualizar los mismos datos.

## Cómo validar que quedó activo

Después de guardar la configuración:

1. Volvé a la pestaña **Integraciones** y verificá si el servicio queda marcado como configurado.
2. Confirmá que soporte ya te haya dado el ok para operar.
3. Si necesitás emitir, hacé una prueba controlada solo cuando:
   - soporte confirmó la delegación;
   - la configuración quedó guardada;
   - ARCA ya habilitó el punto de venta.

Si el ERP rechaza el punto de venta, informa error fiscal o no habilita la emisión, esperá hasta 24 horas desde el trámite. Si el problema sigue, enviá a soporte: organización, CUIT, punto de venta, fecha/hora aproximada y captura del mensaje visible.

---

## Checklist del proceso completo

- [ ] Punto de venta nuevo creado en ARCA (tipo correcto: Monotributo o RI).
- [ ] Delegación confirmada a Fernando Ariel Demaio – CUIT 20-31499393-5.
- [ ] Datos enviados a soporte (CUIT, PV, confirmación).
- [ ] **Confirmación de soporte** recibida.
- [ ] Configuración guardada en **Preferencias → Integraciones → ARCA**.

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

Todavía no. Primero soporte debe **aprobar la delegación** y confirmarte que podés continuar. Después tenés que guardar la configuración en **Preferencias → Integraciones → ARCA**. Recién entonces podés emitir, siempre que ARCA haya habilitado el punto de venta (puede demorar hasta 24 horas).

### ¿Puedo configurar ARCA en el ERP antes de hablar con soporte?

No conviene. Soporte debe aprobar la delegación primero. Si guardás la configuración antes, puede fallar o quedar incompleta.

### ¿Cuándo puedo emitir la primera factura electrónica?

Cuando: (1) soporte confirmó la delegación, (2) guardaste la configuración en **Integraciones → ARCA**, y (3) ARCA habilitó el punto de venta (puede demorar hasta 24 horas).

---

## Ver también

- [Preferencias](/configuracion/preferencias)
- [Integraciones con servicios externos](/integraciones)
- [Cómo funcionan las integraciones](/integraciones/como-funciona)
