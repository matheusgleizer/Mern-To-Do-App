const Todo = require('../models/toDoModel');

const deleteController = async (req, res) => {
    try {
        const deleted = await Todo.findByIdAndDelete(req.params.id);

        res.status(201).json({
            message: 'Todo removed',
            info: deleted
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: "Error deleting",
            error: err
        })
    }

}

module.exports = deleteController;