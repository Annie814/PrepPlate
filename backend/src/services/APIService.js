const axios = require('axios');

const url = 'https://api.spoonacular.com'

const generateMealPlan = async () => {
  let res = [];
  try {
    results = await axios.get(`${url}/mealplanner/generate?timeFrame=week&apiKey=611156a4665b4fbfa6536a2cd482a5df`);
//    console.log(results);
    const parsedData = results.data.week;
    const days = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
    for (var i = 0; i < days.length; i++) {
      const daily_meal = [];
      const date = days[i];
      for(var j = 0; j < 3; j++){
      const obj = {"recipeID" : parsedData[date].meals[j].id, "insertID" : null};
      daily_meal.push(obj);
      }
      res.push(daily_meal);
    }
//    console.log (res);
    return res; 
  } catch (err) {
    console.log(err);
    return res;
  }
};

//generateMealPlan();

const recipeInfo = async (ids) => {
  let results = {};
  try {
    results = await axios.get(`${url}/recipes/informationBulk?ids=${ids}&apiKey=611156a4665b4fbfa6536a2cd482a5df`);
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

module.exports = { generateMealPlan, recipeInfo }