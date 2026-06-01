---
title: "Informes | ZinkERP Docs"
sidebar_label: "Informes"
description: "Consultá stock, ventas, caja y cuenta corriente desde el Centro de informes. Incluye filtros, uso recomendado y problemas frecuentes."
sidebar_position: 60
keywords:
  - informes
  - centro de informes
  - reportes
  - exportar
  - stock crítico
---

## Resumen

El **Centro de informes** concentra los reportes habilitados por tu perfil. Podés buscar por nombre, fijar favoritos (se guardan en este navegador) y abrir cada informe desde su tarjeta.

La mayoría permite filtrar por fechas, organización y, cuando aplica, por contacto. Podés exportar o imprimir según el tipo de informe.

---

## Cuándo usar el Centro de informes

- Para decidir **reposición** (stock bajo mínimo o faltantes de pedido).
- Para **cerrar o auditar caja** en un período.
- Para analizar **ventas o margen** por producto o período.
- Para exportar **cuenta corriente** o movimientos a Excel/PDF.

---

## ¿Qué informe necesito?

| Necesito… | Informe |
|-----------|---------|
| Productos bajo stock mínimo | [Stock crítico](./informe-stock-critico.md) |
| Diferencia entre lo pedido y lo vendido/entregado | [Productos faltantes](./informe-productos-faltantes.md) |
| Valor del inventario | [Stock valorado](./informe-stock-valorado.md) |
| Ventas por período (comprobantes) | [Históricas de ventas](./informe-historicas.md) |
| Ventas por producto y lista de precios | [Productos vendidos](./informe-productos-vendidos.md) |
| Artículos vendidos entre fechas | [Artículos vendidos entre fechas](./informe-articulos-vendidos.md) |
| Ranking por ganancia bruta | [80/20](./informe-8020.md) |
| Promociones próximas a vencer | [Promociones por vencer](./informe-promocion-vence.md) |
| Etiquetas de góndola | [Etiquetas para góndola](./informe-productos-etiquetados.md) |
| Productos con etiqueta circular | [Etiquetas circulares](./informe-etiquetas-circulares.md) |
| PDF de ingresos de caja | [Ingresos](./informe-ingresos.md) |
| PDF de egresos de caja | [Egresos](./informe-egresos.md) |
| Excel de cuenta corriente | [Cuenta corriente](./informe-cuenta-corriente.md) |
| Caja en un rango de fechas | Consulta desde la card en el Centro (ver [Caja diaria](../finanzas/caja-diaria.md)) |

---

## Procedimiento

1. Entrá a **Informes** (Centro de informes).
2. (Opcional) Usá el buscador o fijá informes con el ícono de chinche.
3. Abrí la tarjeta del informe. En **Caja diaria entre fechas**, elegí fechas en la card y **Consultar**; el resto abre su pantalla de filtros.
4. Configurá filtros y ejecutá. Exportá o imprimí si el informe lo ofrece.

---

## Filtros habituales

| Filtro | Uso |
|--------|-----|
| Fecha desde / hasta | Período a analizar (obligatorio en muchos informes). |
| Organización | Restringir datos en entornos multi-organización. |
| Contacto | Cliente, proveedor o filtro por contacto según el informe. |

Los filtros propios de cada informe están en su artículo.

---

## Reglas de uso

- Solo ves informes para los que tenés permiso de menú.
- Los informes fijados se guardan en el navegador (localStorage); no se sincronizan entre dispositivos ni usuarios.
- En general no se permiten fechas futuras; el rango máximo puede estar limitado según el informe.

---

## Si algo sale mal

- **No veo un informe**
  - Tu perfil puede no tener permiso de menú para ese reporte.
- **La consulta es lenta o no carga**
  - Acotá el rango de fechas.
- **Los fijados no aparecen en otro equipo**
  - Los fijados son locales al navegador; volvé a fijarlos en ese equipo.

---

## Buenas prácticas

- Definí rangos de fechas acotados para no sobrecargar consultas.
- Revisá stock crítico y productos faltantes con frecuencia para reponer a tiempo.
- Usá caja diaria, ingresos y egresos juntos para cerrar caja.
- Combiná 80/20 con reposición para priorizar productos que más aportan.

---

## Ver también

- [Finanzas](../finanzas/finanzas.md)
- [Registro de inventario](../inventario/inventarios.md)
- [Productos](../administracion/productos.md)
