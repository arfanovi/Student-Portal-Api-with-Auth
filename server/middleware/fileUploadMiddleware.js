const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) =>{
        cb(null, Date.now() + '-' + file.original);
    }
});

const upload = multer({ storage });

module.exports = upload;



