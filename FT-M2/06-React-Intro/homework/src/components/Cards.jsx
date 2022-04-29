import React from 'react';
import Card from './Card';
import "./Cards.css";
export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className="Cards-container">
       {props.cities.map(elem =>(
        <Card 
          min = {elem.main.temp_min}
          max = {elem.main.temp_max}
          name = {elem.name}
          img = {elem.weather[0].icon}
          onClose = {()=>alert(elem.name)}
          />
        ))}
    </div>
  )
};