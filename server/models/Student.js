const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required:true
    },
    profilePicture: {
        type:String,
        default:"null"
    },
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;