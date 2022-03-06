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
