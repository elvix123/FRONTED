import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faWindows } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api'; // Importa las funciones del servicio API
import './LoginScreen.css';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para la navegación

  const handleLogin = async () => {
    try {
      const response = await loginUser(email, password);
      console.log('Login successful', response.data);
      // Redirigir al usuario a otra página después de iniciar sesión
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error.response?.data?.message || error.message);
    }
  };

  const handleSocialLogin = (provider) => {
    // Implementar la lógica de inicio de sesión social aquí
  };

  return (
    <div className="backgroundImage">
      <div className="container">
        <div className="textContainer">
          <h1 className="headerText">Ecommerce Inicia sesión o crea una cuenta</h1>
        </div>
        
        <div className="formContainer">
          <h2 className="title">Inicio de sesión</h2>

          <Link to="/createAccount" className="link">
            <span className="linkText">¿Eres un nuevo usuario? Crear una cuenta</span>
          </Link>

          <input
            className="input"
            type="text"
            placeholder="Correo electrónico"
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
            <button className="button" onClick={handleLogin}>
              Continuar
            </button>
          </div>

          <div className="separatorLine">
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
          </div>

          <div className="socialLogin">
            <button className="socialLoginButton" onClick={() => handleSocialLogin('google')}>
              <FontAwesomeIcon icon={faGoogle} className="socialLoginIcon" />
              <span className="socialLoginButtonText">Continuar con Google</span>
            </button>
            <button className="socialLoginButton" onClick={() => handleSocialLogin('facebook')}>
              <FontAwesomeIcon icon={faFacebook} className="socialLoginIcon" />
              <span className="socialLoginButtonText">Continuar con Facebook</span>
            </button>
            <button className="socialLoginButton" onClick={() => handleSocialLogin('microsoft')}>
              <FontAwesomeIcon icon={faWindows} className="socialLoginIcon" />
              <span className="socialLoginButtonText">Continuar con Microsoft</span>
            </button>
          </div>

          <button className="link" onClick={() => console.log('Obtener ayuda sobre cómo iniciar sesión')}>
            Obtener ayuda sobre cómo iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
