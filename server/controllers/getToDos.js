const ToDo = require('../models/toDoModel.js');

const getToDos = async (req, res) => {
    try {
        const todos = await ToDo.find({});

        res.status(200).json({
            message: 'Todos founded and fetched',
            info: todos
        });
    } catch (err) {
        res.status(500).json({
            message: 'Something went wrong',
            error: err
        })
    }
}

module.exports = getToDos;