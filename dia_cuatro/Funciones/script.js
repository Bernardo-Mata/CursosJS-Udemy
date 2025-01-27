        function sumar(numero1, numero2) {
            resultado = +numero1 + + numero2
            return resultado
        }


        function mostrarResultado() {
            let elemento1 = document.getElementById("primerNumero")
            let elemento2 = document.getElementById("segundoNumero")
            let elementoTexto = document.getElementById("textoResultado")
            let elementoSuma = sumar(elemento1.value, elemento2.value)

            elementoTexto.textContent = elementoSuma
        }