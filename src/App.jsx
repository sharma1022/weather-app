import { useState } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=6d7e49e3ac86846731af17a9cb61014d`;

  return (
    <div className="App">
      <div className="weather">
        <div className="weather__container">
          <div className="weather__top">
            <h1 className="weather__location">Vancouver</h1>
            <h2 className="weather__temp">25° C</h2>
            <p className="weather__desc">Clouds</p>
          </div>
          <div className="weather__bottom">
            <div className="weather__feels">
              <p>27</p>
              <p>FeelsLike</p>
            </div>
            <div className="weather__humidity">
              <p>20%</p>
              <p>Humidity</p>
              </div>
            <div className="weather__wind">
              <p>12MPH</p>
              <p>Wind</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
