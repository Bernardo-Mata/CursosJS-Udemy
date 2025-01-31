import  React  from "react";
import styles from './cssModules/Juego.module.css';

function Juego(props){
    let [numeroUsuario, setNumeroUsuario] = React.useState(0);
    let [numeroMaquina, setNumeroMaquina] = React.useState(Math.floor(Math.random()*props.limite + 1));
    
    function comprobarNumeroUsuario(evento) {
        setNumeroUsuario(evento.target.value);

    }

    function comprobarNumeroMaquina() {
        if (numeroUsuario == numeroMaquina) {
            alert("adivinaste")

        }else{
            alert("intenta de nuevo, la respuesta correcta era: " + numeroMaquina);

        }
        setNumeroMaquina(Math.floor(Math.random() * props.limite + 1))
        }


    return (
        <div className={styles.container}>
            <p>Elije de un numero del 1 al 10</p>
            <input
                type="number"
                placeholder="ingresa tu apuesta"
                min={1}
                max={10}
                onChange={comprobarNumeroUsuario}
                className={styles.input}
            ></input>
            <br/>
            <button
                onClick={comprobarNumeroMaquina}
                className={styles.button}
            > Adivinar
            </button>
        </div>
    )
}

export default Juego;

