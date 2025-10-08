const rol = "admin"; //Se debe cambiar el valor de rol para ver diferentes resultados
// usamos condiciones para que detectar el rol
if (rol === "admin") {
  console.log("Acceso Total");
} else if (rol === "user") {
  console.log("Accesso Limitado");
} else if (rol === "guest") {
  console.log("Inicia sesión para continuar");
} else {
  console.log("Rol no valido");
}

//justificacion: use las condiciones if, else if y else para detectar el rol y mostrar el mensaje correcto 