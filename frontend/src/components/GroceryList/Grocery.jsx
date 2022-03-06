import React, { useState, useEffect } from "react"; //added!!

import styles from "./Grocery.module.css";
import BackIcon from "../../assets/back.svg";
import CartIcon from "../../assets/cart.svg";
import Week from "../UI/Week/Week";
import GroceryItem from "../UI/GroceryItem/GroceryItem";
import { getRecipes } from "../../services/recipeService";

const Grocery = () => {
  const [recipes, setRecipes] = useState([]); //added!!
  const [ingredients, setIngredients] = useState([]);

  const getData = async () => {
    //added
    const result = await getRecipes();
    setRecipes(result);

    setIngredients(getIngredients());
  };

  const getIngredients = () => {
    const arr = [];
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i] && recipes[i].extendedIngredients.length !== 0) {
        for (let j = 0; j < recipes[j].extendedIngredients.length; j++) {
          arr.push(recipes[i].extendedIngredients[j]);
        }
      }
    }

    console.log("arr", arr);
    return arr;
  };

  //all the meals are in frontend.
  //usestate to controll the meals to show.

  useEffect(() => {
    getData();
  }, []);
  if (!recipes.length) {
    return null; // if its empty
  }
  console.log(recipes, ingredients);

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
        {recipes[15].extendedIngredients.map((item) => (
          <GroceryItem name={item.original} />
        ))}
        {recipes[16].extendedIngredients.map((item) => (
          <GroceryItem name={item.original} />
        ))}
        {recipes[17].extendedIngredients.map((item) => (
          <GroceryItem name={item.original} />
        ))}
      </div>
    </div>
  );
};

export default Grocery;
