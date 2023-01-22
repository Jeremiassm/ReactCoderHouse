//IMPORTACIONES

//Modulos
//Estilos
import './NavBar.css'
import CardWidget from '../cardWidget/CardWidget';

//LOGICA
const NavBar = (props) => { //Funcion constructora
    
    
    //Retorno que se va a renderizar
    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">Tienda</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Categorias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#"> <CardWidget cantidad ="10"/> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>

    )
}

//EXPORTACION
export default NavBar