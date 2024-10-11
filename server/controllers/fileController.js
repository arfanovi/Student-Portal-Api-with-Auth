const File = require('../models/File');
// const path = require('path');
// const fs = require('fs');


const uploadFile = async (req, res) => {
    try{
        const file = req.file;

        if(!file){
            return res.status(400).json({message: 'File not found'});
        }

        if(!req.user_id){
            return res.status(400).json({message: 'Student ID is Required'});
        }
        const newFile = new File({
            name: file.originalname,
            type: file.mimetype,
            size: file.size,
            path: file.path,
            studentId: req.user_id
        });

        await newFile.save();
        res.status(200).json({Message: 'File Uploaded Successfully'});
        // res.status(200).json({file});

    } catch(error){
        console.error('Upload File Error', error);
        res.status(500).json({message: 'Failed to upload file'});
    }
}



const getFile = async(req, res)=>{

    try{
        const files = await File.find({studentId: req.user.id}, 'name');


        if(!files || files.length === 0){
            return res.status(400).json({message: 'No Files Found'});
        }

        return res.status(200).json({files});

    } catch(error){
        console.error('Get Files Error:', error);
        return res.status(500).json({message: 'Failed to get files'});
    }
}


module.exports = {uploadFile, getFile}