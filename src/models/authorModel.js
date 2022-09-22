const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    version : {
        type : String,
        required : true
    },
    toDoList : {
        type : Array,
        default : []
    }

    
}, {timestamps : true})

module.exports = mongoose.model('Author', authorSchema)