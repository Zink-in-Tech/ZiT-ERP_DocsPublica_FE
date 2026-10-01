---
title: 'Preferencias: configuración general e integraciones'
sidebar_label: Preferencias
description: 'Preferencias de Zink ERP: moneda, vencimientos, listas, costo multi-moneda, cotización USD, recálculo de precios e integraciones.'
sidebar_position: 70
keywords:
  - preferencias
  - proceso de pago
  - lista de precios default
  - consulta precio
  - costo multi-moneda
  - cotización USD
  - actualizar listas de precio
  - integraciones
---

## Resumen

- Configurás el comportamiento por defecto del sistema (moneda, vencimientos, lista de precios, formato de comprobante, control de ventas).
- Impacta ventas, compras, presupuestos, consulta de precios y proceso de pago.
- Incluyen proceso de pago (inmediato o asíncrono), días de vencimiento, lista por defecto, formato de comprobante, tipo de control.
- Podés habilitar **Costo multi-moneda** (costo de producto en ARS o USD) y mantener la **cotización USD → ARS**.
- Definís el valor por defecto de **Actualizar listas de precio al actualizar costo** para productos nuevos.
- Consumidor Final siempre tiene proceso de pago inmediato.
- Sirve para definir zona horaria, año fiscal y pantalla de consulta de precios.

## Cuándo usar

- Cambiar el comportamiento por defecto (vencimientos, lista de precios por defecto, formato de comprobante, tipo de control de ventas).
- Configurar proceso de pago (inmediato o asíncrono para contactos).
- Habilitar o configurar la pantalla de consulta de precios (listas, stock, productos relacionados por etiquetas).
- Activar costo en dólares para productos importados o cotizados en USD.
- Definir si los productos nuevos recalculan precios al cambiar el costo.

## Procedimiento

1. Entrá a **Configuración → Preferencias**.
2. Ajustá moneda base, proceso de pago, días de vencimiento, lista por defecto, zona horaria, año fiscal y consulta de precios.
3. Si corresponde, activá **Costo multi-moneda** y revisá la cotización USD → ARS.
4. Definí **Actualizar listas de precio al actualizar costo** (default al crear productos).
5. Completá formato de comprobante, tipo de control y control full ante inconsistencias.
6. Guardá.

---

## Pestaña Integraciones

En la misma pantalla de **Preferencias** tenés una pestaña **Integraciones**. Ahí ves los **servicios externos** disponibles para tu organización (ARCA, Mercado Pago, WooCommerce y otros habilitados para tu organización).

- El **tilde verde** junto a un servicio indica que el alta quedó registrada. Ver [Integraciones con servicios externos](/integraciones).
- **Gestionar** abre el asistente del proveedor (formulario, pasos guiados o redirección para autorizar).

El **detalle por proveedor** no se repite acá: conceptos generales, seguridad y resolución de problemas están en **[Integraciones](/integraciones)**. Para la tienda online (vincular tienda, enlazar productos, pestaña Ecommerce en productos), ver **[Integración WooCommerce](/integraciones/woocommerce)**.

## Campos principales

## Moneda base

Moneda en la que se manejan los montos (ventas, compras, etc.). Actualmente solo AR$ (pesos argentinos).

## Cantidad de decimales

No se permite editar por el momento.

## Proceso de Pago

Inmediato: al finalizar la venta se lanza el proceso de cobro. Asíncrono: podés continuar y registrar el pago desde Finanzas o Contactos cuando quieras. Consumidor Final siempre inmediato.

## Días de vencimiento de pago / cobro

Días por defecto desde la venta hasta que vence el cobro; y desde la compra hasta que vence el pago al proveedor.

## Días de vencimiento de presupuesto

Días por defecto de vigencia del presupuesto; una vez vencido no se puede aceptar.

## Lista de precios por defecto

Lista que se usa con Consumidor Final y contactos sin lista asignada. Ver [Listas de precio](./listas-precio.md) para entender cómo impacta en contactos, cotizaciones, ventas y POS.

## Zona horaria

Zona horaria en la que opera el sistema para reflejar el horario real de las operaciones.

## Año fiscal

Se usa en informes y consultas anuales.

## Pantalla consulta precio de producto

Qué mostrar en Consulta de Precios: listas de precio, stock de productos relacionados, productos relacionados por etiquetas.

## Código de barras variable

Sección para productos etiquetados desde balanza.

### Decimales del código variable

Define cómo Zink ERP interpreta los **6 dígitos centrales** de una etiqueta de **13 dígitos** al escanear un producto con **Cód. variable**.

Debe coincidir con la programación de decimales de la balanza (por ejemplo, 2 decimales o enteros). Si el precio en venta no coincide con la etiqueta, revisá este campo antes de reprogramar productos.

Ver la guía completa en [Qué son los códigos variables](../guias/codigos-variables.md) y el detalle de alineación con Systel en [Balanzas Systel y códigos variables](../guias/balanzas-systel-y-codigos-variables.md).

## Costo multi-moneda

Cuando está activo, en la ficha del [producto](../administracion/productos.md#costo-y-recalculo-de-precios) podés cargar el **costo en ARS o USD** (un solo campo con selector de moneda).

**Qué cubre y qué no**

| Sí | No |
|----|----|
| Costo de producto en ARS o USD | Ventas, POS o facturación en dólares |
| Conversión a ARS con cotización manual | Compras operativas multi-moneda |
| Recálculo de costo ARS (y precios si corresponde) al cambiar la cotización | Listas de precio en USD |

En la práctica: el negocio sigue vendiendo en pesos; el USD sirve para llevar el costo de artículos cotizados en dólares sin convertir a mano cada vez.

Con la preferencia activa:

- En el **encabezado** del sistema aparece el ícono **$** con el valor de cotización vigente. Todos lo ven; solo quienes tienen permiso pueden abrirlo para editar.
- Desde Preferencias y desde el producto (lápiz junto al costo en pesos, si moneda = USD) también se abre el diálogo de cotización.

## Cotización de moneda {#cotizacion-de-moneda}

Diálogo **Cotización de moneda**, con subtítulo del tipo *1 USD = ¿cuántos ARS?*.

| Elemento | Detalle |
|----------|---------|
| Campo editable | Valor de **1 USD en ARS** |
| Auditoría | Última actualización y usuario que guardó |
| Al guardar | Pedís confirmación porque **recalcula el costo ARS de todos los productos con moneda de costo USD** (y los precios de listas automáticas si el producto tiene activo **Recalcular precios al modificar el costo**) |

**Quién puede editarla**

Solo con preferencia **Costo multi-moneda** activa y permiso para **editar cotización de moneda** en el [perfil](../administracion/perfiles.md).

**Dónde se abre**

1. Preferencias (con la preferencia activa).
2. Encabezado (ícono **$**), si tenés permiso de edición.
3. Producto → pestaña precios → lápiz junto al **Costo en pesos (ARS)** cuando el costo está en USD.

Ejemplo: si la cotización pasa de **1000** a **1200**, un producto con costo **US$ 10** pasa de **AR$ 10.000** a **AR$ 12.000** de costo en pesos. Si además tiene el interruptor de recálculo activo, las listas automáticas se recalculan con ese nuevo costo.

## Actualizar listas de precio al actualizar costo

Define el **valor por defecto** del interruptor del producto **Recalcular precios al modificar el costo** cuando creás un producto nuevo.

**Cómo funciona en la práctica**

1. **Preferencia (acá):** valor inicial para productos nuevos (activo o no).
2. **Producto:** cada producto tiene su propio interruptor. Si está activo, al cambiar el costo se recalculan los precios de las listas automáticas (no las de precio manual). Ver [Productos](../administracion/productos.md#costo-y-recalculo-de-precios).
3. **Compra:** al cargar una compra, por cada ítem podés indicar si se actualiza o no el costo del producto. Si se actualiza el costo y el producto tiene el interruptor activo, también se recalculan sus precios.

En resumen: la preferencia es el punto de partida; el producto manda; la compra decide si el costo se actualiza en ese momento.

> **Nota:** en pantallas o perfiles antiguos puede aparecer copy del estilo “Actualizar precios al recibir compras” o “ACTUALIZAR LISTAS DE PRECIO”. Es la misma idea: el producto decide si recalcula precios al cambiar el costo; la preferencia solo fija el default al crear.

## Formato de comprobante de venta

Formato por defecto del comprobante de venta (TRADICIONAL A4 o TICKET 80/100mm).

## Tipo de Control

Tipo de control de ventas por defecto: Full (control completo), 80/20 Valor, 80/20 Items, 80/20 Volumen. Aplica a ventas que usen control.

## Control full ante inconsistencias

Si se debe hacer control completo ante reiteradas inconsistencias (valor indicado no coincide con el requerido).

## Reglas de uso

- Consumidor Final siempre tiene proceso de pago inmediato.
- Tipo de control y control full ante inconsistencias aplican a las ventas que usen control.
- **Costo multi-moneda** no convierte el ERP a operación en dólares: solo el costo del producto y su equivalente en ARS.
- Cambiar la cotización impacta a **todos** los productos con costo en USD; pedí confirmación con cuidado.

## Si algo sale mal

- **Las ventas no abren el cobro al confirmar**
  - Revisá **Proceso de pago** (inmediato vs asíncrono). Consumidor Final siempre es inmediato.
- **No puedo aceptar un presupuesto**
  - Revisá **Días vencimiento presupuesto**.
- **La consulta de precios no muestra listas o stock**
  - Revisá la sección **Pantalla consulta precio de producto** en esta misma pantalla.
- **El precio de una etiqueta de balanza no coincide en venta**
  - Revisá **Decimales del Código Variable** en la sección **Código de Barras Variable** y alinealo con la balanza. Ver [Códigos variables](../guias/codigos-variables.md).
- **No aparece el selector ARS/USD en productos**
  - Activá **Costo multi-moneda** y guardá preferencias.
- **Veo la cotización en el encabezado pero no puedo editarla**
  - Es esperado sin permiso de edición: todos ven el valor; solo editores abren el diálogo.
- **Al guardar la cotización cambiaron muchos precios**
  - Al confirmar se recalcula el costo ARS de productos en USD; con interruptor de recálculo activo también se actualizan listas automáticas. Ver [Productos](../administracion/productos.md#costo-y-recalculo-de-precios).
- **Los productos nuevos no recalculan precios y los viejos sí (o al revés)**
  - La preferencia solo aplica al **crear**. Revisá el interruptor de cada producto.

---

## Buenas prácticas

- Revisá días de vencimiento y lista por defecto al iniciar; afectan presupuestos, ventas y compras.
- Configurá tipo de control según el volumen de ítems y el nivel de control que necesites.
- Si usás costo en USD, actualizá la cotización con criterio (impacta el catálogo completo con costo en dólares).
- Dejá **Actualizar listas de precio al actualizar costo** alineado con cómo opera tu equipo; después ajustá producto por producto si hace falta.

## Ver también

- [Configuración](./configuracion.md)
- [Datos de la organización](./datos-org.md)
- [Listas de precio](./listas-precio.md)
- [Productos](../administracion/productos.md#costo-y-recalculo-de-precios)
- [Compras](../compras/compras.md#actualizar-costo-desde-la-compra)
- [Perfiles](../administracion/perfiles.md)
- [Medios de pago](./medios-pago.md)
- [Qué son los códigos variables](../guias/codigos-variables.md)
- [Integraciones](/integraciones) — guías por servicio (ARCA, Mercado Pago, WooCommerce, seguridad, problemas frecuentes).
