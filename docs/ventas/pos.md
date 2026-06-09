---
title: 'POS en Zink ERP: ventas rápidas, cobro inmediato y mostrador | Zink ERP'
sidebar_label: POS (Punto de venta)
description: >-
  Operá ventas rápidas en mostrador con POS en Zink ERP: carga de productos,
  cobro inmediato, lectura con código de barras y control de errores
  frecuentes.
keywords:
  - POS
  - punto de venta
  - venta rápida
  - venta mostrador
  - cobrar
  - cobro
  - no puedo cobrar
  - consumidor final
  - permiso de cobro
sidebar_position: 6
---

## Resumen

El POS permite registrar ventas rápidas en una sola operación, especialmente en mostrador o atención inmediata.

A diferencia del flujo completo de ventas, está pensado para situaciones donde no hace falta pasar por cotización, presupuesto o pedido.

Permite cargar productos, cobrar y generar la venta directamente, con foco en velocidad, repetición y control de caja.

También podés encontrarlo o buscarlo como **punto de venta**, **venta rápida**, **venta de mostrador**, **cobro en POS** o **venta a Consumidor Final**.

---

## Antes de empezar

- Verificá que los productos tengan precios configurados.
- Confirmá los [medios de pago](../configuracion/medios-pago.md) disponibles.
- El usuario debe tener permiso para **realizar cobro en ventas**.
- Algunas configuraciones dependen de preferencias del sistema.
- Por defecto se usa **Consumidor Final** con la lista configurada para la organización. Si elegís un cliente, el POS puede aplicar la lista asociada a ese contacto.

---

## Cuándo conviene usar POS

Usalo cuando:

- la venta se concreta en el momento;
- el cliente no necesita seguimiento por etapas;
- el producto se entrega al instante;
- querés cobrar en la misma operación.

No es la mejor opción cuando necesitás cotizar, presupuestar, despachar o mantener un proceso comercial largo. En esos casos conviene trabajar con [Flujo de ventas](./flujo-ventas.md) o [Ventas](./ventas.md).

---

## Ubicación dentro del sistema

Entrá desde **Gestión Operativa → POS**.

El POS es una **forma alternativa de generar ventas**, independiente del flujo comercial tradicional.

![Pantalla inicial de POS con buscador de producto, cliente Consumidor Final y total de la venta](/img/ayuda/ventas/pos-01.png)

En Zink ERP existen dos formas de registrar una venta:

### Flujo de ventas (proceso completo)

Cotización → Presupuesto → Pedido → Venta

👉 Pensado para operaciones con negociación, tiempos y etapas.

### POS (venta directa)

POS → Venta

👉 Pensado para operaciones inmediatas, sin etapas previas.

- Genera una venta directamente
- No requiere cotización, presupuesto ni pedido
- Está optimizado para rapidez y volumen

---

## Qué cambia y qué no cambia

**El POS:**

- ✔️ Genera una venta automáticamente
- ✔️ Registra el pago en el momento
- ✔️ Puede emitir comprobante
- ❌ No utiliza etapas intermedias del flujo
- ❌ No permite trabajar por proceso

---

## Procedimiento

### Paso 1: Cargar productos

1. Ingresá productos desde el campo **Escanear o buscar producto**.
2. Podés hacerlo por código de barras o por búsqueda manual.
3. Ajustá cantidades si hace falta.

![POS con un producto agregado, total actualizado y botón Finalizar habilitado](/img/ayuda/ventas/pos-02-producto-agregado.png)

### Paso 2: Elegir cliente si corresponde

4. Si necesitás asociar la venta a un contacto, usá **[F3] Cliente**.
5. Si no elegís uno, la venta queda asociada a **Consumidor Final**.

![Diálogo de POS para seleccionar cliente o volver a Consumidor Final](/img/ayuda/ventas/pos-03-seleccionar-cliente.png)

### Paso 3: Ajustar precio si hace falta

6. Aplicá descuentos o recargos si corresponde:
   - **[F6] Descuento**
   - **[F9] Recargo**

![Diálogo de descuento del POS con campos de porcentaje y monto](/img/ayuda/ventas/pos-04-descuento.png)

### Paso 4: Revisar total y cobrar

7. Revisá el total final.
8. Usá **Finalizar (F2)** para abrir el diálogo de pago. Esta acción depende del permiso para **realizar cobro en ventas**.

![Confirmación de finalización de venta en POS antes de guardar y cobrar](/img/ayuda/ventas/pos-05-finalizar.png)

### Paso 5: Confirmar la operación

9. Confirmá el cobro.
10. Con eso, el sistema genera la venta automáticamente.

Si necesitás ver o elegir entre varios resultados, usá **[F4] Listado**.

---

## Campos principales

### Producto

Ingreso por código de barras o búsqueda manual.

### Ítems

Lista editable con cantidades, precios y descuentos.

### Totales

Subtotal, descuentos y total final.

### Cliente

Por defecto Consumidor Final.

Si seleccionás un contacto, pueden cambiar condiciones comerciales, [listas de precio](../configuracion/listas-precio.md) o comportamiento de cuenta corriente según la configuración de la organización.

### Lista de precios

El POS calcula precios con la misma lógica de ventas: usa la lista por defecto de la organización para **Consumidor Final** y puede cambiar a la lista del cliente cuando seleccionás un contacto. Si el precio no coincide con lo esperado, revisá primero el cliente elegido y la configuración de [listas de precio](../configuracion/listas-precio.md) del producto.

### Finalizar

Acción para cerrar la venta y avanzar al cobro.

Si el botón aparece deshabilitado, revisá que haya productos cargados y que el usuario tenga permiso para realizar cobro en ventas.

---

## Casos frecuentes

### Venta en mostrador

Se cargan productos, se cobra y se finaliza en una sola operación, sin pasar por etapas previas.

### Cliente ocasional

Se utiliza Consumidor Final sin generar cuenta corriente.

### Venta rápida sin logística

No se requiere pasar por pedido ni despacho.

### Productos con lectura especial

Si trabajás con productos pesables o lectura desde balanza, revisá [Qué son los códigos variables y cómo usarlos](../guias/codigos-variables.md) y [Balanzas Systel y códigos variables](../guias/balanzas-systel-y-codigos-variables.md).

---

## Recomendaciones de uso

El POS está pensado para operaciones de venta **rápidas, directas y sin etapas intermedias**.

Es ideal en negocios donde:

- La venta se concreta en el momento
- No hay negociación previa
- El producto se entrega inmediatamente
- El cobro se realiza en la misma operación

### Ejemplos típicos

- Panaderías
- Food trucks
- Locales de consumo masivo
- Tiendas con alto volumen de operaciones en mostrador

👉 En estos casos, el POS permite máxima agilidad evitando pasos innecesarios del flujo completo.

---

## Si algo sale mal

- **No podés confirmar la venta**
  - Verificá que el pago esté cargado.
  - Si no podés abrir o completar el cobro, revisá que tu usuario tenga permiso para realizar cobro en ventas.
  - Si **Finalizar (F2)** está deshabilitado, verificá que haya al menos un producto cargado.

- **Precios incorrectos**
  - Revisá cliente seleccionado, lista de precios del contacto y lista por defecto de la organización.
  - Si usaste búsqueda por texto y había varios productos similares, probá con código de barras, código exacto o **[F4] Listado**.

- **Problemas con medios de pago**
  - Revisá [Medios de pago](../configuracion/medios-pago.md), permisos y configuración del punto de venta.
  - Verificá configuración del sistema.

- **No encontrás el producto**
  - Probá con código de barras, descripción o **[F4] Listado**.

- **La lectura de balanza o código variable no coincide**
  - Revisá el producto base, el código leído y el circuito documentado en las guías de códigos variables.

![Mensaje de POS cuando no se encuentra un producto por código o descripción](/img/ayuda/ventas/pos-06-producto-no-encontrado.png)

---

## Buenas prácticas

- Usá código de barras para agilizar la carga.
- Revisá el total antes de cobrar.
- Confirmá el cliente si afecta precios.
- Usá POS solo cuando no necesitás trabajar por etapas.

---

## Preguntas frecuentes

### ¿POS reemplaza al flujo de ventas?

No. POS resuelve ventas rápidas. El flujo de ventas sirve para operaciones con etapas, seguimiento o logística.

### ¿Puedo vender a un contacto y no a Consumidor Final?

Sí. Si seleccionás un contacto, pueden cambiar lista de precios y comportamiento de cuenta corriente.

### ¿Qué hago si trabajo con productos por peso?

Conviene validar el circuito de lectura con [Códigos variables](../guias/codigos-variables.md) y [Balanzas Systel](../guias/balanzas-systel-y-codigos-variables.md) antes de operar en vivo.

---

## Ver también

- [Ventas](./ventas.md)
- [Consulta de precios](./consulta-precio.md)
- [Flujo de ventas](./flujo-ventas.md)
- [Qué son los códigos variables y cómo usarlos](../guias/codigos-variables.md)
- [Balanzas Systel y códigos variables](../guias/balanzas-systel-y-codigos-variables.md)
