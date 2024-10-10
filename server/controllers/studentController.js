const Student = require('../models/Student');
const File = require('../models/File');

const getStudents = async(req, res) => {
    try{
        const student = await Student.findById(req.user.id).select('-password');
        const files = await File.find({ studentId: req.user._id})
        res.status(200).json({student, files});
    } catch(error){
        console.error('Get Profile Error', error);
        res.status(500).json({message: 'Failed to get profile'});
    }
}


const updateProfile = async(req, res) => {
    try{
        const student = await Student.findByIdAndUpdate(req.user.id, req.body , {new:true });
        res.status(200).json({student});

    } catch(error){
        console.error('Update Profile Error', error);
        res.status(500).json({message: 'Failed to update profile'});

    }
}






module.exports = {getStudents, updateProfile};