function puedoVotar(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(puedoVotar(17));
console.log(puedoVotar(19));
console.log(puedoVotar(18));