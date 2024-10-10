const Student  = require('../models/Student');
const jwtHelper = require('../utils/jwtHelper');
const bcryptjs = require('bcryptjs');



const register = async( req, res) => {
    try{
        const {name, email, password} = req. body;
        const existingStudent = await Student.findOne({email});

        if(existingStudent){
            return res.status(400).json({message: "Student already exists"});
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        const newStudent = new Student({
            name, email, password: hashedPassword,
        });

        await newStudent.save();
        
        const token = jwtHelper.generateToken(newStudent._id);

        res.cookie('jwt', token, {httpOnly: true});
        res.status(201).json({Message: "Student Registration Successfully"});

    } catch (error){
        console.log('Registration Error', error);
        res.status(500).json({Message: "Registration Failed"});
    }
};



module.exports = {register};