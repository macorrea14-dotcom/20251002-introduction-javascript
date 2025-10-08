function puedoVotar(edad) { //funcion con  parametro edad
  if (edad >= 18) { //condicion para verificar si la edad es mayor o igual a 18 
    return true;
  } else { //condicion para verificar si la edad es menor a 18
    return false;
  }
}
console.log(puedoVotar(17));
console.log(puedoVotar(19));
console.log(puedoVotar(18));

//justificacion: use una función con condicional if para verificar si una persona cumple la edad para votar