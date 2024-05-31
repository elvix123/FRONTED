import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { getCurrentUser, logoutUser, getProducts, addToCart, getCartItems } from '../services/api';
import './welcomeScreen.css';

const WelcomeScreen = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getCurrentUser();
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
        setUser(null);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const fetchCartItems = async () => {
      try {
        const response = await getCartItems();
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchUser();
    fetchProducts();
    fetchCartItems();
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
      setUser(null);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const addToCartHandler = async (productId) => {
    try {
      await addToCart(user.id, productId, 1, null); // Se asume que la cantidad es 1 y no se utiliza cupón
      const updatedCart = await getCartItems();
      setCart(updatedCart.data);
      alert('Producto agregado al carrito exitosamente.');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Ocurrió un error al agregar el producto al carrito.');
    }
  };

  return (
    <div className="welcome-screen">
      <header className="header">
        <h1 className="project-name">Ecommerce</h1>
        <div className="button-group">
          {user ? (
            <div className="user-menu">
              <button className="user-name-button" onClick={toggleMenu}>
                {user.name}
              </button>
              {isMenuOpen && (
                <div className="dropdown-menu">
                  <button className="dropdown-item" onClick={handleLogout}>
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="button">
                <FontAwesomeIcon icon={faSignInAlt} className="icon" />
                Iniciar Sesión
              </Link>
              <Link to="/createAccount" className="button">
                <FontAwesomeIcon icon={faUserPlus} className="icon" />
                Registrarse
              </Link>
            </>
          )}
          {/* Botón de carrito */}
          {user && (
            <Link to="/cart" className="button">
              <FontAwesomeIcon icon={faShoppingCart} className="icon" />
              Carrito
            </Link>
          )}
        </div>
      </header>
      <main className="main-content">
        <h2>Bienvenido a Ecommerce</h2>
        <div className="products-container">
          {products.map((product) => (
            <div key={product.idProduct} className="product-card">
              <img src={product.imageURL} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Precio: ${product.price}</p>
              {/* Botón para agregar al carrito */}
              {user && (
                <button className="add-to-cart-button" onClick={() => addToCartHandler(product.idProduct)}>
                  Agregar al carrito
                </button>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default WelcomeScreen;
