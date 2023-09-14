import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [weatherData, setweatherData] = useState([]);
  const [city, setCity] = useState("");
  const apiKey = `6e488f3637f1e65cabedb26e8fc39da1`;

  const getWeather = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setweatherData(data);
        // setCity("");
        console.log(weatherData);
      });
  };

  return (
    <>
      <input
        type={"search"}
        onChange={(e) => setCity(e.target.value)}
        value={city}
      ></input>
      <button onClick={getWeather}>Search</button>

      {typeof weatherData.main === "undefined" ? (
        <div>Enter a city to continue...</div>
      ) : (
        <div>
          <h1>{weatherData.name}</h1>
          <h2>{Math.round(weatherData.main.temp)}°F</h2>
          <h2>{weatherData.weather[0].description}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
          />
        </div>
      )}
    </>
  );
}

export default App;
