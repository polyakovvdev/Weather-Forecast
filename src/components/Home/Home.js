import React from "react";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Добро пожаловать!</div>
      <nav className={styles.navigation}>
        <li>
          <NavLink to="/weather" className={styles.navigationButton}>
            Узнать погоду
          </NavLink>
        </li>
        <li>
          <NavLink to="/time" className={styles.navigationButton}>
            Узнать время
          </NavLink>
        </li>
      </nav>
    </div>
  );
}

export default Home;
