const {getAllRecipesFromDb} = require("../services/dbService")

const getRecipes = async () => {
  const values = await getAllRecipesFromDb()
  return values
}

module.exports = { getRecipes }