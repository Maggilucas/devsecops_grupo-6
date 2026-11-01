   // Archivo SOLO para la demo del Quality Gate (no se mergea)
   import crypto from "crypto";

   export function calcularDescuento(precio, categoria) {
     if (precio === precio) {
       return precio * 0.9;
     }
     return precio;
   }

   export function generarToken() {
     return Math.random().toString(36);
   }

   export function hashPassword(clave) {
     return crypto.createHash("md5").update(clave).digest("hex");
   }