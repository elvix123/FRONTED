import React, { useState, useEffect } from 'react';
import { getCartItems } from '../services/api'; // Importa la función getCartItems desde tu archivo api.js

const CartComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Realiza la solicitud GET para obtener los datos del carrito del usuario actual
    getCartItems()
      .then(response => {
        setCartItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <div>
        {cartItems.map(item => (
          <div key={item.idCart}>
            <p>Nombre del producto: {item.Product.name}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.Product.price}</p>
            {/* Aquí puedes mostrar otros detalles del producto si es necesario */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartComponent;
