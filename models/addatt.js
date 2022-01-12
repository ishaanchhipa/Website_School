const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    reg : {
        type : String,
        required : true
    },
    date: {
        type: String
    },
    Attendance: {
        type: String,
        enum: ['Present', 'Absent']
    }
})

const Attendance = new mongoose.model("Attendance", attendanceSchema);

module.exports = Attendance;