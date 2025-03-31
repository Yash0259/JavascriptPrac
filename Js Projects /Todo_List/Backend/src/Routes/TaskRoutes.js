const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask } = require('../Controller/TaskController');

// Route to get all tasks
router.get('/tasks', getTasks);

// Route to create a new task
router.post('/tasks', createTask);

// Route to update a task by ID
router.put('/tasks/:id', updateTask);

// Route to delete a task by ID
router.delete('/tasks/:id', deleteTask);

module.exports = router;
