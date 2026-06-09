---
title: 'Seguridad de integraciones: claves, secretos y buenas prácticas | Zink ERP'
sidebar_label: Seguridad y cumplimiento (integraciones)
description: >-
  Las integraciones unen ZinK ERP con cuentas y sistemas ajenos. Un error de
  manejo de claves o capturas puede exponer tu negocio.
sidebar_position: 8
---

## Resumen

Las integraciones unen ZinK ERP con **cuentas y sistemas ajenos**. Un error de manejo de **claves** o **capturas** puede exponer tu negocio. Este artículo resume prácticas simples y concretas para **administradores** y supervisores.

---

## Qué no compartir

- **Claves REST**, **secretos** de API ni **tokens** por correo informal, WhatsApp o chat interno sin cifrado adecuado.
- **Capturas de pantalla** donde se vea una **sesión iniciada** en Mercado Pago, WordPress, AFIP u otro proveedor (se puede filtrar información sensible sin darte cuenta).

Si necesitás ayuda y te piden una captura, usá **ventana privada**, ocultá datos que no hagan falta o pedí un **canal seguro** indicado por soporte.

---

## Cuentas correctas

Usá cuentas del proveedor que correspondan a la **persona jurídica** o responsable de la **organización** en el ERP. Mezclar cuentas personales con la empresa genera problemas legales y operativos difíciles de deshacer.

---

## Revisión periódica

- En **WooCommerce / WordPress:** revisá qué **claves de API** siguen activas y revocá las que ya no usás.
- En **Mercado Pago** y plataformas similares: revisá **aplicaciones conectadas** o permisos según lo que permita cada sitio.
- En la **política interna** de tu empresa, registrá **quién** puede entrar a **Preferencias → Integraciones** y modificar vínculos.

---

## Rotación de claves

Si alguien vio un **secreto**, si un ex integrante tenía acceso, o si hubo **filtración** sospechada:

1. **Revocá** la clave o la aplicación en el proveedor.
2. **Generá credenciales nuevas**.
3. **Actualizá** el vínculo en ZinK ERP con **Gestionar** en la integración correspondiente.

---

## Ver también

- [Integraciones — inicio](/integraciones)
- [WooCommerce](/integraciones/woocommerce)
- [Problemas frecuentes](/integraciones/problemas-frecuentes)
