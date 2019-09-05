import React from 'react';
import{ Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/images/logo.png';
import userIcon from '../assets/images/user-icon.png';

// Este componente solo sirve para mostrar

const Header =() => {
    return (
        <header className="header">
          <Link to="/">
            <img className="header__img" src={logo} alt="logo"/>
          </Link>
        <h1 className="titulo">Woman for Woman</h1>
        <h2 className="titulo-a">Recuperando el Camino</h2>
        <div className="header__menu">
          <div className="header__menu--profile">
            <img src={userIcon} alt="user"/>
            <p>Perfil</p>
          </div>
          <ul>
            <li><a href="/">Cuenta</a></li>
            <Link to='Login'>
            Iniciar Sesión
            </Link>
          </ul>
        </div>
      </header>    )
};



export default Header;
