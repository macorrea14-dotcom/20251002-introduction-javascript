const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    info: function() {
        return `${this.marca} ${this.modelo} (${this.año})`;
    }
};
console.log(coche.info());