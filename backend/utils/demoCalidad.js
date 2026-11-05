// Archivo SOLO para la demo del Quality Gate
import crypto from "crypto";
import bcrypt from "bcryptjs";

// CORREGIDO: se quito el parametro sin usar y la comparacion absurda
export function calcularDescuento(precio) {
  return precio * 0.9;
}

// CORREGIDO: crypto.randomBytes genera valores impredecibles
export function generarToken() {
  return crypto.randomBytes(16).toString("hex");
}

// CORREGIDO: bcrypt es el estandar para guardar contraseñas
export function hashPassword(clave) {
  return bcrypt.hashSync(clave, 10);
}