//IMPORTACIONES

//Modulos
//Estilos
import './ItemListContainer.css'

//Componentes
//import Hooks from '../hooks/Hooks.js'
import ItemList from '../itemList/ItemList'
//Core

//LOGICA
const ItemListContainer = (props) => { //Funcion constructora


    //Retorno que se va a renderizar
    return(
        <div className='main-section'>
        <p>{props.greeting}</p>

        <div>
            <h1>BANER PUBLICITARIO</h1>
        </div>
        <ItemList />
    </div>
    

    )
}

//EXPORTACION
export default ItemListContainer