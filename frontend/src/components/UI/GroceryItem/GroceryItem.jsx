import React from "react";

import styles from "./GroceryItem.module.css";
const GroceryItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <label className={styles.text}>Grocery Item</label>
    </div>
  );
};

export default GroceryItem;
