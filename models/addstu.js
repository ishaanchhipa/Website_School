const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mname: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    reg: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        requried: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    },
    cls: {
        type: String,
            required: true
    },
    contact: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})
const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;