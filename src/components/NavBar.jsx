import React, { useState } from 'react';
import CartWidget from './CartWidget';
import './css/NavBar.css';

const NavBar = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#">Inicio</a></li>
        <li className="nav-item"><a href="#">Acerca de</a></li>
        <li className="nav-item"><a href="#">Servicios</a></li>
        <li className="nav-item"><a href="#">Contacto</a></li>
        <li className="nav-item"><CartWidget cantidad={carrito.length} /></li>
      </ul>
    </nav>
  );
}

export default NavBar;
