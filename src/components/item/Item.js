//IMPORTACIONES

//Modulos
/* import { useState } from 'react' */

//Componentes
import ItemCount from '../itemCount/ItemCount'

//Estilos
import './Item.css'

//LOGICA
const Item = (props) => { //Funcion constructora

    const {nombre,descripcion, categoria, precio, stock} = props.data
    
    return(
        <div>
            <p>{categoria}</p>
            <p>{nombre}</p>
            <p>{descripcion}</p>
            <p>{precio}</p>
            <ItemCount stock={stock}/>
        </div>
        
    )
   
    
}

//EXPORTACION
export default Item