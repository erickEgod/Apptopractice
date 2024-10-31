import IconButton from '@mui/material/IconButton';
import StyledBadge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import "./NavBar.css"
import logoImage from "../../assets/favicon2.icon.png"

export const NavBar = () => {
    const { productsState } = useContext(CarritoContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/" className="navbar-brand titulo-decorate" href="#">
            <img src={logoImage} alt="Logo" className="logo-image" />
            AppSorteos</NavLink>
            <NavLink to="/" className="navbar-brand brand-margin" href="#">Sorteo</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink to="/about" className="nav-link" href="#">Acerca de nosotros</NavLink>
                    </li>
                </ul>
            </div>
            
            <NavLink to="/" className="navbar-brand registrar" href="#"><u>Registrarse</u></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink to="/" className="navbar-brand ingresar" href="#">Ingresar</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    )
}
