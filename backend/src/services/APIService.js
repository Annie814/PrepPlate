const axios = require('axios');

const url = 'https://api.spoonacular.com'

const generateMealPlan = async () => {
  let results = {};
  try {
    results = await axios.get(`${url}/mealplanner/generate?timeFrame=week&apiKey=df07beb94fea48aeb10af590422d0fe7`);
    console.log(results);
    JSON.stringify(results);
    var parsedData = JSON.parse(results);
    console.log(parsedData[week]);
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
    return ids;
  } catch (err) {
    console.log(err);
    return results;
  }
};

generateMealPlan();

const recipeInfo = async (ids) => {
  let results = {};
  try {
    results = await axios.get(`${url}/recipes/informationBulk?ids=${ids}&apiKey=df07beb94fea48aeb10af590422d0fe7`);
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

module.export = { generateMealPlan, recipeInfo};
