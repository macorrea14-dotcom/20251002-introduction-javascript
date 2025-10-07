const rol = ["admin", "user", "guest"];

if (rol.includes("admin")) {
  console.log("Acceso Total");
} else if (rol.includes("user")) {
  console.log("Accesso Limitado");
} else if (rol.includes("guest")) {
  console.log("Inicia sesión para continuar");
} else {
  console.log("Rol no valido");
}