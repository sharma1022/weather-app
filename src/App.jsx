import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6d7e49e3ac86846731af17a9cb61014d`;

  const searchLocation = async (e) => {
    console.log("i'm here");

    if ((e && e.key == "Enter")) {
      console.log(location);
      try{
        const { data } = await axios.get(url);
        setData(data);
        console.log(data);
        setLocation("");
      }catch(e){
        console.log(e);
      }
      
    }
  };
  // useEffect(() => {
  //   setLocation("Surrey");
  // }, []);

  return (
    <div className="App">
      <div className="weather">
        <div className="weather__search">
          <input
            className="weather__search-input"
            type="text"
            value={location}
            placeholder="Enter location"
            onChange={(e) => setLocation(e.target.value)}
            onKeyUp={searchLocation}
          />
        </div>
        <div className="weather__container">
          <div className="weather__top">
            <h1 className="weather__location">{data.name}</h1>
            {data.main ? (
              <h2 className="weather__temp">{data.main.temp.toFixed()}°</h2>
            ) : null}
            {data.weather ? (
              <h2 className="weather__desc">{data.weather[0].main}</h2>
            ) : null}
          </div>
          <div className="weather__bottom">
            <div className="weather__feels">
              {data.main ? <p>{data.main.feels_like.toFixed()}°</p> : null}

              <p>Feels Like</p>
            </div>
            <div className="weather__humidity">
              {data.main ? <p>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="weather__wind">
              {data.wind ? <p>{data.wind.speed.toFixed()} KM/H</p> : null}
              <p>Wind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
