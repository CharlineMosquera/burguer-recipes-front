import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar: React.FC = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive); // Cambia el estado del menú
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">API Burguer</div>
            {/* Icono de menú hamburguesa */}
            <div className="menu-icon" onClick={toggleMenu}>
                &#9776; {/* Este es el ícono de hamburguesa */}
            </div>
            <div className={`navbar-links ${menuActive ? "active" : ""}`}>
                <Link to="/">Inicio</Link>
                <Link to="/add-recipe">Añadir Receta</Link>
                <Link to="/favorites">Favoritas</Link>
                <Link to="/users">Usuario</Link>
                <Link to="/register-user">Registrarse</Link>
            </div>
        </nav>
    );
};

export default Navbar;
