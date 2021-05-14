const ToDo = require('../models/toDoModel');


const createAndSaveToDo = async (req, res) => {
    try {
        const newTodo = await ToDo.create({
            todo: req.body.todo,
            date: req.body.date,
            description: req.body.description,
            status: req.body.status
        })
        res.status(201).json({
            message: 'Todo added successfully',
            info: newTodo
        })

    } catch (err) {
        console.log(err);
        res.status(404).json({
            message: "Something went wrong",
            error: err
        })
    }
};


module.exports = createAndSaveToDo;