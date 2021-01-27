import './App.css';
const api = {
  key: "cf1a610a47c7a1e0c56e3391803c790f",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

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
          placeholder="Search..."></input>
        </div>
        <div>
          <div className= "location">New York City, US</div>
        <div className = "row weather-box">
          <div className= "col-sm">
          <div className= "temp"> 20°C</div>
          <div className="description">Sunny</div>
          </div>
          <div className= "col-sm"><img src = "icons/01d.png"></img></div>
        </div>
        <div>Sunset in 30 mins</div>
        </div>
      </main>
      <footer className="bg-light mt-auto py-3 text-center text-muted"><small>- Coded by Miriam Said -</small></footer>
    </div>
  );
}

export default App;
