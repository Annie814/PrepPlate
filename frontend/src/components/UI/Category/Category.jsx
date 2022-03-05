import React from "react";
import styles from "./Category.module.css";

const Category = ({ active, text }) => {
  return (
    <div
      className={styles.container}
      style={`background: ${active ? `#afd47f` : `#828282`}`}
    >
      Category
    </div>
  );
};

export default Category;
