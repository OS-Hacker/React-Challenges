import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = "cd687fba86e2ece20242403136c7b724";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setWeatherData(data);
  };

  console.log(weatherData);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") fetchData();
  };

  return (
    <Wrapper>
      <div className="container">
        <input
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        {weatherData && weatherData.cod === 200 && (
          <div className="weather">
            <h2>{weatherData.name}</h2> <span>{weatherData.sys.country}</span>
            <h3>{weatherData.weather[0].description}</h3>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Feels Like: {weatherData.main.feels_like}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        )}
        {weatherData && weatherData.cod !== 200 && (
          <div className="error">
            <p>{weatherData.message}</p>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Weather;

const Wrapper = styled.section`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    gap: 30px;
    font-family: Arial, sans-serif;
  }
  input {
    padding: 10px;
    font-size: 16px;
    width: 300px;
  }
  .weather {
    text-align: center;
  }
  .error {
    color: red;
  }
`;
