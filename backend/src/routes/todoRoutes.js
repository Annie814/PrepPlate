const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const { getTodos, addMealPlan, updateTodo, deleteTodo} = require('../controllers/mainController')
=======
<<<<<<< HEAD
const { getTodos, addTodo, updateTodo, deleteTodo } = require('../controllers/mainController')
=======
const { getTodos, addMealPlan, updateTodo, deleteTodo, addMealPlan } = require('../controllers/mainController')
>>>>>>> 4dfd920591493220e699db8094e1ecca4aa63181
>>>>>>> e234ec2644ee79c2f7d26d0451585614b7856b33

router.get('/', async (req, res) => {
  const todos = await getTodos()
  res.send(todos);
});

router.post('/', async (req, res) => {
<<<<<<< HEAD
  const text = req.body.text;
  const result = await addTodo(text)
=======
//  const text = req.body.text;
  const result = await addMealPlan()
>>>>>>> 4dfd920591493220e699db8094e1ecca4aa63181
  res.send(result);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const todoText = req.body.text;
  const isCompleted = req.body.isCompleted;
  const result = await updateTodo(id, todoText, isCompleted)
  res.send(result);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const result = await deleteTodo(id)
  res.send(result);
});

module.exports = router;
