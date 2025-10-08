function saludar(nombre = "Visitante") { //funcion con paramettro por defecto
  if (nombre === "Visitante") { //condicion para verificar si se uso el parametro por defecto
    console.log("Hola, Visitante");
  } else { //condicion por si no  usamos el parametro por defecto y usamos un nombre
    console.log(`Hola, ${nombre}`);
  }
}
saludar(); //imprime: Hola, Visitante
//saludar("Ana");         //imprime: Hola, Ana

//justificacion: use una función con un valor por defecto para saludar de forma personalizada o general