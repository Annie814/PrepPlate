const { addValueToMealPlan, addValueToRecipes} = require("../services/dbService")
const { generateMealPlan, recipeInfo} = require("../services/APIService")
const { json } = require("express")

// const getTodos = async () => {
//   const values = await getAllValuesFromDb()
//   return values
// }


const addMealPlan = async () => {  
  const mealplan = await generateMealPlan();
//  console.log(ids);
  const recipe_IDs = [];
  for (var i = 0; i < mealplan.length; i ++){
    for(var j = 0; j < 3; j++){
    recipe_IDs.push(mealplan[i][j].recipeID);
    } 
  }
  const recipe_string = recipe_IDs.join(",");
//  console.log(recipe_string);
  const recipes = await recipeInfo(recipe_string);
  const insertIDs = await addValueToRecipes(recipes)
  for (var i = 0; i < mealplan.length; i ++){
    for(var j = 0; j < 3; j++){
    recipe_IDs.push(mealplan[i][j].insertID = insertIDs[i*j]);
    } 
  }
//  console.log(mealplan);
  return await addValueToMealPlan({mealplan});
}

addMealPlan();

// const updateTodo = async (id, todoText, isCompleted) => {
//   return await updateValueInDb(id, todoText, isCompleted)
// }

// const deleteTodo = async (id) => {
//   return await deleteValueFromDb(id)
// }

module.exports = {addMealPlan}
