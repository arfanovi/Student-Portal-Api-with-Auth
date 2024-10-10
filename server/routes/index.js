const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');
const studentRoutes = require('./students');



router.use('/auth', authRoutes);
router.use('/students', studentRoutes)


module.exports = router;