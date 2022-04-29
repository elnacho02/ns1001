import React from 'react';
import s from'./Card.module.css';

export default function Card (props){
    return (
      <div className={s.main_container}>
      <button  onClick={props.onClose}>X</button>
      <h2>{props.name}</h2>
      <div className={s.temp_container}>
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
    );
};
