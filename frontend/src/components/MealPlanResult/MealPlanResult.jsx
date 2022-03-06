import React from "react";
import styles from "./MealPlanResult.module.css";
import PlateIcon from "../../assets/plate.svg";

const MealPlanResult = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <img src={PlateIcon} alt="plate" id={styles["plate"]} />

        <div className={styles.title}>Your meal plan for this week</div>
      </div>

      <div className={styles.viewButton}>View Grocery List</div>
    </div>
  );
};

export default MealPlanResult;
