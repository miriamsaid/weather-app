import moment from 'moment'
import 'moment-timezone';
import React, { useState } from 'react';
import './App.css';

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

let x = (weather.timezone)/3600;

  return (
    <div className=
    {(typeof weather.main !='undefined') ? ((moment.utc().utcOffset(x).format('H')>15) ? 'App night' : 'App'): 'App'}>
      <main className= "d-flex">
        <div>
        <div className= "search-box">
          <input
          type="text"
          className="search-bar"
          placeholder="type in city..."
          onChange= {e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          ></input>
        </div>
        {(typeof weather.main != "undefined") ? (
        <div className="card2">
                <div className= "date">{moment.utc().utcOffset(x).format('ddd MMMM Do, YYYY HH:mm Z')}</div>
          <div className= "location">{weather.name}, {weather.sys.country}</div>
          <div className="description">{weather.weather[0].main}</div>
          <div className = "row weather-box">
          <div className= "col-sm"><img 
          src = {"https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/" + weather.weather[0].icon + ".svg"}
          alt="weather"
          className= "icon"
          ></img></div>           
          <div className= "col-sm">
          <div className= {(moment.utc().utcOffset(x).format('H')>15) ? 'temp night' : 'temp'}>{Math.round(weather.main.temp)-273}°c</div>
          </div>
          </div>
          <div className="sunsetSunrise">
            {
              (((moment.utc().utcOffset(x).format('H') < moment.unix(weather.sys.sunset).utcOffset(x).format('H'))
              ? ['Sunset at ', moment.unix(weather.sys.sunset).utcOffset(x).format("H:mm a")]
              : ['Sunrise at ', moment.unix(weather.sys.sunrise).utcOffset(x).format("H:mm a")])
            )} 
          </div>
        </div>

        ) : ('')}
        </div>
      </main>
      <footer className="mt-auto py-2  text-center"><small>- Coded by Miriam Said -</small></footer>
    </div>
  );
}

export default App;
