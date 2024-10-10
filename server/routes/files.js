const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const fileUploadMiddleware = require('../middleware/fileUploadMiddleware');
const fileController = require('../controllers/fileController');

router.post('/upload', authMiddleware, fileUploadMiddleware.single('file'), fileController.uploadFile);


module.exports = router