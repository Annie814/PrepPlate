import React from "react";
import styles from "./HomePage.module.css";

import PreplateIcon from "../../assets/prepplate.svg";
const HomePage = () => {
  const moveToMealCreatePage = () => {
    window.location.href = "/create";
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={PreplateIcon} alt="mainLogo" id={styles["preplate"]} />
      </div>
      <div className={styles.title}>PrepPlate</div>
      <div className={styles.paragraph}>
        Select your preferences and get automatically personalized meal plans
        and grocery lists every week!
      </div>

      <div className={styles.startButton} onClick={moveToMealCreatePage}>
        Get Started
      </div>
    </div>
  );
};

export default HomePage;
