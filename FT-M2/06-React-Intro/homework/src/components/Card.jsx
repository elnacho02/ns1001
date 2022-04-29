import React from 'react';
import "./Card.css";
export default function Card(props) {
  // acá va tu código
  return (
    <div className="main-container">
    <button  onClick={props.onClose}>X</button>
    <h2>{props.name}</h2>
    <div className="temp-container">
      <div >
        <h5>Min</h5>
        <p>{props.min}</p>
        
      </div>
      <div >
        <h5>Max</h5>
        <p>{props.max}</p>
        
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}/* src="http://openweathermap.org/img/wn/02d@2x.png"  */alt="" />
    </div>
  </div>
  )
};