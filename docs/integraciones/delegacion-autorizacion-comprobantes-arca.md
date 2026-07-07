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

| Etapa | Qué hacés | Qué esperar |
|-------|-----------|-------------|
| **Paso 1/3 — Trámite en ARCA** | Crear punto de venta y delegar (este artículo) | Confirmación en pantalla al terminar cada trámite |
| **Paso 2/3 — Aprobación de soporte** | Enviar CUIT, punto de venta y confirmación de delegación | Mensaje de soporte autorizando continuar en el ERP |
| **Paso 3/3 — Configuración en ZinK ERP** | **Preferencias → Integraciones → ARCA → Gestionar** | Servicio configurado; primera emisión cuando ARCA habilite el PV (hasta 24 h) |

No uses **Gestionar** en el ERP hasta que soporte te confirme (Paso 2/3).

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

- **CUIT** y **clave fiscal de nivel 2 o superior** (la que suele usar la mayoría de los trámites administrativos en ARCA);
- acceso al servicio **Administración de Puntos de Venta y Domicilios**;
- acceso al servicio **Administrador de Relaciones**;
- el criterio fiscal correcto de la empresa: **Monotributo** o **Responsable Inscripto / IVA**.

### Cómo saber si tu clave fiscal alcanza

1. Ingresá a [ARCA](https://www.arca.gob.ar/) con tu CUIT y clave fiscal.
2. Si ves en el menú los servicios **Administración de Puntos de Venta y Domicilios** y **Administrador de Relaciones**, en general tu clave ya tiene el nivel necesario.
3. Si **no** aparecen, pedile a quien administra la clave fiscal de la empresa que revise el **nivel de la clave** y los **permisos del usuario** (a veces hace falta nivel 2 o superior o que el titular/representante habilite esos servicios).

Si alguno de esos servicios no aparece en el menú, no avances con el alta del punto de venta hasta resolverlo: sin esos accesos el trámite se corta en los primeros pasos.

---

## Paso 1: Crear el punto de venta en ARCA

1. Ingresá a [ARCA](https://www.arca.gob.ar/) con CUIT y clave fiscal.
2. Abrí el servicio **Administración de Puntos de Venta y Domicilios**.

   Podés buscarlo desde el buscador del portal: escribí **Administración** y elegí **Administración de puntos de venta y domicilios**.

   ![Buscar Administración de puntos de venta y domicilios en el portal de ARCA](/img/ayuda/integraciones/arca/arca-buscar-puntos-de-venta-01.png)

3. Seleccioná **A/B/M de puntos de venta / emisión** (Alta/Baja/Modificación).

   ![Menú de puntos de venta con la opción A/B/M de puntos de venta / emisión](/img/ayuda/integraciones/arca/arca-abm-puntos-de-venta-01.png)

4. Tocá **Agregar**.
5. Ingresá un **número de punto de venta nuevo** (ver guía abajo).
6. Completá el **nombre de fantasía** (suele pedirse en el alta; puede ser el nombre comercial de la empresa).
7. En **Sistema**, elegí la opción que corresponda a tu situación fiscal (ver tabla abajo).

   ![Formulario de alta de punto de venta con el campo Sistema desplegable](/img/ayuda/integraciones/arca/arca-alta-punto-venta-sistema-01.png)

   :::caution Elegí la opción Webservices

   En el desplegable **Sistema** hay muchas variantes (CAEA, contingencia, etc.). Para ZinK ERP necesitás la opción de **Webservices**, no CAEA ni contingencia. Revisá la tabla de abajo antes de confirmar.

   :::

### Qué número de punto de venta elegir

- Usá el **próximo número libre** que no esté en uso.
- Si ya tenés el `00001`, probá con `00002`; si el `00002` también existe, seguí con `00003`, y así sucesivamente.
- El número en sí **no define** el tipo de facturación: lo importante es que sea **nuevo para ZinK ERP** y que elijas el **tipo correcto** en el paso 7.
- Si ARCA informa que el número ya existe, elegí otro. No reutilices un punto de venta de factura manual, controlador fiscal u otro sistema.

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

1. Volvé al menú principal de clave fiscal (o al portal de ARCA).
2. Abrí el servicio **Administrador de Relaciones de Clave Fiscal**.

   Podés buscarlo desde el buscador: escribí **Administrador de Relaciones** y elegí **Administrador de Relaciones de Clave Fiscal**.

   ![Buscar Administrador de Relaciones de Clave Fiscal en el portal de ARCA](/img/ayuda/integraciones/arca/arca-buscar-administrador-relaciones-01.png)

3. Tocá **Nueva Relación**.

   ![Pantalla del Administrador de Relaciones con el botón Nueva Relación](/img/ayuda/integraciones/arca/arca-nueva-relacion-menu-01.png)

4. Si ARCA te lo pide, seleccioná la persona o empresa representada con la que querés operar.
5. En **Servicio**, tocá **BUSCAR**.

   ![Formulario Incorporar nueva Relación con el botón BUSCAR del servicio](/img/ayuda/integraciones/arca/arca-nueva-relacion-buscar-servicio-01.png)

6. Elegí el organismo **ARCA** y luego **WebServices**.

   ![Selección del servicio ARCA y WebServices](/img/ayuda/integraciones/arca/arca-seleccion-arca-webservices-01.png)

7. Seleccioná **Facturación Electrónica** (no confundir con «Factura electrónica de exportación» ni otras variantes).

   ![Servicio Facturación Electrónica en la lista de WebServices](/img/ayuda/integraciones/arca/arca-facturacion-electronica-servicio-01.png)

   :::note Nivel de clave fiscal

   ARCA puede indicar que **Facturación Electrónica** requiere **nivel de seguridad 3** como mínimo. Si no podés avanzar, pedí que revisen el nivel de tu clave fiscal antes de seguir.

   :::

8. Confirmá el servicio y, en **Representante**, tocá **BUSCAR**.

   ![Servicio Facturación Electrónica seleccionado y botón BUSCAR del representante](/img/ayuda/integraciones/arca/arca-buscar-representante-01.png)

9. Cargá el CUIT **20-31499393-5**, tocá **BUSCAR** y verificá que corresponda a **Fernando Ariel Demaio (Zink in Tech)**.
10. Tocá **CONFIRMAR** y revisá el resumen final.
11. Si querés, guardá la constancia del trámite.

   ![CUIT autorizado 20-31499393-5 con nombre Fernando Ariel Demaio](/img/ayuda/integraciones/arca/arca-cuit-autorizado-01.png)

   Podés ingresar el CUIT con o sin guiones (`20-31499393-5` o `20314993935`).

:::info Qué significa esta delegación

La empresa sigue siendo dueña de sus comprobantes y de su punto de venta.

La delegación solo nos autoriza a hacer la gestión técnica de **Facturación Electrónica** para esa CUIT. No da acceso a otros servicios de ARCA.

Del lado de Zink in Tech completamos la aceptación y revisión de la delegación cuando nos enviás los datos por soporte (Paso 2/3 del flujo completo).

:::

---

## Después del trámite en ARCA — solicitar aprobación a soporte

Cuando terminaste los pasos en ARCA, **contactá a soporte** con estos datos.

### Opción recomendada: WhatsApp

1. Tocá **[Escribinos por WhatsApp](https://wa.me/5491135598389?text=Hola%2C%20ya%20termin%C3%A9%20el%20tr%C3%A1mite%20en%20ARCA%20y%20estoy%20listo%20para%20activar%20la%20integraci%C3%B3n%20con%20ZinK%20ERP.%0A%0ACUIT%20de%20la%20empresa%3A%20%0APunto%20de%20venta%20en%20ARCA%3A%20%0ADelegaci%C3%B3n%20confirmada%20a%20Fernando%20Ariel%20Demaio%20(CUIT%2020-31499393-5)%3A%20S%C3%AD)**.
2. Antes de enviar, **completá** en el mensaje tu CUIT y el número de punto de venta (donde dice las líneas en blanco).
3. Si podés, adjuntá captura o PDF de la confirmación de delegación en ARCA.

Si te resulta más cómodo, copiá y pegá este texto en WhatsApp y completá los datos:

```
Hola, ya terminé el trámite en ARCA y estoy listo para activar la integración con ZinK ERP.

CUIT de la empresa: [completar]
Punto de venta en ARCA: [completar]
Delegación confirmada a Fernando Ariel Demaio (CUIT 20-31499393-5): Sí
```

| Dato | Ejemplo |
|------|---------|
| CUIT de la empresa | `30-71234567-8` |
| Número de punto de venta creado en ARCA | `00012` |
| Confirmación de delegación | Delegación hecha a Fernando Ariel Demaio - CUIT 20-31499393-5 |

Opcional: PDF o captura de la confirmación en ARCA.

**Qué hace soporte:** revisa y **aprueba la delegación** para que ZinK ERP pueda operar con tu CUIT.

**Qué tenés que esperar:** un mensaje de soporte confirmando que podés continuar con la configuración en el ERP. Si pasaron **varios días hábiles** sin respuesta, escribinos de nuevo por WhatsApp con el mismo CUIT y punto de venta.

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
| Punto de venta | Sí | El mismo número que creaste en ARCA (ej. `00012`). |
| Inicio de actividades | Recomendado | Fecha en formato **DD/MM/AAAA**, como figura en ARCA (servicio **Consulta de CUIT** o constancia fiscal). |
| Domicilio fiscal | Recomendado | Elegí el domicilio que corresponda a la actividad del punto de venta. Si hay varios, consultá con tu contador cuál conviene. Puede precargarse desde los datos de la organización. |
| Ingresos brutos | Si aplica | Texto **exacto** que debe figurar en los comprobantes según tu jurisdicción y condición. Si tenés dudas, pedí el texto a tu contador antes de guardar. Ejemplos frecuentes: `Exento`, `No corresponde` o la inscripción provincial correspondiente. |

6. Tocá **GUARDAR**.

Si la configuración ya existía, **Gestionar** sirve para actualizar los mismos datos.

---

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
| No aparece el servicio de puntos de venta | Confirmá que el usuario tenga acceso a **Administración de Puntos de Venta y Domicilios** y clave fiscal de **nivel 2 o superior**. |
| No aparece **Administrador de Relaciones** | Revisá los permisos de clave fiscal y quién administra la representación de la empresa. |
| No entiendo **A/B/M** en el menú | Buscá **Alta/Baja/Modificación de puntos de venta** dentro de **Administración de Puntos de Venta y Domicilios**. |
| ARCA dice que el punto de venta ya existe | Elegí el **próximo número libre**; no reutilices uno de otro sistema. |
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

### ¿Qué número de punto de venta elijo?

El **próximo libre** que no esté en uso. Si tenés `00001`, probá `00002`. El número no define el tipo de factura; lo crítico es elegir el tipo correcto (Monotributo o RI) y no reutilizar un PV de otro circuito.

### ¿Mi clave fiscal sirve para este trámite?

En general necesitás **nivel 2 o superior** y ver los servicios **Administración de Puntos de Venta y Domicilios** y **Administrador de Relaciones** en el menú. Si no los ves, pedí que revisen permisos antes de seguir.

### ¿Cuánto tarda soporte en responder?

Depende del volumen de consultas. Cuando enviés los datos, guardá el mensaje enviado. Si pasaron **varios días hábiles** sin confirmación, escribinos de nuevo por WhatsApp.

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
