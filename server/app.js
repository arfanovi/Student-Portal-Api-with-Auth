const express = require('express');
const connectDB = require('./config/database');
const dotenv = require('dotenv');
const routes = require('./routes/index');

dotenv.config();
const app = express();
connectDB();

// Middleware to parse JSON request bodies 
app.use(express.json());

app.use('/api', routes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is Connected on PORT ${PORT}`)
});

