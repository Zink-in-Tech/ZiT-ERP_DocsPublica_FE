---
title: Integraciones con servicios externos
description: Conectá ZinK ERP con facturación electrónica, cobros y tiendas online. Guía para administradores que habilitan integraciones de terceros.
sidebar_position: 1
slug: /integraciones
---

## Resumen

Las **integraciones** son la forma en que ZinK ERP se comunica con **servicios de otras empresas**: facturación electrónica (por ejemplo Facturante), cobros (Mercado Pago), tiendas online (WooCommerce) y otros que el sistema vaya habilitando.

No tenés que programar nada: desde la aplicación seguís un **asistente** o completás datos que el proveedor pide. Esta sección está pensada para **administradores de la organización** o supervisores que habilitan esos vínculos.

---

## Dónde se configuran

1. Entrá a **Preferencias** (o la configuración de tu organización).
2. Abrí la pestaña **Integraciones**.
3. En la columna izquierda ves los **servicios disponibles** para tu organización (la lista depende de lo que habilite el administrador del producto o el servidor).
4. El **tilde verde** junto a un servicio indica que el alta quedó registrada **del lado del servidor** (en casos puntuales puede haber diferencias momentáneas en tu pantalla).
5. Tocá **Gestionar** para abrir el asistente del proveedor (formulario, redirección para autorizar, pasos guiados).

Antes de abrir el diálogo, la pantalla puede mostrar una **guía resumida** del proveedor: pasos, plazos y enlaces útiles.

:::note Capturas

Cuando el equipo publique material en el portal, sumaremos capturas anotadas de la pestaña Integraciones.

:::

---

## Qué vas a encontrar en esta sección

| Artículo | Para qué sirve |
|----------|----------------|
| [Cómo funcionan las integraciones](/integraciones/como-funciona) | Conceptos en palabras simples (OAuth, claves, mapeos). |
| [Facturante](/integraciones/facturante) | Facturación electrónica y contexto Argentina / AFIP. |
| [Mercado Pago](/integraciones/mercado-pago) | Vincular cuenta y sucursal sin ingresar la contraseña en el ERP. |
| [WooCommerce](/integraciones/woocommerce) | Tienda online: claves y buenas prácticas. |
| [Mercado Libre](/integraciones/mercado-libre) | Placeholder hasta alinear el flujo real del producto. |
| [Seguridad y cumplimiento](/integraciones/seguridad) | Cómo cuidar claves y cuentas. |
| [Problemas frecuentes](/integraciones/problemas-frecuentes) | Qué revisar cuando algo no vincula o falla. |

---

## Soporte

- Si el problema es **dentro de ZinK ERP** (no podés completar un paso, mensaje de error del sistema), contactá la **mesa de ayuda o soporte del ERP**.
- Si el fallo es **del proveedor** (Mercado Pago, AFIP, WordPress, etc.), conviene revisar primero los **canales oficiales** de ese servicio: estado del sistema, ayuda y términos.

:::info Contacto

Datos de contacto y horarios de soporte: **TODO: completar con producto** cuando estén definidos para publicación.

:::

---

## Ver también

- [Preferencias](/configuracion/preferencias) — configuración general de la organización.
- [Integración (resumen en Configuración)](/configuracion/integracion) — artículo breve en el módulo Configuración.

---

## Notas para el equipo de documentación

- Alinear con **Preferencias → Integraciones** en el producto y con la ayuda in-app (`docs/help/integracion.md` en el repo del ERP, si aplica).
- **Estilo:** español rioplatense, vos, pasos numerados; enlaces externos: verificar vigencia antes de publicar.
- **Versionado:** en cada artículo publicado, indicar versión mínima del ERP o del módulo de integraciones cuando el producto lo defina.
