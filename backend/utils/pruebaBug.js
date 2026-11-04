export function validarRegistroUsuario(userData) {
  if (userData.perfil.edad < 18) {
    throw new Error("El usuario debe ser mayor de edad");
  }
  return true;
}