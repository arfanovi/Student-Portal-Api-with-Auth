const express = require('express');
const router = express.Router();
const {getStudents} = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/profile', authMiddleware, getStudents);


module.exports = router;