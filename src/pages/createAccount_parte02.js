import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons'; // Importar iconos de FontAwesome
import './createAccount_parte02.css'; // Asegúrate de importar el archivo de estilos CSS correspondiente

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setIsSelected] = useState(false); // Se agrega el estado para el checkbox

  const handleSignUp = () => {
    // Implementar la lógica de creación de cuenta aquí
  };

  return (
    <div className="backgroundImage">
      <div className="container">
        <div className="textContainer">
          <h1 className="headerText">Ecommerce Inicia sesión o crea una cuenta</h1>
        </div>
        <div className="formContainer">
          <p className="stepText">Paso 2 de 2</p>
          <h1 className="title">Crear una cuenta</h1>

          <p className="registerWithEmail">Registrarse con el correo electrónico</p>

          <button className="link" onClick={() => navigation.navigate('Login')}>
            <span className="linkText">¿Ya tienes una cuenta? Inicia sesión</span>
          </button>

          {/* Campos de nombres y apellidos */}
          <div className="horizontalContainer">
            <input
              className="input"
              placeholder="Nombres"
            />
            <input
              className="input"
              placeholder="Apellidos"
            />
          </div>

          {/* Campo de fecha de nacimiento */}
          <div className="dateContainer">
            {/* Opción de mes desplegable */}
            <div className="input dateInput">
              {/* Aquí se mostrarían los meses desplegables */}
              {/* Puedes implementar esto usando un componente de lista desplegable o modal */}
              {/* Por simplicidad, solo dejé un TextInput */}
              <input placeholder="Mes" />
            </div>
            {/* Opción de año */}
            <input
              className="input"
              placeholder="Año"
            />
          </div>

          {/* Campo de país/región */}
          <div className="input">
            {/* Aquí se mostrarían los países desplegables */}
            {/* Puedes implementar esto usando un componente de lista desplegable o modal */}
            {/* Por simplicidad, solo dejé un TextInput */}
            <input placeholder="País/Región" />
          </div>

          {/* Opción de recibir correos electrónicos */}
          <p className="termsText">Grupo de empresas de Ecommerce puede mantenerme al día con correos electrónicos personalizados sobre productos y servicios. Consulta nuestra Política de privacidad para conocer más detalles o darte de baja en cualquier momento.</p>

          {/* Checkbox para confirmar la opción de recibir correos electrónicos */}
          <div className="checkBoxContainer">
            <FontAwesomeIcon
              icon={isSelected ? faCheckSquare : faSquare}
              size="lg"
              color={isSelected ? '#007bff' : '#aaa'}
              onClick={() => setIsSelected(!isSelected)}
              style={{ marginRight: 10 }}
            />
            <span className="checkBoxText">Deseo que me contacten por correo electrónico</span>
          </div>

          {/* Texto de aceptación de términos y condiciones */}
          <p className="termsText">Al hacer clic en Crear cuenta, reconozco que he leído y aceptado las Condiciones de uso y la Política de privacidad.</p>

          {/* Botón de continuar */}
          <div className="buttonContainer">
            <button className="button" onClick={handleSignUp}>
              <span className="buttonText">Continuar</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
