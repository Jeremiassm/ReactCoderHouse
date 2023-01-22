//IMPORTACIONES

//Modulos
//Estilos
import './ItemListContainer.css'

//Componentes
//import Hooks from '../hooks/Hooks.js'
import Item from '../item/Item'
import ItemCount from '../itemCount/ItemCount'
import ItemList from '../itemList/ItemList'
//Core

//LOGICA
const ItemListContainer = () => { //Funcion constructora

    //Retorno que se va a renderizar
    return(
        <div className='main-section'>
        <p>Item list container</p>
        <ItemCount stock ="7"></ItemCount>
        <ItemList/>
        </div>

    )
}

//EXPORTACION
export default ItemListContainer