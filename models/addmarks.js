const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    reg : {
        type : String,
        required : true
    },
    course : {
        type: String, 
        enum: ['english','maths','science','social']
    },
    marks : {
        type : Number,
        required : true
    }
})

const Marks = new mongoose.model("Marks", marksSchema);

module.exports = Marks;