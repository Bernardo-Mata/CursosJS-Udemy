let banco;
let sucursal;
let titular;
let nro_cuenta;
let saldo;
let cbu;
let abierto;

//Zona de promesas
function obtenerInformacion() {
    fetch('datos.json')
    .then(respuesta => respuesta.json())
    .then((respuesta) => {
        banco = respuesta.banco;
        sucursal = respuesta.sucursal;
        titular = respuesta.titular;
        nro_cuenta = respuesta.nro_cuenta;
        saldo = respuesta.saldo;
        cbu = respuesta.cbu;
        abierto = respuesta.abierto;
        
        let informacion = [banco, sucursal, titular, nro_cuenta,saldo,cbu,abierto]



        let div = document.getElementById("elemento");
        for (let info of informacion) {
            let li = document.createElement('li');
            li.textContent = info
            div.appendChild(li);
        }
        
    })
    .catch((e)=> alert(e)) 
}
