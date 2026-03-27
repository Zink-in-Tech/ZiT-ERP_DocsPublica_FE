---
title: Usuarios
sidebar_position: 8
---
## Resumen

- Registrá los colaboradores que acceden al sistema (credencial, organización y perfil).
- Impacta el nivel de acceso: el perfil define qué pantallas y acciones puede usar el usuario.
- Cada usuario debe tener al menos una organización y un perfil asignados.
- Podés inactivar un usuario para bloquear el acceso; tras intentos fallidos el sistema puede bloquearlo y un admin puede desbloquearlo.
- El email sirve para recuperación de contraseña y notificaciones.

## CuandoUsar

- Incorporar un nuevo colaborador que debe acceder al sistema.
- Asignar o cambiar organización y perfil (nivel de acceso).
- Inactivar o desbloquear acceso.

## Flujo

- Crear usuario con nombre, apellido, usuario (login), organización y perfil. Opcional: email, activo, desbloqueo tras intentos fallidos.

## Campos

## Nombre

Nombre del colaborador.

## Apellido

Apellido del colaborador.

## Usuario

Credencial para ingresar al sistema; junto con la contraseña completa el acceso.

## Organización

Organización a la que tendrá acceso el usuario.

## Perfil

Nivel de acceso sobre la organización seleccionada (permisos por pantalla y acción).

## Email

Se usa para comunicaciones, alertas y recuperación de contraseña.

## Activo

Podés inactivar el usuario para bloquear el acceso a la aplicación.

## Bloqueado

Tras reiterados intentos fallidos el sistema bloquea al usuario. Un administrador o usuario con permisos puede desbloquearlo.

## Reglas

- Cada usuario debe tener al menos una organización y un perfil asignados.

## BuenasPracticas

- Asigná el perfil adecuado según el rol del colaborador.
- Usá email para recuperación de contraseña y notificaciones.
