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


const login = async(req, res) => {
    try{
        const {email, password} =req.body;

        const student = await Student.findOne({email});
        if(!student){
            return res.status(400).json({Message: 'Invalid User'});
        }

        const isPasswordMatch = await bcryptjs.compare(password, student.password);
        if(!isPasswordMatch){
            return res.status(400).json({Message: 'invalid Password'});
        }

        const token = jwtHelper.generateToken(student._id);
        res.cookie('jwt', token, {httpOnly: true});
        res.status(201).json({
            Message: 'Login Successful',
            student: {
                id: student._id,
                name: student.name,
                email: student.email
            },
            token,
        
        })
    } catch(error){
        console.error('Login Error', error);
        res.status(500).json({Message: 'Login Failed'});
    }
};



module.exports = {register , login};