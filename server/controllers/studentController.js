const Student = require('../models/Student');

const getStudents = async(req, res) => {
    try{
        const student = await Student.findById(req.user.id).select('-password');
        res.status(200).json({student});
    } catch(error){
        console.error('Get Profile Error', error);
        res.status(500).json({message: 'Failed to get profile'});
    }
}





module.exports = {getStudents};