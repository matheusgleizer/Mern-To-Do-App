const express = require('express');
const dotenv = require('dotenv').config();
const toDoRoutes = require('./routes/toDoRoutes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


//Initialize app and port
const app = express();
const PORT = process.env.PORT || 5000;

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


//Use Routes
app.use('/todo', toDoRoutes);

//Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}