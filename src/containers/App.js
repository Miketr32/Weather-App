import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';
import './App.scss';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import arrow from '../img/arrow1.gif'



const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  const [indicador, setIndicador] = useState(false);

  function cambio() {
    return setIndicador(true);
  }
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&units=metric&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            pressure: recurso.main.pressure,
            humidity: recurso.main.humidity,
            name: recurso.name,
            weather: recurso.weather[0].description,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            country: recurso.sys.country
          };
        let ciudadEncontrada = cities.find(city => city.id === ciudad.id);
        fetch(`https://restcountries.com/v3.1/alpha/${ciudad.country}`)
        .then(l => l.json())
        .then((bandera) => {
          const encontrado = bandera[0].flags.png
          if(encontrado !== 0 && !ciudadEncontrada) {
            ciudad.flag = encontrado;
            return setCities(oldCities => [...oldCities, ciudad])
          }
        })
        if(ciudadEncontrada) return alert("Esta ciudad ya está en la lista");
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  if(indicador === true){
  return (
    <div className="App">
    <Nav onSearch={onSearch}/>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <Routes>
    <Route exact path="/" element= {<Cards cities={cities} onClose={onClose} />}/>
    <Route exact path="/about" element={<About/>}/> 
    <Route exact path="/ciudad/:ciudadId" element={<Ciudad onFilter={onFilter}/>}/>
    </Routes>

    </div>
  );
  }
  else{
    return(
    <div onClick={cambio}>
    <Nav onSearch={onSearch}/>
    <div className='indicador'>
      <img src={arrow} alt='arrow' className='flecha'/>
      <h3>Comencemos por aqui!</h3>
    </div>
    <div className="Appex">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <Routes>
    <Route exact path="/" element= {<Cards cities={cities} onClose={onClose} />}/>
    <Route exact path="/about" element={<About/>}/> 
    <Route exact path="/ciudad/:ciudadId" element={<Ciudad onFilter={onFilter}/>}/>
    </Routes>
    </div>
    </div>
    )
  }
}

export default App;
