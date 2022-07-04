import React, { useState, useEffect } from "react";
import styles from "./Time.module.css";
import { NavLink } from "react-router-dom";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <NavLink to="/">
          <div className={styles.closeButton}>&#11198;</div>
        </NavLink>
        <div className={styles.title}>Доброго времени суток!</div>
        <div className={styles.timer}>{time.toLocaleTimeString()}</div>
      </div>
    </div>
  );
}

export default Time;
