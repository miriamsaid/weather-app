import moment from 'moment'
import 'moment-timezone';
import React, { useState } from 'react';
import './App.css';

const api = { // API Key
  key: "cf1a610a47c7a1e0c56e3391803c790f",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() { // function to fetch weather data

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

let x = (weather.timezone)/3600; // defining x as the timeezone for each country, +-GMT

  return (
    <div className=
    {(typeof weather.main !='undefined') // if the weather data is yet to be fetched, the 'App' class will be returned
    ? (moment.utc().utcOffset(x).format('H') >= moment.unix(weather.sys.sunset).utcOffset(x).format('H') // if current time H is greater than the sunset timestanp
    && (moment.utc().utcOffset(x).format('H') <= moment.unix(weather.sys.sunrise).utcOffset(x).format('H')) // less than the sunrise time stamp, the 'App night' class will be returned
    ? 'App night' : 'App'): 'App'}> 
      <main className= "d-flex">
       <div>
        <div className= "search-box">
          <input
           type="text"
           className="search-bar"
           placeholder="type in city . . ."
           onChange= {e => setQuery(e.target.value)}
           value={query}
           onKeyPress={search}>
          </input>
        </div>

    {/* the below section will be hidden untill user input is used */}

    {(typeof weather.main != "undefined") ? (
        <div className="card2 flex-box justify-content-center">
          <div className= "location">{weather.name}, {weather.sys.country}</div>
          <div className= "date">{moment.utc().utcOffset(x).format('ddd MMMM Do, YYYY HH:mm Z')}</div>
          <div className="description">{weather.weather[0].main}</div>
          <div className = "row weather-box">
          <div className= "col-sm"><img 
          src = {"https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/" + weather.weather[0].icon + ".svg"}
          alt="weather"
          className= "icon"
          ></img></div>           
          <div className= "col-sm">
          <div className=  
          {
            (moment.utc().utcOffset(x).format('H') >= moment.unix(weather.sys.sunset).utcOffset(x).format('H') // same if statement as above to determine which class to use depending on time
            && (moment.utc().utcOffset(x).format('H') <= moment.unix(weather.sys.sunrise).utcOffset(x).format('H'))  
            ? 'temp night' : 'temp')
          }
          >{Math.round(weather.main.temp)-273}°c
          </div>
          </div>
          </div>
          <div className="sunsetSunrise">
            {
              (((moment.utc().utcOffset(x).format('H') <= moment.unix(weather.sys.sunset).utcOffset(x).format('H')) // same if statement as above to determine which class to use depending on time
              && (moment.utc().utcOffset(x).format('H') <= moment.unix(weather.sys.sunrise).utcOffset(x).format('H'))
              ? ['Sunset at ', moment.unix(weather.sys.sunset).utcOffset(x).format('H:mm a')]
              : ['Sunrise at ', moment.unix(weather.sys.sunrise).utcOffset(x).format('H:mm a')])
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
