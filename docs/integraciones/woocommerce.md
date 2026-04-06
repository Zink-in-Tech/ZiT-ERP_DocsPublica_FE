---
title: Integración WooCommerce (guía para operadores)
description: Conectar la tienda online con el catálogo de ZinK ERP, enlazar productos y revisar la pestaña Ecommerce; clave y secreto desde WordPress.
sidebar_position: 5
---

Material orientado a **operadores de ZinK ERP** (administración, ventas, depósito) **sin conocimiento técnico**. Alcance: uso de la integración con **WooCommerce** (conectar tienda, enlazar productos, pestaña Ecommerce en la ficha de producto, desvincular).

:::info Coherencia con otras páginas

El criterio del **tilde verde** y del estado vinculado es el mismo que en [Integraciones con servicios externos](/integraciones). La entrada habitual es **Preferencias → Integraciones**; el detalle operativo de WooCommerce está concentrado en este artículo.

:::

---

## Qué resuelve la integración

- **Conecta** la tienda online (sitio con WordPress y WooCommerce) con el **catálogo de productos** de ZinK ERP.
- Permite **decir qué producto del ERP** corresponde a **cada artículo de la tienda**, para que el sistema pueda mantener alineados datos como precios o existencias **según las reglas que habilite el servidor y el producto** (no todo depende solo de la pantalla).
- Desde la **ficha de un producto** podés **gestionar el vínculo** con un artículo de la tienda y marcar si el producto **sincroniza con la tienda online**.

:::caution Acordar con producto

Un párrafo explícito de **“qué sincroniza hoy”** (precio, stock, alta de artículo, órdenes, etc.) según la versión comercial hace el artículo plenamente defendible ante soporte. Hasta tener esa definición, este texto se mantiene genérico.

:::

:::note Beneficios para la organización

En la versión ampliada del portal conviene sumar el beneficio concreto (menos carga doble, precios coherentes, stock visible en la web, etc.) según lo que prometa ZinK ERP en cada plan o región.

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

Antes de vincular, suele mostrarse una **guía resumida** (pasos en WordPress para obtener clave y secreto). Podés cruzar con las capturas que agregue el equipo en [Integraciones](/integraciones) o en este artículo cuando estén publicadas.

---

## Referencia de textos en pantalla (validar en la versión publicada)

Estos rótulos salen del cliente actual; **confirmá en staging o producción** antes de usarlos en material offline o capacitaciones.

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
2. Acceso de administrador al WordPress para crear una **clave de conexión** (clave del cliente y secreto) desde el panel de WooCommerce (ruta típica: **WooCommerce → Ajustes → Avanzado** → apartado de claves; el artículo ampliado puede ir con capturas).
3. **URL pública** de la tienda (la de los compradores, con `https://` cuando sea posible).
4. Acordar si la integración debe **solo consultar** la tienda o también **actualizar** precio o stock: en WordPress se eligen **permisos** de la clave (solo lectura vs lectura y escritura).

:::note Documentación técnica interna

Para el equipo técnico: enlace a la guía oficial de WooCommerce sobre credenciales de integración, en el idioma que use la organización.

:::

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

- **Filtro** y **paginación:** en catálogos grandes, conviene saber si **cambiar de página** o **cerrar** puede perder cambios no guardados. **Validá con producto o QA** el comportamiento real (mensaje de confirmación o no) y documentalo cuando esté cerrado; reduce muchos tickets.
- **GUARDAR ENLACES:** persiste los emparejamientos de la operación; hasta guardar, los cambios pueden no quedar registrados.
- **Sugerencias automáticas** (si están activas): son orientativas; revisá antes de guardar.

**Productos variables (WooCommerce):** confirmá con producto **qué hace hoy** el sistema: ¿una fila por variación o solo el producto “padre”? ¿hace falta **SKU** alineado entre tienda y ERP? El tooltip del cliente ya advierte limitación; el artículo definitivo debe cerrar el comportamiento con una frase explícita aprobada por producto.

---

## Ficha de producto — pestaña Ecommerce

- Nombre en pantalla: **Ecommerce** (traducción actual del producto).
- Interruptor de **sincronización con la tienda** alineado al dato que devuelve el sistema al abrir el producto.
- Enlace con WooCommerce: lista de artículos **sin vínculo** con otro producto del ERP y/o **ID en WooCommerce** manual; **Guardar enlace** / **Quitar enlace**.
- **Ver en la tienda:** solo si el sistema envía la URL pública; si no está desplegado en tu versión, omití esta función en capacitaciones o indicá “según versión”.

---

## Varias tiendas (FAQ — validar con producto)

Redactar según la regla real:

- ¿Una **organización** en ZinK ERP puede tener **una** URL WooCommerce o **varias**?
- Si solo una: decirlo claro en FAQ para alinear expectativas.

---

## Desvincular la tienda

- Botón **DESVINCULAR TIENDA** (o estado **DESVINCULANDO…** mientras procesa).

**Preguntas para cerrar con producto:** ¿qué queda guardado en el ERP (mapeos, histórico)? ¿Hace falta perfil administrador u otro permiso? ¿Se puede revincular la misma u otra URL sin pasos extra?

Recomendación genérica: coordinar con **administración** antes de desvincular en producción.

---

## Seguridad

- No compartir **clave ni secreto** por medios informales ni capturas sin censurar.
- Si hubo filtración: revocar en WordPress, generar claves nuevas y vincular de nuevo en ZinK ERP.

---

## Cuándo pedir ayuda a soporte o administración

- Error al vincular con datos verificados.
- Listado de la tienda **vacío** cuando en la web hay productos.
- Enlaces guardados pero la tienda **no muestra** precios o stock esperados.
- Comportamiento de **productos variables** distinto al documentado.
- **Cambios sin guardar:** si el operador perdió trabajo al cambiar de pestaña o página, revisar si el producto debería avisar; si ya avisa, documentarlo.
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

## Checklist para el equipo de documentación

- [ ] Capturas: Integraciones → WooCommerce → vincular → **Catálogo tienda** / **Sin mapear** / **Enlace inválido** → **GUARDAR ENLACES**.
- [ ] Capturas: Producto → pestaña **Ecommerce** (interruptor, enlace, **Ver en la tienda** si aplica).
- [ ] Párrafo **“Qué sincroniza hoy”** firmado por producto.
- [ ] FAQ: una vs varias tiendas por organización.
- [ ] FAQ: **guardar producto** (ficha ERP) vs **guardar enlaces** (asistente WooCommerce).
- [ ] Comportamiento real ante **paginación / cierre / cambio de pestaña** con cambios sin guardar.
- [ ] Unificar redacción del **tilde verde** entre [Integraciones](/integraciones), [Preferencias](/configuracion/preferencias) y este artículo.
- [ ] Descripción YAML (SEO) y cuerpo del artículo alineados al mismo tono, sin jerga innecesaria para operadores.

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

:::note Capturas

**TODO:** sumar en el portal una secuencia de capturas del flujo en WordPress cuando el equipo tenga el material.

:::
