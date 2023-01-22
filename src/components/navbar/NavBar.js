//IMPORTACIONES

//Modulos
import { Link } from 'react-router-dom';
//Estilos
import './NavBar.css'
import CardWidget from '../cardWidget/CardWidget';

//LOGICA
const NavBar = (props) => { //Funcion constructora
    
    
    //Retorno que se va a renderizar
            return (
                <header className='header'>
                <a href="#a" className="logo">Tienda</a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><a href="#a"><CardWidget cantidad="10" /></a></li>
                </ul>
            </header>
)
}
          
//EXPORTACION
export default NavBar
