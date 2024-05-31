import React, { useState } from 'react';
import { registerUser } from '../services/api'; // Importa la función de registro de usuario desde el servicio API
import './createAccount.css';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await registerUser(name, email, password); // Llama a la función de registro de usuario
      console.log('Registro exitoso:', response.data);
      // Redirigir al usuario a otra página después del registro exitoso
      // navigation.navigate('OtraPágina'); // Utiliza la navegación según la biblioteca que estés utilizando
    } catch (error) {
      console.error('Error en el registro:', error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="backgroundImage">
      <div className="container">
        <div className="textContainer">
          <h1 className="headerText">Ecommerce Inicia sesión o crea una cuenta</h1>
        </div>
        <div className="formContainer">
          <p className="stepText">Paso 1 de 2</p>
          <h2 className="title">Crear una cuenta</h2>

          <input
            className="input"
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="input"
            type="text"
            placeholder="Dirección de correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="buttonContainer">
            <button className="button" onClick={handleSignUp}>
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
