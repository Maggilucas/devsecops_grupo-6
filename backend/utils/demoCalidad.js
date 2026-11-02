// Archivo SOLO para la demo del Quality Gate
import crypto from "crypto";
import bcrypt from "bcryptjs";

// CORREGIDO: se quitó el parámetro sin usar y la comparación absurda
export function calcularDescuento(precio) {
  return precio * 0.9;
}

// CORREGIDO: crypto.randomBytes genera valores impredecibles
export function generarToken() {
  return crypto.randomBytes(16).toString("hex");
}

// CORREGIDO: bcrypt es el estándar para guardar contraseñas
export function hashPassword(clave) {
  return bcrypt.hashSync(clave, 10);
}