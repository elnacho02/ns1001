import React from 'react';
import s from './SearchBar.module.css';
export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={s.bar_container}>
      <input type="text" placeholder="Ciudad..." />
      <button onClick={props.onSearch}>Agregar</button>
    </div>
  )
};