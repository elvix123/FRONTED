import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './pages/Login';
import WelcomeScreen from './pages/welcomeScreen';
import CreateAccountScreen from './pages/createAccount';
import CreateAccount from './pages/createAccount_parte02';
import CartPage from './pages/cartPage';

function App() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<WelcomeScreen/>} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/createAccount" element={<CreateAccountScreen/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
