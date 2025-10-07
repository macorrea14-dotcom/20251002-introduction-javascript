const personas = [
    {nombre: "sofia", edad: 18},
    {nombre: "juan", edad: 60},
    {nombre: "pedro", edad: 27},
    {nombre: "evelio", edad: 50},
    {nombre: "sergio", edad: 30}
];

for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad >= 30){
        console.log(personas[i]);
        break;
    }
}