---
title: 'ARCA: facturación electrónica nativa'
sidebar_label: ARCA
description: 'Emití comprobantes electrónicos desde Zink ERP con la integración nativa con ARCA: trámite en ARCA, datos fiscales en el sistema y aviso a soporte.'
sidebar_position: 2
slug: /integraciones/arca
---

## Resumen

**ARCA** es la integración nativa de Zink ERP para facturación electrónica en Argentina. El sistema se conecta de forma directa con **ARCA** (ente recaudador; anteriormente AFIP) para emitir comprobantes electrónicos, sin depender de un proveedor externo como Facturante.

La configuración se realiza desde **Preferencias → Integraciones → ARCA** mediante un asistente que primero muestra una guía de inicio y luego solicita los datos fiscales de la organización.

:::info Las tres partes del proceso

| Paso | Qué hacés | Dónde |
|------|-----------|-------|
| **1. Trámite en ARCA** | Punto de venta nuevo y delegación a **Zink in Tech** (CUIT **20-31499393-5**). Ver [tutorial en ARCA](/integraciones/delegacion-autorizacion-comprobantes-arca). | Portal de ARCA |
| **2. Configuración en el ERP** | En **Preferencias → Integraciones → ARCA**, tocá **Gestionar** y cargá punto de venta, domicilio fiscal, ingresos brutos e inicio de actividades. | Zink ERP |
| **3. Aviso a soporte** | Cuando terminaste los pasos 1 y 2, enviá CUIT, número de punto de venta y confirmación de delegación. Soporte valida la delegación para habilitar la emisión. | Soporte 24x7 por WhatsApp |

:::

:::info Antes de seguir

Para facturación electrónica, usá **Preferencias → Integraciones → ARCA**. Es la integración nativa del sistema.

:::

Esta ayuda explica:

- qué permite la integración nativa;
- qué muestra la pantalla inicial del asistente;
- qué revisar antes de empezar;
- qué datos fiscales vas a necesitar;
- qué significa el plazo de habilitación en ARCA;
- cómo completar el alta desde **Gestionar**;
- enlace al trámite en ARCA cuando corresponda;
- límites de alcance y preguntas frecuentes.

---

## Qué permite

La integración nativa con ARCA permite preparar la facturación electrónica de la organización para operar desde Zink ERP con información fiscal cargada en el sistema.

Desde el asistente podés:

- abrir el alta desde **Preferencias → Integraciones**, seleccionando **ARCA** en la columna izquierda;
- revisar la guía inicial;
- tocar **Gestionar** para avanzar al formulario fiscal;
- completar punto de venta, domicilio fiscal, ingresos brutos e inicio de actividades;
- guardar la configuración.

No hay OAuth ni vinculación de cuentas de terceros: solo tenés que cargar los datos fiscales de la organización según consten en ARCA.

---

## Pantalla inicial del asistente (paso 2)

Al seleccionar **ARCA** en **Preferencias → Integraciones**, el panel derecho muestra la guía de inicio antes de abrir el formulario.

![Preferencias → Integraciones → ARCA: pantalla inicial del asistente](/img/ayuda/integraciones/arca/preferencias-integraciones-arca-01.png)

### Contenido visible

| Bloque | Qué indica |
|--------|------------|
| **Título** | Facturación electrónica nativa (ARCA). |
| **Descripción** | Zink ERP se conecta de forma directa con ARCA para emitir comprobantes electrónicos, sin depender de un proveedor externo como Facturante. |
| **Integración nativa** | Solo tenés que cargar los datos fiscales de la organización; no hay OAuth ni vinculación de cuentas de terceros. |
| **Plazo de habilitación** | La habilitación del punto de venta en ARCA puede demorar **hasta 24 horas** después del trámite en el ente. Planificá con margen si necesitás facturar el mismo día. |
| **Antes de empezar** | Tené a mano el punto de venta habilitado, domicilio fiscal, ingresos brutos e inicio de actividades según consten en ARCA. Completá los datos exactamente como figuran en el ente regulador para evitar rechazos al emitir. |
| **Acción** | **Gestionar** abre el siguiente paso del asistente (formulario fiscal). |

---

## Antes de empezar

Antes de tocar **Gestionar**, prepará:

- acceso a Zink ERP con permisos para usar **Preferencias → Integraciones** y **Gestionar**;
- **punto de venta habilitado** en ARCA para facturación electrónica;
- **domicilio fiscal** según conste en ARCA;
- **ingresos brutos** con el texto exacto que debe figurar en los comprobantes;
- **inicio de actividades** en el formato que pide el formulario (DD/MM/AAAA);
- tiempo operativo suficiente si necesitás emitir comprobantes el mismo día.

Los datos deben coincidir con la información fiscal real de la organización. Un error en punto de venta, domicilio o ingresos brutos puede provocar rechazos al emitir.

Si todavía no creaste el punto de venta ni delegaste el servicio en ARCA, completá primero el **paso 1** en [Cómo delegar Facturación Electrónica en ARCA](/integraciones/delegacion-autorizacion-comprobantes-arca).

---

## Tiempos de habilitación en ARCA

La pantalla inicial advierte que la habilitación del punto de venta en ARCA puede demorar **hasta 24 horas** después del trámite en el ente.

Ese plazo no necesariamente indica un error de Zink ERP. Puede depender de la disponibilidad, validación o procesamiento externo de ARCA.

Si necesitás facturar en una fecha específica, planificá el alta con margen.

---

## Cómo completar el alta (paso 2)

1. Entrá a **Preferencias → Integraciones**.
2. En la columna izquierda, seleccioná **ARCA**.
3. Leé la guía inicial (integración nativa, plazos y requisitos).
4. Tocá **Gestionar**.
5. Completá el formulario fiscal:

![Formulario fiscal de ARCA en Zink ERP](/img/ayuda/integraciones/arca/formulario-fiscal-arca-01.png)

| Campo | Obligatorio | Notas |
|-------|-------------|--------|
| Punto de venta | Sí | El mismo número habilitado en ARCA (ej. `00012`). |
| Inicio de actividades | Recomendado | Fecha en formato **DD/MM/AAAA**, como figura en ARCA. |
| Domicilio fiscal | Recomendado | Elegí el domicilio que corresponda a la actividad del punto de venta. |
| Ingresos brutos | Si aplica | Texto **exacto** que debe figurar en los comprobantes según tu jurisdicción y condición. |

6. Tocá **Guardar**.
7. Avisá a soporte con CUIT, punto de venta y confirmación de delegación (paso 3). Ver [Aviso a soporte](/integraciones/delegacion-autorizacion-comprobantes-arca#aviso-a-soporte).

Si la configuración ya existía, **Gestionar** sirve para actualizar los mismos datos.

---

## Qué pasa al guardar

Después de guardar (paso 2):

- la configuración fiscal queda registrada en el ERP;
- el servicio puede mostrarse como configurado en la pestaña **Integraciones**;
- completá el **paso 3**: avisá a soporte para que valide la delegación y habilite la emisión;
- la primera emisión también depende de que ARCA haya habilitado el punto de venta (puede demorar hasta 24 horas).

Si el ERP rechaza el punto de venta, informa error fiscal o no habilita la emisión, esperá hasta 24 horas desde el trámite. Si el problema sigue, enviá a soporte: organización, CUIT, punto de venta, fecha/hora aproximada y captura del mensaje visible.

---

## Problemas frecuentes

| Síntoma | Qué revisar |
|---------|-------------|
| No aparece ARCA en Integraciones | Permisos del usuario y servicios habilitados para la organización. |
| No está disponible **Gestionar** | La configuración fiscal puede estar activa o el usuario puede no tener permisos suficientes. |
| Rechazo al emitir | Punto de venta, domicilio fiscal e ingresos brutos deben coincidir exactamente con ARCA. |
| Demora luego del trámite | La habilitación del punto de venta en ARCA puede demorar hasta 24 horas. |

---

## Preguntas frecuentes

### ¿ARCA requiere OAuth o vincular una cuenta externa?

No. Es una integración nativa: solo cargás los datos fiscales de la organización en el asistente.

### ¿En qué pantalla empiezo en el ERP?

En el **paso 2** del flujo: **Preferencias → Integraciones → ARCA**. La guía inicial resume los tres pasos; **Gestionar** abre el formulario fiscal.

### ¿Por qué habla de hasta 24 horas?

ARCA puede tardar en habilitar el punto de venta después del trámite en el ente. Ese plazo es externo al ERP.

### ¿Puedo usar un punto de venta de otro sistema?

No conviene. Para facturación electrónica por este medio conviene un punto de venta exclusivo para Zink ERP, habilitado en ARCA.

### ¿Puedo seguir usando Facturante?

No. Facturante es una integración legada: la facturación electrónica se configura en **ARCA**, desde **Preferencias → Integraciones**. Ver [Facturante (legado)](/integraciones/facturante).

---

## Ver también

- [Integraciones](/integraciones)
- [Delegar autorización de comprobantes en ARCA](/integraciones/delegacion-autorizacion-comprobantes-arca)
- [Facturante (legado)](/integraciones/facturante)
- [Cómo funcionan las integraciones](/integraciones/como-funciona)
- [Problemas frecuentes](/integraciones/problemas-frecuentes)
- [Preferencias](/configuracion/preferencias)
