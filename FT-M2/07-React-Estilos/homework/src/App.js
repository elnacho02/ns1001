import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';
import BackgroundImg from './components/BackgroundImg';
function App() {
  
  return (

    <div className="App">
      <div className="recent-card-container">
        <header>
          <h2>WEATHER APP</h2>
        </header>
        <BackgroundImg img={Cairns.weather[0].icon}/>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
      
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />
      <div className="last-div">
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
    </div>
  );
}

export default App;
