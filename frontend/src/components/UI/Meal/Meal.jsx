import React from "react";

import styles from "./Meal.module.css";
const Meal = ({ image, name, time }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}></div>
      <div className={styles.labels}>
        <label className={styles.name}>Recipe Name</label>
        <br />
        <label className={styles.time}>Est. Time</label>
      </div>
    </div>
  );
};

export default Meal;
