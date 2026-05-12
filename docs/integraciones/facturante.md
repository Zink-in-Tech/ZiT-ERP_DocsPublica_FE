---
title: Facturante
description: Configurá facturación electrónica en ZinkERP con Facturante, datos fiscales, plazos ARCA, términos e instructivo del asistente.
sidebar_position: 3
slug: /ayuda/integraciones/facturante
---

## Resumen

**Facturante** es el proveedor que permite habilitar la emisión de comprobantes electrónicos desde ZinkERP.

La configuración se realiza desde **Preferencias → Integraciones** mediante un asistente que solicita datos fiscales y de la empresa. En Argentina, el alta puede depender de trámites ante **ARCA** y de tiempos externos al ERP.

Esta ayuda explica:

- qué permite la integración;
- qué revisar antes de empezar;
- qué datos fiscales y de empresa vas a necesitar;
- qué significa el plazo de habilitación de ARCA;
- cómo completar el alta desde el asistente;
- dónde revisar términos e instructivo PDF;
- qué ocurre al confirmar;
- qué significa que la configuración fiscal ya esté activa;
- límites de alcance y preguntas frecuentes.

:::caution Alcance

Esta documentación no promete facturación automática para todos los flujos, tipos de comprobante específicos, cancelaciones, notas de crédito ni cambios futuros de proveedor. Describe el alta pública visible hoy desde el asistente de integración.

:::

---

## Qué permite

La integración permite preparar la facturación electrónica de la organización para operar desde ZinkERP con información fiscal ordenada.

El comportamiento validado es:

- abrir el alta desde **Preferencias → Integraciones**;
- revisar un aviso de plazos;
- acceder a términos del proveedor e instructivo PDF;
- completar datos fiscales, datos de empresa y domicilios;
- enviar el alta al backend;
- ver una finalización correcta o un mensaje de error según la respuesta.

Facturante es el proveedor usado actualmente para este flujo de facturación electrónica.

---

## Antes de empezar

Antes de abrir el asistente, prepará:

- acceso a ZinkERP con permisos para usar **Preferencias → Integraciones** y **Gestionar**;
- datos fiscales correctos de la organización;
- información de contacto actualizada;
- domicilio real y domicilio fiscal;
- datos del punto de venta que corresponda;
- trámite o documentación necesaria ante ARCA, según tu caso;
- tiempo operativo suficiente si necesitás emitir comprobantes el mismo día.

Los datos deben coincidir con la información fiscal real de la organización. Un error en CUIT, condición frente al IVA, punto de venta o domicilio puede frenar el alta.

---

## Datos que vas a necesitar

El asistente puede precargar algunos datos desde la organización, pero conviene revisarlos antes de confirmar.

Datos visibles en el flujo:

| Grupo | Datos |
|-------|-------|
| Acceso/contacto | Email, contraseña de acceso al servicio, teléfono. |
| Identificación | Tipo de documento, número de documento, CUIT. |
| Empresa | Razón social, nombre de fantasía, fecha de comienzo de actividad. |
| Facturación | Punto de venta, condición frente al IVA. |
| Domicilio real | Calle, número, código postal, provincia y ciudad. |
| Domicilio fiscal | Calle, número, código postal, provincia y ciudad. |

El formulario incluye una acción para copiar datos del domicilio real al domicilio fiscal cuando corresponda.

:::warning Revisá antes de confirmar

No completes datos de memoria si tenés dudas. Validá la información fiscal con la documentación de la organización o con la persona responsable administrativa/contable.

:::

---

## Tiempos de habilitación ARCA

El asistente advierte que la integración puede demorar **hasta 24 horas** luego de haber realizado el trámite correspondiente ante **ARCA**.

Ese plazo no necesariamente indica un error de ZinkERP. Puede depender de la disponibilidad, validación o procesamiento externo del ente regulador y del proveedor.

Si necesitás facturar en una fecha específica, planificá el alta con margen.

---

## Términos e instructivo PDF

Antes de completar el alta, el asistente muestra un paso con documentación.

Ahí podés:

- abrir los **términos y condiciones de Facturante**;
- descargar o visualizar un **instructivo PDF** para trámites vinculados a ARCA;
- revisar la información antes de avanzar al formulario.

Enlace del proveedor:

- [Términos y condiciones de Facturante](https://www.facturante.com/Content/facturante/TerminosYCondiciones_Facturante2023.pdf)

:::caution Enlace externo

El enlace anterior abre documentación de un tercero. Revisá la URL del navegador antes de cargar o compartir información sensible.

:::

---

## Cómo completar el alta

1. Entrá a **Preferencias → Integraciones**.
2. Seleccioná **Facturante**.
3. Tocá **Gestionar**.
4. Leé el aviso de plazos.
5. Revisá los términos y el instructivo PDF.
6. Avanzá al formulario fiscal.
7. Completá o corregí los datos requeridos.
8. Revisá especialmente CUIT, condición frente al IVA, punto de venta, razón social y domicilios.
9. Tocá **CONFIRMAR**.

Mientras el formulario se envía, evitá cerrar la ventana o volver atrás.

---

## Qué pasa al confirmar

Al confirmar, ZinkERP envía los datos del alta al backend.

Después de la respuesta:

- si el alta finaliza correctamente, el asistente muestra un mensaje de integración finalizada;
- si ocurre un error, el asistente muestra un estado de error y el sistema informa el problema disponible;
- si necesitás soporte, conviene enviar el texto del error, la organización, el usuario, la fecha/hora aproximada y una captura sin datos sensibles.

No edites otros datos fiscales mientras haya una duda sobre el resultado del alta.

---

## Si la configuración fiscal ya está activa

Cuando la configuración fiscal de la cuenta ya está activa, el botón **Gestionar** puede no estar disponible para Facturante.

En ese caso, no necesariamente falta una acción: puede significar que el alta fiscal ya fue realizada para esa organización.

Para cambios posteriores, correcciones o dudas sobre el estado fiscal, trabajá con soporte o con la persona administradora de la organización.

---

## Problemas frecuentes

| Síntoma | Qué revisar |
|---------|-------------|
| No aparece Facturante en Integraciones | Permisos del usuario y servicios habilitados para la organización. |
| No está disponible **Gestionar** | La configuración fiscal puede estar activa o el usuario puede no tener permisos suficientes. |
| El formulario no permite confirmar | Campos requeridos incompletos o datos con formato inválido. |
| CUIT rechazado o inválido | Revisá el número y confirmá que corresponda a la organización. |
| No aparecen provincias o ciudades | Reintentá más tarde o contactá soporte si el listado no carga. |
| Error al confirmar | Revisá el mensaje, validá datos fiscales y enviá captura a soporte si persiste. |
| Demora luego del trámite | Recordá que la habilitación ante ARCA puede demorar hasta 24 horas. |

---

## Límites de alcance

Esta documentación no afirma:

- facturación automática en todos los flujos;
- tipos exactos de comprobantes soportados;
- emisión de notas de crédito o cancelaciones;
- reemplazo futuro de Facturante;
- módulo propio de facturación;
- plazos distintos a los indicados por el asistente;
- resolución automática de trámites pendientes ante ARCA;
- validación contable o fiscal completa sin revisión administrativa.

Para confirmar un flujo fiscal específico, consultá con soporte o con la persona responsable administrativa/contable de tu organización.

---

## Preguntas frecuentes

### ¿Facturante permite emitir comprobantes electrónicos desde ZinkERP?

Sí. Facturante es el proveedor usado actualmente para habilitar la facturación electrónica desde ZinkERP.

### ¿Dónde se configura?

En **Preferencias → Integraciones → Facturante → Gestionar**, siempre que la acción esté disponible para tu organización y usuario.

### ¿Por qué habla de ARCA?

Porque la habilitación fiscal puede depender de trámites o validaciones ante el ente regulador en Argentina. El asistente indica que el proceso puede demorar hasta 24 horas luego del trámite correspondiente.

### ¿Qué hago si necesito facturar hoy?

Iniciá el alta con margen y revisá que los trámites externos estén completos. Si hay urgencia, contactá soporte antes de asumir que la habilitación será inmediata.

### ¿Qué significa si no veo el botón Gestionar?

Puede indicar que la configuración fiscal ya está activa o que tu usuario no tiene permisos suficientes. Consultá con administración o soporte.

### ¿Puedo cambiar datos fiscales después del alta?

No lo asumas desde esta pantalla. Para correcciones posteriores, trabajá con soporte o con la persona administradora de la organización.

### ¿Qué comprobantes se pueden emitir?

Esta documentación no detalla tipos exactos de comprobantes. Validá el alcance fiscal específico con soporte o con el flujo de emisión correspondiente.

### ¿El alta reemplaza los trámites ante ARCA?

No. El asistente acompaña la configuración en ZinkERP, pero puede requerir trámites o validaciones externas.

---

## Ver también

- [Integraciones](/integraciones)
- [Cómo funcionan las integraciones](/integraciones/como-funciona)
- [Preferencias](/configuracion/preferencias)
- [Problemas frecuentes](/integraciones/problemas-frecuentes)
