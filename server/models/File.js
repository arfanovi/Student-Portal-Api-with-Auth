const mongoose = require('mongoose');


const fileSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    studentID :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    }
});


const File = mongoose.model('File', fileSchema);
module.exports = File;