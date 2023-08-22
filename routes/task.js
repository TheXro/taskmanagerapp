const express = require('express');
const router = express.Router();

const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks');

// routes

//app.get('/api/v1/tasks')         -get all the tasks
router.get('/', getAllTasks);

//app.post('/api/v1/tasks')        -create a new task
router.post('/', createTask);

//app.get('/api/v1/tasks/:id')     -get a single task
router.get('/:id', getTask);

//app.patch('/api/v1/tasks/:id')   -update a task
router.patch('/:id', updateTask);

//app.delete('/api/v1/tasks/:id')  -delete a task
router.delete('/:id', deleteTask);


module.exports = router;