const axios = require('axios');

const url = 'https://api.spoonacular.com'

const generateMealPlan = async () => {
  let results = {};
  try {
    results = await axios.get(`${url}/mealplanner/generate?timeFrame=week&apiKey=611156a4665b4fbfa6536a2cd482a5df`);
//    console.log(results);
    const parsedData = results.data.week;
    const recipeIDs =
      [parsedData.monday.meals[0].id,
      parsedData.monday.meals[1].id,
      parsedData.monday.meals[2].id,
      parsedData.tuesday.meals[0].id,
      parsedData.tuesday.meals[1].id,
      parsedData.tuesday.meals[2].id,
      parsedData.wednesday.meals[0].id,
      parsedData.wednesday.meals[1].id,
      parsedData.wednesday.meals[2].id,
      parsedData.thursday.meals[0].id,
      parsedData.thursday.meals[1].id,
      parsedData.thursday.meals[2].id,
      parsedData.friday.meals[0].id,
      parsedData.friday.meals[1].id,
      parsedData.friday.meals[2].id,
      parsedData.saturday.meals[0].id,
      parsedData.saturday.meals[1].id,
      parsedData.saturday.meals[2].id,
      parsedData.sunday.meals[0].id,
      parsedData.sunday.meals[1].id,
      parsedData.sunday.meals[2].id]
    let ids = recipeIDs.join(",");
    //  console.log(ids);
    return ids;
  } catch (err) {
    console.log(err);
    return results;
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