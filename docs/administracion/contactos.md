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

5. Abrí el tab **Historial comercial** para ver indicadores y listados del contacto:
   - elegí el período de indicadores (**30 / 60 / 90 días**)
   - cambiá el modo (Ventas, Cotizaciones, Presupuestos, Pedidos, Notas de crédito o débito) según lo que necesites
   - en Ventas, usá también el historial filtrable debajo de los gráficos

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

En la ficha del contacto (tab con chip **Nuevo**):

- Resumen financiero del cliente (saldo, último pago, crédito disponible, condición de lista) cuando hay datos cargados.
- Indicadores del período elegido y, en Ventas, gráficos de facturación y estado de pago.
- Tablas por tipo de documento, alineadas a lo que ya conocés en cada módulo.

No reemplaza los listados de Ventas o Cotizaciones: concentra la lectura **desde el contacto**.

---

## Casos frecuentes

### Cliente habitual

Se configura [lista de precio](../configuracion/listas-precio.md) y condiciones comerciales específicas. Antes de llamar o armar una oferta, abrí **Historial comercial** para ver ventas y cotizaciones recientes.

### Proveedor

Se registran datos fiscales y condiciones de compra.

### Seguimiento comercial rápido

Entrá a la ficha → tab **Historial comercial** → modo Ventas o Cotizaciones → ajustá 30 / 60 / 90 días.

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
