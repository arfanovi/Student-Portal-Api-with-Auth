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




module.exports = {uploadFile}