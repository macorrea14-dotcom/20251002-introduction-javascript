const numeros = [1,2,3,4,5,6];
const multiplicador = 2;

const resultado = numeros.map(numero => {
  if (numero % 2 === 0) {
    return numero * multiplicador;
  } else {
    return numero;
  }
});
console.log(numeros);
console.log(resultado);