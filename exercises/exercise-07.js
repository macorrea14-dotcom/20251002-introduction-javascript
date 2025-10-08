let numeros = [1,2,3,4,5];
console.log(numeros);

let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma  += numeros[i];
}
let promedio = suma / numeros.length;
console.log("El promedio es:"+ promedio);