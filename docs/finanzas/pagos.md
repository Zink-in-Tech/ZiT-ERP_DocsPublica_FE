---
title: Pagos
sidebar_position: 50
---
## Resumen

- Registrá cobros a clientes (ingresos) o pagos a proveedores (egresos).
- Impacta la Cuenta Corriente del contacto; aplica el monto a uno o varios comprobantes.
- Podés usar uno o varios medios de pago (efectivo, transferencia, tarjeta, Mercado Pago, etc.).
- No podés aplicar un monto mayor al adeudado ni dejar parte del pago sin aplicar (genera nota de crédito).
- Mercado Pago: solo guardar cuando la transacción esté APROBADA.

## CuandoUsar

- Registrar un cobro a un cliente desde Cuenta Corriente o tras una venta a consumidor final.
- Registrar un pago a un proveedor desde Cuenta Corriente.
- Aplicar un pago parcial o total sobre facturas, ventas o compras.

## Flujo

- Elegí contacto, tipo de pago (cobro a cliente o pago a proveedor), fecha y medios de pago. Agregá comprobantes y montos a acreditar. Guardá; opcional: enviar comprobante o saldo de cuenta por email.

## Campos

## Contacto

Contacto al que está dirigido el movimiento. No se puede editar después de seleccionado.

## Tipo de Pago

Cobro a cliente (ingreso) o Pago a proveedor (egreso). Define si impacta como ingreso o egreso en Cuenta Corriente.

## Fecha de Pago

Se completa automáticamente con la fecha actual. Modificarla requiere permisos especiales.

## Medios de Pago

Efectivo, Cuenta Corriente, Cheque, Transferencia, Tarjeta Crédito/Débito, Mercado Pago. Cada medio tiene sus campos; Mercado Pago: procesar y aprobar antes de guardar.

## Comprobantes

Tipo COMPRAS o VENTAS: agregá las facturas/ventas/compras sobre las que se aplica el pago. Podés asignar el pago completo o parcial a uno o varios comprobantes. Importante: el monto a acreditar no puede superar lo adeudado.

## Observaciones

Texto opcional para comentarios o aclaraciones.

## Enviar Comprobante / Enviar Saldo de Cuenta

Envía por email el comprobante de pago o el estado de Cuenta Corriente actualizado al contacto.

## Reglas

- No podés ingresar un comprobante sin monto a acreditar.
- No podés ingresar un monto mayor al adeudado.
- No podés aplicar sobre un comprobante un monto mayor al del pago.
- No podés dejar parte del pago sin aplicar (en ese caso se genera nota de crédito).
- Mercado Pago: no podés guardar sin procesar y aprobar la transacción.

## BuenasPracticas

- Verificá que el total de medios de pago coincida con el monto a aplicar.
- Usá "Enviar comprobante" o "Enviar saldo" para que el contacto reciba el detalle por email.
