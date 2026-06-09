---
title: Cómo delegar Facturación Electrónica en ARCA para usar Zink ERP | Zink ERP
sidebar_label: Delegar ARCA para Zink ERP
description: >-
  Guía paso a paso para crear un punto de venta en ARCA y delegar Facturación
  Electrónica para usar Zink ERP, sin compartir clave fiscal.
sidebar_position: 2
keywords:
  - delegar ARCA
  - facturación electrónica
  - punto de venta
  - clave fiscal
  - Zink ERP
---

## Objetivo

Dejar lista la cuenta fiscal para que Zink ERP pueda emitir comprobantes electrónicos con el circuito correcto de ARCA.

---

## Qué necesitás antes de empezar

- CUIT y clave fiscal con nivel suficiente.
- Acceso a **Administración de Puntos de Venta y Domicilios**.
- Acceso a **Administrador de Relaciones**.
- Definir si la empresa es **Monotributo** o **Responsable Inscripto**.
- Confirmar con tu equipo contable si ya existe un punto de venta reservado para otro sistema.

---

## Resultado esperado

Al terminar esta guía deberías tener:

- un punto de venta nuevo creado en ARCA;
- la delegación de **Facturación Electrónica** hecha a Zink in Tech;
- los datos listos para compartir al equipo que configura Zink ERP.

---

## Paso a paso

### Paso 1: Crear un punto de venta nuevo

1. Ingresá a [ARCA](https://www.arca.gob.ar/).
2. Abrí **Administración de Puntos de Venta y Domicilios**.
3. Entrá en **A/B/M de puntos de venta**.
4. Elegí **Agregar**.
5. Cargá un número de punto de venta nuevo.
6. Seleccioná la opción de facturación que corresponda a tu condición fiscal.
7. Asociá el domicilio correcto.
8. Confirmá y guardá el número.

### Paso 2: Delegar Facturación Electrónica

1. Volvé al menú principal de clave fiscal.
2. Abrí **Administrador de Relaciones**.
3. Elegí **Nueva Relación**.
4. Buscá el organismo **ARCA**.
5. Ingresá en **Webservices**.
6. Seleccioná **Facturación Electrónica**.
7. Cargá el CUIT autorizado: **20-31499393-5**.
8. Verificá que corresponda a **Fernando Ariel Demaio (Zink in Tech)**.
9. Confirmá la delegación.

### Paso 3: Compartir lo necesario al equipo

Cuando termines, pasá:

- CUIT de la empresa;
- número del nuevo punto de venta;
- confirmación de que la delegación quedó hecha;
- constancia o captura si la tenés.

---

## Errores comunes

### Reutilizar un punto de venta existente

No es lo recomendado. Si ya usás otro sistema o emisión manual, conviene separar circuitos.

### No encontrar el servicio correcto

Revisá permisos de clave fiscal y representación de la empresa.

### Delegar a otro CUIT por error

Antes de confirmar, verificá exactamente el CUIT y el nombre del autorizado.

---

## Preguntas frecuentes

### ¿Tengo que compartir mi clave fiscal?

No. El circuito correcto es delegar el servicio, no compartir credenciales.

### ¿La delegación da acceso total a ARCA?

No. Solo habilita la gestión técnica del servicio de **Facturación Electrónica**.

### ¿Esta guía reemplaza la ayuda técnica del portal de integraciones?

No. Esta guía resume el objetivo operativo. Para más detalle del trámite, revisá también [Cómo delegar Facturación Electrónica en ARCA](../integraciones/delegacion-autorizacion-comprobantes-arca.md).

---

## Ver también

- [Facturante](../integraciones/facturante.md)
- [Integraciones](../integraciones/intro.md)
- [Primeros pasos](../primeros-pasos.md)
