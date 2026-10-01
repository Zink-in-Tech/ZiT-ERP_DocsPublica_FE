---
title: 'Facturante (legado)'
sidebar_label: Facturante (legado)
description: 'Referencia legada de Facturante en Zink ERP. Para facturación electrónica, usá la integración nativa con ARCA.'
sidebar_position: 9
slug: /integraciones/facturante
keywords:
  - Facturante
  - legado
  - ARCA
---

:::warning Integración legada

**Facturante ya no es la forma de facturar en Zink ERP.** La facturación electrónica sale por la integración nativa con **ARCA**. Si vas a configurar la facturación por primera vez o querés pasar a ARCA, seguí la guía de **[ARCA](/integraciones/arca)**.

:::

## Resumen

Esta página queda como **referencia legada** para organizaciones que configuraron **Facturante** antes de que existiera la integración nativa con ARCA. No la uses para dar de alta la facturación electrónica: para eso está [ARCA](/integraciones/arca).

Facturante ya no aparece en **Preferencias → Integraciones**. Acá encontrás qué datos pedía su asistente y cómo pasar a ARCA.

## Antes de empezar

- Confirmá si tu organización realmente emitía por Facturante. Si no lo sabés, consultá con la persona administradora o con [soporte](#si-algo-sale-mal).
- Para cualquier alta nueva, usá [ARCA](/integraciones/arca) y el [tutorial de delegación en ARCA](/integraciones/delegacion-autorizacion-comprobantes-arca).
- Para configurar ARCA necesitás permisos para entrar a **Preferencias → Integraciones**.

## Procedimiento

### Qué datos pedía el asistente de Facturante

El asistente de Facturante solicitaba estos datos fiscales y de la empresa:

| Grupo | Datos |
|-------|-------|
| Acceso y contacto | Email, contraseña de acceso al servicio, teléfono. |
| Identificación | Tipo de documento, número de documento, CUIT. |
| Empresa | Razón social, nombre de fantasía, fecha de comienzo de actividad. |
| Facturación | Punto de venta, condición frente al IVA. |
| Domicilio real | Calle, número, código postal, provincia y ciudad. |
| Domicilio fiscal | Calle, número, código postal, provincia y ciudad. |

### Cómo pasar a ARCA

1. Hacé el trámite en ARCA: punto de venta nuevo y delegación a **Zink in Tech**. Ver [Cómo delegar Facturación Electrónica en ARCA](/integraciones/delegacion-autorizacion-comprobantes-arca).
2. Cargá los datos fiscales en **Preferencias → Integraciones → ARCA**. Ver [ARCA](/integraciones/arca).
3. Avisá a soporte para que valide la delegación y habilite la emisión.

## Si algo sale mal

| Síntoma | Qué hacer |
|---------|-----------|
| No aparece Facturante en Integraciones | Es lo esperado: la facturación electrónica se configura en [ARCA](/integraciones/arca). |
| Tenés dudas sobre si emitís por Facturante o por ARCA | Escribí a Soporte 24x7 por WhatsApp con el nombre de la organización y el CUIT. |

Para cualquier consulta, escribinos a **Soporte 24x7 por WhatsApp**: [+54 9 11 3559-8389](https://wa.me/5491135598389).

## Ver también

- [ARCA: facturación electrónica nativa](/integraciones/arca)
- [Cómo delegar Facturación Electrónica en ARCA](/integraciones/delegacion-autorizacion-comprobantes-arca)
- [Integraciones](/integraciones)
- [Preferencias](/configuracion/preferencias)
