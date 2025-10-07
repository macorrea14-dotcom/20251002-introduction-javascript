const rol = "admin"; //Se debe cambiar el valor de rol para ver diferentes resultados

if (rol === "admin") {
  console.log("Acceso Total");
} else if (rol === "user") {
  console.log("Accesso Limitado");
} else if (rol === "guest") {
  console.log("Inicia sesión para continuar");
} else {
  console.log("Rol no valido");
}