const Task = require('../models/TaskModel');    // Mongoose model for tasks

// Get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();  // Mongoose find() method to get all tasks
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new task
const createTask = async (req, res) => {
    const { task, status } = req.body;
    try {
        const newTask = new Task({ task, status }); // Creates a new instance of Task
        await newTask.save(); // Saves the task in MongoDB
        res.json(newTask);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

// Update task
const updateTask = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, { status }, { new: true });
        if (updatedTask) {
            res.json(updatedTask);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

// Delete task
const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (deletedTask) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

module.exports ={getTasks,createTask,updateTask,deleteTask};
//it was for localstorage
// const tasks = [];
// const getTasks = (req, res) => {
//     res.json(tasks);
// };

// const createTask = (req, res) => {
//     const { task, status } = req.body;
//     const newTask = { id: tasks.length + 1, task, status };
//     tasks.push(newTask);
//     res.status(201).json(newTask);
// };

// const updateTask = (req, res) => {
//     const { id } = req.params;
//     const { status } = req.body;
//     const task = tasks.find((t) => t.id === parseInt(id));
//     if (task) {
//         task.status = status;
//         res.json(task);
//     } else {
//         res.status(404).json({ message: "Task not found" });
//     }
// };

// const deleteTask = (req, res) => {
//     const { id } = req.params;
//     tasks = tasks.filter((t) => t.id !== parseInt(id));
//     res.status(204).end();
// };

// module.exports = { getTasks, createTask, updateTask, deleteTask };
