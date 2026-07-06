---
title: Cómo delegar Facturación Electrónica en ARCA para usar Zink ERP | Zink ERP
sidebar_label: Delegar ARCA para Zink ERP
description: >-
  Resumen del flujo completo: trámite en ARCA, aprobación por soporte y
  configuración en Preferencias → Integraciones de ZinK ERP.
sidebar_position: 2
keywords:
  - delegar ARCA
  - facturación electrónica
  - punto de venta
  - clave fiscal
  - Zink ERP
---

## Objetivo

Dejar lista la cuenta fiscal para que ZinK ERP pueda emitir comprobantes electrónicos con el circuito correcto de ARCA.

:::info Antes de empezar

Esta guía asume que en **Preferencias → Integraciones** tu organización va a usar **ARCA**.

Si en tu cuenta aparece **Facturante** y no aparece **ARCA**, seguí la guía específica de [Facturante](../integraciones/facturante.md).

:::

:::info Las tres partes del proceso

(1) **Trámite en ARCA** —esta guía—, (2) **envío de datos a soporte** para aprobar la delegación, (3) **configuración en ZinK ERP** en **Preferencias → Integraciones → ARCA**. No uses **Gestionar** en el ERP hasta que soporte te confirme.

:::

Para el detalle paso a paso del trámite en ARCA, revisá [Cómo delegar Facturación Electrónica en ARCA](../integraciones/delegacion-autorizacion-comprobantes-arca.md).

---

## Qué necesitás antes de empezar

- CUIT y clave fiscal con nivel suficiente.
- Acceso a **Administración de Puntos de Venta y Domicilios**.
- Acceso a **Administrador de Relaciones**.
- Definir si la empresa es **Monotributo** o **Responsable Inscripto**.
- Confirmar con tu equipo contable si ya existe un punto de venta reservado para otro sistema.

---

## Resultado esperado

Al terminar el flujo completo deberías tener:

- un punto de venta nuevo creado en ARCA;
- la delegación de **Facturación Electrónica** hecha a Zink in Tech;
- la delegación **aprobada por soporte**;
- la configuración guardada en **Preferencias → Integraciones → ARCA**.

Eso deja lista la integración, pero la primera emisión puede depender de la habilitación final del punto de venta en ARCA.

---

## Paso a paso

### Paso 1: Crear un punto de venta nuevo

1. Ingresá a [ARCA](https://www.arca.gob.ar/).
2. Abrí **Administración de Puntos de Venta y Domicilios**.
3. Entrá en **A/B/M de puntos de venta**.
4. Elegí **Agregar**.
5. Cargá un número de punto de venta nuevo.
6. Seleccioná la opción de facturación que corresponda a tu condición fiscal.
7. Asociá el domicilio correcto.
8. Confirmá y guardá el número.

### Paso 2: Delegar Facturación Electrónica

1. Volvé al menú principal de clave fiscal.
2. Abrí **Administrador de Relaciones**.
3. Elegí **Nueva Relación**.
4. Buscá el organismo **ARCA**.
5. Ingresá en **Webservices**.
6. Seleccioná **Facturación Electrónica**.
7. Cargá el CUIT autorizado: **20-31499393-5**.
8. Verificá que corresponda a **Fernando Ariel Demaio (Zink in Tech)**.
9. Confirmá la delegación.

### Paso 3: Solicitar aprobación a soporte

Cuando terminaste en ARCA, **contactá a soporte** con:

**[Escribinos por WhatsApp](https://wa.me/5491135598389?text=Hola%2C%20ya%20termin%C3%A9%20el%20tr%C3%A1mite%20en%20ARCA%20y%20estoy%20listo%20para%20activar%20la%20integraci%C3%B3n%20con%20ZinK%20ERP.%0A%0ACUIT%20de%20la%20empresa%3A%20%0APunto%20de%20venta%20en%20ARCA%3A%20%0ADelegaci%C3%B3n%20confirmada%20a%20Fernando%20Ariel%20Demaio%20(CUIT%2020-31499393-5)%3A%20S%C3%AD)** — se abre con un mensaje listo para enviar; completá CUIT y punto de venta antes de mandarlo.

- CUIT de la empresa;
- número del nuevo punto de venta;
- confirmación de que la delegación quedó hecha;
- PDF o captura de la confirmación (opcional).

Soporte revisa y **aprueba la delegación**. Esperá su confirmación antes de continuar en el ERP.

### Paso 4: Configurar ARCA en ZinK ERP

Solo cuando soporte te confirme:

1. Andá a **Preferencias** → pestaña **Integraciones**.
2. Seleccioná **ARCA** y tocá **GESTIONAR**.
3. Completá el formulario fiscal (punto de venta, inicio de actividades, domicilio, ingresos brutos si aplica).
4. Tocá **GUARDAR**.

### Paso 5: Validar que quedó listo

Después de guardar:

- verificá si el servicio queda marcado como configurado en la pestaña **Integraciones**;
- probá una emisión real o controlada solo cuando soporte ya te haya confirmado que podés continuar;
- si el sistema sigue mostrando error fiscal o rechazo del punto de venta, esperá hasta 24 horas y luego contactá soporte con captura y detalle del mensaje.

---

## Errores comunes

### Reutilizar un punto de venta existente

No es lo recomendado. Si ya usás otro sistema o emisión manual, conviene separar circuitos.

### No encontrar el servicio correcto

Revisá permisos de clave fiscal y representación de la empresa.

### Delegar a otro CUIT por error

Antes de confirmar, verificá exactamente el CUIT y el nombre del autorizado.

---

## Preguntas frecuentes

### ¿Tengo que compartir mi clave fiscal?

No. El circuito correcto es delegar el servicio, no compartir credenciales.

### ¿La delegación da acceso total a ARCA?

No. Solo habilita la gestión técnica del servicio de **Facturación Electrónica**.

### ¿Después del trámite ya puedo emitir desde ZinK ERP?

Todavía no. Primero soporte debe aprobar la delegación; después guardás la configuración en **Integraciones → ARCA**. ARCA puede demorar hasta 24 horas en habilitar el punto de venta.

### ¿Esta guía reemplaza la ayuda del portal de integraciones?

No. Esta guía resume el objetivo operativo. Para el detalle del trámite en ARCA, la configuración en el ERP y el checklist completo, revisá [Cómo delegar Facturación Electrónica en ARCA](../integraciones/delegacion-autorizacion-comprobantes-arca.md).

---

## Ver también

- [Cómo delegar Facturación Electrónica en ARCA (detalle completo)](../integraciones/delegacion-autorizacion-comprobantes-arca.md)
- [Preferencias](../configuracion/preferencias.md)
- [Integraciones](../integraciones/intro.md)
