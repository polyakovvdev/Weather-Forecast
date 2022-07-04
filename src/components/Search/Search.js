import React, { useState } from "react";
import styles from "./Search.module.css";
import iconSearch from "../../assets/img/search.png";

function Search(props) {
  const [city, setCity] = useState('');

  const changeCity = (e) => {
    setCity(e.target.value);
  };

  const searchCity = (e) => {
    e.preventDefault();
    const cityName = city;
    props.getWeather(cityName);
  };

  return (
    <div className={styles.content}>
      <form>
        <input
          type="text"
          name="city"
          placeholder="Введите город..."
          onChange={changeCity}
          value={city}
        />
        <button onClick={searchCity}>
          <img src={iconSearch} alt="Поиск" />
        </button>
      </form>
    </div>
  );
}

export default Search;
