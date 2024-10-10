const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const studentRoutes = require('./students');

const fileRoutes = require('./files');



router.use('/auth', authRoutes);
router.use('/students', studentRoutes);
router.use('/file', fileRoutes);


module.exports = router;