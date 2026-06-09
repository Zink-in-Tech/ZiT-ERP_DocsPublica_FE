---
title: 'Mercado Pago en Zink ERP: autorización, sucursal y cobranzas | Zink ERP'
sidebar_label: Mercado Pago
description: >-
  La integración con Mercado Pago permite vincular una cuenta de Mercado Pago
  con ZinkERP para usarla en flujos de cobro donde la organización tenga esa
  integración
sidebar_position: 4
slug: /integraciones/mercado-pago
---

## Resumen

La integración con **Mercado Pago** permite vincular una cuenta de Mercado Pago con ZinkERP para usarla en flujos de cobro donde la organización tenga esa integración habilitada.

El vínculo se realiza con autorización segura en el sitio oficial de Mercado Pago. ZinkERP no pide ni guarda la contraseña de Mercado Pago en un formulario propio.

Esta ayuda explica:

- qué permite la integración;
- qué revisar antes de empezar;
- cómo funciona la autorización;
- cómo conectar la cuenta;
- cómo seleccionar la sucursal al volver al ERP;
- cómo aparece Mercado Pago en cobranzas;
- cómo desconectar o reintentar;
- qué límites de alcance no conviene asumir.

:::caution Alcance

No asumas conciliación automática, sincronización de pagos en tiempo real, devoluciones, QR, links de pago, checkout, ecommerce ni impacto contable/caja diaria uniforme en todas las pantallas. La documentación pública solo describe el comportamiento validado en el frontend y la ayuda in-app actuales.

:::

---

## Qué permite

Con Mercado Pago conectado, ZinkERP puede usar la cuenta autorizada dentro de circuitos de cobro que soporten este medio de pago.

El comportamiento validado es:

- abrir el alta desde **Preferencias → Integraciones**;
- redirigir al usuario al sitio oficial de Mercado Pago para autorizar;
- volver al ERP después de la autorización;
- seleccionar una **sucursal** de Mercado Pago para asociarla con la organización;
- usar un **punto de venta** asociado cuando una cobranza se registra con Mercado Pago;
- desconectar la cuenta desde el asistente.

La integración ayuda a conectar la operación comercial de ZinkERP con una cuenta de Mercado Pago, sin convertir al ERP en reemplazo del panel administrativo de Mercado Pago.

---

## Antes de empezar

Antes de conectar, verificá:

- Tener una cuenta de **Mercado Pago** activa para la persona jurídica o responsable que corresponda a la organización.
- Tener acceso a esa cuenta para iniciar sesión y autorizar aplicaciones.
- Tener permisos en ZinkERP para entrar a **Preferencias → Integraciones** y usar **Gestionar**.
- Usar un navegador que permita abrir o continuar redirecciones hacia Mercado Pago.
- Evitar sesiones mezcladas: si tenés varias cuentas de Mercado Pago abiertas, cerrá las que no correspondan o usá una ventana privada.
- Definir internamente qué sucursal de Mercado Pago debe quedar asociada a la organización.

---

## Autorización segura

El alta usa un flujo de autorización en Mercado Pago.

Esto significa:

1. ZinkERP inicia el proceso desde **Gestionar**.
2. El sistema muestra una confirmación indicando que vas a ser redirigido a Mercado Pago.
3. El navegador abre el sitio oficial de Mercado Pago.
4. Iniciás sesión y autorizás desde Mercado Pago.
5. Mercado Pago devuelve el flujo al ERP.

La contraseña de Mercado Pago se ingresa, si corresponde, **en Mercado Pago**, no en ZinkERP.

:::warning Capturas y datos personales

Si necesitás enviar capturas a soporte, evitá mostrar DNI, email, teléfono, saldos, datos bancarios o sesiones abiertas. En la pantalla de autorización, el nombre de la aplicación puede variar según el ambiente configurado en Mercado Pago.

:::

---

## Conectar Mercado Pago

1. Entrá a **Preferencias → Integraciones**.
2. Seleccioná **Mercado Pago**.
3. Tocá **Gestionar**.
4. En el asistente, tocá **CONECTAR CON MERCADO PAGO**.
5. Confirmá el mensaje **Vas a ser redirigido a Mercado Pago**.
6. En Mercado Pago, iniciá sesión con la cuenta correcta.
7. Revisá los permisos solicitados y autorizá.
8. Esperá el regreso al ERP.

Si cerrás la ventana, cancelás o no completás la autorización, podés volver a **Preferencias → Integraciones → Mercado Pago → Gestionar** y reintentar.

---

## Seleccionar sucursal

Después de volver desde Mercado Pago, el asistente muestra el paso **Seleccioná la sucursal a vincular**.

1. Elegí la **Sucursal** que querés asociar.
2. Si aparece una sola sucursal, puede quedar preseleccionada.
3. Tocá **VINCULAR SUCURSAL**.
4. Esperá el mensaje de confirmación.

Si el ERP no puede cargar las sucursales, reintentá desde **Gestionar**. Si el problema continúa, verificá la cuenta usada en Mercado Pago y pedí soporte con una captura sin datos sensibles.

---

## Uso en cobranzas

En los flujos de pago donde se usa **Mercado Pago**, el sistema solicita el **punto de venta** asociado a la integración.

Ese punto de venta es el dato explícito que el frontend usa para iniciar el cobro con Mercado Pago.

Tené en cuenta:

- El impacto en caja diaria, contabilidad o reportes puede depender de la configuración de la organización y del circuito de cada pantalla.
- No todos los flujos de venta o pago tienen por qué comportarse igual.
- El pago debe estar aprobado antes de tratarlo como finalizado dentro del circuito operativo.
- Para dudas sobre límites, medios disponibles o estado de operaciones, revisá también el panel y la ayuda oficial de Mercado Pago.

---

## Desconectar o reintentar

Cuando la cuenta ya está vinculada, el asistente muestra un estado de cuenta conectada y permite **DESCONECTAR CUENTA**.

Al desconectar:

- se elimina la vinculación actual con la organización;
- podés volver a conectar Mercado Pago más adelante;
- conviene coordinarlo con administración si la organización ya opera cobranzas con Mercado Pago.

Reintentá la conexión cuando:

- se cerró la ventana de Mercado Pago antes de terminar;
- autorizaste con una cuenta incorrecta;
- la autorización no volvió al ERP;
- no se pudieron cargar o vincular sucursales;
- necesitás asociar otra cuenta.

Si autorizaste una cuenta equivocada, desconectá desde el asistente y repetí el proceso con la cuenta correcta.

---

## Seguridad

Buenas prácticas:

- Usá la cuenta de Mercado Pago correcta para la organización.
- No compartas capturas con sesiones abiertas.
- No ingreses credenciales de Mercado Pago fuera del dominio oficial de Mercado Pago.
- Confirmá la URL del navegador antes de cargar datos sensibles.
- Cerrá sesión en equipos compartidos.
- Revisá periódicamente qué aplicaciones o integraciones están autorizadas en Mercado Pago.
- Desconectá la integración si una cuenta deja de usarse o si hubo un error de autorización.

---

## Límites de alcance

Esta documentación no afirma que la integración incluya:

- conciliación automática;
- sincronización de pagos en tiempo real;
- devoluciones o refunds;
- todos los medios de pago de Mercado Pago;
- QR;
- links de pago;
- checkout;
- flujos ecommerce;
- importación automática de pagos u órdenes;
- impacto contable o de caja diaria igual en todas las pantallas;
- campos exactos intercambiados entre Mercado Pago y ZinkERP.

Si necesitás confirmar un caso específico, validalo con soporte o con la persona administradora de tu organización.

---

## Preguntas frecuentes

### ¿ZinkERP me pide la contraseña de Mercado Pago?

No. El flujo te redirige al sitio oficial de Mercado Pago. Si necesitás iniciar sesión, lo hacés en Mercado Pago.

### ¿Qué pasa si tengo más de una cuenta abierta?

Podés terminar autorizando una cuenta incorrecta. Para evitarlo, cerrá sesiones que no correspondan o usá una ventana privada antes de conectar.

### ¿Qué es la sucursal?

Es la sucursal de Mercado Pago que elegís después de autorizar. ZinkERP la asocia a la organización para usarla en los flujos habilitados.

### ¿Qué pasa si solo tengo una sucursal?

El asistente puede mostrarla preseleccionada. De todos modos, revisá antes de tocar **VINCULAR SUCURSAL**.

### ¿Puedo cambiar la cuenta vinculada?

Sí. Desconectá la cuenta desde el asistente y repetí la conexión con la cuenta correcta.

### ¿Mercado Pago impacta siempre en caja diaria?

No se debe asumir un impacto uniforme en todas las pantallas. El impacto puede depender de la configuración y del circuito usado.

### ¿La integración concilia pagos automáticamente?

Esta documentación no afirma conciliación automática. Usá los reportes, pantallas y procesos definidos por tu organización para controlar los cobros.

### ¿Soporta devoluciones o refunds?

No está validado para esta documentación pública. No lo asumas como parte del alcance sin confirmación de soporte o producto.

### ¿Incluye QR, links de pago o checkout?

No está validado para esta documentación pública. Esta página solo cubre autorización, sucursal, punto de venta en cobranzas, desconexión y reintentos.

---

## Si algo sale mal

| Síntoma | Qué revisar |
|---------|-------------|
| No inicia la conexión | Permisos en ZinkERP, sesión del navegador y disponibilidad del proveedor. |
| La autorización no vuelve al ERP | Ventanas emergentes, extensiones, sesión mezclada o ventana cerrada antes de terminar. |
| No aparecen sucursales | Cuenta usada en Mercado Pago, autorización incompleta o error temporal al cargar datos. |
| Se vinculó una cuenta equivocada | Desconectá desde **Gestionar** y repetí el alta con la cuenta correcta. |
| No aparece el punto de venta en una cobranza | Revisá que la integración esté vinculada y que el flujo usado soporte Mercado Pago. |
| El cobro no queda como esperabas | Confirmá el estado en Mercado Pago y revisá el circuito operativo definido por tu organización. |

Al pedir soporte, enviá organización, usuario, horario aproximado, paso donde falló, mensaje visible y captura sin datos sensibles.

---

## Ver también

- [Integraciones](/integraciones)
- [Cómo funcionan las integraciones](/integraciones/como-funciona)
- [Pagos](/finanzas/pagos)
- [Caja diaria](/finanzas/caja-diaria)
- [Seguridad y cumplimiento](/integraciones/seguridad)
- [Problemas frecuentes](/integraciones/problemas-frecuentes)
