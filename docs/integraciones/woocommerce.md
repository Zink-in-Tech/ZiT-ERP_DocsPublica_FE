---
title: 'WooCommerce en Zink ERP: claves REST, mapeo y sincronización | Zink ERP'
sidebar_label: WooCommerce
description: >-
  La integración con WooCommerce permite conectar una tienda en WordPress con el
  catálogo de productos de ZinkERP.
sidebar_position: 5
slug: /integraciones/woocommerce
---

## Resumen

La integración con **WooCommerce** permite conectar una tienda en WordPress con el catálogo de productos de ZinkERP.

El objetivo principal es **vincular productos de la tienda con productos del ERP**. Ese vínculo ayuda a mantener alineados datos como precios o existencias cuando la configuración del sistema lo permite.

Esta ayuda se enfoca en lo que ve el usuario en la aplicación:

- Crear una clave REST en WooCommerce.
- Vincular la tienda desde **Preferencias → Integraciones**.
- Enlazar productos de la tienda con productos del ERP.
- Revisar productos **sin mapear** y **enlaces inválidos**.
- Cuidar credenciales y no asumir alcances no visibles en pantalla.

:::caution Alcance

No asumas sincronización en tiempo real, sincronización bidireccional completa, facturación automática, importación automática de órdenes ni configuración de un solo clic. El alcance real depende de la configuración habilitada para tu organización y de lo que el frontend muestre en cada pantalla.

:::

---

## Requisitos previos

Antes de empezar, verificá:

- Tener una tienda **WordPress con WooCommerce instalado**.
- Tener acceso de administrador al panel de WordPress.
- Conocer la **URL pública** de la tienda, la misma que usan los clientes, por ejemplo `https://mitienda.com`.
- Tener permisos en ZinkERP para entrar a **Preferencias → Integraciones** y usar **Gestionar**.
- Definir si la clave REST necesita permisos de **lectura** o **lectura/escritura**. Si ZinkERP debe actualizar precio o stock en la tienda, la guía in-app indica usar **Lectura/Escritura**.
- Tener productos creados en ZinkERP si vas a enlazar artículos de la tienda con el catálogo del ERP.

---

## Crear claves REST en WooCommerce

Las claves REST permiten que ZinkERP se conecte con WooCommerce sin usar la contraseña del administrador de WordPress.

1. Iniciá sesión en el panel de **WordPress** de la tienda.
2. Entrá a **WooCommerce → Ajustes**.
3. Abrí la pestaña **Avanzado**.
4. Entrá a **API REST**.
5. Tocá **Añadir clave**.
6. Completá una descripción clara, por ejemplo `ZinkERP`.
7. Elegí el usuario que va a quedar asociado a la clave.
8. Seleccioná los permisos:
   - **Lectura**, si solo se necesita consultar datos.
   - **Lectura/Escritura**, si el sistema debe actualizar datos como precio o stock según la configuración.
9. Generá la clave.
10. Copiá la **clave del cliente** y el **secreto del cliente**.

:::warning Importante

El secreto suele mostrarse una sola vez. Guardalo en un lugar seguro durante el alta y no lo compartas por correo, chat ni capturas.

:::

---

## Vincular la tienda en ZinkERP

1. Entrá a **Preferencias → Integraciones**.
2. Seleccioná **WooCommerce**.
3. Tocá **Gestionar**.
4. En el paso **Vincular tienda**, completá:
   - **Dirección web de la tienda**: podés escribirla con o sin `https://`; el sistema normaliza la URL.
   - **Clave del cliente**: corresponde a la clave REST de WooCommerce.
   - **Secreto del cliente**: corresponde al secreto REST de WooCommerce.
5. Tocá **VINCULAR TIENDA**.

Si falta algún dato, el sistema pide completar la dirección web, la clave y el secreto. Si la vinculación falla, revisá URL, permisos de la clave y que WooCommerce acepte conexiones externas.

Cuando el vínculo se registra correctamente, la pantalla muestra **Tienda WooCommerce vinculada** y habilita acciones como **ENLAZAR PRODUCTOS** o **DESVINCULAR TIENDA**.

---

## Mapear productos

Después de vincular la tienda, entrá a **ENLAZAR PRODUCTOS**.

La pantalla muestra una grilla para indicar qué producto de WooCommerce corresponde a qué producto del ERP.

### Catálogo tienda

La pestaña **Catálogo tienda** lista productos de WooCommerce con datos como:

- producto de la tienda;
- ID de tienda;
- código o SKU;
- código de barras, si existe;
- precio;
- stock;
- tipo de producto, por ejemplo variable.

En cada fila, usá el campo **Producto en el ERP** para buscar y seleccionar el producto correspondiente.

La búsqueda de la tienda la hace el servidor. Si hay muchos resultados, usá el filtro y la paginación.

### Sugerencias

La pantalla puede ofrecer **sugerencias** al cargar cada página o mediante **Buscar en esta página**.

Estas sugerencias comparan datos como código, código de barras y palabras del nombre del producto. Son una ayuda operativa, no una confirmación automática. Revisá siempre el producto sugerido antes de guardar.

### Guardar enlaces

Cuando tengas uno o más productos seleccionados:

1. Revisá que cada fila apunte al producto correcto del ERP.
2. Tocá **GUARDAR ENLACES**.
3. Esperá el mensaje de confirmación.

Hasta guardar, los cambios pueden no quedar registrados. En catálogos grandes, guardá antes de cambiar de página, cerrar el asistente o modificar filtros.

---

## Productos sin mapear

La pestaña **Sin mapear** muestra artículos de WooCommerce que todavía no tienen vínculo con un producto del ERP.

Usala para:

- encontrar productos pendientes de asociar;
- reducir diferencias entre tienda y catálogo;
- revisar artículos nuevos publicados en WooCommerce;
- evitar que queden productos fuera del circuito controlado por el ERP.

El listado se busca en la tienda y muestra solo artículos sin vínculo en el ERP. Si dejás el buscador vacío, la tabla puede quedar limpia hasta que ingreses un filtro.

---

## Enlaces inválidos

La pestaña **Enlace inválido** muestra casos donde el vínculo guardado tiene una inconsistencia.

Puede aparecer un motivo o un ID de producto ERP relacionado. Usá esa información para:

- corregir el producto del ERP asociado;
- volver a guardar el enlace;
- revisar si un producto fue eliminado, cambiado o dejó de estar disponible;
- escalar a soporte con captura y horario si el motivo no es claro.

No edites masivamente sin revisar estos casos. Un enlace incorrecto puede hacer que el ERP y la tienda apunten a productos distintos.

---

## Ficha de producto: pestaña Ecommerce

Cuando WooCommerce está habilitado para la organización, la ficha de producto puede mostrar la pestaña **Ecommerce**.

Desde esa pestaña podés:

- ver si el producto tiene enlace con la tienda;
- abrir **Ver en la tienda** si el sistema recibió una URL pública;
- buscar un artículo de WooCommerce todavía sin vínculo;
- cargar manualmente el **ID en WooCommerce** si el artículo no aparece en la lista;
- activar o desactivar **Sincronizar cambios de este producto con la tienda**;
- **Guardar vínculo**, **Actualizar vínculo** o **Quitar vínculo**.

El producto debe estar guardado antes de poder vincularlo con la tienda.

:::info Sincronizar cambios

El interruptor de sincronización indica que los cambios guardados en ese producto deben aplicarse también en la tienda, según la configuración del sistema. No significa, por sí solo, sincronización bidireccional completa ni tiempo real.

:::

---

## Productos variables

WooCommerce permite productos variables y variaciones.

La pantalla de ZinkERP advierte que más adelante puede hacer falta enlazar cada variación. En la versión visible actualmente, podés usar la fila principal o dejar sin enlace cuando no tengas certeza.

Antes de guardar vínculos masivos con productos variables, confirmá el criterio operativo con la persona administradora de la tienda.

---

## Desvincular la tienda

Si la tienda ya está vinculada, el asistente muestra **DESVINCULAR TIENDA**.

Al confirmar, se elimina la vinculación de WooCommerce con la organización. El sistema indica que podés volver a vincular más adelante.

Antes de desvincular en producción:

- avisá a administración o soporte interno;
- revisá si hay productos enlazados;
- documentá por qué se desvincula;
- evitá hacerlo durante horarios de venta activa.

---

## Seguridad de credenciales

Tratá la **clave del cliente** y el **secreto del cliente** como contraseñas.

Buenas prácticas:

- No las compartas por correo, chat ni tickets sin protección.
- No publiques capturas donde se vean completas.
- Usá una descripción clara en WordPress para identificar la clave.
- Revocá claves que ya no se usan.
- Si alguien vio el secreto, borrá la clave en WooCommerce y generá un par nuevo.
- Usá permisos mínimos cuando el circuito solo necesite lectura.

---

## Qué no debe asumir el usuario

Esta integración no implica automáticamente:

- sincronización en tiempo real;
- sincronización bidireccional completa;
- importación automática de órdenes;
- facturación automática de ventas online;
- publicación automática de todo el catálogo;
- creación de productos en WooCommerce sin configuración previa;
- mapeo perfecto sin revisión humana;
- soporte completo para variaciones en todos los escenarios;
- una tienda por organización o varias tiendas sin validarlo con soporte;
- que el precio o stock visible en WooCommerce cambie si no se guardó el enlace o si la configuración no lo habilita.

Si necesitás confirmar el alcance exacto de tu instalación, revisá la configuración activa con soporte o administración.

---

## Si algo sale mal

| Síntoma | Qué revisar |
|---------|-------------|
| No se puede vincular la tienda | URL pública, `https`, clave, secreto y permisos de la clave REST. |
| Error 401 o 403 | Permisos insuficientes, credenciales incorrectas o clave revocada en WooCommerce. |
| No carga el catálogo | Conexión con WooCommerce, API REST activa, certificado SSL y disponibilidad de la tienda. |
| No aparecen productos sin mapear | Probá buscar por nombre, SKU o ID. Verificá que haya productos sin vínculo. |
| Hay enlaces inválidos | Revisá el motivo, corregí el producto ERP asociado y guardá nuevamente. |
| El producto no aparece en la pestaña Ecommerce | Confirmá que WooCommerce esté habilitado para la organización y que el producto ya esté guardado. |

Al pedir soporte, enviá organización, usuario, horario aproximado, paso donde falló, mensaje visible y captura sin claves ni secretos.

---

## Ver también

- [Integraciones](/integraciones)
- [Cómo funcionan las integraciones](/integraciones/como-funciona)
- [Seguridad y cumplimiento](/integraciones/seguridad)
- [Problemas frecuentes](/integraciones/problemas-frecuentes)
