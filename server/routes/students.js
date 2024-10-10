const express = require('express');
const router = express.Router();
const {getStudents, updateProfile} = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/profile', authMiddleware, getStudents);
router.put('/profile', authMiddleware, updateProfile)


module.exports = router;