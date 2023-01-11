import {CartWidget} from "./CartWidget"
import {NavLink, Link} from 'react-router-dom';


export function NavBar(){
    const logo = "https://res.cloudinary.com/dcztoeaxw/image/upload/v1673477400/img/logoo_k6eyex.png";
    return (
        <nav className="nav">
            <div className="logoYtitulo">
                <Link to="/"><img className="logo" src={logo} alt="Logo de Homero"/></Link>
                <Link to="/"><h2 className="titulo">Zapatillas Homero</h2></Link>
            </div>

            <ul className="btn-container">
                <li className="btn">
                    <NavLink to="/categoria/adiddas">Adiddas</NavLink>
                </li>
                <li className="btn">
                    <NavLink to="/categoria/nike">Nike</NavLink> 
                </li>
                <li className="btn">
                    <NavLink to="/categoria/puma">Puma</NavLink> 
                </li>
            </ul>
        
            <Link to= "/carrito">
                <CartWidget/>
            </Link>
        </nav>
    )
}