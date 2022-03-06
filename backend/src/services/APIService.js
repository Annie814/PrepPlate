import axios from 'axios';

const url = 'https://api.spoonacular.com/mealplanner'

const generateMealPlan = async () => {
  let results = {};
  try {
    results = await axios.get(`${url}/generate?timeFrame=week`);
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

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

const createTodo = async (text) => {
  let results = {};
  try {
    results = await axios.post(`${backendUrl}/todos`, { text: text })
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

export { getTodos, deleteTodo, updateTodo, createTodo };
