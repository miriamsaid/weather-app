import logo from './logo.svg';
import './App.css';
import $ from "jquery";


var images = ["desert.jpg", "country.jpg", "mountains.jpg", "orangesky.jpg", "trees.jpg", "beach.jpg"];

    $(function () {
        var i = 0;
        $("#dvImage").css("background-image", "url(images/" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#dvImage").fadeOut("slow", function () {
                $(this).css("background-image", "url(images/" + images[i] + ")");
                $(this).fadeIn("slow");
            });
        }, 5000);
    });

function App() {
  return (
    <div id="dvImage" className="App">
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
