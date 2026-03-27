---
title: Informes
sidebar_position: 60
---
## Resumen

- Los informes permiten analizar stock, ventas, compras, movimientos de caja y cuenta corriente en un período o según filtros.
- En el **Centro de informes** ves todas las opciones disponibles según tus permisos, agrupadas por categoría (Operativos, Finanzas, Analíticos, Etiquetas). Hacé clic en una card para abrir ese informe.
- Podés **buscar** por nombre o descripción y **fijar** los que más usás: los fijados quedan arriba en la sección "Fijados" y se guardan en tu navegador (mismo equipo).
- La mayoría de informes permite filtrar por fechas, organización y, cuando aplica, por contacto. Podés exportar o imprimir según el tipo.
- Tipos disponibles: Stock crítico, Productos faltantes, Productos etiquetados, Etiquetas circulares, Históricas de ventas, Productos vendidos, Artículos vendidos entre fechas, Egresos, Ingresos, 80/20 (ganancia bruta), Promociones por vencer, Caja diaria entre fechas, Cuenta corriente.

## CuandoUsar

- Para analizar stock, ventas, compras o movimientos en un período.
- Para detectar productos con stock por debajo del mínimo (stock crítico) o sin stock (faltantes).
- Para revisar movimientos de caja (ingresos, egresos, caja diaria) o saldos de cuenta corriente.
- Para exportar o imprimir datos para gestión o auditoría.
- Para identificar productos más vendidos o con mejor margen (informe 80/20) o promociones próximas a vencer.

## Flujo

- Entrá a **Informes** (Centro de informes). Si querés, usá el buscador o fijá informes con el ícono de chinche para tenerlos arriba.
- Hacé clic en la card del informe que necesitás. En **Caja diaria** elegí fecha desde/hasta en la misma card y "Consultar"; el resto abre su pantalla.
- En la pantalla del informe configurá los filtros (fecha desde/hasta, organización, contacto u otros según el informe).
- Ejecutá la consulta; los resultados se muestran en pantalla y, según el informe, podés exportar o imprimir.

## Campos

Los filtros varían según el informe. Los más habituales:

## Fecha desde / Fecha hasta

Rango de fechas para el período a analizar. En muchos informes son obligatorios.

## Organización

Permite restringir los datos a una organización. Útil en multi-org.

## Contacto

En informes de cuenta corriente, ventas por cliente o movimientos asociados a un contacto, podés filtrar por contacto.

## Otros filtros

Algunos informes tienen filtros propios (por ejemplo productos etiquetados por etiqueta, stock crítico por depósito). Están indicados en la pantalla de cada informe.

## Tipos de informe

- **Stock crítico:** productos con stock actual por debajo del stock mínimo definido.
- **Productos faltantes:** productos con stock en cero.
- **Productos etiquetados / Etiquetas circulares:** listados por etiqueta para gestión de góndola o circulares.
- **Históricas / Productos vendidos / Artículos vendidos entre fechas:** ventas en un período; cantidad, montos o detalle por producto.
- **Egresos / Ingresos:** movimientos de caja por concepto en un período (requieren conceptos configurados).
- **80/20:** análisis de ganancia bruta por producto (ranking por contribución).
- **Promoción por vencer:** productos con promociones próximas a su fecha de vencimiento.
- **Caja diaria entre fechas:** resumen de movimientos de caja en un rango de fechas; se consulta desde la card en el Centro de informes (fecha desde, fecha hasta y botón Consultar).
- **Cuenta corriente:** saldos y movimientos por contacto (compras o ventas según el informe).

## Reglas

- Los informes respetan permisos de menú: solo ves los informes para los que tenés permiso.
- Los informes fijados se guardan en el navegador (localStorage) del equipo; no se sincronizan entre dispositivos ni usuarios.
- Fechas: en general no se permiten fechas futuras; el rango máximo puede estar limitado según el informe.
- Exportación e impresión dependen del tipo de informe; si está disponible, aparece un botón en la pantalla.

## BuenasPracticas

- Definí bien el rango de fechas para no cargar períodos innecesariamente largos.
- Revisá stock crítico y productos faltantes con frecuencia para reponer a tiempo.
- Usá el informe de caja diaria para cerrar caja y conciliar; relacioná con ingresos y egresos por concepto.
- El 80/20 sirve para enfocar reposición y promociones en los productos que más aportan a la ganancia.
