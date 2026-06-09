---
title: 'Múltiples sucursales: organizaciones, stock y usuarios | Zink ERP'
sidebar_label: 'Múltiples sucursales: organizaciones, stock y usuarios'
description: >-
  Zink ERP es multiorganización: cada organización puede representar una sucursal
  propia, franquicia o punto de venta con usuarios, contactos y operaciones
  propias.
sidebar_position: 61
keywords:
  - múltiples sucursales
  - organizaciones
  - stock inter organización
  - franquicias
  - usuarios por sucursal
---

## Resumen

Zink ERP es multiorganización: cada organización puede representar una sucursal propia, franquicia o punto de venta con usuarios, contactos y operaciones propias.

Esta guía reúne qué revisar cuando la empresa opera con más de una sucursal.

---

## Antes de empezar

- Definir si cada unidad será sucursal propia o franquicia.
- Crear la organización desde [Nuevas organizaciones](./organizacion-alta.md).
- Asignar usuarios y perfiles por organización.
- Confirmar si se necesita consultar stock de otras sucursales.

---

## Procedimiento

1. Creá cada organización o sucursal desde [Nuevas organizaciones](./organizacion-alta.md).
2. Configurá datos fiscales y preferencias de cada organización.
3. Asigná usuarios y perfiles según responsabilidades.
4. Revisá productos, listas de precio y contactos necesarios para operar.
5. Habilitá consulta de stock inter-organización si necesitás ver disponibilidad de otras sucursales.
6. Controlá informes filtrando por organización cuando la pantalla lo permita.

---

## Qué cambia y qué no cambia

- ✔️ Cada organización puede tener operaciones, usuarios y stock propios.
- ✔️ Los informes pueden permitir filtros por organización.
- ✔️ La consulta inter-org ayuda a decidir reposición o venta.
- ❌ Ver stock de otra organización no equivale a transferir mercadería.
- ❌ Una sucursal no hereda automáticamente todos los permisos de otra.

---

## Transferencias de stock

La documentación actual confirma consulta de stock inter-organización, pero no describe una pantalla específica de transferencia entre organizaciones.

Las transferencias o coordinaciones entre organizaciones conviene validarlas con el circuito operativo real antes de documentarlas como flujo estándar.

Mientras tanto, si necesitás corregir stock físico, usá [Registro de inventario](../inventario/inventarios.md) con observaciones claras y trazabilidad operativa.

---

## Casos frecuentes

### Sucursal propia

Se crea como organización propia y puede usar usuarios existentes si corresponde.

### Franquicia

Puede requerir un usuario administrador nuevo y un contacto asociado para facturación y operaciones.

### Consulta de stock de otra sucursal

Usá [Consulta de stock](../inventario/productos-consulta-inter-org.md) si la preferencia está habilitada.

---

## Si algo sale mal

- **No veo otra organización**
  - Revisá la organización activa, permisos y preferencia de consulta inter-org.
- **Un usuario no accede**
  - Revisá [Usuarios](./usuarios.md) y [Perfiles](./perfiles.md).
- **El stock no coincide entre sucursales**
  - Revisá operaciones, inventarios y movimientos registrados en cada organización.

---

## Ver también

- [Cómo funciona Zink ERP](../arquitectura.md)
- [Nuevas organizaciones](./organizacion-alta.md)
- [Consulta de stock](../inventario/productos-consulta-inter-org.md)
- [Registro de inventario](../inventario/inventarios.md)
