let numeros = [1,2,3,4,5]; //arreglo de numeros
console.log(numeros); //muestra el arreglo de numeros

let suma = 0; //vvariable paraa acumular la suma
for (let i = 0; i < numeros.length; i++) { //recorre el arreglo
    suma  += numeros[i]; //suma cada numero del arreglo
}
let promedio = suma / numeros.length; //esta variable calcula el promedio
console.log("El promedio es:"+ promedio); //muestra el promedio

//justificacion: use un ciclo for para sumar los valores del arreglo y despues sacamos el promedio manualmente