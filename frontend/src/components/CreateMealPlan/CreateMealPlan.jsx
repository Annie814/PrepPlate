import React from "react";
import Category from "../UI/Category/Category";

import styles from "./CreateMealPlan.module.css";

const CreateMealPlan = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer} />
      <div className={styles.title}>Create your weekly meal plan</div>
      <div className={styles.subTitle}>Select your preferences</div>
      <div className={styles.box}>
        <div className={styles.preferenceText} id={styles["first-preference"]}>
          Choose Cooking Difficulty
        </div>
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
        <div className={styles.preferenceText}>Budget</div>
        <div className={styles.categoryContainer}>
          <Category text="Low" index={0} />
          <Category text="Medium" />
          <Category text="High" />
        </div>
      </div>
      <div className={styles.generateButton}>Generate Meal Plan</div>
    </div>
  );
};

export default CreateMealPlan;
