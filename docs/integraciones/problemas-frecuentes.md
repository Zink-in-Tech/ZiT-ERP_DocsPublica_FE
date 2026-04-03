---
title: Problemas frecuentes (integraciones)
description: Qué revisar cuando no aparece un servicio, falla el vínculo, OAuth no vuelve al ERP o WooCommerce devuelve error 401.
sidebar_position: 8
---

## Resumen

Acá reunimos **síntomas comunes** al trabajar con integraciones y un **primer checklist** antes de escalar a soporte. No reemplaza el diagnóstico del proveedor externo ni de mesa de ayuda, pero suele ahorrar tiempo.

---

## Tabla rápida

| Síntoma | Qué revisar primero |
|---------|----------------------|
| **No aparece** un servicio en la lista de Integraciones | Que el **backend** lo tenga dado de alta para tu organización. En entornos de prueba a veces hay **flags** que no aplican a producción: **TODO: confirmar con producto** el mensaje exacto para tu caso. |
| **Error al vincular** (mensaje en el ERP) | Leé el texto completo; si hay **código o referencia**, copialo. Revisá **credenciales** (sin espacios de más), **URL exacta** (con `https` si corresponde) y que no haya **caché** vieja del navegador. |
| **OAuth no vuelve** al ERP (Mercado Pago u otro) | **Ventanas emergentes** bloqueadas, **extensión** del navegador que corta redirecciones, **sesión** mezclada (otra cuenta abierta en otra pestaña). Probá ventana privada. |
| **WooCommerce 401 / rechazo** | **Permisos** de la clave (lectura vs lectura/escritura), **URL** pública con **https**, que la clave no esté **revocada**. **TODO: confirmar con producto** si aplica revisar hora del servidor. |

---

## Consejos generales (nivel básico)

1. **Cerrá y volvé a abrir** el asistente con **Gestionar**; muchos flujos permiten reintentar sin riesgo.
2. **Un solo navegador “limpio”:** probá en ventana privada para descartar extensiones.
3. **Anotá la hora aproximada** del error si llamás a soporte: ayuda a cruzar registros.
4. Si el problema es **del proveedor** (caída de Mercado Pago, AFIP, WordPress), el ERP puede estar bien y aun así fallar el paso: revisá **estado del servicio** en los canales oficiales del tercero.

---

## Tabla ampliada por código de error

**TODO:** ampliar esta sección con **códigos de error del API** o textos exactos que muestre el producto, cuando soporte o desarrollo entreguen la lista oficial.

---

## Ver también

- [Integraciones — inicio](/integraciones)
- [Cómo funcionan las integraciones](/integraciones/como-funciona)
- [Mercado Pago](/integraciones/mercado-pago)
- [WooCommerce](/integraciones/woocommerce)
- [Facturante](/integraciones/facturante)
