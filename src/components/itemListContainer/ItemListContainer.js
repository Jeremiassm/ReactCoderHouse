//IMPORTACIONES

//Modulos
//Estilos
import './ItemListContainer.css'

//LOGICA
const ItemListContainer = (props) => { //Funcion constructora
    
    //Retorno que se va a renderizar
    return(
       <p>
        Este es el component contenedor ItemListContainer {props.greeting}
       </p>

    )
}

//EXPORTACION
export default ItemListContainer