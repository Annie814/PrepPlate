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
  };

  const getIngredients = () => {
    const arr = [];
    for (let i = 6; i < recipes.length; i++) {
      if (
        recipes[i].extendedIngredients &&
        recipes[i].extendedIngredients.length !== 0
      ) {
        for (let j = 0; j < 2; j++) {
          arr.push(recipes[i].extendedIngredients[j]);
        }
      }
    }
    return arr;
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (recipes) setIngredients(getIngredients());
  }, [recipes]);

  const handleBackButtonClick = () => {
    window.location.href = "/result";
  };

  console.log(recipes, ingredients);

  if (!recipes.length) return null;

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
        {ingredients.map((ingredient) => (
          <GroceryItem name={ingredient.original} />
        ))}
      </div>
    </div>
  );
};

export default Grocery;
