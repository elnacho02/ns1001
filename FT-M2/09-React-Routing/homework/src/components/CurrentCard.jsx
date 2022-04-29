import React from 'react';
import  { useState } from 'react';
import Card from "./Card";
import Loader from './Loader';



function CurrentCard(props) {
const elem = props.city;
var flag = props.flag;
if(typeof elem.id === "number")flag=true;
if(flag===true){
    return (
        <div className="currentCard-container">
            <Card
              max={elem.max}
              min={elem.min}
              name={elem.name}
              img={elem.img}
              onClose={() => props.onClose()}
              id={elem.id}  
            />
        </div>
    )}
if(flag===false){
    return(
        <div>
            <Loader />
        </div>
    )
}

}

export default CurrentCard
