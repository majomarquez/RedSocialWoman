import React from 'react';
import {Link} from 'react-router-dom'
import  googleIcon from '../assets/images/google-icon.png'
import  twitterIcon from '../assets/images/twitter-icon.png'
import '../assets/styles/container/Login.scss'

const Login =() =>(
    <section class="login">
      <section class="login__container">
        <h2>Inicia sesión</h2>
        <form class="login__container--form">
          <input class="input" type="text" placeholder="Correo"/>
          <input class="input" type="current-password" placeholder="Contraseña"/>
          <button class="button">Iniciar sesión</button>
          <div class="login__container--remember-me">
            <label><input type="checkbox" id="cbox1" value="first_checkbox"/>Recuérdame</label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section class="login__container--social-media">
          <div><img src={googleIcon}/> Inicia sesión con Google</div>
          <div><img src={twitterIcon}/> Inicia sesión con Twitter</div>
        </section>
        <p class="login__container--register">No tienes ninguna cuenta </p>
        <Link to="/register">Regístrate</Link>
      </section>
    </section>
)
export default Login;