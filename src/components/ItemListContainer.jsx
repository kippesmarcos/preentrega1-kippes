import React, { useState } from 'react';

function ItemListContainer({ greeting, agregarAlCarrito }) {
  const [productos] = useState([
    { id: 1, nombre: "Manzana", precio: 1000 },
    { id: 2, nombre: "Banana", precio: 1200 },
    { id: 3, nombre: "Pera", precio: 1500 },
  ]);

  return (
    <div className="container">
      <h2>{greeting}</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
