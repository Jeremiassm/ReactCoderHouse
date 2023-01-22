//IMPORTACIONES

//Modulos
import { useState, useEffect} from 'react'

//Estilos
import './ItemList.css'

//Componentes
import Item from '../item/Item'

//LOGICA
const ItemList = (props) => { //Funcion constructora

    const [productos,setProductos] = useState([])
    

    useEffect(()=>{
    fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then(json=> setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data ={productos}/>)))
    
    },[])


    
    //Iterar nuestro array de objetos


    //Mostrar todos los objetos
    
    return(

        <div>
            {productos}
        </div>
    )

}

//EXPORTACION
export default ItemList