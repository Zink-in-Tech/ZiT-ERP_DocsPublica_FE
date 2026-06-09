---
title: 'Preferencias de Zink ERP: configuración general e integraciones | Zink ERP'
sidebar_label: Preferencias
description: 'Preferencias de Zink ERP: configuración general e integraciones'
sidebar_position: 70
keywords:
  - preferencias
  - proceso de pago
  - lista de precios default
  - consulta precio
  - integraciones
---

## Resumen

- Configurás el comportamiento por defecto del sistema (moneda, vencimientos, lista de precios, formato de comprobante, control de ventas).
- Impacta ventas, compras, presupuestos, consulta de precios y proceso de pago.
- Incluyen proceso de pago (inmediato o asíncrono), días de vencimiento, lista por defecto, formato de comprobante, tipo de control.
- Consumidor Final siempre tiene proceso de pago inmediato.
- Sirve para definir zona horaria, año fiscal y pantalla de consulta de precios.

## Cuándo usar

- Cambiar el comportamiento por defecto (vencimientos, lista de precios por defecto, formato de comprobante, tipo de control de ventas).
- Configurar proceso de pago (inmediato o asíncrono para contactos).
- Habilitar o configurar la pantalla de consulta de precios (listas, stock, productos relacionados por etiquetas).

## Procedimiento

- Editar preferencias. Configurar moneda base, proceso de pago, días de vencimiento, lista por defecto, zona horaria, año fiscal, consulta precio, actualizar listas al actualizar costo, formato comprobante, tipo de control, control full ante inconsistencias. Guardar.

---

## Pestaña Integraciones

En la misma pantalla de **Preferencias** tenés una pestaña **Integraciones**. Ahí ves los **servicios externos** disponibles para tu organización (Facturante, Mercado Pago, WooCommerce, etc., según lo que habilite el sistema).

- El **tilde verde** junto a un servicio indica que el alta quedó registrada **del lado del servidor** (en casos puntuales puede haber diferencias momentáneas en tu pantalla). Es el mismo criterio que explica [Integraciones con servicios externos](/integraciones).
- **Gestionar** abre el asistente del proveedor (formulario, pasos guiados o redirección para autorizar).

El **detalle por proveedor** no se repite acá: conceptos generales, seguridad y resolución de problemas están en **[Integraciones](/integraciones)**. Para la tienda online (vincular tienda, enlazar productos, pestaña Ecommerce en productos), ver **[Integración WooCommerce](/integraciones/woocommerce)**.

## Campos principales

## Moneda Base

Moneda en la que se manejan los montos (ventas, compras, etc.). Actualmente solo AR$ (pesos argentinos).

## Cantidad de Decimales

No se permite editar por el momento.

## Proceso de Pago

Inmediato: al finalizar la venta se lanza el proceso de cobro. Asíncrono: podés continuar y registrar el pago desde Finanzas o Contactos cuando quieras. Consumidor Final siempre inmediato.

## Días Vencimiento Pago / Cobro

Días por defecto desde la venta hasta que vence el cobro; y desde la compra hasta que vence el pago al proveedor.

## Días Vencimiento Presupuesto

Días por defecto de vigencia del presupuesto; una vez vencido no se puede aceptar.

## Lista de Precios por Defecto

Lista que se usa con Consumidor Final y contactos sin lista asignada. Ver [Listas de precio](./listas-precio.md) para entender cómo impacta en contactos, cotizaciones, ventas y POS.

## Zona Horaria

Zona horaria en la que opera el sistema para reflejar el horario real de las operaciones.

## Año Fiscal

Se usa en informes y consultas anuales.

## Pantalla consulta precio de producto

Qué mostrar en Consulta de Precios: listas de precio, stock de productos relacionados, productos relacionados por etiquetas.

## Código de Barras Variable

Sección para productos etiquetados desde balanza.

### Decimales del Código Variable

Define cómo Zink ERP interpreta los **6 dígitos centrales** de una etiqueta de **13 dígitos** al escanear un producto con **Cód. variable**.

Debe coincidir con la programación de decimales de la balanza (por ejemplo, 2 decimales o enteros). Si el precio en venta no coincide con la etiqueta, revisá este campo antes de reprogramar productos.

Ver la guía completa en [Qué son los códigos variables](../guias/codigos-variables.md) y el detalle de alineación con Systel en [Balanzas Systel y códigos variables](../guias/balanzas-systel-y-codigos-variables.md).

## Actualizar listas de precio al actualizar Costo

Comportamiento por defecto al actualizar el costo de un producto. En el producto podés ver la marca ACTUALIZAR LISTAS DE PRECIO. Al cargar una compra podés indicar si actualizar costo o no por ítem.

## Formato de comprobante de Venta

Formato por defecto del comprobante de venta (TRADICIONAL A4 o TICKET 80/100mm).

## Tipo de Control

Tipo de control de ventas por defecto: Full (control completo), 80/20 Valor, 80/20 Items, 80/20 Volumen. Aplica a ventas que usen control.

## Control Full ante Inconsistencias

Si se debe hacer control completo ante reiteradas inconsistencias (valor indicado no coincide con el requerido).

## Reglas de uso

- Consumidor Final siempre tiene proceso de pago inmediato.
- Tipo de control y control full ante inconsistencias aplican a las ventas que usen control.

## Si algo sale mal

- **Las ventas no abren el cobro al confirmar**
  - Revisá **Proceso de pago** (inmediato vs asíncrono). Consumidor Final siempre es inmediato.
- **No puedo aceptar un presupuesto**
  - Revisá **Días vencimiento presupuesto**.
- **La consulta de precios no muestra listas o stock**
  - Revisá la sección **Pantalla consulta precio de producto** en esta misma pantalla.
- **El precio de una etiqueta de balanza no coincide en venta**
  - Revisá **Decimales del Código Variable** en la sección **Código de Barras Variable** y alinealo con la balanza. Ver [Códigos variables](../guias/codigos-variables.md).

---

## Buenas prácticas

- Revisá días de vencimiento y lista por defecto al iniciar; afectan presupuestos, ventas y compras.
- Configurá tipo de control según el volumen de ítems y el nivel de control que necesites.

## Ver también

- [Configuración](./configuracion.md)
- [Datos de la organización](./datos-org.md)
- [Listas de precio](./listas-precio.md)
- [Medios de pago](./medios-pago.md)
- [Qué son los códigos variables](../guias/codigos-variables.md)
- [Integraciones](/integraciones) — guías por proveedor (Facturante, Mercado Pago, WooCommerce, seguridad, problemas frecuentes).
