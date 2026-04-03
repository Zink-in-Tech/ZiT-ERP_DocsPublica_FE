---
title: Preferencias
description: Configuración general de la organización, incluida la pestaña Integraciones y el enlace a las guías por proveedor.
sidebar_position: 70
---

## Resumen

- Configurás el comportamiento por defecto del sistema (moneda, vencimientos, lista de precios, formato de comprobante, control de ventas).
- Impacta ventas, compras, presupuestos, consulta de precios y proceso de pago.
- Incluyen proceso de pago (inmediato o asíncrono), días de vencimiento, lista por defecto, formato de comprobante, tipo de control.
- Consumidor Final siempre tiene proceso de pago inmediato.
- Sirve para definir zona horaria, año fiscal y pantalla de consulta de precios.

## CuandoUsar

- Cambiar el comportamiento por defecto (vencimientos, lista de precios por defecto, formato de comprobante, tipo de control de ventas).
- Configurar proceso de pago (inmediato o asíncrono para contactos).
- Habilitar o configurar la pantalla de consulta de precios (listas, stock, productos relacionados por etiquetas).

## Flujo

- Editar preferencias. Configurar moneda base, proceso de pago, días de vencimiento, lista por defecto, zona horaria, año fiscal, consulta precio, actualizar listas al actualizar costo, formato comprobante, tipo de control, control full ante inconsistencias. Guardar.

---

## Pestaña Integraciones

En la misma pantalla de **Preferencias** tenés una pestaña **Integraciones**. Ahí ves los **servicios externos** disponibles para tu organización (Facturante, Mercado Pago, WooCommerce, etc., según lo que habilite el sistema).

- El **tilde verde** indica que el vínculo quedó registrado del lado del servidor.
- **Gestionar** abre el asistente del proveedor (formulario o redirección para autorizar).

La **documentación detallada** por proveedor, conceptos (OAuth, claves), seguridad y resolución de problemas está en la sección **[Integraciones](/integraciones)** del menú principal del portal — así evitamos duplicar dos entradas con nombres parecidos en el índice.

## Campos

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

Lista que se usa con Consumidor Final y contactos sin lista asignada.

## Zona Horaria

Zona horaria en la que opera el sistema para reflejar el horario real de las operaciones.

## Año Fiscal

Se usa en informes y consultas anuales.

## Pantalla consulta precio de producto

Qué mostrar en Consulta de Precios: listas de precio, stock de productos relacionados, productos relacionados por etiquetas.

## Actualizar listas de precio al actualizar Costo

Comportamiento por defecto al actualizar el costo de un producto. En el producto podés ver la marca ACTUALIZAR LISTAS DE PRECIO. Al cargar una compra podés indicar si actualizar costo o no por ítem.

## Formato de comprobante de Venta

Formato por defecto del comprobante de venta (TRADICIONAL A4 o TICKET 80/100mm).

## Tipo de Control

Tipo de control de ventas por defecto: Full (control completo), 80/20 Valor, 80/20 Items, 80/20 Volumen. Aplica a ventas que usen control.

## Control Full ante Inconsistencias

Si se debe hacer control completo ante reiteradas inconsistencias (valor indicado no coincide con el requerido).

## Reglas

- Consumidor Final siempre tiene proceso de pago inmediato.
- Tipo de control y control full ante inconsistencias aplican a las ventas que usen control.

## BuenasPracticas

- Revisá días de vencimiento y lista por defecto al iniciar; afectan presupuestos, ventas y compras.
- Configurá tipo de control según el volumen de ítems y el nivel de control que necesites.

## Ver también

- [Integraciones](/integraciones) — guías por proveedor (Facturante, Mercado Pago, WooCommerce, seguridad, problemas frecuentes).
