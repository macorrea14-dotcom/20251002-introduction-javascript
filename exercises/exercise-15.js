const coche = { //objeto coche
    marca: "Toyota", //marquita
    modelo: "Corolla", //moodelito
    año: 2020, //año
    info: function() { //metodo info para retornar la informacion del coche
        return `${this.marca} ${this.modelo} (${this.año})`; //usamos this para acceder a las propiedades del objeto
    }
};
console.log(coche.info());

//justificacion: use un objeto con propiedades y un método para mostrar su información completa