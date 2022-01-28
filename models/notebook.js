const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const notebookSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const Notebook = mongoose.model('Notebook', notebookSchema);

module.exports = Notebook;