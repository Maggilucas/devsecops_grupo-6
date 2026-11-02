   // Archivo SOLO para la demo del Quality Gate (no se mergea)
   import crypto from "crypto";
   import bcrypt from "bcryptjs";

   export function calcularDescuento(precio) {
     return precio * 0.9;
   }

   export function generarToken() {
     return crypto.randomBytes(16).toString("hex");
   }

   export function hashPassword(clave) {
     return bcrypt.hashSync(clave, 10);
   }