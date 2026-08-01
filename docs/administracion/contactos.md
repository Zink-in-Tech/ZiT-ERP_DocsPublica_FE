---
title: Contactos | Zink ERP
sidebar_label: Contactos
description: >-
  Los contactos representan a las personas o empresas con las que operás:
  clientes y proveedores.
sidebar_position: 1
keywords:
  - contactos
  - clientes
  - proveedores
  - lista de precios contacto
  - cuenta corriente
---

## Resumen

Los contactos representan a las personas o empresas con las que operás: clientes y proveedores.

Se utilizan en todo el flujo comercial (presupuestos, pedidos, ventas, órdenes de compra y compras) y afectan directamente listas de precios, cuenta corriente y comprobantes.

También permiten definir condiciones comerciales específicas como bonificaciones, vencimientos y costos de envío.

---

## Antes de empezar

- Definí correctamente los datos fiscales del contacto.
- Configurá la [lista de precio](../configuracion/listas-precio.md) si corresponde.
- Verificá condiciones comerciales (bonificaciones, vencimientos, envío).

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

4. Usar el contacto en operaciones:
   - ventas
   - compras
   - cuenta corriente

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

---

## Casos frecuentes

### Cliente habitual

Se configura [lista de precio](../configuracion/listas-precio.md) y condiciones comerciales específicas.

### Proveedor

Se registran datos fiscales y condiciones de compra.

---

## Si algo sale mal

- **Errores en comprobantes o cuenta corriente**
  - Revisá datos fiscales o condiciones comerciales.

- **No aparece en operaciones**
  - Verificá que el contacto esté correctamente creado.

---

## Ver también

- [Tutorial en video: registrar y gestionar contactos](../guias/tutorial-registrar-gestionar-contactos.mdx)
- [Administración](./administracion.md)
- [Importación masiva de contactos](./contactos-importacion-masiva.md)
- [Ventas](../ventas/ventas.md)
- [Compras](../compras/compras.md)
