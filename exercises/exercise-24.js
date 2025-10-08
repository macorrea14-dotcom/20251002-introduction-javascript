const valores = [10, 20, 30, 40];

const sumaValores = valores.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(sumaValores);