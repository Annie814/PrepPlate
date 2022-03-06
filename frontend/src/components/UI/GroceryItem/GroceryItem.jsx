import React from "react";

import styles from "./GroceryItem.module.css";
const GroceryItem = ({ name }) => {
  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <label className={styles.text}>{name}</label>
    </div>
  );
};

export default GroceryItem;
