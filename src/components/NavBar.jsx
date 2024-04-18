import React, { useState } from 'react';
import CartWidget from './CartWidget';
import './css/NavBar.css';

const NavBar = () => {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto al carrito
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
        {/* Agregamos el componente CartWidget y le pasamos la cantidad de ítems en el carrito */}
        <li className="nav-item"><CartWidget cantidad={carrito.length} /></li>
      </ul>
    </nav>
  );
}

export default NavBar;
