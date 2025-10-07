const nombres = ["ana","luis","pedro","sol","andres"];

const resultado = nombres.filter(nombre => {
    return nombre.length > 4 && nombre.includes("a");
});
console.log(resultado);