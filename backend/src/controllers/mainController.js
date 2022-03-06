<<<<<<< HEAD
const { addValueToDb, getAllValuesFromDb, updateValueInDb, deleteValueFromDb } = require("../services/dbService")
=======
const { addValueToMealPlan, addValueToRecipes, getAllValuesFromDb, updateValueInDb, deleteValueFromDb } = require("../services/dbService")
const { generateMealPlan, recipeInfo} = require("../services/APIService")
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
<<<<<<< HEAD
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
=======
  const parsedData = JSON.parse(data);
  return await addValueToMealPlan(mergedData)
>>>>>>> 4dfd920591493220e699db8094e1ecca4aa63181
>>>>>>> e234ec2644ee79c2f7d26d0451585614b7856b33
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
