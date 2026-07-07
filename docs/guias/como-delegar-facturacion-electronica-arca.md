---
title: Cómo delegar Facturación Electrónica en ARCA para usar Zink ERP | Zink ERP
sidebar_label: Delegar ARCA para Zink ERP
description: >-
  Resumen del flujo completo: trámite en ARCA, configuración en Preferencias →
  Integraciones y aviso a soporte para habilitar la emisión.
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

:::info Las tres partes del proceso

| Paso | Qué hacés | Dónde |
|------|-----------|-------|
| **1. Trámite en ARCA** | Punto de venta nuevo y delegación a **Zink in Tech** (CUIT **20-31499393-5**). Tutorial en [ARCA](/integraciones/delegacion-autorizacion-comprobantes-arca). | Portal de ARCA |
| **2. Configuración en el ERP** | En **Preferencias → Integraciones → ARCA**, tocá **Gestionar** y cargá punto de venta, domicilio fiscal, ingresos brutos e inicio de actividades. | ZinK ERP |
| **3. Aviso a soporte** | Cuando terminaste los pasos 1 y 2, enviá CUIT, número de punto de venta y confirmación de delegación. Soporte valida la delegación para habilitar la emisión. | Soporte ZinK ERP |

:::

Para el detalle paso a paso del trámite en ARCA y el aviso a soporte, revisá [Cómo delegar Facturación Electrónica en ARCA](../integraciones/delegacion-autorizacion-comprobantes-arca.md). Para la configuración en el ERP, ver [ARCA](../integraciones/arca.md).

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
- la configuración guardada en **Preferencias → Integraciones → ARCA**;
- el aviso enviado a soporte con CUIT, punto de venta y confirmación de delegación.

Eso deja lista la integración para que soporte valide la delegación y habilite la emisión. La primera emisión puede depender además de la habilitación final del punto de venta en ARCA (hasta 24 horas).

---

## Paso a paso

### Paso 1: Trámite en ARCA

1. Creá un **punto de venta nuevo** en ARCA.
2. Delegá **Facturación Electrónica** a **Zink in Tech** (CUIT **20-31499393-5**).

El tutorial completo está en [Delegar autorización de comprobantes en ARCA](../integraciones/delegacion-autorizacion-comprobantes-arca.md).

### Paso 2: Configuración en el ERP

1. Andá a **Preferencias** → pestaña **Integraciones**.
2. Seleccioná **ARCA** y tocá **Gestionar**.
3. Cargá punto de venta, domicilio fiscal, ingresos brutos e inicio de actividades.
4. Tocá **Guardar**.

Ver [ARCA en Zink ERP](../integraciones/arca.md).

### Paso 3: Aviso a soporte

Cuando terminaste los pasos 1 y 2, contactá a soporte con:

**[Escribinos por WhatsApp](https://wa.me/5491135598389?text=Hola%2C%20ya%20termin%C3%A9%20el%20tr%C3%A1mite%20en%20ARCA%20y%20la%20configuraci%C3%B3n%20en%20ZinK%20ERP.%0A%0ACUIT%20de%20la%20empresa%3A%20%0APunto%20de%20venta%20en%20ARCA%3A%20%0ADelegaci%C3%B3n%20confirmada%20a%20Fernando%20Ariel%20Demaio%20(CUIT%2020-31499393-5)%3A%20S%C3%AD)** — se abre con un mensaje listo para enviar; completá CUIT y punto de venta antes de mandarlo.

- CUIT de la empresa;
- número del punto de venta;
- confirmación de que la delegación quedó hecha;
- PDF o captura de la confirmación (opcional).

Soporte valida la delegación para habilitar la emisión.

---

## Errores comunes

### Reutilizar un punto de venta existente

No es lo recomendado. Si ya usás otro sistema o emisión manual, conviene separar circuitos.

### No encontrar el servicio correcto

Revisá permisos de clave fiscal y representación de la empresa.

### Delegar a otro CUIT por error

Antes de confirmar, verificá exactamente el CUIT y el nombre del autorizado.

### Avisar a soporte antes de terminar el paso 2

Completá primero el trámite en ARCA y la configuración en el ERP. El aviso a soporte es el **paso 3**.

---

## Preguntas frecuentes

### ¿Tengo que compartir mi clave fiscal?

No. El circuito correcto es delegar el servicio, no compartir credenciales.

### ¿La delegación da acceso total a ARCA?

No. Solo habilita la gestión técnica del servicio de **Facturación Electrónica**.

### ¿Después del trámite en ARCA ya puedo emitir?

Todavía no. Completá la configuración en el ERP (paso 2), avisá a soporte (paso 3) y esperá que ARCA habilite el punto de venta (puede demorar hasta 24 horas).

### ¿Puedo configurar ARCA en el ERP antes de avisar a soporte?

Sí. Es el **paso 2**. El aviso a soporte es el **paso 3**, cuando terminaste ARCA y la configuración en el ERP.

### ¿Esta guía reemplaza la ayuda del portal de integraciones?

No. Esta guía resume el objetivo operativo. Para el detalle del trámite en ARCA, la configuración en el ERP y el checklist completo, revisá [Cómo delegar Facturación Electrónica en ARCA](../integraciones/delegacion-autorizacion-comprobantes-arca.md).

---

## Ver también

- [Cómo delegar Facturación Electrónica en ARCA (detalle completo)](../integraciones/delegacion-autorizacion-comprobantes-arca.md)
- [ARCA en Zink ERP](../integraciones/arca.md)
- [Preferencias](../configuracion/preferencias.md)
- [Integraciones](../integraciones/intro.md)
