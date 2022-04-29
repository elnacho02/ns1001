import React from 'react';
import './App.css';
import BackgroundImg from "./components/BackgroundImg";
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import Cards from "./components/Cards";
import Card from './components/Card';
import CurrentCard from './components/CurrentCard';
import Cover from './components/Cover';
import NavBar from './components/NavBar';

export default function App() {
  
  const [cities, setCities] = useState([]);
  const apiK = "59096b27e252638ce3fa6295e56f2b28";
  const [currentCity, setCurrentCity] = useState("");
  
  const onSearch=(ciudad)=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiK}&units=metric`)
    .then(r=> r.json())
    .then((rec)=>{
      if(rec.main !== undefined){
        const ciudad = {
          min: Math.round(rec.main.temp_min),
          max: Math.round(rec.main.temp_max),
          img: rec.weather[0].icon,
          id: rec.id,
          name: rec.name,
        };
        setCurrentCity(ciudad);
        setCities(cities=>[...cities, ciudad])

        
        
      }else{alert("Ciudad no encontrada");
      }
    })
  }
  var [flag, setFlag]=useState(true);
  const onSearch2=(ciudad)=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiK}&units=metric`)
    .then(r=> r.json())
    .then((rec)=>{
      if(rec.main !== undefined){
        const ciudad = {
          min: Math.round(rec.main.temp_min),
          max: Math.round(rec.main.temp_max),
          img: rec.weather[0].icon,
          id: rec.id,
          name: rec.name,
        };
        setFlag(false)
        setCities(cities=>[...cities, ciudad])
      }
    })
  }
  
  if(flag===true){
    onSearch2("Tucumán");
  }
  const onCloseCurrent = ()=>{
    setCurrentCity([])
  }
  const onClose = (id)=>{
    setCities(oldCities=> oldCities.filter(c=> c.id !== id));
  }
  return (
      
      <div className="App">
        <NavBar />
        <div className="recent-card-container">
          {/* <header>
            <h2>WEATHER APP</h2>
          </header> */}
          <div className="last-div">
              <SearchBar onSearch={onSearch}/>
          </div>
          
          <BackgroundImg city={currentCity}/>
          <CurrentCard city={currentCity} flag={false} onClose={onCloseCurrent}/>
          </div>
          <Cover cities={cities} city={currentCity}/>  
      <div>
        <Cards cities={cities} onClose={onClose} currentId={currentCity.id}/>
      </div>
      
    </div>
  );
}
