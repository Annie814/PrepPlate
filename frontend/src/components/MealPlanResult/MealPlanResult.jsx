import React from "react";
import styles from "./MealPlanResult.module.css";
import PlateIcon from "../../assets/plate.svg";
import BackIcon from "../../assets/back.svg";
import Week from "../UI/Week/Week";
import Meal from "../UI/Meal/Meal";

const MealPlanResult = ({ mealPlan }) => {
  const handleBackButtonClick = () => {
    window.location.href = "/create";
  };
  const handleViewGroceryClick = () => {
    window.location.href = "/grocery";
  };
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div onClick={handleBackButtonClick}>
          <img src={BackIcon} alt="back" id={styles["back"]}></img>
          <div className={styles.back}>Back</div>
        </div>
        <img src={PlateIcon} alt="plate" id={styles["plate"]} />

        <div className={styles.title}>Your meal plan for this week</div>
        <div className={styles.weekContainer}>
          <Week />
        </div>
      </div>
      <div className={styles.mealContainer}>
        <label className={styles.date}>Monday, March 7</label>
        <label className={styles.mealText} id={styles["breakfastText"]}>
          BREAKFAST
        </label>
        <div className={styles.breakfast}>
          <Meal />
        </div>
        <label className={styles.mealText} id={styles["lunchText"]}>
          LUNCH
        </label>
        <div className={styles.lunch}>
          <Meal />
        </div>
        <label className={styles.mealText} id={styles["dinnerText"]}>
          DINNER
        </label>
        <div className={styles.dinner}>
          <Meal />
        </div>
      </div>
      <div className={styles.viewButton} onClick={handleViewGroceryClick}>
        View Grocery List
      </div>
    </div>
  );
};

export default MealPlanResult;
