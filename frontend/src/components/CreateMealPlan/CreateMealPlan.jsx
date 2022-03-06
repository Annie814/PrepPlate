import React from "react";
import Category from "../UI/Category/Category";

import styles from "./CreateMealPlan.module.css";
import Icon from "../../assets/spoon.svg";

const CreateMealPlan = () => {
  const handleGenerateClick = () => {
    window.location.href = "/result";
  };
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <img src={Icon} alt="spoon" id={styles["spoon"]} />
      </div>
      <div className={styles.title}>Create your weekly meal plan</div>
      <div className={styles.subTitle}>Select your preferences</div>
      <div className={styles.box}>
        <div className={styles.preferenceText} id={styles["first-preference"]}>
          Calorie intake
        </div>
        <div className={styles.categoryContainer}>
          <Category text="Low" index={0} />
          <Category text="Medium" />
          <Category text="High" />
        </div>
        <div className={styles.preferenceText}>Choose Cooking Difficulty</div>
        <div className={styles.categoryContainer}>
          <Category text="Easy" index={0} />
          <Category text="Medium" />
          <Category text="Hard" />
        </div>
        <div className={styles.preferenceText}>Dietary Preference</div>
        <div className={styles.categoryContainer}>
          <Category text="Vegan" index={0} />
          <Category text="Vegetarian" />
          <Category text="Gluten Free" />
        </div>
        <div className={styles.preferenceText}>Exclude</div>
        <div className={styles.categoryContainer}>
          <Category text="Peanuts" index={0} />
          <Category text="Shellfish" />
          <Category text="Eggs" />
        </div>
      </div>
      <div className={styles.generateButton} onClick={handleGenerateClick}>
        Generate Meal Plan
      </div>
    </div>
  );
};

export default CreateMealPlan;
