import React from 'react';
import s from "./City.module.css";
import "./Cover.css"
import CoverCity from './CoverCity';
function City(props) {
    return (
        <div>
        <CoverCity img={props.city.img}/>
        <div className={s.container}>
            
            <div className={s.mainCard}>
                <h2>{props.city.name}</h2>
                <hr />
                <div className={s.datos}>
                    <h5>Temperatura: {props.city.temp}°</h5>
                    <h5>Clima: {props.city.weather}</h5>
                    <h5>Viento: {props.city.wind} ms/s</h5>
                    <h5>Nubosidad: {props.city.clouds}</h5>
                </div>
            </div>
        </div>
        </div>
    )
};

export default City
