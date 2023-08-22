const PORT = 3000;


const express = require('express');
const app = express();
const tasks = require('./routes/task');
require('./db/connect');
const connectDB = require('./db/connect');
require('dotenv').config();

//middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
    res.send("Task Manager App");
});



app.use('/api/v1/tasks', tasks);





//app.get('/api/v1/tasks')         -get all the tasks
//app.post('/api/v1/tasks')        -create a new task
//app.get('/api/v1/tasks/:id')     -get a single task
//app.patch('/api/v1/tasks/:id')   -update a task
//app.delete('/api/v1/tasks/:id')  -delete a task

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
    } catch (error) {   
        console.log(error);
    } 
}

start();

