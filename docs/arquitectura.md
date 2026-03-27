---
sidebar_position: 2
---

# Arquitectura del producto

Esta visión resume cómo está organizado **ZinK ERP** y encaja con las ayudas contextuales del sistema. El detalle de cada pantalla se amplía en guías por módulo.

## Qué es ZinK ERP

ZinK ERP es un sistema **multiorganización**: cada **organización** (sede, sucursal o punto de venta) tiene su propio conjunto de datos y operaciones (compras, ventas, inventario, etc.). Los **usuarios** acceden con credencial y **perfil**; el perfil define qué pantallas y acciones pueden usar en cada organización.

## Pantallas de entrada

Tras el inicio de sesión, el acceso principal suele ser el **Tablero** o el **Dashboard**: vistas resumidas, indicadores y accesos rápidos según el rol y la organización. La pantalla concreta depende de la configuración de tu contexto.

## Capas funcionales

### Administración

- **Usuarios y perfiles**: alta de colaboradores, asignación de organización y nivel de acceso (permisos agrupados como en el menú).
- **Organizaciones**: incorporación de sucursales o puntos de venta (propios o franquicia), con flujo en pasos (datos principales, usuario administrador, contacto asociado).

### Configuración

- **Datos de la organización**: razón social, CUIT, direcciones, logo para comprobantes, moneda base, etc.; impacta facturación e informes.
- **Preferencias**: comportamiento por defecto (vencimientos, listas de precio, formato de comprobante, control de ventas, zona horaria, año fiscal, consulta de precios, entre otros).
- **Integración**: espacio previsto para conectar ZinK ERP con sistemas externos (e-commerce, contabilidad, etc.) mediante APIs o flujos de datos, según la configuración del producto.

### Operaciones

Áreas típicas del negocio: **contactos**, **productos**, **compras** y **ventas** (incluye POS, pedidos, cotizaciones, presupuestos), **inventarios**, **finanzas** (caja, ingresos/egresos, cuenta corriente, pagos), **impuestos** e **informes**. Cada módulo tiene reglas y flujos descritos en la ayuda in-app.

### Informes

Reportes de stock, ventas, ingresos/egresos, cuenta corriente, etiquetas, promociones, análisis 80/20, etc., alineados con los datos operativos y la configuración de la organización.

## Conceptos transversales

Por ejemplo, los **conceptos** (en administración) categorizan ingresos y egresos de caja para informes; son distintos de Cuenta Corriente y se definen por tipo ingreso o egreso.

## Próximos pasos en esta documentación

- Guías detalladas por módulo (ventas, compras, inventarios, etc.).
- Diagramas o esquemas de integración cuando la API o los conectores estén documentados para clientes.
