---
title: 'Zink ERP para comercios con balanza Systel'
sidebar_label: Para comercios con balanza Systel
description: 'Configurá tu balanza Systel con impresión de ticket y procesá los códigos variables desde el POS de Zink ERP: producto, PLU, lectura, cobro y control.'
sidebar_position: 4
keywords:
  - balanza Systel
  - Systel
  - impresión de ticket
  - códigos variables
  - POS
  - productos por peso
  - ticket de balanza
  - PLU
---

**Configurá tu balanza Systel con impresión de ticket y procesá los códigos variables desde el POS de Zink ERP.**

Esa es la ventaja documentada: el circuito **Systel → ticket impreso → código variable → POS → venta**. Zink ERP no controla la balanza, no cambia su programación y no se presenta como compatible con cualquier marca ni con cualquier modelo Systel.

Si todavía no configuraste el código variable, empezá por [Qué son los códigos variables](../guias/codigos-variables.md). Para alinear el equipo, usá [Balanzas Systel y códigos variables](../guias/balanzas-systel-y-codigos-variables.md).

:::info Alcance de esta página
La funcionalidad documentada cubre **balanzas Systel con impresión de ticket** y lectura del **código variable** de 13 dígitos en Zink ERP. Los pasos de programación pueden variar entre modelos Systel: validalos en el **manual de tu equipo**. No hay una pantalla en el ERP que configure o comande la balanza.
:::

---

## Qué problema resuelve

En una dietética, un almacén, un autoservicio o un comercio de alimentos, parte de la mercadería se pesa en una **Systel**. La balanza imprime un **ticket** con un código que cambia en cada pesada. El cajero tiene que vender eso en el POS sin tipear a mano el peso ni el importe.

| Qué pasa en el local | Qué resuelve este circuito |
|----------------------|----------------------------|
| La Systel pesa e imprime un ticket | El ticket trae un **código de 13 dígitos**, no el EAN fijo de góndola. |
| Cada ticket tiene un código distinto | Zink ERP identifica el producto por el **PLU de 6 dígitos** e interpreta el **importe** embebido. |
| El cajero no carga peso ni precio a mano | Escanea o ingresa el código del ticket en [POS](../ventas/pos.md). Para validar una implementación, usá también [Ventas](../ventas/ventas.md). |
| Una lectura mal alineada cobra mal | Hay que validar PLU, **Cód. variable** y [Decimales del Código Variable](../configuracion/preferencias.md) contra la Systel. |
| El stock y la caja tienen que cerrar | La venta **entregada** descuenta stock según la **cantidad de la línea**. El cobro queda en [caja](../finanzas/caja-diaria.md); el comprobante fiscal depende de [ARCA](../guias/facturacion-electronica-arca.md). |

:::info Qué lee Zink ERP en el ticket
El código del ticket Systel es `[PLU 6 dígitos][valor 6 dígitos][verificador]`. El valor central se interpreta como **importe**, no como peso. No hay un modo “peso × precio unitario”: en **Ventas** la cantidad queda en **1** y el monto va en el importe decodificado. Detalle en [Códigos variables](../guias/codigos-variables.md#qué-tipo-de-lectura-soporta-el-erp).
:::

---

## Cómo funciona el circuito

El circuito se arma en este orden. Distinguí cada pieza: **producto**, **estructura del código**, **Systel e impresión del ticket**, **lectura en POS**, **operación de caja** y **errores**.

| Paso | Quién | Dónde | Qué se configura o hace | Resultado |
|------|-------|-------|-------------------------|-----------|
| 1. Configurar el producto | Administrador o dueño | **Administración → Productos** | Nombre, unidad de medida, impuestos, stock, lista por defecto. Guías: [Productos](../administracion/productos.md) y [primer producto](../guias/como-configurar-tu-primer-producto.md). | El artículo existe en el catálogo. |
| 2. Definir la estructura del código variable | Administrador | Producto + **Configuración → Preferencias** | Activar **Cód. variable**. Cargar **exactamente 6 dígitos** en **Código de barras** (= PLU). Alinear **Decimales del Código Variable** con la Systel. | Zink ERP sabe qué ticket va a poder interpretar. |
| 3. Programar la Systel e imprimir el ticket | Quien configura el equipo; después, quien pesa | La **balanza Systel** (fuera del ERP) | Mismo PLU de 6 dígitos, mismos decimales, precio de referencia. Pesar e imprimir el ticket. No se imprime desde Zink ERP. Guía: [Balanzas Systel](../guias/balanzas-systel-y-codigos-variables.md). | El ticket trae el código de 13 dígitos de esa pesada. |
| 4. Leer el código en el POS | Cajero | **Gestión Operativa → POS** (validá primero en **Ventas**) | Escanear o ingresar los **13 dígitos completos** en **ESCANEAR O BUSCAR PRODUCTO**. | El sistema busca el producto por los primeros 6 dígitos. |
| 5. Interpretar el código | El sistema | POS o Ventas | Decodifica los 6 dígitos centrales según **Decimales del Código Variable**. La cantidad de la línea queda bloqueada (en Ventas y en POS). | Aparece el producto con el **importe del ticket** si la alineación es correcta. |
| 6. Validar artículo e importe | Cajero | POS | Verificar descripción e importe contra el ticket impreso. No uses [Consulta de precios](../ventas/consulta-precio.md) para el valor de esa pesada: muestra catálogo. | El cajero confirma sin cargar peso ni importe a mano. |
| 7. Registrar venta, cobro y comprobante | Cajero | POS | **Finalizar (F2)**, medio de pago, **Guardar (F2)**. Después: **Imprimir** o **Fiscal (F10)** si aplica. | Queda la venta cobrada. El fiscal depende de [ARCA](../integraciones/arca.md). |
| 8. Impacto de stock, caja e informes | El sistema + control del local | [Ventas](../ventas/ventas.md), [Caja diaria](../finanzas/caja-diaria.md), [Informes](../informes/informes.md) | El stock baja cuando la venta está **Entregada**, por la **cantidad de la línea**. Caja e informes muestran el cobro y las ventas. | El kilo del ticket no es, por sí solo, la cantidad del ERP. |

:::warning Validá primero en Ventas
[Ventas](../ventas/ventas.md) es la pantalla de referencia para un ticket nuevo: decodifica el importe. En [POS](../ventas/pos.md) la búsqueda es la misma y la cantidad también queda bloqueada, pero el **subtotal puede calcularse distinto**. No des por implementado el circuito Systel si solo lo probaste en POS.
:::

---

## Ejemplo concreto

Un comercio pesa un producto en una **balanza Systel**. La balanza imprime un **ticket** con un código variable. El cajero lee ese código en Zink ERP, verifica el artículo y continúa la venta **sin cargar a mano el peso ni el importe**.

Cómo se ve en números, con un ticket de ejemplo `2006870046139`:

1. El operador pesa, por ejemplo, **0,750 kg** de almendras en la Systel. La balanza calcula el importe con el precio por kilo **programado en el equipo** e imprime el ticket.
2. El cajero entra a **Gestión Operativa → POS** y escanea el código del ticket.
3. Zink ERP interpreta:
   - `200687` → PLU guardado en **Código de barras** del producto **Almendras**;
   - `004613` → importe codificado (según **Decimales del Código Variable**);
   - `9` → dígito verificador.
4. En pantalla debe aparecer **Almendras** con el **importe del ticket**, no el 0,750 como cantidad. En **Ventas**, la cantidad de la línea queda en **1**.
5. El cajero confirma, cobra con **Finalizar (F2)** y, si corresponde, emite comprobante con **Imprimir** o **Fiscal (F10)**.
6. El stock se mueve con la cantidad de esa línea cuando la venta está **Entregada**. El recuento en kilos físicos se hace con [Inventario](../inventario/inventario.md), no esperando que el ERP lea el peso del ticket.

Si el importe del ticket no coincide con lo cobrado, compará el mismo ticket en **Ventas** y en **POS**. Guía: [Problemas frecuentes con códigos variables](../guias/problemas-frecuentes-codigos-variables.md).

---

## Configuración

Esta sección es **puesta en marcha**. No la resuelve el cajero en el turno. La programación de la Systel y la ficha del producto son trabajos distintos.

### Producto

En **Administración → Productos**:

- Creá el artículo con la descripción que tiene que ver el cajero al leer el ticket.
- Definí **unidad de medida**, impuestos, stock, stock mínimo y si se valida stock al vender.
- Activá **Cód. variable**.
- En **Código de barras** cargá el **PLU de 6 dígitos**, el mismo que programás en la Systel. No guardes el EAN-13 completo del ticket.
- Si escaneás un ticket de 13 dígitos en el formulario con el flag activo, el ERP **guarda solo los primeros 6**.
- Completá solo la **lista de precio por defecto**. Las demás quedan grisadas. Ese precio es de catálogo; en la venta con ticket manda el valor decodificado.

No podés activar **Cód. variable** si el código de barras ya es un EAN-13 de 13 dígitos. La [importación de productos](../administracion/productos-importacion-masiva.md) no carga este indicador: estos productos conviene crearlos o editarlos a mano.

Guías: [Productos](../administracion/productos.md) · [Cómo configurar tu primer producto](../guias/como-configurar-tu-primer-producto.md).

### Código variable

En **Configuración → Preferencias → Configuración general → Código de Barras Variable**:

- **Decimales del Código Variable** tiene que coincidir con la impresión de la Systel (por ejemplo 0 o 2 decimales, según el modelo y el manual).
- No hay campo “prefijo” ni “tipo de lectura peso / importe / cantidad”. El prefijo (en muchos equipos `20`) **va dentro** de los 6 dígitos del PLU.

Estructura esperada del código impreso en el ticket:

```
[ PLU 6 dígitos ][ Valor 6 dígitos ][ Verificador 1 dígito ]
```

Guía: [Qué son los códigos variables](../guias/codigos-variables.md).

### Balanza Systel e impresión del ticket

La Systel se programa **en el equipo**. Zink ERP no envía precios, no cambia decimales y no imprime el ticket.

La coincidencia documentada es:

| Tema | En la balanza Systel | En Zink ERP |
|------|----------------------|-------------|
| PLU | 6 dígitos impresos en el ticket | Mismo valor en **Código de barras** + **Cód. variable** |
| Formato del ticket | EAN-13 de 13 dígitos con valor embebido | El lector debe enviar los 13 dígitos |
| Decimales | Según el **manual de tu modelo** Systel | **Decimales del Código Variable** |
| Precio por kilo | Precio de referencia en la Systel | Lista por defecto = catálogo; la venta usa el valor del ticket |
| Impuesto en el ticket | Según programación del equipo | En Ventas, el impuesto de línea queda **bloqueado** para código variable |

Validá siempre con un **ticket real** impreso por esa Systel, no solo con el alta del producto. El detalle está en [Balanzas Systel y códigos variables](../guias/balanzas-systel-y-codigos-variables.md).

### POS

En **Gestión Operativa → POS**:

- Productos con código variable ya validados en **Ventas** con un ticket Systel real.
- [Medios de pago](../configuracion/medios-pago.md) habilitados para el punto de venta.
- Usuario con permiso para **realizar cobro en ventas**.
- Cliente por defecto: **Consumidor Final**. Si elegís un contacto, puede cambiar la lista; en un ítem leído del ticket manda el valor decodificado.

El POS no reemplaza el flujo comercial (cotización → presupuesto → pedido). Para mostrador, usá [Cómo operar una venta rápida en POS](../guias/como-operar-venta-rapida-en-pos.md).

### Facturación

La facturación no se activa “porque hay Systel”. Se configura aparte:

1. Trámite en ARCA (punto de venta y delegación).
2. **Preferencias → Integraciones → ARCA**.
3. Aviso a soporte para habilitar la emisión.

Después del cobro en POS aparecen **Imprimir** y **Fiscal (F10)**. Sin esa configuración, la venta se registra igual, pero no hay comprobante electrónico.

Guías: [Facturación electrónica ARCA](../guias/facturacion-electronica-arca.md) · [ARCA en Zink ERP](../integraciones/arca.md) · [Delegar autorización](../guias/como-delegar-facturacion-electronica-arca.md).

---

## Operación diaria del cajero

El cajero **no** programa la Systel ni entra a Preferencias. Recibe el ticket impreso, lo lee y cobra.

### Flujo de una venta con ticket Systel

1. Recibí el producto ya pesado con el **ticket de la Systel** (o pesalo vos en esa balanza, según el local).
2. Entrá a **Gestión Operativa → POS**.
3. Escaneá el código del ticket en **ESCANEAR O BUSCAR PRODUCTO**. Si el lector no toma, ingresá los 13 dígitos.
4. Verificá **descripción** e **importe** contra lo impreso. No cargues a mano el peso ni el importe.
5. No uses [Consulta de precios](../ventas/consulta-precio.md) para chequear ese ticket: esa pantalla muestra el **precio de catálogo**.
6. Cobrás con **Finalizar (F2)** y el medio que corresponda: **E** efectivo, **T** tarjeta, **M** Mercado Pago, u otro con **+**.
7. Si hay vuelto en efectivo, **F4** abre la calculadora. **Dividir** reparte entre varios medios.
8. Guardá con **Guardar (F2)**.
9. Emití comprobante si el local lo requiere: **Imprimir** o **Fiscal (F10)**.
10. **Nueva venta (ESC)** para el siguiente cliente.

### Atajos que sí aplican a este flujo

| Tecla | Para qué |
|-------|----------|
| **F2** | Finalizar la venta / guardar el cobro |
| **F3** | Elegir cliente (solo si no es Consumidor Final) |
| **F4** | Listado de productos si la búsqueda es ambigua; en cobro, vuelto |
| **F10** | Fiscal, después de cobrar |
| **DEL** | Sacar un ítem mal leído |
| **ESC** | Nueva venta |

**F8** y **+/−** cambian cantidad en productos comunes. En un código variable la cantidad queda **bloqueada**, igual que en Ventas. Si hace falta corregir, borrá el ítem (**DEL**) y volvé a leer el ticket. Ver [Problemas frecuentes](../guias/problemas-frecuentes-codigos-variables.md).

### Si algo falla en caja

- **“No se encontró producto”**: no reescribas el código del ticket a ciegas. Escalalo: el PLU de 6 dígitos o el flag **Cód. variable** suelen estar mal.
- **El importe no es el del ticket**: no “arregles” el precio con descuento. Pedí que revisen decimales y la programación de **esa** Systel.
- **Finalizar deshabilitado**: faltan productos, falta permiso de cobro, o la venta se está guardando.
- Al cierre, controlá [Caja diaria](../finanzas/caja-diaria.md) con la fecha del día y tu usuario. Usá **Actualizar ahora** si acabás de cobrar.

Recorrido del rol: [Para cajeros](../roles/cajeros.md).

---

## Operación del administrador

El administrador mantiene el catálogo, la alineación con la Systel y el control posterior. No espera que Zink ERP “actualice la balanza”.

### Alta y actualización de productos

- Altas nuevas: ficha completa + **Cód. variable** + PLU de 6 dígitos igual al de la Systel.
- Cambios de descripción o impuestos: el cajero los ve al leer el ticket; el impuesto de línea en Ventas queda bloqueado en estos productos.
- Productos de código fijo (gaseosa, envase) conviven con los que salen de la Systel: solo estos últimos necesitan código variable.

### Cambios de precio

Hay dos precios distintos:

| Precio | Dónde se mantiene | Quién lo ve |
|--------|-------------------|-------------|
| Precio de catálogo (lista por defecto) | Ficha del producto | [Consulta de precios](../ventas/consulta-precio.md), informes, etiqueta de góndola |
| Precio de la pesada | Systel + decimales del código variable | La venta, al leer el ticket |

Si cambia el precio por kilo, actualizá la **lista por defecto** y **reprogramá la Systel**. Zink ERP no empuja ese precio a la balanza. En sucursales, los cambios de lista se pueden enviar con [Notificar precios](../administracion/notificar-cambio-precio.md); el receptor tiene que aceptarlos, y eso **tampoco** reprograma la Systel.

### Stock

- El stock del producto se usa en ventas, POS, compras e inventario.
- La venta **entregada** descuenta la **cantidad de la línea**. En este circuito esa cantidad suele ser **1 por ticket**.
- Si el físico se controla en kilos, no esperes que el código variable convierta el peso del ticket en cantidad. Usá [Registro de inventario](../inventario/inventarios.md) o [Toma inventario](../inventario/inventarios-ubicacion.md).
- Stock mínimo e [Informe Stock crítico](../informes/informe-stock-critico.md) sirven para reponer. Recorrido: [Para depósito](../roles/deposito.md).

### Tickets de Systel vs etiquetas de góndola

| Tipo | Dónde se genera | Qué precio lleva |
|------|-----------------|------------------|
| Ticket de la Systel (código variable) | La balanza Systel | El de esa pesada |
| Etiqueta de góndola | [Informe Etiquetas para góndola](../informes/informe-productos-etiquetados.md) | Precio de la lista elegida |

El informe de góndola **no** reemplaza el ticket de la Systel.

### Revisión de errores y reportes

- Ante un reclamo de caja, pedí el **ticket físico** de la Systel y repetí la lectura en **Ventas**.
- Compará POS vs Ventas si el total no cierra.
- Ventas del día: [Caja diaria](../finanzas/caja-diaria.md), [Históricas de ventas](../informes/informe-historicas.md), [Productos vendidos](../informes/informe-productos-vendidos.md), [Artículos vendidos](../informes/informe-articulos-vendidos.md).
- Reposición: [Stock crítico](../informes/informe-stock-critico.md), [Consulta de stock](../inventario/productos-consulta-inter-org.md).

### Permisos

En [Perfiles](../administracion/perfiles.md) y [Usuarios](../administracion/usuarios.md):

| Quién | Permisos que suelen hacer falta |
|-------|----------------------------------|
| Cajero | Menú POS, consulta de precios, **realizar cobro en ventas** |
| Encargado de turno | Lo anterior + [Ver caja global](../finanzas/caja-diaria.md) si mira la caja de otros |
| Administración | Productos, Preferencias, medios de pago, informes |
| Depósito | Inventario, recepción, consulta de stock; no necesariamente cobro |

Un usuario puede ver POS y no poder cobrar si le falta el permiso de cobro.

---

## Errores frecuentes

Solo casos respaldados por las guías de códigos variables, Systel, POS, productos y stock.

| Problema | Posible causa | Qué revisar | Enlace |
|----------|---------------|-------------|--------|
| El código del ticket no se reconoce | Sin **Cód. variable**, o el PLU no son los primeros 6 dígitos | Producto → **Cód. variable** activo; **Código de barras** = primeros 6 del ticket; no guardar los 13 | [Problemas códigos variables](../guias/problemas-frecuentes-codigos-variables.md) |
| El producto existe pero no matchea | PLU distinto al de esa Systel | Comparar los 6 dígitos del ticket con el código del ERP | [Códigos variables](../guias/codigos-variables.md) |
| El precio no coincide con el ticket | **Decimales del Código Variable** ≠ Systel, o precio de la balanza desactualizado | Preferencias → decimales; reprogramar **esa** Systel; validar en **Ventas** | [Preferencias](../configuracion/preferencias.md) · [Systel](../guias/balanzas-systel-y-codigos-variables.md) |
| El peso no aparece como cantidad | Comportamiento esperado: el ERP lee **importe**, no peso | No hay modo peso × precio; la cantidad en Ventas queda en 1 | [Tipo de lectura](../guias/codigos-variables.md#qué-tipo-de-lectura-soporta-el-erp) |
| El subtotal de POS no es el de Ventas | POS puede calcular distinto el mismo ticket | Probar el mismo ticket en ambas pantallas; validar siempre en Ventas | [POS](../ventas/pos.md) · [Problemas](../guias/problemas-frecuentes-codigos-variables.md) |
| Consulta de precios no muestra lo del ticket | Muestra precio de catálogo | Usar Ventas o POS para validar un ticket ya impreso | [Consulta de precios](../ventas/consulta-precio.md) |
| No puedo marcar **Cód. variable** | El código de barras ya tiene 13 dígitos | Dejar solo el PLU de 6 dígitos | [Productos](../administracion/productos.md#producto-con-código-variable) |
| Cantidad rara en POS | El ítem se cargó por nombre/PLU, no por el ticket de 13 dígitos | Borrar (**DEL**) y volver a leer el ticket; la cantidad de un código variable queda bloqueada | [Problemas códigos variables](../guias/problemas-frecuentes-codigos-variables.md) |
| Impuesto no editable en la venta | Esperado en código variable | El impuesto de línea queda bloqueado | [Systel](../guias/balanzas-systel-y-codigos-variables.md) |
| No se puede vender por stock | Validación de stock activa y cantidad insuficiente | Stock del producto, ventas entregadas, ajustes | [Productos](../administracion/productos.md) · [Inventario](../inventario/inventario.md) |
| Finalizar deshabilitado en POS | Sin ítems, sin permiso de cobro o guardando | Permiso **realizar cobro en ventas**; que haya un producto cargado | [POS](../ventas/pos.md) · [Perfiles](../administracion/perfiles.md) |
| La caja no refleja el cobro | Medio distinto, cuenta corriente o pantalla sin refrescar | [Caja diaria](../finanzas/caja-diaria.md): operador, **Actualizar ahora**, medio usado | [Cajeros](../roles/cajeros.md) |

---

## Checklist de puesta en marcha

Antes de operar en vivo con clientes:

- [ ] Productos pesables creados en [Productos](../administracion/productos.md).
- [ ] Unidad de medida, impuestos y lista por defecto definidos.
- [ ] **Cód. variable** activo y PLU de **6 dígitos** igual al de la Systel.
- [ ] **Decimales del Código Variable** alineados en [Preferencias](../configuracion/preferencias.md) con **esa** Systel.
- [ ] Systel programada según su manual y el [checklist de coincidencia](../guias/balanzas-systel-y-codigos-variables.md#checklist-de-coincidencia).
- [ ] **Ticket real** impreso por la Systel y leído (no solo el alta en pantalla).
- [ ] Lectura correcta en **Ventas**: producto e importe.
- [ ] Mismo ticket repetido en **POS**; totales comparados con Ventas.
- [ ] Importe del ticket verificado; Consulta de precios usada solo para catálogo.
- [ ] Cobro de prueba con el [medio de pago](../configuracion/medios-pago.md) real del local.
- [ ] Facturación de prueba si usan [ARCA](../integraciones/arca.md) (**Fiscal (F10)**).
- [ ] Stock revisado después de una venta **entregada**; criterio de unidad acordado con depósito.
- [ ] Usuario de caja con permiso de cobro y recorrido de [venta rápida en POS](../guias/como-operar-venta-rapida-en-pos.md).
- [ ] Errores de la tabla de arriba recorridos con el equipo.

---

## Links relacionados

### Producto, código y Systel

- [Productos](../administracion/productos.md)
- [Cómo configurar tu primer producto](../guias/como-configurar-tu-primer-producto.md)
- [Qué son los códigos variables](../guias/codigos-variables.md)
- [Balanzas Systel y códigos variables](../guias/balanzas-systel-y-codigos-variables.md)
- [Problemas frecuentes con códigos variables](../guias/problemas-frecuentes-codigos-variables.md)
- [Preferencias](../configuracion/preferencias.md)

### Lectura en POS, cobro y caja

- [POS](../ventas/pos.md)
- [Cómo operar una venta rápida en POS](../guias/como-operar-venta-rapida-en-pos.md)
- [Ventas](../ventas/ventas.md)
- [Consulta de precios](../ventas/consulta-precio.md)
- [Caja diaria](../finanzas/caja-diaria.md)
- [Medios de pago](../configuracion/medios-pago.md)

### Facturación, stock e informes

- [Facturación electrónica ARCA](../guias/facturacion-electronica-arca.md)
- [ARCA en Zink ERP](../integraciones/arca.md)
- [Inventario](../inventario/inventario.md)
- [Registro de inventario](../inventario/inventarios.md)
- [Informes](../informes/informes.md)
- [Informe Stock crítico](../informes/informe-stock-critico.md)

### Roles y troubleshooting

- [Para cajeros](../roles/cajeros.md)
- [Para depósito](../roles/deposito.md)
- [Para administración](../roles/administracion.md)
- [Zink ERP para dietéticas](./zinkerp-para-dieteticas.md)
- [Problemas frecuentes](../problemas-frecuentes.md)
