function puedoVotar(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(puedoVotar(4));
console.log(puedoVotar(19));