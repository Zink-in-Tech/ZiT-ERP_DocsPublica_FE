---
title: 'Tutorial: delegar la facturación electrónica en ARCA'
sidebar_label: Delegar autorización de comprobantes en ARCA
description: 'Creá un punto de venta en ARCA, delegá Facturación Electrónica, configurá ARCA en Preferencias → Integraciones y avisá a soporte para habilitar la emisión.'
sidebar_position: 7
slug: /integraciones/delegacion-autorizacion-comprobantes-arca
---

## Comprobantes fiscales ARCA

## Resumen

Para emitir factura electrónica desde **Zink ERP** necesitamos que tu empresa (o tu contador) haga un trámite rápido en **ARCA**. El núcleo del trámite en ARCA tiene dos pasos y no hace falta compartir clave fiscal.

1. crear un **punto de venta nuevo**;
2. delegar el servicio de **Facturación Electrónica** a **Fernando Ariel Demaio (Zink in Tech)**, **CUIT 20-31499393-5**.

Después de eso, completá la configuración en **Preferencias → Integraciones → ARCA** (paso 2) y, cuando termines ambos pasos, **avisá a soporte** (paso 3) con CUIT, punto de venta y confirmación de delegación.

> **Importante:** no hace falta compartir clave fiscal.

:::info Alcance de esta guía

Esta guía documenta el flujo de **ARCA nativa** desde **Preferencias → Integraciones**.

- Para el alta desde el ERP (pantalla inicial, formulario y guardado), ver [ARCA](/integraciones/arca).

:::

:::info Las tres partes del proceso

| Paso | Qué hacés | Dónde |
|------|-----------|-------|
| **1. Trámite en ARCA** | Punto de venta nuevo y delegación a **Zink in Tech** (CUIT **20-31499393-5**). Tutorial en este artículo. | Portal de ARCA |
| **2. Configuración en el ERP** | En **Preferencias → Integraciones → ARCA**, tocá **Gestionar** y cargá punto de venta, domicilio fiscal, ingresos brutos e inicio de actividades. | Zink ERP |
| **3. Aviso a soporte** | Cuando terminaste los pasos 1 y 2, enviá CUIT, número de punto de venta y confirmación de delegación. Soporte valida la delegación para habilitar la emisión. | Soporte Zink ERP |

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

Lo que tenés que completar en el flujo completo es:

1. crear el punto de venta y delegar el servicio en ARCA (paso 1);
2. cargar los datos fiscales en **Preferencias → Integraciones → ARCA** (paso 2);
3. avisar a soporte con CUIT, punto de venta y confirmación de delegación (paso 3).

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

   :::caution Elegí la opción con Web Services

   En el desplegable **Sistema** hay muchas variantes (CAEA, contingencia, etc.). Para Zink ERP necesitás una opción que incluya **Web Services**, no CAEA ni contingencia. Revisá la tabla de abajo antes de confirmar.

   :::

### Qué número de punto de venta elegir

- Usá el **próximo número libre** que no esté en uso.
- Si ya tenés el `00001`, probá con `00002`; si el `00002` también existe, seguí con `00003`, y así sucesivamente.
- El número en sí **no define** el tipo de facturación: lo importante es que sea **nuevo para Zink ERP** y que elijas el **tipo correcto** en el paso 7.
- Si ARCA informa que el número ya existe, elegí otro. No reutilices un punto de venta de factura manual, controlador fiscal u otro sistema.

### Qué opción elegir al crear el punto de venta

Elegí exactamente el texto que muestra ARCA en el campo **Sistema**:

| Situación fiscal | Opción a seleccionar en ARCA |
|------------------|------------------------------|
| Monotributo | **Factura Electronica - Monotributo - Web Services** |
| Responsable inscripto en IVA | **RECE para aplicativo y web services** |

![Opción Sistema para Monotributo: Factura Electronica - Monotributo - Web Services](/img/ayuda/integraciones/arca/arca-sistema-monotributo-webservices-01.png)

![Opción Sistema para Responsable Inscripto: RECE para aplicativo y web services](/img/ayuda/integraciones/arca/arca-sistema-rece-ri-01.png)

8. Seleccioná el domicilio asociado al punto de venta.
9. Confirmá la operación.
10. Guardá ese número, lo vamos a necesitar al final del trámite.

:::note Recomendación

Si ya emitís comprobantes por otro sistema, no reutilices ese punto de venta. Para Zink ERP conviene dejar uno exclusivo.

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

Del lado de Zink in Tech completamos la aceptación y revisión de la delegación cuando nos enviás los datos por soporte (Paso 3/3 del flujo completo).

:::

---

## Configuración en el ERP

Cuando terminaste el trámite en ARCA (paso 1):

1. Iniciá sesión en **Zink ERP**.
2. Andá a **Preferencias** → pestaña **Integraciones**.
3. En la columna izquierda, seleccioná **ARCA** (facturación electrónica nativa).
4. Revisá la guía de los tres pasos en pantalla.

![Preferencias → Integraciones → ARCA: pantalla inicial del asistente](/img/ayuda/integraciones/arca/preferencias-integraciones-arca-01.png)

5. Tocá **Gestionar**.
6. Completá el formulario:

![Formulario fiscal de ARCA en Zink ERP](/img/ayuda/integraciones/arca/formulario-fiscal-arca-01.png)

| Campo | Obligatorio | Notas |
|-------|-------------|--------|
| Punto de venta | Sí | El mismo número que creaste en ARCA (ej. `00012`). |
| Inicio de actividades | Recomendado | Fecha en formato **DD/MM/AAAA**, como figura en ARCA (servicio **Consulta de CUIT** o constancia fiscal). |
| Domicilio fiscal | Recomendado | Elegí el domicilio que corresponda a la actividad del punto de venta. Si hay varios, consultá con tu contador cuál conviene. Puede precargarse desde los datos de la organización. |
| Ingresos brutos | Si aplica | Texto **exacto** que debe figurar en los comprobantes según tu jurisdicción y condición. Si tenés dudas, pedí el texto a tu contador antes de guardar. Ejemplos frecuentes: `Exento`, `No corresponde` o la inscripción provincial correspondiente. |

7. Tocá **Guardar**.

Si la configuración ya existía, **Gestionar** sirve para actualizar los mismos datos.

El detalle completo del asistente en el ERP está en [ARCA](/integraciones/arca).

---

## Aviso a soporte

Cuando terminaste el trámite en ARCA **y** guardaste la configuración en el ERP (pasos 1 y 2), escribinos a [Soporte 24x7 por WhatsApp](https://wa.me/5491135598389) con estos datos.

### Opción recomendada: WhatsApp

1. Tocá **[Escribinos por WhatsApp](https://wa.me/5491135598389?text=Hola%2C%20ya%20termin%C3%A9%20el%20tr%C3%A1mite%20en%20ARCA%20y%20la%20configuraci%C3%B3n%20en%20Zink%20ERP.%0A%0ACUIT%20de%20la%20empresa%3A%20%0APunto%20de%20venta%20en%20ARCA%3A%20%0ADelegaci%C3%B3n%20confirmada%20a%20Fernando%20Ariel%20Demaio%20(CUIT%2020-31499393-5)%3A%20S%C3%AD)**.
2. Antes de enviar, **completá** en el mensaje tu CUIT y el número de punto de venta (donde dice las líneas en blanco).
3. Si podés, adjuntá captura o PDF de la confirmación de delegación en ARCA.

Si te resulta más cómodo, copiá y pegá este texto en WhatsApp y completá los datos:

```
Hola, ya terminé el trámite en ARCA y la configuración en Zink ERP.

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

**Qué hace soporte:** revisa y **valida la delegación** para habilitar la emisión con tu CUIT.

**Qué tenés que esperar:** confirmación de que el trámite quedó registrado. Si pasaron **varios días hábiles** sin respuesta, escribinos de nuevo por WhatsApp con el mismo CUIT y punto de venta.

---

## Cómo validar que quedó activo

Después de guardar la configuración:

1. Volvé a la pestaña **Integraciones** y verificá si el servicio queda marcado como configurado.
2. Avisá a soporte si aún no lo hiciste (paso 3/3).
3. Si necesitás emitir, hacé una prueba controlada solo cuando:
   - la configuración quedó guardada;
   - avisaste a soporte y validaron la delegación;
   - ARCA ya habilitó el punto de venta.

Si el ERP rechaza el punto de venta, informa error fiscal o no habilita la emisión, esperá hasta 24 horas desde el trámite. Si el problema sigue, enviá a soporte: organización, CUIT, punto de venta, fecha/hora aproximada y captura del mensaje visible.

---

## Checklist del proceso completo

- [ ] Punto de venta nuevo creado en ARCA (Sistema: **Factura Electronica - Monotributo - Web Services** o **RECE para aplicativo y web services**).
- [ ] Delegación confirmada a Fernando Ariel Demaio – CUIT 20-31499393-5.
- [ ] Configuración guardada en **Preferencias → Integraciones → ARCA** (paso 2).
- [ ] Aviso enviado a soporte con CUIT, punto de venta y confirmación de delegación (paso 3).

---

## Qué revisar si algo no sale bien

| Problema | Qué revisar |
|---------|-------------|
| No aparece el servicio de puntos de venta | Confirmá que el usuario tenga acceso a **Administración de Puntos de Venta y Domicilios** y clave fiscal de **nivel 2 o superior**. |
| No aparece **Administrador de Relaciones** | Revisá los permisos de clave fiscal y quién administra la representación de la empresa. |
| No entiendo **A/B/M** en el menú | Buscá **Alta/Baja/Modificación de puntos de venta** dentro de **Administración de Puntos de Venta y Domicilios**. |
| ARCA dice que el punto de venta ya existe | Elegí el **próximo número libre**; no reutilices uno de otro sistema. |
| No encontrás la opción correcta de punto de venta | Verificá si la empresa es **Monotributo** (**Factura Electronica - Monotributo - Web Services**) o **Responsable Inscripto** (**RECE para aplicativo y web services**) antes de confirmar. |
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

El **próximo libre** que no esté en uso. Si tenés `00001`, probá `00002`. El número no define el tipo de factura; lo crítico es elegir el **Sistema** correcto (**Factura Electronica - Monotributo - Web Services** o **RECE para aplicativo y web services**) y no reutilizar un PV de otro circuito.

### ¿Mi clave fiscal sirve para este trámite?

En general necesitás **nivel 2 o superior** y ver los servicios **Administración de Puntos de Venta y Domicilios** y **Administrador de Relaciones** en el menú. Si no los ves, pedí que revisen permisos antes de seguir.

### ¿Cuánto tarda soporte en responder?

Soporte 24x7 te responde por WhatsApp a cualquier hora. La validación de la delegación puede llevar más tiempo: guardá el mensaje que enviaste y, si pasaron **varios días hábiles** sin confirmación, escribinos de nuevo.

### ¿Después del trámite en ARCA ya puedo emitir desde Zink ERP?

Todavía no. Completá la configuración en **Preferencias → Integraciones → ARCA** (paso 2), avisá a soporte (paso 3) y esperá que ARCA habilite el punto de venta (puede demorar hasta 24 horas).

### ¿Puedo configurar ARCA en el ERP antes de avisar a soporte?

Sí. Es el **paso 2**. Avisá a soporte recién cuando terminaste el trámite en ARCA y la configuración en el ERP.

### ¿Cuándo puedo emitir la primera factura electrónica?

Cuando: (1) completaste el trámite en ARCA, (2) guardaste la configuración en **Integraciones → ARCA**, (3) avisaste a soporte y validaron la delegación, y (4) ARCA habilitó el punto de venta (puede demorar hasta 24 horas).

---

## Ver también

- [ARCA](/integraciones/arca)
- [Preferencias](/configuracion/preferencias)
- [Integraciones con servicios externos](/integraciones)
- [Cómo funcionan las integraciones](/integraciones/como-funciona)
