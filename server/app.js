const express = require('express');
const dotenv = require('dotenv').config();
const toDoRoutes = require('./routes/toDoRoutes');
const mongoose = require('mongoose');
const cors = require('cors');


//Initialize app and port
const app = express();
const PORT = 5050;

app.use(cors());

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


//Database
mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`)))
    .catch(err => console.log(err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(`we're connected!`);
});


//HTTP Methods
app.use('/todo', toDoRoutes);