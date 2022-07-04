import React, { useState } from "react";
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";
import Search from "../../components/Search/Search";
import styles from "./Weather.module.css";

import { NavLink } from "react-router-dom";

const API = {
  API_KEY: "c76d172e95957051fac961502607db9d",
  API_BASE: "http://api.openweathermap.org/data/2.5",
};

const initialState = {
  temp: "",
  city: "",
  country: "",
  description: "",
  icon: "",
  error: "",
};

function Weather() {
  const [weather, setWeather] = useState(initialState);

  const getWeather = async (city) => {
    if (city) {
      const api_url = await fetch(
        `${API.API_BASE}/weather?q=${city}&appid=${API.API_KEY}`
      );
      const data = await api_url.json();
      if (data.cod !== "404") {
        setWeather({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          error: "",
        });
      } else {
        setWeather({
          temp: "",
          city: "",
          country: "",
          description: "",
          icon: "",
          error: "Город не найден!",
        });
      }
    } else {
      setWeather({
        temp: "",
        city: "",
        country: "",
        description: "",
        icon: "",
        error: "Введите название города",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.weatherCard}>
        <NavLink to="/">
          <div className={styles.closeButton}>&#11198;</div>
        </NavLink>
        <Search getWeather={getWeather} />
        <div className={styles.weatherInfo}>
          <WeatherInfo
            temp={weather.temp}
            city={weather.city}
            country={weather.country}
            description={weather.description}
            icon={weather.icon}
            error={weather.error}
          />
        </div>
      </div>
    </div>
  );
}

export default Weather;
