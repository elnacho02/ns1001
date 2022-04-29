import React from 'react';
import './App.css';
import { useState } from 'react';
import About from "./components/About"
import Cards from "./components/Cards";
import Cover from './components/Cover';
import NavBar from './components/NavBar';
import City from './components/City';
import CurrentContainer from './components/CurrentContainer';
import { Route } from 'react-router-dom';
import Swal from 'sweetalert2';

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
          wind: rec.wind.speed,
          temp: rec.main.temp,
          weather: rec.weather[0].main,
          clouds: rec.clouds.all,
          latitud: rec.coord.lat,
          longitud: rec.coord.lon
        };
        setCurrentCity(ciudad);
        if (!cities.some(item => item.name === ciudad.name)){
        setCities(cities=>[...cities, ciudad ])}
      }else{Swal.fire(
        'CIUDAD NO ENCONTRADA',
        'question'
      );
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
          wind: rec.wind.speed,
          temp: rec.main.temp,
          weather: rec.weather[0].main,
          clouds: rec.clouds.all,
          latitud: rec.coord.lat,
          longitud: rec.coord.lon
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
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } 
    else if (currentCity.id === parseInt(ciudadId)){
        return currentCity;
    }
  }
  
  
  
  return (
    <div className="App">
      <Route path="/" component={NavBar}  />
      {/* <Route exact path='/' render={() =>  <Cover city={currentCity} />}/> */}
      <Route exact path='/' render={() =>  <CurrentContainer city={currentCity} onClose={onCloseCurrent} onSearch={onSearch}/>}/>
      <Route exact path='/' render={() =>  <Cards cities={cities} onClose={onClose} currentId={currentCity.id}/>}/>
      <Route path='/about' component={About}/>
      <Route exact path='/ciudad/:ciudadId' 
             render={({match}) => (<City city={onFilter(match.params.ciudadId)}/>)}/>
    </div>
  );
}
