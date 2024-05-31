// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000', // Asegúrate de que este sea el URL correcto de tu API
  withCredentials: true, // Esto permite que las cookies se envíen con cada solicitud
});

export const loginUser = async (email, password) => {
  return await api.post('api/users/login', { email, password });
};

export const registerUser = async (name, email, password) => {
  return await api.post('api/users/register', { name, email, password });
};

export const getCurrentUser = async () => {
  return await api.get('api/users/me');
};

export const logoutUser = async () => {
  return await api.post('api/users/logout');
};

export const getUsers = async () => {
  return await api.get('api/users');
};

export const getProducts = async () => {
    return await api.get('api/products');
  };


// Funciones para interactuar con el carrit
export const addToCart = async (idUser, idProduct, quantity, idCoupon) => {
    return await api.post('api/carts', { idUser, idProduct, quantity, idCoupon });
  };
  
  export const removeFromCart = async (idCart) => {
    return await api.delete(`api/carts/${idCart}`);
  };
  
  export const updateCartItem = async (idCart, idUser, idProduct, quantity, idCoupon) => {
    return await api.put(`api/carts/${idCart}`, { idUser, idProduct, quantity, idCoupon });
  };
  
  export const getCartItems = async () => {
    return await api.get('api/carts');
  };