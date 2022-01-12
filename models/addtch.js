const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    TId : {
        type : String,
        required : true
    },
    pass :{
        type : String,
        required : true
    },
    date : {
        type : String
    },
    age : {
        type : Number,
        requried : true
    },
    gender : {
        type: String, 
        enum: ['male','female','other']
    },
    course : {
        type : String,
        required : true
    },
    contact : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    }
})

const Teacher = new mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;