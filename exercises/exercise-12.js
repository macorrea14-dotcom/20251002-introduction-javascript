const vocales = (texto) => { //funcion flechita que resive un texto
  let contador = 0; //contador  de vocales
  for (let letra of texto){ //ciclo que recorre cada letra del texto
    if ("aeiou".includes(letra)){ //condicion que verifica si la letra es una vocal
        contador++; //aumenta el contador si es una vocal
    }
  }
  return contador; //muestra el total de vocales
}

console.log(vocales("Hola mundo"));

//justificacion: use un ciclo for y el método includes para contar las vocales en un texto