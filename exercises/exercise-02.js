const num1 = 50.8; //variable del primer numero
const num2 = 30.5; //variable del segundo numero

const Suma = num1 + num2 //aca los sumamos
const Multiplicación = num1 * num2 //aca los miltiplicamos  

const redondeoSuma = Math.round(Suma) //aca redondeamos la suma
const redondeoMultiplicación = Math.round(Multiplicación) //aca redondeamos la multiplicacion

console.log(`Esta es la suma: ${Suma}, `+`Esta es la multiplicacion: ${Multiplicación}`); //mostramos la suma y la multiplicacion sin redondear
console.log(`Esta es la suma redondeada: ${redondeoSuma}, `+`Esta es la multiplicacion redondeada: ${redondeoMultiplicación}`);
//mostramos la suma y la multiplicacion redondeadas

//justificacion: use variables para guardar los numeros y calcular los resultados, y el .round() para redondear los resultados