const frutas = ["manzana","pera","uva"]; //arreglo de frutas
console.log(frutas) //muestra el arreglo original

frutas.splice(2,0,"naranga") //usamos .splice() para agregar "naranja" en la posicion 2 sin tocar nada mas
console.log(frutas) //muetra el arreglo con la nueva fruta