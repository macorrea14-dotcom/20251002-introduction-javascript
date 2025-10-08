const numeros = [1,2,3,4,5,6]; //arreglo de numeros
const multiplicador = 2; //numero para multiplicar los numeros pares

const resultado = numeros.map(numero => { //usamos .map() para recorrer el arreglo
  if (numero % 2 === 0) { //condicion para verificar si el numero es divisible entre 2
    return numero * multiplicador; //multiplica los numeros pares 
  } else {
    return numero; //los numeros impares se mantienen iguales
  }
});
console.log(numeros);
console.log(resultado);

//justificacion: use el método map y una condición if para multiplicar solo los números pares