let Automovil = function (modelo, color, anio, titular) {
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

Auto1 = new Automovil("Audi", "negro" , 1995, "Bernardo");
Auto2 = new Automovil("BMW", "Azul" , 2005, "Luis");
Auto3 = new Automovil("Tesla", "blanco" , 2023, "Gustavo");
Autos = [Auto1, Auto2, Auto3]

Automovil.prototype.venderAutomovil = function (N_titular) {
 Automovil.prototype.titular = N_titular;   
}

Automovil.prototype.verAuto = function () {
    return `${this.modelo} - ${this.anio} - ${this.titular}`
}

Automovil.prototype.encender = function () {
     alert("El automovil esta en marcha")
}
function mostrarAuto() {
    let lista = document.getElementById('listaAutomovil')
    for (let auto of Autos) {
        let item = document.createElement('li');
        item.innerText = auto.verAuto();
        lista.appendChild(item)
    }
}