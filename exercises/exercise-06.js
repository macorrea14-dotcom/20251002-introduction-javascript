let numero = 15; //variable inicial
while (numero >= 0) { //este ciclo se repite mientras el numero sea mayor o igual a 0
    if (numero % 3 === 0) { //esta condicion es para que detecte los numeros divisibles por 3
        console.log(`${numero} El número es divisible por 3`); //muestra los numeros divisibles por 3
    }
    numero--; //disminuye de a uno el numero hasta llegar a 0
}

//justificacion: use un ciclo while para que muestre los numeros divisibles por 3 contando desde el 15 hasta el 0