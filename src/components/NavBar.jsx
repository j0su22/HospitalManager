import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/account">Account</Link>
                </li>
                <li>
                    <Link to="/diseases">Enfermedades</Link>
                </li>
                <li>
                    <Link to="/cases">Ver casos</Link>
                </li>
                <li>
                    <Link to="/hospitals">Ver hospitales</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;