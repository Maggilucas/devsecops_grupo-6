// Archivo SOLO para la demo del Quality Gate
import crypto from "crypto";
import { exec } from "child_process";

// ===== SEGURIDAD =====
const password = "admin1234"; // contraseña escrita en el codigo
const URL_API = "http://api.losvigilantes.com"; // HTTP sin cifrar

export function generarToken() {
  return Math.random().toString(36); // Math.random() es predecible
}

export function hashPassword(clave) {
  return crypto.createHash("md5").update(clave).digest("hex"); // md5 es debil
}

export function ejecutarFormula(texto) {
  return eval(texto); // eval ejecuta cualquier codigo
}

export function listar(carpeta) {
  exec("ls " + carpeta); // inyeccion de comandos
}

// ===== BUGS =====
export function esNumero(x) {
  if (x === NaN) { // NaN nunca es igual a nada, hay que usar Number.isNaN
    return false;
  }
  return true;
}

export function clasificar(precio) {
  if (precio > 100) {
    return "caro";
  } else if (precio > 100) { // condicion repetida: nunca se ejecuta
    return "muy caro";
  }
  return "barato";
}

export function etiqueta(stock) {
  if (stock > 0) {
    return "disponible";
  } else {
    return "disponible"; // las dos ramas hacen lo mismo
  }
}

// ===== CODE SMELLS =====
var total = 0; // var en lugar de let/const

export function calcular(a, b, c, d) { // el parametro d no se usa
  var resultado = a > b ? (b > c ? "x" : (c > a ? "y" : "z")) : "w"; // ternarios anidados
  var sinUsar = 5; // variable sin usar
  // TODO: revisar esta logica
  // const viejo = calcular(1, 2, 3, 4);
  return resultado;
}

export function vacia() {}

export function mensajeA() {
  return "Producto no encontrado en el catalogo";
}
export function mensajeB() {
  return "Producto no encontrado en el catalogo";
}
export function mensajeC() {
  return "Producto no encontrado en el catalogo";
}

// ===== CODIGO DUPLICADO =====
export function resumenProducto(p) {
  const nombre = p.nombre.trim().toUpperCase();
  const precio = Number(p.precio).toFixed(2);
  const stock = p.stock > 0 ? "con stock" : "sin stock";
  const categoria = p.categoria || "sin categoria";
  const descripcion = p.descripcion ? p.descripcion.slice(0, 50) : "sin descripcion";
  const imagen = p.imagen ? "con imagen" : "sin imagen";
  const activo = p.activo ? "activo" : "dado de baja";
  const linea = nombre + " | " + precio + " | " + stock + " | " + categoria;
  return linea + " | " + descripcion + " | " + imagen + " | " + activo;
}

export function resumenCliente(p) {
  const nombre = p.nombre.trim().toUpperCase();
  const precio = Number(p.precio).toFixed(2);
  const stock = p.stock > 0 ? "con stock" : "sin stock";
  const categoria = p.categoria || "sin categoria";
  const descripcion = p.descripcion ? p.descripcion.slice(0, 50) : "sin descripcion";
  const imagen = p.imagen ? "con imagen" : "sin imagen";
  const activo = p.activo ? "activo" : "dado de baja";
  const linea = nombre + " | " + precio + " | " + stock + " | " + categoria;
  return linea + " | " + descripcion + " | " + imagen + " | " + activo;
}

export function resumenPedido(p) {
  const nombre = p.nombre.trim().toUpperCase();
  const precio = Number(p.precio).toFixed(2);
  const stock = p.stock > 0 ? "con stock" : "sin stock";
  const categoria = p.categoria || "sin categoria";
  const descripcion = p.descripcion ? p.descripcion.slice(0, 50) : "sin descripcion";
  const imagen = p.imagen ? "con imagen" : "sin imagen";
  const activo = p.activo ? "activo" : "dado de baja";
  const linea = nombre + " | " + precio + " | " + stock + " | " + categoria;
  return linea + " | " + descripcion + " | " + imagen + " | " + activo;
}