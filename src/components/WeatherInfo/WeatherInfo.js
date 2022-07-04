import React from "react";
import styles from "./WeatherInfo.module.css";

function WeatherInfo(props) {
  return (
    <div className={styles.container}>
      {props.temp && (
        <div>
          <div className={styles.title}>
            {props.city}, {props.country}
          </div>
          <div className={styles.temperature}>
            <img
              src={
                "http://openweathermap.org/img/wn/" +
                props.icon +
                "@2x.png"
              }
              alt="{this.props.description}"
            />
            <div>{Math.round(props.temp - 273)}&deg;C</div>
          </div>
          <div className={styles.description}>{props.description}</div>
        </div>
      )}
      <div className={styles.error}>{props.error}</div>
    </div>
  );
}

export default WeatherInfo;
