---
title: Mercado Pago
description: Vinculá tu cuenta de Mercado Pago con ZinK ERP mediante autorización en el sitio oficial. Elegí sucursal, reintentos y desconexión.
sidebar_position: 4
---

## Resumen

**Mercado Pago** permite conectar tu cuenta para **cobros u otras operaciones** que el backend de ZinK ERP exponga según la configuración del producto.

Lo importante: **no vas a ingresar la contraseña de Mercado Pago en un formulario del ERP**. El sistema te lleva al **sitio oficial** para que inicies sesión y autorices; al volver, elegís la **sucursal** de Mercado Pago que querés asociar.

---

## Qué resuelve

- Unificás cobros con la cuenta de MP que corresponda a tu negocio.
- Autorizás el acceso del modo que Mercado Pago permita, sin compartir la clave dentro del ERP.

---

## Antes de empezar

- Tener una **cuenta de Mercado Pago** activa para la persona jurídica o responsable que corresponda a la organización en el ERP.
- Navegador que **no bloquee ventanas emergentes** (a veces el flujo de autorización abre una ventana o pestaña nueva).
- Permisos para usar **Preferencias → Integraciones** y el botón **Gestionar** en Mercado Pago.

---

## Procedimiento en el ERP

1. Andá a **Preferencias → Integraciones**.
2. Seleccioná **Mercado Pago** en la lista.
3. Tocá **Gestionar**.
4. Seguí el asistente: cuando corresponda, el sistema te **redirige** al sitio de Mercado Pago.
5. Iniciá sesión **en Mercado Pago** (en su página, no en el ERP) y completá la autorización.
6. Al regresar al ERP, **elegí la sucursal** (punto de venta en tu cuenta de MP) que querés vincular.

Si cerraste la ventana o no terminaste el proceso, **volvé a Gestionar** y repetí desde el paso 3.

---

## Cuenta ya vinculada

Desde el mismo asistente podés encontrar acciones como:

- **VINCULAR SUCURSAL** para elegir o cambiar la sucursal asociada.
- **Desconectar** la cuenta cuando necesites dejar de usar esa vinculación.
- Confirmaciones como **¿Desconectar Mercado Pago?** antes de cortar el vínculo.

Cuando una venta usa Mercado Pago, el sistema puede pedir el **punto de venta** asociado a la integración. El impacto en caja y en el registro final depende del circuito de venta y de los permisos del usuario.

---

## Si algo sale mal

- Revisá que el navegador **no esté bloqueando ventanas emergentes**.
- Probá en una **ventana privada** o cerrá sesión en Mercado Pago en otras pestañas y reintentá (evitá mezclar cuentas).
- Si el sistema no “vuelve” al ERP, verificá la **conexión a internet** y que no haya extensiones que corten redirecciones.
- Si no aparecen sucursales o puntos de venta, reabrí **Gestionar** y repetí la autorización. Si persiste, confirmá que la cuenta de Mercado Pago usada tenga esos datos disponibles.
- Si vinculaste una cuenta equivocada, desconectala desde el asistente y repetí el alta usando la cuenta correcta.

---

## Ayuda del proveedor

- [Centro de ayuda Mercado Pago Argentina](https://www.mercadopago.com.ar/ayuda)

:::caution Salís del sitio de documentación

Ese enlace es externo. Para datos bancarios o personales, confirmá siempre que estés en **mercadopago.com.ar** (u el dominio oficial que uses).

:::

---

## Ver también

- [Integraciones — inicio](/integraciones)
- [Cómo funcionan las integraciones](/integraciones/como-funciona) (sección OAuth)
- [Problemas frecuentes](/integraciones/problemas-frecuentes)
