//const db = require('./config/mongoose')
const todolist = require('../models/todolist');


// controller for home page
module.exports.home = function(req, res) {
    //fetching data from database
    todolist.find().then(function(task, err) {
        if (err) {
            console.log('Error in fetching list from db');
            return;
        }
        return res.render('home', {
            title: "Doo Itt!",
            todolist: task
        });
    });

};

// controller for adding task
module.exports.add = (req, res) => {
    console.log(req.body);
    todolist.create(req.body)
        .then((task) => {
            console.log(task);
            return res.redirect('/');
        })
        .catch((err) => {
            console.log('error in creating the list');
            return;
        });
};
// controller for deleting task
module.exports.delete = function(req, res) {

    //getting the id of selected boxes
    let id = req.query;
    console.log(id);

    //gives the length of the selected checkboxes
    let checkboxes = Object.keys(id).length;

    //iterating over each selected boxes
    for (let i = 0; i < checkboxes; i++) {
        // find the item in the database using id and delte it
        todolist.findByIdAndDelete(Object.keys(id)[i], function(err) {
            if (err) {
                console.log("error in deleteing the item");
                return;
            }

        })
    }
    return res.redirect('back');
};