const mongoose = require('mongoose');

// defined schema of the db
const listSchema = new mongoose.Schema({


    // for description of the task
    desc: {
        type: String,
        required: true
    },

    // for category of the task
    cat: {
        type: String,
        required: true
    },

    // for due date of the task
    date: {
        type: Date,
        required: true
    }
});

const todolist = mongoose.model('todolist', listSchema);

module.exports = todolist;