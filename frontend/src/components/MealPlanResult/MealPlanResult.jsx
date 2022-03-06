import React,{useState,useEffect} from "react";  //added!!
import styles from "./MealPlanResult.module.css";
import PlateIcon from "../../assets/plate.svg";
import BackIcon from "../../assets/back.svg";
import Week from "../UI/Week/Week";
import Meal from "../UI/Meal/Meal";
import { getRecipes } from "../../services/recipeService";

const MealPlanResult = ({ mealPlan }) => {
  const [recipes, setRecipes] = useState([]);  //added!!
  const getData = async () => {               //added
    const result = await getRecipes();
    setRecipes(result)
  }

  //all the meals are in frontend.
  //usestate to controll the meals to show.

  useEffect(() => {
    getData(); 
  }, [])
  if (!recipes.length){
    return null;  // if its empty
  }
  console.log(recipes)
  const handleBackButtonClick = () => {
    window.location.href = "/create";
  };
  const handleViewGroceryClick = () => {
    window.location.href = "/grocery";
  };
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div onClick={handleBackButtonClick}>
          <img src={BackIcon} alt="back" id={styles["back"]}></img>
          <div className={styles.back}>Back</div>
        </div>
        <img src={PlateIcon} alt="plate" id={styles["plate"]} />

        <div className={styles.title}>Your meal plan for this week</div>
        <div className={styles.weekContainer}>
          <Week />
        </div>
      </div>
      <div className={styles.mealContainer}>
        <label className={styles.date}>Monday, March 7</label>
        <label className={styles.mealText} id={styles["breakfastText"]}>
          BREAKFAST
        </label>
        <div className={styles.breakfast}>
          <Meal name={recipes[15].title} image={recipes[15].image} time={recipes[15].readyInMinutes}/>
        </div>
        <label className={styles.mealText} id={styles["lunchText"]}>
          LUNCH
        </label>
        <div className={styles.lunch}>
          <Meal name={recipes[16].title} image={recipes[16].image} time={recipes[16].readyInMinutes}/>
        </div>
        <label className={styles.mealText} id={styles["dinnerText"]}>
          DINNER
        </label>
        <div className={styles.dinner}>
          <Meal name={recipes[17].title} image={recipes[17].image} time={recipes[17].readyInMinutes}/>
        </div>
      </div>
      <div className={styles.viewButton} onClick={handleViewGroceryClick}>
        View Grocery List
      </div>
    </div>
  );
};

export default MealPlanResult;
