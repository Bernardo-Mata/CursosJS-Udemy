class Animal {
    constructor(nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;

    }
    informacion() {
        
        return `${this.nombre} - ${this.peso} - ${this.edad} anios`

    }
}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad)
        this.raza = raza

    }
    informacion() {
        
        return `Perro: ${this.nombre} - ${this.peso} - ${this.edad} anios, su raza es ${this.raza}`

    }
}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad)
        this.sexo = sexo

    }
    informacion() {
        
        return `Gato: ${this.nombre} - ${this.peso} - ${this.edad} anios, su sexo es ${this.sexo}`

    }
}

class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad)
        this.color = color

    }
    informacion() {
        
        return `Conejo: ${this.nombre} - ${this.peso} - ${this.edad} anios, su color es ${this.color}`

    }
}

let perro = new Perro("Firulais", 15,3, "bulldog");
let gato = new Gato("Gaton", 10,2,"macho");
let conejo = new Conejo("Conejo", 4, 2, "azul")

let animales = [perro, gato, conejo];

function mostrarInformacion(){
    let div = document.getElementById("verMascotas");
    for (const animal of animales) {
        let li = document.createElement('li');
        li.textContent = animal.informacion();
        div.appendChild(li);
    }
}