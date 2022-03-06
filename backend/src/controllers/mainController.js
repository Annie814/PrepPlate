const { addValueToMealPlan, addValueToRecipes, getAllValuesFromDb, updateValueInDb, deleteValueFromDb } = require("../services/dbService")
const { generateMealPlan, recipeInfo} = require("../services/APIService")
const { json } = require("express")

const getTodos = async () => {
  const values = await getAllValuesFromDb()
  return values
}


const addMealPlan = async (text) => {  
  const ids = await generateMealPlan();
//  console.log(ids);
  const recipe_IDs = [];
  for (var i = 0; i < ids.length; i ++){
    recipe_IDs.push(ids[i].recipeID);
  }
  recipe_IDs = ids.join(",");
  console.log(recipe_IDs);
// get recipes insert id array and insert it to MealPlan
  const recipes = await recipeInfo(recipe_IDs);
  return await addValueToRecipes(ids, recipes)

}

addMealPlan();

const updateTodo = async (id, todoText, isCompleted) => {
  return await updateValueInDb(id, todoText, isCompleted)
}

const deleteTodo = async (id) => {
  return await deleteValueFromDb(id)
}

module.exports = { getTodos, addMealPlan, updateTodo, deleteTodo }
