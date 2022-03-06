const { addValueToMealPlan, addValueToRecipes, getAllValuesFromDb, updateValueInDb, deleteValueFromDb } = require("../services/dbService")
const { generateMealPlan, recipeInfo} = require("../services/APIService")
const { json } = require("express")

const getTodos = async () => {
  const values = await getAllValuesFromDb()
  return values
}


const addMealPlan = async (text) => {  
  const data = await generateMealPlan();
  const parsedData = await JSON.parse(data);
  const recipeIDs = 
  [parsedData.week.monday.meals[0].id,
  parsedData.week.monday.meals[1].id,
  parsedData.week.monday.meals[2].id,
  parsedData.week.tuesday.meals[0].id,
  parsedData.week.tuesday.meals[1].id,
  parsedData.week.tuesday.meals[2].id,
  parsedData.week.wednesday.meals[0].id,
  parsedData.week.wednesday.meals[1].id,
  parsedData.week.wednesday.meals[2].id,
  parsedData.week.thursday.meals[0].id,
  parsedData.week.thursday.meals[1].id,
  parsedData.week.thursday.meals[2].id,
  parsedData.week.friday.meals[0].id,
  parsedData.week.friday.meals[1].id,
  parsedData.week.friday.meals[2].id,
  parsedData.week.saturday.meals[0].id,
  parsedData.week.saturday.meals[1].id,
  parsedData.week.saturday.meals[2].id,
  parsedData.week.sunday.meals[0].id,
  parsedData.week.sunday.meals[1].id,
  parsedData.week.sunday.meals[2].id]
  let ids= recipeIDs.join(",");
  const recipes = await recipeInfo(ids);
  return await addValueToRecipes(recipes)
}

const updateTodo = async (id, todoText, isCompleted) => {
  return await updateValueInDb(id, todoText, isCompleted)
}

const deleteTodo = async (id) => {
  return await deleteValueFromDb(id)
}

module.exports = { getTodos, addMealPlan, updateTodo, deleteTodo }
