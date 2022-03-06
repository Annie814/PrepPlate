import React, { useState } from "react";
import styles from "./Category.module.css";

const Category = ({ text, index, onCategoryClick, style }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div
      className={styles.container}
      style={{
        background: `${active ? `#afd47f` : `#e4e4e4`}`,
        color: `${active ? `white` : `#828282`}`,
        marginLeft: `${index === 0 ? `30px` : `0`}`,
      }}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default Category;
