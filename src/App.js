import moment from 'moment';
import React, { useState } from 'react';
import './App.css';
import iconUrl from "./icons/10d.png";

const api = {
  key: "cf1a610a47c7a1e0c56e3391803c790f",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=meet&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => 
        setWeather(result));
        setQuery('');
        console.log(weather);
    }
  }


  const dateBuilder = (d) => {
    let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"]
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",]

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="App">
      <main className= "d-flex">
      <div className= "date">{dateBuilder(new Date())}</div>
        <div className= "search-box">
          <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange= {e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          ></input>
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className= "location">{weather.name}, {weather.sys.country}</div>
          <div className="description">{weather.weather[0].main}</div>
          <div className = "row weather-box">
          <div className= "col-sm"><img 
          src = {iconUrl} 
          alt="weather" 
          className= "icon"
          ></img></div>           
          <div className= "col-sm">
          <div className= "temp">{Math.round(weather.main.temp)-273}°c</div>
          </div>
          </div>
          <div className="sunsetSunrise">
            {
              ((weather.sys.sunrise) > (moment.utc(weather.timezone))
              ? ['Sunset at ' , (moment.unix(weather.sys.sunset).format("hh:mm a"))]
              : ['Sunrise at ' , (moment.unix(weather.sys.sunrise).format("hh:mm a"))]
            )} </div>
        </div>
        ) : ('')}
      </main>
      <footer className="mt-auto py-2  text-center"><small>- Coded by Miriam Said -</small></footer>
    </div>
  );
}

export default App;
