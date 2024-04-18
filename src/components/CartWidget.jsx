import React from 'react';

const CartWidget = ({ cantidad }) => {
  return (
    <div className="cart-widget">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-shopping-cart"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 10.72a2 2 0 0 0 2 1.28h8a2 2 0 0 0 2-1.28L23 6H6"></path>
      </svg>
      {/* Mostrar la cantidad de ítems en el carrito */}
      <span className="cart-count">{cantidad}</span>
    </div>
  );
}

export default CartWidget;
