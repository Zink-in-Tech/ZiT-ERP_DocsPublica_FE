---
title: WooCommerce
description: "Conectá tu tienda WooCommerce con ZinK ERP usando la API REST (URL, clave y secreto). Permisos, mapeo de productos y seguridad."
sidebar_position: 5
---

## Resumen

**WooCommerce** es el módulo de tienda de **WordPress**. La integración con ZinK ERP sirve para acercar el **catálogo del ERP** y la **tienda online**: precios, stock y, cuando el flujo esté activo, **mapeo** de cada artículo de la tienda con un producto del ERP.

Vas a necesitar tres datos que suelen pedirse en el asistente: la **URL pública de la tienda** (con `https`), la **clave del cliente** y el **secreto** generados en WordPress.

---

## Qué resuelve

- Menos carga manual de precios y existencias entre la tienda y el ERP.
- Una sola “fuente de verdad” para productos cuando el flujo esté completo.
- Control más claro de qué producto de la tienda corresponde a qué producto del sistema.

---

## Antes de empezar

- Tener acceso de **administrador** a WordPress (para crear claves de API).
- Tienda accesible por **HTTPS** (dirección que empiece con `https://`).
- Definir si el sistema solo **lee** datos de la tienda o también debe **escribir** (eso define el nivel de permisos de la clave).

---

## Pasos fuera del ERP (WordPress / WooCommerce)

1. Iniciá sesión en el **panel de WordPress** de tu tienda.
2. Andá a **WooCommerce → Ajustes → Avanzado**.
3. Buscá la sección **API REST** (o el nombre equivalente en tu versión de WooCommerce).
4. **Creá una nueva clave** de API.
5. Elegí los permisos:
   - **Lectura** — si el ERP solo necesita leer datos de la tienda.
   - **Lectura/Escritura** — si el sistema debe **actualizar** datos en la tienda (por ejemplo stock o precios). Usalo solo si el producto y tu proceso lo requieren.
6. Guardá y copiá el **par clave + secreto** en un lugar seguro. El secreto muchas veces **solo se muestra una vez**.

:::note Capturas

**TODO:** sumar en el portal una secuencia de capturas (Ajustes → Avanzado → API REST → generar clave) cuando el equipo tenga el material en CDN o assets.

:::

---

## Procedimiento en el ERP

1. **Preferencias → Integraciones**.
2. Seleccioná **WooCommerce** y tocá **Gestionar**.
3. Completá la **URL pública** de la tienda (con `https`), la **clave del cliente** y el **secreto**.
4. Confirmá la vinculación según los pasos del asistente y el mensaje de éxito o error.

---

## Mapeo de productos

Cuando el flujo esté disponible, vas a ver una forma de **asociar** cada ítem de la tienda con un producto del catálogo del ERP.

- Revisá **códigos SKU**, nombres y descripciones para no enlazar el artículo equivocado.
- Si algo “no cierra” en stock o precio, lo primero suele ser verificar **qué producto quedó mapeado** en cada lado.

---

## Seguridad (muy importante)

- Tratá la **clave y el secreto como contraseñas**: no los mandes por chat informal ni los dejes en capturas de pantalla.
- Si alguien pudo ver el secreto o lo compartiste por error, **revocá la clave en WooCommerce** y generá un **par nuevo**.
- Periódicamente revisá en WordPress qué **aplicaciones o claves** siguen activas.

---

## Si algo sale mal

- **Error 401 o “no autorizado”:** permisos de la clave (¿solo lectura cuando hace falta escritura?), URL exacta con `https`, usuario de la clave correcto.
- **La tienda no responde:** certificado SSL, que la URL sea la **pública** (la que abre un cliente), no una dirección interna.
- **TODO: confirmar con producto** — si aplica revisión de hora del servidor ante rechazos de API.

---

## Ver también

- [Integraciones — inicio](/integraciones)
- [Seguridad y cumplimiento](/integraciones/seguridad)
- [Problemas frecuentes](/integraciones/problemas-frecuentes)
