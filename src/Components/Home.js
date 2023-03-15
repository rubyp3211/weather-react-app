import React, { useState, useEffect } from "react";
import "../Css/Home.css";
import CurrDateTime from "./CurrDateTime";
const Home = () => {
  const [city, setCity] = useState(null);
  const [Info, setInfo] =useState(null);
  const [search, setSearch] = useState("");
  const [weather, setWeather]=useState("");
  const [weatherIcon, setWeatherIcon]=useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6e1918174f71c6b48472c1ee29eb81ca&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setInfo(data);
      setCity(data.main);
      setWeather(data.weather[0]);
      setWeatherIcon(`http://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png`)
    };
    fetchApi();
  }, [search]);
  return(
    <>
      <div className="container">
        <div className="flex-heading">
          <h3>Forecast..</h3>
        </div>
        <div className="flex-search">
          <input type='search'
            className="input-field"
            placeholder="Enter your city name...."
            onChange={(event)=>{
              setSearch(event.target.value)
            }}
          />
        </div>
        <div>
          {!city? (
            <div className="flex-no-details">
              <h3 className="flex-details">No City Here!</h3>
            </div>
          ):(
            <div className="flex-detail-Info">
              <div className="flex-location">
                <p>{Info.name},{Info.sys.country}</p>
                <CurrDateTime/>
                <p>Feels_like:{Math.round(Info.main.feels_like)}&deg;C</p>                
              </div>
              <div className="flex-Info">
                <div className="flex-Info-left">
                  <p><img src={weatherIcon} alt=""/></p>
                  <p>{weather.main}</p>
                  <p>Temp.:{Math.round(city.temp)}&deg;C</p>
                </div>
                <div className="flex-Info-right">
                  <p>Min_Temp:{Math.round(city.temp_min)}&deg;C</p>
                  <p>Max_Temp:{Math.round(city.temp_max)}&deg;C</p>
                  <p>Humidity:{city.humidity}</p>
                  <p>Pressure:{city.pressure}</p>
                </div>
              </div>
            </div>            
          )}
        </div>
      </div>
    </>
  )
};
export default Home;
