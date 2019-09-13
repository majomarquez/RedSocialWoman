import React from 'react';
import{ Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import userIcon from '../assets/images/user-icon.png';
import { Container, Row, Col } from 'reactstrap';

// Este componente solo sirve para mostrar

const Header =() => {
  return (
    <Container>
      <Row>
        <header className="header">
          <Col xs="2">
            <Link to="/"><h6 className="Logo">WM</h6> </Link>
          </Col>
          <Col xs="7">
            <h1 className="titulo">Woman for Woman</h1>
            <h2 className="titulo-a">Recuperando el Camino</h2>
          </Col>
          <Col xs="3">
            <div className="header__menu">
              <div className="header__menu--profile">
                <img src={userIcon} alt="user"/>
                <p>Perfil</p>
              </div>
              <ul>
                <li><a href="/">Cuenta</a></li>
                <Link to='Login'>Iniciar Sesión</Link>
              </ul>
            </div>
          </Col>
        </header>
      </Row>
    </Container>
  )
};



export default Header;
