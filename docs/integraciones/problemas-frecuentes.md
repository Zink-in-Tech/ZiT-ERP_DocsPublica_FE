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
| **No aparece** un servicio en la lista de Integraciones | Que la integración esté **habilitada para tu organización**, que estés trabajando en la organización correcta y que tu usuario tenga permisos para ver **Preferencias → Integraciones**. Cerrá sesión y volvé a entrar si el alta fue reciente. |
| **Error al vincular** (mensaje en el ERP) | Leé el texto completo; si hay **código o referencia**, copialo. Revisá **credenciales** (sin espacios de más), **URL exacta** (con `https` si corresponde) y que no haya **caché** vieja del navegador. |
| **OAuth no vuelve** al ERP (Mercado Pago u otro) | **Ventanas emergentes** bloqueadas, **extensión** del navegador que corta redirecciones, **sesión** mezclada (otra cuenta abierta en otra pestaña). Probá ventana privada. |
| **WooCommerce 401 / rechazo** | **Permisos** de la clave (lectura vs lectura/escritura), **URL** pública con **https**, que la clave no esté **revocada** y que WordPress/WooCommerce acepte conexiones externas. |

---

## Consejos generales (nivel básico)

1. **Cerrá y volvé a abrir** el asistente con **Gestionar**; muchos flujos permiten reintentar sin riesgo.
2. **Un solo navegador “limpio”:** probá en ventana privada para descartar extensiones.
3. **Anotá la hora aproximada** del error si llamás a soporte: ayuda a cruzar registros.
4. Si el problema es **del proveedor** (caída de Mercado Pago, AFIP, WordPress), el ERP puede estar bien y aun así fallar el paso: revisá **estado del servicio** en los canales oficiales del tercero.

---

## Tabla ampliada por código de error

| Mensaje o código | Causa probable | Qué hacer |
|------------------|----------------|-----------|
| **401**, **no autorizado** o rechazo de credenciales | Clave incorrecta, secreto incompleto, permisos insuficientes o credencial revocada. | Generá una clave nueva si hay duda, revisá permisos y copiá los datos sin espacios al inicio o final. |
| **No vuelve al ERP** después de autorizar | Redirección bloqueada, sesión del proveedor mezclada o ventana cerrada antes de terminar. | Probá en ventana privada, permití ventanas emergentes y usá una sola cuenta del proveedor durante el alta. |
| **Servicio no disponible**, **timeout** o demora prolongada | Caída temporal del proveedor, problema de internet, certificado SSL o firewall. | Reintentá más tarde, validá que la URL pública abra desde otro navegador y anotá horario del error. |
| **No aparecen sucursales** o puntos de venta | La cuenta externa no tiene datos disponibles para seleccionar, la autorización quedó incompleta o faltan permisos. | Reabrí **Gestionar**, repetí la autorización y confirmá con el responsable de la cuenta externa. |
| **Tienda vacía** aunque WooCommerce tiene productos | URL incorrecta, API REST no accesible, productos no publicados o permisos de lectura insuficientes. | Abrí la tienda pública, revisá la clave en WordPress y verificá que existan productos publicados. |
| **Datos fiscales rechazados** | CUIT, razón social, punto de venta o condición fiscal no coinciden con el proveedor o ente correspondiente. | Compará contra la fuente oficial y evitá abreviaturas o datos copiados de memoria. |

---

## Qué enviar a soporte

Para resolver más rápido, enviá:

- Organización o empresa afectada.
- Usuario que intentó la operación.
- Servicio externo involucrado.
- Fecha y hora aproximada del intento.
- Paso donde ocurrió el problema.
- Mensaje completo o código visible.
- Captura de pantalla sin contraseñas, claves, secretos ni datos bancarios sensibles.

---

## Ver también

- [Integraciones — inicio](/integraciones)
- [Cómo funcionan las integraciones](/integraciones/como-funciona)
- [Mercado Pago](/integraciones/mercado-pago)
- [WooCommerce](/ayuda/integraciones/woocommerce)
- [Facturante](/integraciones/facturante)
