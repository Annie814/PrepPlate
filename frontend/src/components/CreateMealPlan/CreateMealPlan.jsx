import React from "react";

import styles from "./CreateMealPlan.module.css";

const CreateMealPlan = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer} />
      <div className={styles.title}>Create your weekly meal plan</div>
      <div className={styles.subTitle}>Select your preferences</div>
      <div className={styles.box}>Choose cooking difficulty</div>
      <div className={styles.generateButton}>Generate Meal Plan</div>
    </div>
  );
};

export default CreateMealPlan;
