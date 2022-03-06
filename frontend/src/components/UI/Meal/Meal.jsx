import React from "react";

import styles from "./Meal.module.css";
const Meal = ({ image, name, time }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
      <img src={image} width="80px" height="100%"/>
      </div>
      <div className={styles.labels}>
        <label className={styles.name}>{name}</label>
        <br />
        <label className={styles.time}>{time} minutes</label>
      </div>
    </div>
  );
};

export default Meal;
