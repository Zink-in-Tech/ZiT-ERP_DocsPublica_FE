---
title: Contactos | Zink ERP
sidebar_label: Contactos
description: >-
  Clientes y proveedores en Zink ERP: ficha, condiciones comerciales, cuenta
  corriente e historial comercial desde el contacto.
sidebar_position: 1
keywords:
  - contactos
  - clientes
  - proveedores
  - lista de precios contacto
  - cuenta corriente
  - historial comercial
---

## Resumen

Los contactos representan a las personas o empresas con las que operás: clientes y proveedores.

Se utilizan en todo el flujo comercial (presupuestos, pedidos, ventas, cotizaciones, órdenes de compra y compras) y afectan listas de precios, cuenta corriente y comprobantes.

También permiten definir condiciones comerciales específicas (bonificaciones, vencimientos, costos de envío) y, desde la ficha, revisar el **historial comercial** del contacto.

---

## Antes de empezar

- Definí correctamente los datos fiscales del contacto.
- Configurá la [lista de precio](../configuracion/listas-precio.md) si corresponde.
- Verificá condiciones comerciales (bonificaciones, vencimientos, envío).
- Para ver el historial comercial necesitás permiso a Ventas, Cotizaciones, Presupuestos, Pedidos o Notas de crédito/débito (según lo que quieras consultar).

---

## Procedimiento

1. Crear o editar un contacto.

2. Completar la información:
   - datos generales (nombre, razón social, contacto)
   - datos fiscales
   - datos comerciales
   - domicilios
   - personas de contacto

3. Guardar el contacto.

4. Desde la barra de acciones de la ficha (contacto ya creado):
   - **Cta Cte Proveedor** / **Cta Cte Cliente**
   - **Ingresar Movimiento** (cobro o pago)
   - **Nuevo** documento (venta, presupuesto, pedido o cotización, según permisos)

5. Abrí el tab **Historial comercial** para el seguimiento del cliente desde la ficha:
   - elegí el período de indicadores (**30 / 60 / 90 días**)
   - cambiá el modo (Ventas, Cotizaciones, Presupuestos, Pedidos, Notas de crédito o débito)
   - en Ventas, usá los gráficos y el historial filtrable debajo
   - abrí comprobantes o acciones desde las filas cuando estén disponibles

---

## Campos principales

### Nombre / Apellido / Razón Social

Identificación del contacto para búsquedas y comprobantes.

### Mail / Teléfono

Datos de contacto utilizados para comunicación y envío de comprobantes.

### Dirección

Ubicación física del contacto (facturación, entrega, principal). Podés cargarla con mapa/geolocalización o **ingresarla a mano**; en ambos casos el botón para agregar la dirección se habilita cuando el texto está completo.

### Datos de facturación

Incluye:
- lista de precios
- bonificación
- días de vencimiento
- condiciones de envío

Impacta presupuestos, pedidos y ventas.

### CUIT

Identificador fiscal del contacto.

### Personas de contacto

Referentes dentro del cliente o proveedor.

### Historial comercial

El tab **Historial comercial** (chip **Nuevo** en la ficha) concentra el seguimiento del cliente **desde el contacto**: saldo, actividad del período y documentos, sin reemplazar los listados de cada módulo.

Los datos se cargan **al entrar al tab** (no mientras estás en otros tabs de la ficha).

**Para qué sirve**

- Antes de llamar, cotizar o cobrar: ver cómo viene operando ese cliente.
- Armar una oferta con contexto (ventas y cotizaciones recientes).
- Abrir un comprobante o seguir una acción sin saltar primero al listado general.

**Qué vas a encontrar**

1. **Resumen financiero** (cuando hay datos): saldo, último pago, crédito disponible, condición de lista y, si aplica, bonificación y plazo. Con permiso podés abrir la **cuenta corriente** desde ahí.
2. **Selector de período** de indicadores: **30 / 60 / 90 días**.
3. **Modos según permiso:** Ventas, Cotizaciones, Presupuestos, Pedidos, Notas de crédito y Notas de débito.
4. En **Ventas:**
   - Indicadores del período: cantidad, vendido, cobrado, pendiente de cobro, ticket promedio y recurrencia (días promedio entre ventas).
   - Gráfico de facturación de los **últimos 6 meses calendario** (esa serie no cambia al mover el selector 30/60/90).
   - Vista por **estado de pago**.
   - Debajo, historial de ventas con filtros (intervalo máximo **3 meses** por consulta, igual que el listado de Ventas).
5. En **Cotizaciones:** indicadores de oportunidad (abiertas, vencidas, próximas 7 días, cerradas, ratio de aceptación) y tabla filtrable. Si el origen de datos no trae montos, los indicadores muestran cantidades y un aviso lo deja claro.
6. En **Presupuestos, Pedidos y Notas:** cantidad e importe del período, y tabla paginada. En pedidos también podés ver pendientes de despacho y entregados cuando el resumen los informa.
7. En las tablas, las **acciones** siguen el mismo criterio de permisos que en cada módulo (ver comprobante, emitir fiscal, etc., cuando correspondan).

**Cómo usarlo**

1. Guardá el contacto (hace falta id; el alta sin guardar no alcanza).
2. Entrá al tab **Historial comercial**.
3. Elegí el período **30 / 60 / 90 días**.
4. Cambiá el modo según lo que necesites.
5. Abrí un comprobante o usá las acciones de la fila cuando estén disponibles.

**Qué no es**

No reemplaza Ventas, Cotizaciones ni los demás listados: concentra la **lectura y el acceso** desde la ficha del contacto.

:::note Permisos
El tab aparece si tu perfil tiene permiso a al menos un módulo comercial listado. Cada modo muestra solo lo que tu permiso permite. Sin permiso a un dominio, ese modo no se ofrece (no se inventan ceros como si hubiera datos).
:::

:::tip Atajos
Con el historial visible, **Alt + ← / →** navega entre tabs de la ficha y **Alt + 1–6** salta a un tab (incluye Historial).
:::

---

## Casos frecuentes

### Cliente habitual

Se configura [lista de precio](../configuracion/listas-precio.md) y condiciones comerciales específicas. Antes de llamar o armar una oferta, abrí **Historial comercial** para ver ventas y cotizaciones recientes.

### Proveedor

Se registran datos fiscales y condiciones de compra.

### Seguimiento comercial rápido

Entrá a la ficha → tab **Historial comercial** → modo Ventas o Cotizaciones → ajustá **30 / 60 / 90 días**. Revisá el resumen, los indicadores y, si hace falta, abrí el comprobante desde la tabla.

---

## Si algo sale mal

- **Errores en comprobantes o cuenta corriente**
  - Revisá datos fiscales o condiciones comerciales.

- **No aparece en operaciones**
  - Verificá que el contacto esté correctamente creado.

- **No veo el tab Historial comercial**
  - El contacto tiene que estar guardado (no alcanza el alta sin id).
  - Revisá que tu perfil tenga permiso a algún módulo comercial (Ventas, Cotizaciones, Presupuestos, Pedidos o Notas).

---

## Ver también

- [Tutorial en video: registrar y gestionar contactos](../guias/tutorial-registrar-gestionar-contactos.mdx)
- [Administración](./administracion.md)
- [Importación masiva de contactos](./contactos-importacion-masiva.md)
- [Cuenta corriente](../finanzas/cuenta-corriente.md)
- [Ventas](../ventas/ventas.md)
- [Cotizaciones](../ventas/cotizaciones.md)
- [Compras](../compras/compras.md)
