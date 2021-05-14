const mongoose = require('mongoose');

var toDoSchema = new mongoose.Schema({
    todo: {
        type: String,
        require: [true, "A todo is required!"]
    },
    date: String,
    description: String,
    status: String,
})

var ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = ToDo;