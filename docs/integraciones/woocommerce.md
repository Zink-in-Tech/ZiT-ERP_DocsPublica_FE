---
title: Integración WooCommerce (guía para operadores)
description: Conectar la tienda online con el catálogo de ZinK ERP, enlazar productos y revisar la pestaña Ecommerce; clave y secreto desde WordPress.
sidebar_position: 5
---

Material orientado a **operadores de ZinK ERP** (administración, ventas, depósito) **sin conocimiento técnico**. Alcance: conectar una tienda WooCommerce, enlazar productos, revisar la pestaña **Ecommerce** y desvincular cuando corresponda.

:::info Coherencia con otras páginas

El criterio del **tilde verde** y del estado vinculado es el mismo que en [Integraciones con servicios externos](/integraciones). La entrada habitual es **Preferencias → Integraciones**; el detalle operativo de WooCommerce está concentrado en este artículo.

:::

---

## Qué resuelve la integración

- **Conecta** la tienda online (sitio con WordPress y WooCommerce) con el **catálogo de productos** de ZinK ERP.
- Permite **decir qué producto del ERP** corresponde a **cada artículo de la tienda**, para que el sistema pueda mantener alineados datos como precios o existencias según las reglas habilitadas para tu organización.
- Desde la **ficha de un producto** podés **gestionar el vínculo** con un artículo de la tienda y marcar si el producto **sincroniza con la tienda online**.

:::caution Alcance de sincronización

El alcance exacto puede variar por versión, plan o configuración. Antes de operar en producción, confirmá si tu instalación actual sincroniza precios, stock, altas de artículos, órdenes u otros datos.

:::

---

## Relación con otras páginas de ayuda

- La entrada habitual del usuario es **Preferencias → Integraciones** (o el menú equivalente en tu versión de ZinK ERP).
- El artículo [Integraciones con servicios externos](/integraciones) describe el recorrido común a varios proveedores.
- En Preferencias / Integraciones **no hace falta repetir** todo el procedimiento WooCommerce: alcanza con el enlace a esta página y el mismo criterio sobre el tilde verde.

---

## Dónde está en el sistema

1. **Preferencias** → **Integraciones** (o **Configuración** → **Integraciones**, según cómo figure en tu versión).
2. En la lista, **WooCommerce**.
3. **Gestionar** abre el asistente (conexión y, luego, enlazado de productos).

Antes de vincular, suele mostrarse una **guía resumida** con los pasos en WordPress para obtener la clave y el secreto.

---

## Textos que podés ver en pantalla

Los rótulos pueden variar levemente entre versiones, pero el flujo operativo se mantiene alrededor de estas acciones.

**Asistente WooCommerce**

- Pasos del asistente: **Vincular tienda** · **Enlazar productos**.
- Pantalla inicial de conexión: título **Vincular la tienda online**; botones **CANCELAR** · **VINCULAR TIENDA** (durante el proceso: **VINCULANDO…**).
- Campos: **URL de la tienda** (o similar), **Clave del cliente**, **Secreto del cliente**.
- Cuando la tienda ya está vinculada: **Tienda WooCommerce vinculada**; botones **CERRAR** · **DESVINCULAR TIENDA** · **ENLAZAR PRODUCTOS**.
- En el paso de mapeo, título: **Enlazar productos de la tienda con el ERP**; pestañas: **Catálogo tienda** · **Sin mapear** · **Enlace inválido**.
- Pie de la grilla: **DESVINCULAR TIENDA** · **VOLVER** · **GUARDAR ENLACES** (**GUARDANDO…** mientras procesa).
- Paginación: **Filas por página** (10 / 25 / 50).
- Mensaje de ayuda sobre productos variables (tooltip): indica que en el futuro puede hacer falta enlazar cada variación; por ahora se puede usar la **fila principal** o dejar sin enlace.

**Ficha de producto**

- Pestaña: **Ecommerce**.
- Título de sección: **WooCommerce**; acciones **Guardar enlace** / **Guardando…** · **Quitar enlace** / **Quitando…**; campo **ID en WooCommerce**; lista **Artículo en la tienda (sin vínculo)** (artículos de la tienda aún no enlazados a otro producto del ERP); interruptor **Sincronizar con la tienda al guardar el enlace**; indicador **Sincroniza con la tienda online**; enlace **Ver en la tienda** (si el sistema envía la URL pública del artículo).

---

## Requisitos previos

1. Tienda en línea con **WooCommerce** en WordPress.
2. Acceso de administrador al WordPress para crear una **clave de conexión** (clave del cliente y secreto) desde el panel de WooCommerce.
3. **URL pública** de la tienda (la de los compradores, con `https://` cuando sea posible).
4. Definir si la integración debe **solo consultar** la tienda o también **actualizar** precio o stock: en WordPress se eligen **permisos** de la clave (solo lectura vs lectura y escritura).

---

## Flujo general

### Etapa 1 — Vincular la tienda

1. **Integraciones** → **WooCommerce** → **Gestionar**.
2. Completá URL, clave del cliente y secreto.
3. **VINCULAR TIENDA**.
4. Si hay error, anotá el mensaje o captura para soporte (credenciales, URL o permisos de la clave suelen ser la causa).

**Buena práctica:** las claves son como contraseñas; si se filtraron, **revocá la clave en WooCommerce**, generá un par nuevo y volvé a vincular en ZinK ERP.

### Etapa 2 — Enlazar (mapear) productos

Tras **ENLAZAR PRODUCTOS**, trabajás con la grilla de la tienda:

| Pestaña | Uso operativo |
|--------|----------------|
| **Catálogo tienda** | Listado general; asignás producto del ERP por fila. |
| **Sin mapear** | Artículos de la tienda **sin** producto del ERP asignado. |
| **Enlace inválido** | Vínculos inconsistentes; si hay texto de **motivo**, ayuda a corregir o a escalar a soporte. |

- **Filtro y paginación:** en catálogos grandes, guardá los enlaces antes de cambiar de página, cerrar el asistente o modificar filtros.
- **GUARDAR ENLACES:** persiste los emparejamientos de la operación; hasta guardar, los cambios pueden no quedar registrados.
- **Sugerencias automáticas** (si están activas): son orientativas; revisá antes de guardar.

**Productos variables (WooCommerce):** pueden requerir atención especial. Si la tienda usa variaciones, revisá si el sistema muestra la fila principal, cada variación o un identificador específico. Ante dudas, alineá el criterio con administración antes de guardar vínculos masivos.

---

## Ficha de producto — pestaña Ecommerce

- Nombre en pantalla: **Ecommerce** (traducción actual del producto).
- Interruptor de **sincronización con la tienda** alineado al dato que devuelve el sistema al abrir el producto.
- Enlace con WooCommerce: lista de artículos **sin vínculo** con otro producto del ERP y/o **ID en WooCommerce** manual; **Guardar enlace** / **Quitar enlace**.
- **Ver en la tienda:** solo si el sistema envía la URL pública; si no está desplegado en tu versión, omití esta función en capacitaciones o indicá “según versión”.

---

## Varias tiendas

La cantidad de tiendas WooCommerce que puede operar una organización depende de la configuración habilitada. Si necesitás trabajar con más de una URL, consultá a soporte o administración antes de desvincular una tienda existente.

---

## Desvincular la tienda

- Botón **DESVINCULAR TIENDA** (o estado **DESVINCULANDO…** mientras procesa).

Coordiná con **administración** antes de desvincular en producción. La acción puede afectar la operación diaria con la tienda y conviene revisar los enlaces de productos si después se vuelve a vincular la misma URL u otra distinta.

---

## Seguridad

- No compartir **clave ni secreto** por medios informales ni capturas sin censurar.
- Si hubo filtración: revocar en WordPress, generar claves nuevas y vincular de nuevo en ZinK ERP.

---

## Cuándo pedir ayuda a soporte o administración

- Error al vincular con datos verificados.
- Listado de la tienda **vacío** cuando en la web hay productos.
- Enlaces guardados pero la tienda **no muestra** precios o stock esperados.
- Comportamiento de **productos variables** distinto al esperado.
- Cambios que no quedaron registrados después de cerrar, filtrar o cambiar de página.
- Mensajes largos o poco claros: captura y horario aproximado.

---

## Si algo sale mal (referencia rápida)

- **Error 401 o “no autorizado”:** permisos de la clave (¿solo lectura cuando hace falta escritura?), URL exacta con `https`, clave no revocada.
- **La tienda no responde:** certificado SSL, que la URL sea la **pública** (la que abre un cliente), no una dirección interna.

Más detalle en [Problemas frecuentes](/integraciones/problemas-frecuentes).

---

## Glosario mínimo

| Término | Significado para el operador |
|--------|------------------------------|
| **WooCommerce** | Módulo de tienda dentro de WordPress. |
| **Clave del cliente / Secreto** | Credenciales generadas en el panel de WooCommerce para que ZinK ERP se conecte a la tienda sin usar la contraseña del administrador. |
| **Mapeo / enlace** | Indicar que un producto del ERP y un artículo de la tienda son el mismo. |
| **Sincronizar con la tienda** | El producto participa del canal tienda online según las reglas del sistema (no siempre implica que ya esté publicado a la vista del cliente). |

---

## Ver también

- [Integraciones — inicio](/integraciones)
- [Preferencias](/configuracion/preferencias)
- [Seguridad y cumplimiento](/integraciones/seguridad)
- [Problemas frecuentes](/integraciones/problemas-frecuentes)

---

## Pasos en WordPress (resumen)

1. Iniciá sesión en el **panel de WordPress** de tu tienda.
2. Andá a **WooCommerce → Ajustes → Avanzado**.
3. Buscá la sección de **claves** (el nombre exacto puede variar según la versión de WooCommerce).
4. **Creá una nueva clave** y elegí los permisos (solo lectura vs lectura y escritura) según lo acordado con tu equipo.
5. Guardá y copiá el **par clave + secreto** en un lugar seguro. El secreto muchas veces **solo se muestra una vez**.

Si necesitás compartir una captura para soporte, ocultá la clave, el secreto y cualquier dato privado del panel de WordPress.
