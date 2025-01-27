function crearTiendas(contenedorID, min, cantidadTienda) {
    //encontrar contenedor por su id
    let elementoContenedor = document.getElementById(contenedorID);
    

    //loop para crear tantas tiendas como se pidan
    for(let conteoTiendas = 1; conteoTiendas <= cantidadTienda; conteoTiendas++){

        //crear el texto de label para poder llamar a la funcion
        let textoEtiqueta = "Tienda" + conteoTiendas;

        //crear Tiendas con crearParrafoTienda
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);

        //agregar el parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);

    }
}

function crearParrafoTienda(textoLabel, valorMin) {
    // crear etiquetas de parrafo
    let elementoParrafo = document.createElement('p')

    //crear etiqueta label
    let elementoEtiqueta = document.createElement('label');
    elementoEtiqueta.textContent = textoLabel + ": "; 

    //conectar con input
    elementoEtiqueta.setAttribute("for" , textoLabel)

    //crear el input
    let elementoInput = document.createElement('input')

    //establecer atributos de input
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textoLabel)
    elementoInput.setAttribute("min", valorMin)
    elementoInput.setAttribute("value", 0)

    //agregar label de input al parrago
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    //devolver el parrafo completo
    return elementoParrafo;
}


function extraerNumeroDesdeElemento(elemento) {
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);

    return miNumero;

}


function calcular() {
    let ventas = [];
    let posicionVentas = 0;
    let elementosVentas = document.getElementById("itemsTiendas")
    for(let item of elementosVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1])
        ventas[posicionVentas] = valorVenta;
        posicionVentas = posicionVentas+=1;        
    }
    console.log(ventas)

    // ventas[1] = estraerNumeroDesdeElemento("ventasTienda2");
    // ventas[2] = estraerNumeroDesdeElemento("ventasTienda3");
    // ventas[3] = estraerNumeroDesdeElemento("ventasTienda4");
    // ventas[4] = estraerNumeroDesdeElemento("ventasTienda5");
    // ventas[5] = estraerNumeroDesdeElemento("ventasTienda6");

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    let mensajeSalida = "Total Ventas: " + totalVentas + 
                        "   / Venta Mayor: " + ventaMayor + 
                        "   / Venta Menor: " + ventaMenor;
    let elementoSalida = document.getElementById("parrafoSalida")

    elementoSalida.textContent = mensajeSalida;
}


function sumarTotal(array) {
    let total = 0;
    for (let venta of array) {
        total = total + venta
    }
    return total
}


function calcularMayor(array) {
    let maximo = array [0];

    for (let venta of array) {
        if( venta > maximo){
            maximo = venta;
        }
    }
    return maximo
}


function calcularMenor(array) {
    let minimo = array[0];

    for (let venta of array) {
        if( venta < minimo){
            minimo = venta;
        }
    }
    return minimo
}

