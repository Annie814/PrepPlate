const { addValueToMealPlan, addValueToRecipes, getAllValuesFromDb, updateValueInDb, deleteValueFromDb } = require("../services/dbService")
const { generateMealPlan, recipeInfo} = require("../services/APIService")
const { json } = require("express")

const getTodos = async () => {
  const values = await getAllValuesFromDb()
  return values
}


const addMealPlan = async (text) => {  
  const ids = await generateMealPlan()
//  console.log(ids);
  const recipes = await recipeInfo(ids);
  const insertIDs =  await addValueToRecipes(recipes);
  
}

addMealPlan();

const updateTodo = async (id, todoText, isCompleted) => {
  return await updateValueInDb(id, todoText, isCompleted)
}

const deleteTodo = async (id) => {
  return await deleteValueFromDb(id)
}

module.exports = { getTodos, addMealPlan, updateTodo, deleteTodo }
