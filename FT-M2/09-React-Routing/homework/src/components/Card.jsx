import React from 'react';
import s from'./Card.module.css';
import Cover from './Cover';
import { NavLink } from "react-router-dom";

export default function Card (props){
    return (
      <div>
        <Cover img={props.img}/>
        <div className={s.main_container}>
      
          <button  onClick={props.onClose} className="btn btn-sm btn-danger">X</button>
        
          <NavLink to={`/ciudad/${props.id}` }className={s.name}><h2 >{props.name}</h2></NavLink>
        
          <div className={s.temp_container}>
            <div >
              <h5 className={s.h5Con}>Min</h5>
              <p className={s.pCon}>{props.min}</p>
            
            </div>
            <div >
              <h5 className={s.h5Con}>Max</h5>
              <p className={s.pCon}>{props.max}</p>
              
            </div>
            <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}/* src="http://openweathermap.org/img/wn/02d@2x.png"  */alt="" />
          </div>
      </div>
    </div>
    );
};
