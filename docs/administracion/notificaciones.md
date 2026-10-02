---
title: 'Notificaciones: campana y centro de notificaciones'
sidebar_label: Notificaciones
description: 'Revisá todas tus notificaciones desde la campana del encabezado o desde el centro de notificaciones: filtrá por tipo, buscá y marcá como leídas.'
sidebar_position: 11
keywords:
  - notificaciones
  - campana
  - centro de notificaciones
  - stock crítico
  - menciones
  - marcar como leídas
---

## Resumen

Zink ERP te avisa cuando pasa algo que te interesa: un producto quedó bajo su stock mínimo, la central te envió nuevos precios, alguien te mencionó en un comentario o se generó un documento.

Tenés dos formas de verlas:

- **La campana del encabezado**: vista rápida con las más recientes. El número rojo indica cuántas tenés sin leer.
- **El centro de notificaciones**: la pantalla **Notificaciones**, con todas las que recibiste, leídas y sin leer, con filtros y búsqueda.

Al hacer clic en una notificación se abre el documento o la pantalla relacionada y queda marcada como leída.

---

## Antes de empezar

- Cada notificación abre una pantalla del sistema. Si tu perfil no tiene permiso para esa pantalla, la notificación no se abre y el sistema te avisa. Revisá los permisos en [Perfiles](./perfiles.md).
- Las alertas de **Stock crítico** son de toda la organización: las ve todo el equipo y, si una persona las marca como leídas, dejan de figurar como nuevas para todos.

---

## Procedimiento

### Revisar notificaciones desde la campana

1. Hacé clic en la campana del encabezado.
2. Elegí la pestaña **Todas** o **No leídas**.
3. Hacé clic en una notificación para abrirla.
4. Para ver el historial completo, tocá **Ver todas las notificaciones** al pie del menú.

En la campana, las alertas de stock crítico se agrupan en una sola fila (por ejemplo, "98 productos bajo el stock mínimo") con dos accesos, según tus permisos:

- **Ver stock crítico**: abre el [informe de stock crítico](../informes/informe-stock-critico.md).
- **Crear orden de compra**: abre una nueva [orden de compra](../compras/orden-compras.md) para reponer.

### Usar el centro de notificaciones

1. Desde la campana, tocá **Ver todas las notificaciones**.
2. Filtrá por estado con **Todas** o **Sin leer**. Cada filtro muestra entre paréntesis cuántas notificaciones tiene, así ves de un vistazo el total y cuántas te faltan leer.
3. Filtrá por tipo con los chips (**Stock crítico**, **Cambio de precios**, **Venta**, **Compra**, **Pedido**, etc.) o elegí **Menciones** para ver solo los comentarios donde te nombraron. Solo aparecen los tipos que tenés, y cada uno tiene su color, el mismo que su etiqueta en la tabla.
4. Usá el buscador para encontrar una notificación por su texto o por su tipo. No hace falta escribir las tildes.
5. Hacé clic en el texto de una notificación para abrirla, o usá las acciones de la fila: **Marcar como leída** y **Abrir**.

### Marcar notificaciones como leídas

- **Una por una**: abrila o usá la acción **Marcar como leída** de la fila.
- **Varias juntas**: seleccionalas con las casillas y tocá **Marcar como leídas** en la barra que aparece arriba de la tabla.
- **Todas**: tocá el sobre abierto que está junto a **Refrescar**, arriba de la tabla (**Marcar todas como leídas**). Si tenés un tipo filtrado, pasa a **Marcar estas como leídas** y solo marca las de ese tipo.
- **Desde la campana**: tocá **Marcar todas leídas** en el encabezado del menú.

Si entre las que vas a marcar hay alertas de stock crítico, el sistema te pide confirmación, porque afecta a todo tu equipo.

### Qué muestra cada columna

| Columna | Qué ves |
|---------|---------|
| **Notificación** | El texto del aviso. Las que no leíste aparecen en negrita y con un punto de color. En las alertas de stock crítico ves el stock actual y el mínimo; si el stock es negativo, se resalta en rojo. |
| **Tipo** | Una etiqueta con el origen de la notificación. |
| **Fecha** | Día y hora en que llegó: "Hoy, 16:01", "Ayer, 09:10" o "28/09/2026, 19:56". Si es de la última semana, debajo ves cuánto tiempo pasó ("Hace 3 horas", "Hace 2 días"). |

En el celular, el tipo y la fecha se muestran debajo del texto de cada notificación.

En la campana se muestra el tiempo transcurrido ("Hace 1 hora"); pasando el mouse ves la fecha y hora exactas.

---

## Casos frecuentes

### Ponerte al día al empezar el día

Elegí **Sin leer**. Cuando no te queda nada pendiente, la pantalla te muestra **Estás al día**.

### Encontrar una mención

Elegí el filtro **Menciones** o buscá el número del documento (por ejemplo, `PED-00000135`).

### Alertas de stock crítico que ya se resolvieron

Si el producto ya recuperó su stock mínimo, la alerta aparece atenuada con la leyenda "Ya alcanzó el mínimo". En la campana, esas alertas ya no se cuentan en el grupo de stock crítico.

### Cambios de precio de la central

Las notificaciones de tipo **Cambio de precios** abren la pantalla para revisarlos y aceptarlos. Ver [Recibir cambios de precio](./notificaciones-recibidas-precio.md).

---

## Si algo sale mal

- **"No tenés permiso para abrir esta notificación"**
  - Tu perfil no tiene acceso a la pantalla relacionada. Pedile a un administrador que lo revise en [Perfiles](./perfiles.md).
- **Marqué como leídas y volvieron a aparecer sin leer**
  - El sistema no pudo guardar el cambio y recargó las notificaciones. Probá de nuevo; si sigue pasando, revisá tu conexión.
- **Una alerta de stock crítico desapareció de "Sin leer" sin que yo la tocara**
  - Otra persona de tu organización la marcó como leída. Las alertas de stock crítico son compartidas.
- **El centro muestra un aviso de que no se cargaron todas**
  - Si tenés muchísimas notificaciones, se muestran las más recientes. Usá los filtros y el buscador para encontrar lo que necesitás.

---

## Ver también

- [Recibir cambios de precio](./notificaciones-recibidas-precio.md)
- [Informe de stock crítico](../informes/informe-stock-critico.md)
- [Órdenes de compra](../compras/orden-compras.md)
- [Perfiles](./perfiles.md)
