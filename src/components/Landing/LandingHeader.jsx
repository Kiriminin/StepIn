// src/components/LandingHeader.jsx
import React, { useState } from 'react';
import './LandingHeader.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';



function LandingHeader() {
    // Локальное состояние для управления открытием/закрытием бургер-меню
  const [menuOpen] = useState(false);

  return (
    <header className="header">
     <div className="header__container"> 

            {/* Логотип, кликабелен и ведёт на главную страницу */}
      <div className="header__logo">
        <NavLink to="/">
         <img src={Logo} alt="StepIn Logo" className="header_logo-img" />
        </NavLink>
    </div>

               {/* Кнопки авторизации и регистрации */}
        <div className="header__auth-buttons">
          <NavLink to="/signin" className="header__login-btn">
          Sign In
          </NavLink>
          <NavLink to="/signup" className="header__signup-btn">
          Sign Up
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default LandingHeader;