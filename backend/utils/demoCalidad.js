// Archivo SOLO para la demo del Quality Gate
import crypto from "crypto";

// PROBLEMA 1 (code smell): el parametro "categoria" no se usa
// PROBLEMA 2 (bug): "precio === precio" compara el valor consigo mismo,
//                    la condicion es siempre verdadera
export function calcularDescuento(precio, categoria) {
  if (precio === precio) {
    return precio * 0.9;
  }
  return precio;
}

// PROBLEMA 3 (seguridad): Math.random() es predecible,
//                         no sirve para generar tokens
export function generarToken() {
  return Math.random().toString(36);
}

// PROBLEMA 4 (seguridad): md5 es un algoritmo de hash debil,
//                         no se debe usar para contraseñas
export function hashPassword(clave) {
  return crypto.createHash("md5").update(clave).digest("hex");
}