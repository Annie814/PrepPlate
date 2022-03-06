const axios = require('axios');

const url = 'https://api.spoonacular.com'

const generateMealPlan = async () => {
  let results = {};
  try {
    results = await axios.get(`${url}/mealplanner/generate?timeFrame=week`);
    console.log(results);
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
const deleteTodo = async (id) => {
  console.log(id)
  let results = {};
  try {
    results = await axios.delete(`${backendUrl}/todos/${id}`);
=======
const GetRecipeInfo = async (ids) => {
  console.log(ids)
  let results = {};
  try {
    results = await axios.get(`${url}/recipes/informationBulk?ids=${url}&includeNutrition=false`);
>>>>>>> 4dfd920591493220e699db8094e1ecca4aa63181
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

const updateTodo = async (id, text, isCompleted) => {
  let results = {};
  try {
    results = await axios.put(`${backendUrl}/todos/${id}`, { text: text, isCompleted: isCompleted });
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};
>>>>>>> e234ec2644ee79c2f7d26d0451585614b7856b33

const recipeInfo = async (ids) => {
  let results = {};
  try {
    results = await axios.get(`${url}/recipes/informationBulk?ids=${ids}`);
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

module.export = { generateMealPlan, recipeInfo};
