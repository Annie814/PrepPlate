const express = require('express');
const router = express.Router();
const { getRecipes } = require('../controllers/recipeController')

router.get('/', async (req, res) => {
  const recipes = await getRecipes()
  res.send(recipes);
});

module.exports = router;