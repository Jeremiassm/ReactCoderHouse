//IMPORTACIONES

//Modulos
//Estilos
import './CardWidget.css'

//LOGICA
const CardWidget = (props) => { //Funcion constructora
    
    //Retorno que se va a renderizar
    return(
       <p>
        Icono carrito {props.cantidad}
       </p>

    )
}

//EXPORTACION
export default CardWidget