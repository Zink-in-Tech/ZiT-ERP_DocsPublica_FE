---
title: "Cómo funcionan las integraciones | ZinkERP Docs"
sidebar_label: "Cómo funcionan las integraciones"
description: "Qué es un servicio externo, OAuth, claves REST y mapeo de productos en ZinkERP. Incluye requisitos y problemas frecuentes."
sidebar_position: 2
---

## Resumen

Acá explicamos **solo ideas** que vas a cruzar al vincular ZinK ERP con un proveedor externo. Sirve como “glosario vivo” antes de entrar a Facturante, Mercado Pago o WooCommerce.

---

## Cómo se configuran (repaso breve)

1. **Preferencias** → pestaña **Integraciones**.
2. Elegís el **servicio** en la lista de la izquierda.
3. **Gestionar** abre el asistente (formulario o redirección al sitio del proveedor).
4. El **tilde verde** indica que el servidor registró el vínculo correctamente.

---

## Conceptos en palabras simples

| Término | Qué significa |
|---------|----------------|
| **Servicio externo** | Cualquier integración listada (Facturante, Mercado Pago, WooCommerce, etc.). Es “otro sistema” con el que ZinK ERP va a trabajar. |
| **Alta / vínculo** | El momento en que tu organización en el ERP queda **conectada de forma válida** con ese proveedor. |
| **OAuth** (se lee “o-auth”) | Flujo en el que el ERP te **manda al sitio oficial** del proveedor para que inicies sesión **allá** y autorices el vínculo. **No** escribís la contraseña del proveedor dentro de un formulario del ERP. Ejemplo típico: Mercado Pago. |
| **Clave REST (WooCommerce)** | En WordPress/WooCommerce generás un **par de claves** (clave del cliente + secreto) solo para que sistemas se comuniquen por la API. **No** es la contraseña del administrador de WordPress. |
| **Mapeo de productos** | Cuando el flujo lo permite, asociás cada artículo de la tienda online con un **producto del catálogo del ERP**, para que precios y stock tengan sentido en ambos lados. |
| **Sucursal (Mercado Pago)** | Después de autorizar en Mercado Pago, en el ERP elegís **qué sucursal o punto de venta** de tu cuenta de MP querés asociar al sistema. |

---

## Plantilla mental para cada integración

Cuando leas una guía de proveedor, conviene tener en mente:

1. **Qué problema resuelve** para tu negocio.
2. **Qué necesitás tener listo antes** (cuenta en el proveedor, trámites en un ente, permisos en el ERP).
3. **Pasos dentro del ERP** (botón Gestionar, mensajes que aparecen).
4. **Pasos fuera del ERP** (sitio del proveedor, AFIP, WordPress…).
5. **Plazos y límites** (por ejemplo demoras de habilitación).
6. **Errores frecuentes** y qué controlar primero.
7. **Seguridad** (no compartir claves ni capturas con sesión abierta).
8. **Cómo desvincular o revocar**, si aplica.
9. **Enlaces oficiales** del proveedor (ayuda, términos, estado del servicio).

---

## Ver también

- [Integraciones — inicio](/integraciones)
- [Seguridad y cumplimiento](/integraciones/seguridad)
- [Problemas frecuentes](/integraciones/problemas-frecuentes)
