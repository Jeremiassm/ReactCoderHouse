//IMPORTACIONES

//Modulos
import { useState } from 'react'
//Estilos
import './ItemListContainer.css'

//Componentes
//import Hooks from '../hooks/Hooks.js'
import ItemList from '../itemList/ItemList'
//Core

//LOGICA
const ItemListContainer = () => { //Funcion constructora

    const [categoria,setCategoria] = useState("all")

    const categoriaPcs =() =>{
        setCategoria("Pcs")
    }
    const categoriaProcesadores =() =>{
        setCategoria("Procesadores")
    }
    const categoriaFuentesDePoder =() =>{
        setCategoria("Fuentes de poder")
    }
    const categoriaPlacasDeVideo =() =>{
        setCategoria("Placas de video")
    }
    const categoriaAll =() =>{
        setCategoria("all")
    }
    //Retorno que se va a renderizar
    return(
        <div className='main-section'>
        <p>Item list container</p>
        <button onClick={categoriaPcs}> Pcs</button>
        <button onClick={categoriaProcesadores}> Procesadores</button>
        <button onClick={categoriaFuentesDePoder}> Fuentes de poder</button>
        <button onClick={categoriaPlacasDeVideo}> Placas de video</button>
        <button onClick={categoriaAll}> Todo</button>

        <div>
                <h1>Banner publicitario</h1>
        </div>
        <ItemList categoriaName={categoria}/>
        </div>

    )
}

//EXPORTACION
export default ItemListContainer