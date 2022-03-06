<<<<<<< HEAD
const { addValueToDb, getAllValuesFromDb, updateValueInDb, deleteValueFromDb } = require("../services/dbService")
=======
const { addValueToMealPlan, addValueToRecipes, getAllValuesFromDb, updateValueInDb, deleteValueFromDb } = require("../services/dbService")
const { generateMealPlan } = require("../services/APIService")
const { json } = require("express")
>>>>>>> 4dfd920591493220e699db8094e1ecca4aa63181

const getTodos = async () => {
  const values = await getAllValuesFromDb()
  return values
}

<<<<<<< HEAD
const addTodo = async (text) => {
  return await addValueToDb(text)
=======
const addMealPlan = async (text) => {  
  const data = await generateMealPlan();
  const parsedData = JSON.parse(data);
  return await addValueToMealPlan(mergedData)
>>>>>>> 4dfd920591493220e699db8094e1ecca4aa63181
}

const updateTodo = async (id, todoText, isCompleted) => {
  return await updateValueInDb(id, todoText, isCompleted)
}

const deleteTodo = async (id) => {
  return await deleteValueFromDb(id)
}

<<<<<<< HEAD
module.exports = { getTodos, addTodo, updateTodo, deleteTodo }
=======
module.exports = { getTodos, addMealPlan, updateTodo, deleteTodo }
>>>>>>> 4dfd920591493220e699db8094e1ecca4aa63181
