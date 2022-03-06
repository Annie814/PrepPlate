const express = require('express');
const router = express.Router();
const {addMealPlan, generateShoppingList} = require('../controllers/mainController')

router.post('/mealplan', async (req, res) => {
  const result = await addMealPlan()
  res.send(result);
});

router.get('/shoppinglist', async(req,res) => {
  const result = await generateShoppingList()
  res.send(result);
})

// router.put('/:id', async (req, res) => {
//   const id = req.params.id;
//   const todoText = req.body.text;
//   const isCompleted = req.body.isCompleted;
//   const result = await updateTodo(id, todoText, isCompleted)
//   res.send(result);
// });

// router.delete('/:id', async (req, res) => {
//   const id = req.params.id;
//   const result = await deleteTodo(id)
//   res.send(result);
// });

module.exports = router;
