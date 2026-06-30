---
title: Perfiles | Zink ERP
sidebar_label: Perfiles
description: >-
  Los perfiles permiten definir conjuntos de permisos y controlar qué puede ver
  y qué acciones puede realizar cada usuario dentro del sistema.
keywords:
  - permisos
  - perfiles
  - seguridad
  - accesos
  - roles
  - usuarios
  - no puedo acceder
  - no puedo cobrar
  - botón deshabilitado
  - acciones
sidebar_position: 9
---

## Resumen

Los perfiles permiten definir conjuntos de permisos y controlar qué puede ver y qué acciones puede realizar cada usuario dentro del sistema.

Facilitan la gestión de accesos al asignar configuraciones reutilizables a múltiples usuarios.

Entrá desde **Administración → Perfiles**.

Un perfil es un **conjunto de permisos**. El nombre del perfil es referencial: lo elige el operador o administrador para identificarlo, pero no define por sí solo qué puede hacer el usuario.

Por ejemplo, dos organizaciones pueden tener un perfil llamado "Vendedor" con permisos distintos. Lo importante es revisar qué permisos tiene habilitados ese perfil.

---

## Antes de empezar

- Definí qué tareas necesita realizar cada grupo de usuarios.
- Separá perfiles por responsabilidades reales, no solo por cargo.
- Revisá qué permisos son necesarios para acciones sensibles, como cobrar, modificar precios, eliminar registros o acceder a informes.

---

## Procedimiento

1. Crear perfil.
2. Completar:
   - nombre
   - descripción
3. Asignar permisos por categoría.
4. Guardar.
5. Asociar a usuarios.

![Formulario de perfil con datos generales y categorías de permisos](/img/ayuda/administracion/perfiles-01-formulario.png)

---

## Cómo se organizan los permisos

Los permisos están organizados en niveles:

| Nivel | Qué controla |
|-------|--------------|
| Categoría | Agrupa módulos o áreas del sistema. |
| Menú o pantalla | Define si el usuario puede acceder a una pantalla. |
| Acción | Define qué puede hacer dentro de esa pantalla. |

En la práctica, un usuario puede tener acceso a una pantalla pero no a todas sus acciones. Por ejemplo, puede ver ventas sin poder eliminarlas, o puede consultar POS sin poder completar un cobro si no tiene el permiso correspondiente.

La recomendación para la ayuda es centralizar la explicación completa en este artículo y, en cada pantalla operativa, mencionar solo el permiso que afecta esa acción. Por ejemplo, en POS y Ventas se indica que el cobro depende del permiso para **realizar cobro en ventas**, pero el diagnóstico completo se mantiene acá.

---

## Relación entre ver y acciones

En permisos granulares, **ver** una pantalla y **operar** dentro de ella no siempre es lo mismo.

- Si el usuario no tiene permiso de menú, la pantalla puede no aparecer o no permitir acceso.
- Si el usuario tiene permiso de ver, puede consultar la pantalla según el alcance configurado.
- Si el usuario no tiene permisos de acción, algunos botones pueden no aparecer, quedar deshabilitados o impedir la operación.

Cuando habilitás una acción operativa, el sistema puede necesitar que el permiso de visualización correspondiente también esté activo. Si deshabilitás el permiso de ver, las acciones relacionadas pueden dejar de estar disponibles.

---

## Permisos por acción

Muchas pantallas combinan varios permisos. No alcanza con pensar "tiene acceso a Ventas"; puede necesitar permisos específicos para:

- agregar;
- editar;
- eliminar;
- ver detalle;
- modificar fechas;
- modificar descuentos;
- crear productos o contactos rápidos;
- registrar cobros o pagos;
- acceder a informes;
- ejecutar importaciones o actualizaciones masivas.

Esto permite armar perfiles muy precisos. Por ejemplo:

- Un vendedor de mostrador puede usar POS y cobrar, pero no eliminar ventas.
- Un operador administrativo puede cargar productos, pero no modificar precios.
- Un supervisor puede ver informes, pero no cambiar configuraciones.
- Un usuario de depósito puede consultar inventario, pero no ajustar stock.

---

## Campos principales

### Nombre

Identifica el perfil dentro de la organización.

El nombre es libre y referencial. Usá nombres claros para el equipo, como "Vendedor mostrador", "Supervisor ventas", "Administración" o "Depósito".

### Descripción

Define el objetivo del perfil y ayuda a entender para qué tipo de usuario fue creado.

### Permisos

Listado granular de accesos disponibles.

Los permisos pueden controlar pantallas completas o acciones puntuales dentro de cada pantalla.

---

## Casos frecuentes

### Perfil vendedor de mostrador

Suele necesitar acceso a POS, consulta de precios, ventas y cobro.

No necesariamente necesita permisos para eliminar ventas, modificar configuraciones o acceder a todos los informes.

### Perfil administrativo

Puede necesitar productos, contactos, compras, ventas, pagos, cuenta corriente e informes.

Conviene revisar con cuidado permisos de eliminación, edición de precios y cambios de configuración.

### Perfil supervisor

Puede tener permisos de revisión, informes y corrección de operaciones.

No siempre necesita operar todas las pantallas, pero sí ver resultados y resolver excepciones.

### Perfil administrador

Acceso amplio al sistema, incluyendo usuarios, perfiles, configuración y permisos sensibles.

Usalo con cuidado: no todos los usuarios que administran una operación necesitan ser administradores completos.

---

## Diagnóstico de problemas por permisos

Cuando un usuario dice que "no puede hacer algo", revisá:

1. Qué pantalla está intentando usar.
2. Si la pantalla aparece en el menú.
3. Si puede ver el listado o formulario.
4. Qué botón o acción no aparece, está deshabilitado o da error.
5. Qué perfil tiene asignado el usuario.
6. Si ese perfil tiene activo el permiso de menú y la acción específica.

Ejemplos:

| Situación | Qué revisar |
|-----------|-------------|
| No aparece una pantalla | Permiso de menú o categoría. |
| Ve la pantalla pero no puede crear | Permiso de agregar. |
| Ve registros pero no puede modificarlos | Permiso de editar. |
| No puede cobrar en POS o ventas | Permiso para realizar cobro en ventas. |
| No ve un informe | Permiso del informe o del módulo Informes. |
| No puede eliminar | Permiso de eliminar para esa pantalla. |

---

## Si algo sale mal

- **Usuario sin acceso**
  - Verificá que tenga un perfil asignado.
  - Revisá que el perfil esté activo.
  - Confirmá que el permiso de menú correspondiente esté habilitado.

- **Permisos incorrectos**
  - Revisá configuración del perfil.
  - Verificá no solo el acceso a la pantalla, sino también las acciones específicas.

- **El botón no aparece o está deshabilitado**
  - Revisá el permiso de acción asociado a esa operación.
  - Si la acción depende de ver la pantalla, verificá también el permiso de visualización.

---

## Ver también

- [Tutorial en video: gestionar perfiles y permisos](../guias/tutorial-gestionar-perfiles-permisos.mdx)
- [Usuarios](./usuarios.md)
