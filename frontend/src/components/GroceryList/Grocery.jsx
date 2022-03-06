import React from "react";

import styles from "./Grocery.module.css";
import BackIcon from "../../assets/back.svg";
import CartIcon from "../../assets/cart.svg";
import Week from "../UI/Week/Week";
import GroceryItem from "../UI/GroceryItem/GroceryItem";
const Grocery = () => {
  const handleBackButtonClick = () => {
    window.location.href = "/result";
  };
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div onClick={handleBackButtonClick}>
          <img src={BackIcon} alt="back" id={styles["back"]}></img>
          <div className={styles.back}>Back</div>
        </div>
        <div className={styles.title}>Your grocery list for this week</div>
        <div className={styles.weekContainer}>
          <Week />
        </div>
        <img src={CartIcon} alt="cart" id={styles["cart"]} />
      </div>

      <label className={styles.date}>March 7 to March 13</label>
      <div className={styles.groceries}>
        <GroceryItem />
        <GroceryItem />
        <GroceryItem />
        <GroceryItem />
        <GroceryItem />
        <GroceryItem />
      </div>
    </div>
  );
};

export default Grocery;
