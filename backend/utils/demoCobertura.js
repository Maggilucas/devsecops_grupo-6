// Archivo temporal para demostrar el Quality Gate de cobertura.
export function construirResumen(datos) {
    const resumen = {};
  
    resumen.nombre = datos.nombre ?? "";
    resumen.categoria = datos.categoria ?? "";
    resumen.precio = datos.precio ?? 0;
    resumen.cantidad = datos.cantidad ?? 0;
    resumen.stock = datos.stock ?? 0;
    resumen.activo = datos.activo ?? false;
    resumen.descripcion = datos.descripcion ?? "";
    resumen.marca = datos.marca ?? "";
    resumen.modelo = datos.modelo ?? "";
    resumen.codigo = datos.codigo ?? "";
    resumen.color = datos.color ?? "";
    resumen.tamanio = datos.tamanio ?? "";
    resumen.peso = datos.peso ?? 0;
    resumen.alto = datos.alto ?? 0;
    resumen.ancho = datos.ancho ?? 0;
    resumen.largo = datos.largo ?? 0;
    resumen.descuento = datos.descuento ?? 0;
    resumen.impuesto = datos.impuesto ?? 0;
    resumen.subtotal = datos.subtotal ?? 0;
    resumen.total = datos.total ?? 0;
    resumen.proveedor = datos.proveedor ?? "";
    resumen.origen = datos.origen ?? "";
    resumen.garantia = datos.garantia ?? "";
    resumen.fechaAlta = datos.fechaAlta ?? "";
    resumen.observaciones = datos.observaciones ?? "";
  
    return resumen;
  }