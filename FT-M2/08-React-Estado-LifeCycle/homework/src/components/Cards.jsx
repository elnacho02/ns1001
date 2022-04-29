import React from 'react';
import s from'./Cards.module.css';
import Card from './Card.jsx';
import App from '../App';
import CurrentCard from './CurrentCard';

export default function Cards(props) {
  if(props.cities){
    return (
      <div className={s.Cards_container}>
        {props.cities.map(elem =>{
          if(elem.id === props.currentId)return null;
          return(<Card
            max={elem.max}
            min={elem.min}
            name={elem.name}
            img={elem.img}
            onClose={() => props.onClose(elem.id)}
            id={elem.id}
          />)
        } )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
