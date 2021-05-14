var router = require('express').Router();

const createAndSaveToDo = require('../controllers/createAndSaveToDo');
const getToDos = require('../controllers/getToDos.js');
const deleteController = require('../controllers/deleteTodo.js')
const updateStatus = require('../controllers/updateStatus');

router.post('/create', createAndSaveToDo);
router.get('/', getToDos);
router.delete('/delete/:id', deleteController);
router.put('/update', updateStatus);


module.exports = router;