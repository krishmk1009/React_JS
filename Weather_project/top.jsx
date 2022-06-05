import React, { useState } from "react";
import axious from "axios";

function Top() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=23c3c09c3fd7a97eb372b226212e8eca&units=metric`;

  function searchLocation(event) {
    if (event.key === "Enter") {
      axious.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  }
  return (
    <div className="container">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="search an location"
      />
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp}C</h1> : null}
        </div>

        <div className="description">
          {data.weather ? <h1>{data.weather[0].main}</h1> : null}
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <p> {data.main ? <p>Feels Like :{data.main.feels_like}</p> : null}</p>
        </div>
        <div className="humidity">
          <p>{data.main ? <p>Humiditye :{data.main.humidity} %</p> : null}</p>
        </div>
        <div className="wind">
          <p>{data.wind ? <p>Speed Wind :{data.wind.speed} MPH</p> : null}</p>
        </div>
      </div>
    </div>
  );
}

export default Top;
