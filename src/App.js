import logo from './logo.svg';
import './App.css';
import $ from "jquery";


$(document).ready(function(){
  var header = $('body');
  
  var backgrounds = new Array(
    'url(desert.jpg)',
    'url(country.jpg)',
    'url(mountains.jpg)',
    'url(orangesky.jpg)',
    'url(trees.jpg)',
    'url(beach.jpg)',
  );
  
  var current = 0;
  
  function nextBackground() {
      current++;
      current = current % backgrounds.length;
      header.css('background-image', backgrounds[current]);
  }
  setInterval(nextBackground, 1000);
  
  header.css('background-image', backgrounds[0]);
  });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main>

      </main>
      <footer class="bg-light mt-auto py-3 text-center text-muted">- Coded by Miriam Said -</footer>
    </div>
  );
}

export default App;
