function recomendar(genero){
    let salidaTexto = document.getElementById("salidaTexto")
    let inputEdad = document.getElementById("textoPrecio")
    let edad = inputEdad.value;
    switch (genero) {
        case 'drama':
            if (edad < 13) {
                salidaTexto.textContent = "Te recomendamos la pelicula de drama"
            } else{
                if(edad < 16){
                    salidaTexto.textContent = "Te recomendamos otra pelicula"

                }else{
                    salidaTexto.textContent = "Te recomendamos una de drama pa adultos"
                }
            }
            break;

        case 'comedia':
            if (edad < 13) {
                salidaTexto.textContent = "Te recomendamos la pelicula de comedia"
            } else{
                if(edad < 16){
                    salidaTexto.textContent = "Te recomendamos otra pelicula de comedia"

                }else{
                    salidaTexto.textContent = "Te recomendamos una de comedia pa adultos"
                }
            }
            break;

        case 'romance':
            if (edad < 13) {
                salidaTexto.textContent = "Te recomendamos la pelicula de romance"
            } else{
                if(edad < 16){
                    salidaTexto.textContent = "Te recomendamos otra pelicula de romance"

                }else{
                    salidaTexto.textContent = "Te recomendamos una de romance pa adultos"
                }
            }
            break;
        case 'sci-fi':
            if (edad < 13) {
                salidaTexto.textContent = "Te recomendamos la pelicula de ciencia ficcion"
            } else{
                if(edad < 16){
                    salidaTexto.textContent = "Te recomendamos otra pelicula de ciencia ficcion"

                }else{
                    salidaTexto.textContent = "Te recomendamos una de ciencia ficcion pa adultos"
                }
            }
            break;
    
        default:
            break;
    }
}