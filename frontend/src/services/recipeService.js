import axios from 'axios';      //this file added!!

const backendUrl = 'http://localhost:8080'

const getRecipes = async () => {
  let results = {};
  try {
    results = await axios.get(`${backendUrl}/recipes`);
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

export {getRecipes};
