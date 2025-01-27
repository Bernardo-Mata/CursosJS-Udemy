
let miSelect = document.getElementById('miSelect');
let myInput = document.getElementById('myInput');
let boton = document.getElementById('boton');
let lista = document.getElementById('lista')

let archivo = 'peliculas.json';

//EVENTOS
miSelect.addEventListener('change', cambiarArchivo);
miSelect.addEventListener('cambioModo', mensajeModo);
myInput.addEventListener('keydown', verificarInput);
boton.addEventListener('click',buscar )



//funciones
function cambiarArchivo() {
    archivo = miSelect.value;  
    let evento = new CustomEvent('cambioModo')
    miSelect.dispatchEvent(evento);
}
function mensajeModo() {
    alert('haz cambiado al archivo: ' + miSelect.value)
}

function verificarInput(evento){
    if((evento.key < 65 || evento.key > 90) && evento.key != 32 && evento.key != 8){
        evento.preventDefault();
    }
}

function buscar() {
    
    lista.innerHTML = '';
    fetch(archivo)
    .then(response => response.json())
    .then((salida) =>{
        for (let pelicula of salida) {
            if(pelicula.nombre.startsWith(myInput.value.toUpperCase())){
                let p = document.createElement('p')
                p.id = pelicula.nombre;
                p.innerHTML = pelicula.nombre;
                p.style.display = 'none';

                let li = document.createElement('li');
                li.innerHTML = pelicula.autor;
                li.addEventListener('mouseover', function () {
                    let p = document.getElementById(pelicula.nombre);
                    p.style.display = 'block'
                })

                li.addEventListener('mouseout', function () {
                    let p = document.getElementById(pelicula.nombre);
                    p.style.display = 'none';
                });


                li.appendChild(p);
                lista.appendChild(li)
            }
        }
    }).catch(e => alert(e))
}