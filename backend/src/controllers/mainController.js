const { addValueToMealPlan, addValueToRecipes, getAllValuesFromDb, updateValueInDb, deleteValueFromDb } = require("../services/dbService")
const { generateMealPlan } = require("../services/APIService")
const { json } = require("express")

const getTodos = async () => {
  const values = await getAllValuesFromDb()
  return values
}

const addMealPlan = async (text) => {  
  const data = await generateMealPlan();
  const parsedData = JSON.parse(data);
  return await addValueToMealPlan(mergedData)
}

const updateTodo = async (id, todoText, isCompleted) => {
  return await updateValueInDb(id, todoText, isCompleted)
}

const deleteTodo = async (id) => {
  return await deleteValueFromDb(id)
}

module.exports = { getTodos, addMealPlan, updateTodo, deleteTodo }