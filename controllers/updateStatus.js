const ToDo = require('../models/toDoModel');

const updateStatus = async (req, res) => {

    try {

        const id = req.body._id;

        const toUpdate = await ToDo.findById(req.body._id, (err, data) => {
            if (err) console.log(err);
            return data;
        });

        toUpdate.status = req.body.status; //update status

        toUpdate.save((err) => {
            if (err) console.log(err);
            console.log("updated");
        })
        res.status(200).json({
            message: "Status updated",
            info: toUpdate
        })

    } catch (err) {
        console.log(err);
        res.status(404).json({
            message: "Something went wrong",
            error: err
        })
    }

}

module.exports = updateStatus;