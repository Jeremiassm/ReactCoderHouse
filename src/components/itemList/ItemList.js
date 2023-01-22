//IMPORTACIONES

//Modulos

//Estilos
import './ItemList.css'

//Componentes
import Item from '../item/Item'

//LOGICA
const ItemList = (props) => { //Funcion constructora

    //Llamada a array de objetos
    const listaDeProductos = [
        {
            id:1,
            nombre:"Pc de escritorio 1",
            descripcion:"Pc completa",
            precio:160000,
            categoria:"Pcs",
            stock:2,
        },
        {
            id:2,
            nombre:"Procesador intel i5 13600k",
            descripcion:"Procesador intel i5 de 13va generación",
            precio:60000,
            categoria:"Procesadores",
            stock:5,
        },
        {
            id:3,
            nombre:"Nvidia 4080",
            descripcion:"Placa de video Nvidia 4080",
            precio:450000,
            categoria:"Placas de video",
            stock:3,
        },
        {
            id:4,
            nombre:"Fuente Themarltake 800w",
            descripcion:"Fuente Themarltake 800w calidad 80+ gold",
            precio:45000,
            categoria:"Fuentes de poder",
            stock:8,
        },
    ]
    //Transformar estos datos en elementos renderizables
    
    let productosRenderizables=[]
    
    if(props.categoriaName === "all"){
        productosRenderizables = listaDeProductos.map( productos => <Item key={productos.id} id={"producto" + productos.id} data ={productos}/>)
    }
        const productosPorCategoria = listaDeProductos.filter(e=> e.categoria === props.categoriaName)
        productosRenderizables = productosPorCategoria.map( productos => <Item key={productos.id} id={"producto" + productos.id} data ={productos}/>)


    //Iterar nuestro array de objetos


    //Mostrar todos los objetos
    
    return(

        <div>
            <p>Este es el item List</p>
            {productosRenderizables}
        </div>
    )

}

//EXPORTACION
export default ItemList