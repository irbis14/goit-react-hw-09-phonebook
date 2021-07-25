import React from "react";
import styles from "./HomePage.module.css";

const HomePage = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      Welcome to Phonebook App
      <span role="img" aria-label="Telephone">
        ☎️
      </span>
      <span role="img" aria-label="Spiral Note Pad">
        🗒️
      </span>
    </h1>
  </div>
);

export default HomePage;
