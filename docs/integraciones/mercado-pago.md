---
title: 'Mercado Pago: autorización, sucursal y cobros'
sidebar_label: Mercado Pago
description: 'Vinculá tu cuenta de Mercado Pago con Zink ERP, elegí la sucursal y usala para cobrar, sin cargar tu contraseña en el sistema.'
sidebar_position: 5
slug: /integraciones/mercado-pago
---

## Resumen

La integración con **Mercado Pago** vincula una cuenta de Mercado Pago con Zink ERP para usarla en los cobros que ofrecen ese medio de pago.

El vínculo se hace con una autorización en el sitio oficial de Mercado Pago: Zink ERP no te pide ni guarda la contraseña de Mercado Pago. Después de autorizar, elegís la **sucursal** de Mercado Pago que queda asociada a tu organización.

## Antes de empezar

- Tené una cuenta de **Mercado Pago** activa a nombre de la persona o empresa que corresponde a la organización, y acceso para iniciar sesión.
- Necesitás permisos en Zink ERP para entrar a **Preferencias → Integraciones** y usar **Gestionar**.
- Usá un navegador que permita las redirecciones hacia Mercado Pago (revisá bloqueadores de ventanas emergentes).
- Si tenés varias cuentas de Mercado Pago abiertas, cerrá las que no correspondan o usá una ventana privada.
- Definí qué sucursal de Mercado Pago tiene que quedar asociada a la organización.

## Procedimiento

### Conectar Mercado Pago

1. Entrá a **Preferencias → Integraciones**.
2. Seleccioná **Mercado Pago**.
3. Tocá **Gestionar**.
4. En el asistente, tocá **CONECTAR CON MERCADO PAGO**.
5. Confirmá el mensaje **Vas a ser redirigido a Mercado Pago**.
6. En Mercado Pago, iniciá sesión con la cuenta correcta.
7. Revisá los permisos solicitados y autorizá.
8. Esperá a que el navegador vuelva a Zink ERP.

Si cerrás la ventana, cancelás o no terminás la autorización, volvé a **Preferencias → Integraciones → Mercado Pago → Gestionar** y reintentá.

### Seleccionar la sucursal

Al volver desde Mercado Pago, el asistente muestra el paso **Seleccioná la sucursal a vincular**.

1. Elegí la **Sucursal** que querés asociar. Si tenés una sola, puede aparecer preseleccionada.
2. Tocá **VINCULAR SUCURSAL**.
3. Esperá el mensaje de confirmación.

### Cobrar con Mercado Pago

Cuando registrás un cobro con **Mercado Pago**, el sistema te pide el **punto de venta** asociado a la integración. Tratá el pago como finalizado recién cuando Mercado Pago lo muestre aprobado.

Para consultar el detalle de cada operación, límites o medios disponibles, usá también el panel de Mercado Pago.

### Desconectar o cambiar la cuenta

Con la cuenta vinculada, el asistente muestra el estado de cuenta conectada y el botón **DESCONECTAR CUENTA**.

1. Entrá a **Preferencias → Integraciones → Mercado Pago → Gestionar**.
2. Tocá **DESCONECTAR CUENTA**.
3. Si querés vincular otra cuenta, repetí [Conectar Mercado Pago](#conectar-mercado-pago).

Coordiná la desconexión con administración si la organización ya cobra con Mercado Pago.

## Si algo sale mal

| Síntoma | Qué revisar |
|---------|-------------|
| No inicia la conexión | Tus permisos, la sesión del navegador y que Mercado Pago esté disponible. |
| La autorización no vuelve a Zink ERP | Ventanas emergentes bloqueadas, extensiones del navegador, sesiones mezcladas o ventana cerrada antes de terminar. |
| No aparecen sucursales | La cuenta usada en Mercado Pago o una autorización incompleta. Reintentá desde **Gestionar**. |
| Se vinculó una cuenta equivocada | Desconectá desde **Gestionar** y repetí el alta con la cuenta correcta. |
| No aparece el punto de venta en un cobro | Revisá que la integración esté vinculada. |
| El cobro no queda como esperabas | Confirmá el estado del pago en Mercado Pago. |

Si necesitás ayuda, escribinos a **Soporte 24x7 por WhatsApp**: [+54 9 11 3559-8389](https://wa.me/5491135598389). Contanos la organización, el usuario, el horario aproximado, el paso donde falló y el mensaje que viste. Si mandás capturas, ocultá DNI, email, teléfono, saldos y datos bancarios.

## Ver también

- [Integraciones](/integraciones)
- [Cómo funcionan las integraciones](/integraciones/como-funciona)
- [Pagos](/finanzas/pagos)
- [Caja diaria](/finanzas/caja-diaria)
- [Seguridad y cumplimiento](/integraciones/seguridad)
- [Problemas frecuentes](/integraciones/problemas-frecuentes)
