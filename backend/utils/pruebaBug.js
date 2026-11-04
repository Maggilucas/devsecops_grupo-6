export function validarRegistroUsuario(userData) {
  const edad = userData?.perfil?.edad;
  if (edad === undefined || edad < 18) {
    throw new Error("El usuario debe ser mayor de edad");
  }
  return true;
}