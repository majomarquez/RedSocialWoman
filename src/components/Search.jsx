import React from 'react';
import '../assets/styles/components/Search.scss';
// Este componente solo sirve para mostrar

const Search =() => {
    return (
      <section className="main">
      <h2 className="main__title">¿Qué quieres hacer hoy?</h2>
      <input type="text"className="input" placeholder="Buscar..."/>
    </section>
    )
};



export default Search;