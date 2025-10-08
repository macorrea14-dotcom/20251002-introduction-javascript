const vocales = (texto) => {
  let contador = 0;
  for (let palabra of texto){
    if ("aeiou".includes(palabra)){
        contador++;
    }
  }
  return contador;
}

console.log(vocales("Hola mundo"));