const coche = {
    marca: "Toyota",                    //esto es lo mismo que el ejercicio 15 por eso no lo comento
    modelo: "Corolla",
    año: 2020,                      
    info: function() {
        return `${this.marca} ${this.modelo} (${this.año})`;
    }
};

const { marca, año }  = coche; //llamamos las propiedades marca y año 
console.log(marca); //mostramos marca
console.log(año); //mostramos año

/*justificacion: const { marca, año }  = coche; esto basicamente es llamar propiedades de un objeto
y mostrarlas en consola con, console.log(marca); y esto es el destructuring*/