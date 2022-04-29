import React from 'react';
import "./SearchBar.css"
export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className="bar-container">
      <input type="text" placeholder="Ciudad..." />
      <button onClick={props.onSearch}>Buscar</button>
    </div>
  )
};