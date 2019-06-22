import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../Assets/images/logo.png';

import "./style.css"

export default function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">
            <img src={Logo} />
        </Link>
        
        <ul>
            <li> 
                <Link to="/cadastro">Cadastro</Link>
            </li>
            <li>
                <Link to="/categoria">Categoria</Link>
            </li>
        </ul>

    </nav>
  );
}

