---
title: Cómo recibir mercadería y actualizar stock en Zink ERP | Zink ERP
sidebar_label: Recibir mercadería
description: >-
  Guía paso a paso para registrar el ingreso de mercadería de una compra,
  confirmar cantidades recibidas y verificar que el stock se actualice
  correctamente.
sidebar_position: 6
keywords:
  - recepción de mercadería
  - ingreso de stock
  - compras
  - depósito
  - proveedor
  - recepción parcial
---

## Objetivo

Registrar lo que efectivamente ingresó del proveedor, dejar trazabilidad si hay diferencias y confirmar que el stock disponible suba en el sistema.

---

## Qué necesitás antes de empezar

- Una [orden de compra](../compras/orden-compras.md) o [compra](../compras/compras.md) ya registrada.
- Remito, factura o comprobante del proveedor para comparar cantidades.
- Permisos para confirmar compras e ingresar mercadería.
- Si usás ubicaciones en depósito, definí dónde se guarda la mercadería recibida.

---

## Cuándo usar este circuito

Usalo cada vez que llegue mercadería de un proveedor y necesites que el stock del ERP refleje lo que entró físicamente al depósito o al local.

No sustituye un [Registro de inventario](../inventario/inventarios.md) para ajustes sin compra asociada ni una [Toma de inventario](../inventario/inventarios-ubicacion.md) para recuentos generales.

---

## Paso a paso

### Paso 1: Ubicar la compra pendiente

1. Abrí la compra o la operación con ingreso pendiente desde [Compras](../compras/compras.md).
2. Confirmá proveedor, productos y cantidades solicitadas.

### Paso 2: Comparar con lo recibido

3. Contrastá el remito o factura contra la mercadería física.
4. Revisá producto por producto: código, descripción y cantidad.
5. Si hay diferencia, anotá el faltante o sobrante antes de confirmar.
6. Si al cargar la compra marcaste **actualizar costo** en algún ítem, recordá que el catálogo puede haber cambiado costo (y precios, si el producto tiene recálculo activo). Ver [Compras](../compras/compras.md#actualizar-costo-desde-la-compra).

### Paso 3: Registrar el ingreso

7. Ingresá las cantidades efectivamente recibidas.
8. Si la recepción es parcial, dejá observación sobre lo pendiente.
9. Confirmá el ingreso de mercadería.

En el flujo documentado, la compra impacta stock al pasar a **Aprobado**. Si la recepción es parcial, documentá la diferencia y usá **Control** si corresponde antes de aprobar.

### Paso 4: Verificar stock y deuda

10. Controlá que el stock disponible haya aumentado. Podés usar [Consulta de stock](../inventario/productos-consulta-inter-org.md).
11. Revisá la [cuenta corriente](../finanzas/cuenta-corriente.md) del proveedor si la compra generó deuda o pago pendiente.

### Paso 5: Cerrar el circuito operativo

12. Si quedó mercadería pendiente, coordiná con compras si corresponde esperar el saldo o ajustar la operación.
13. Para reposición futura, revisá [Informe Stock crítico](../informes/informe-stock-critico.md).

---

## Errores comunes

### El stock no aumentó

Verificá que la compra quedó en estado **Aprobado** y que las cantidades recibidas sean mayores a cero.

### Recibí menos de lo comprado

Documentá la diferencia en la recepción. No cierres cantidades no recibidas sin dejar trazabilidad.

### Ingresé productos equivocados

No registres artículos distintos como si fueran correctos. Corregí antes de confirmar o escalá con compras y el proveedor.

### La deuda del proveedor no coincide

Revisá importes, cantidades ingresadas y [pagos](../finanzas/pagos.md) asociados a esa compra.

### Hay stock en sistema pero no en depósito

Validá ventas recientes, otras recepciones, ajustes manuales y si alguien operó fuera del circuito de compras.

---

## Preguntas frecuentes

### ¿Puedo recibir en varias etapas?

Sí, con recepción parcial. Dejá claro qué entró en cada ingreso y qué sigue pendiente.

### ¿Qué pasa si llega mercadería sin compra previa?

Podés registrar una compra directa si tu operación lo permite. Revisá [Compras](../compras/compras.md) para el circuito completo.

### ¿Cómo corrijo stock sin compra?

Usá [Registro de inventario](../inventario/inventarios.md) o [Toma de inventario](../inventario/inventarios-ubicacion.md), según el caso.

---

## Ver también

- [Tutorial en video: flujo de compras](./tutorial-flujo-de-compras.mdx)
- [Recepción de mercadería](../compras/recepcion-mercaderia.md)
- [Para depósito](../roles/deposito.md)
- [Flujo de compras](../compras/flujo-compras.md)
- [Inventario](../inventario/inventario.md)
- [Zink ERP para ferreterías](../rubros/zinkerp-para-ferreterias.md)
