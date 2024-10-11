const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const fileUploadMiddleware = require('../middleware/fileUploadMiddleware');
const fileController = require('../controllers/fileController');
const {getFile, deleteFile} = require('../controllers/fileController');

router.post('/upload', authMiddleware, fileUploadMiddleware.single('file'), fileController.uploadFile);

router.get('/getFiles', authMiddleware, getFile);

router.delete('/files/:fileId', authMiddleware, deleteFile);


module.exports = router