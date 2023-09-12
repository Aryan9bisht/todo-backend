const express = require('express');
const path = require('path');
const port = 8009;
const db = require('./config/mongoose');
const todo = require('./models/todolist');
const app = express();

app.set('view engine', 'ejs');
app.use('/', require('./routes'));
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('assets'));


app.listen(port, function(err) {
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
});