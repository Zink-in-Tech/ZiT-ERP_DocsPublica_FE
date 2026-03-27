---
title: Importación de Productos
sidebar_position: 3
---
## Resumen

- Incorporá muchos productos en una sola operación desde un archivo (CSV/Excel).
- Impacta el catálogo: los productos cargados quedan disponibles para presupuestos, pedidos, ventas y compras.
- El archivo debe incluir los campos esperados (código, descripción, unidades, precios por lista, etc.) con el formato indicado.
- Precios sin signos ($, U$D, etc.) ni separador de miles; separador decimal: coma.
- UnidadMedida: LTS, CMS, KG, UNIDAD (deben existir en el sistema).

## CuandoUsar

- Tenés muchos productos para cargar y querés hacerlo por planilla (CSV/Excel).
- Migrar un catálogo desde otro sistema o planilla.
- Los precios deben indicarse sin signos ni separador de miles; separador decimal: coma.

## Flujo

- Prepará el archivo con las columnas esperadas. Cargá el archivo y procesá. Revisá el resultado antes de confirmar.

## Campos

## Campos esperados (resumen)

actualizaPrecio (Si/No), franquicia (Si/No), puntoVenta (Si/No), destacado (Si/No), codigoInterno, CodigoBarras, Descripcion, Ubicacion, Unidades, UnidadMedida (LTS, CMS, KG, UNIDAD), UnidadMinimaVenta, UnidadBulto, BultosPallet, StockMinimo, CostoUnidad, Alto, Ancho, Profundidad, PrecioListaPublico, PrecioListaMayorista, PrecioListaDistribuidora, PrecioListaFranquicia. Precios sin signos ni separador de miles; separador decimal: coma.

## Reglas

- Los precios no deben tener signos ($, U$D, AR$, EUR, etc.) ni separador de miles. Separador decimal: coma.
- UnidadMedida: LTS (Litros), CMS (Centímetros), KG (Kilogramos), UNIDAD (Unidades). Deben existir en el sistema.

## BuenasPracticas

- Validá el archivo con pocos registros antes de cargar todo el catálogo.
- Revisá que las unidades de medida existan en el sistema; si no, solicitarlas por medio de la ayuda.
