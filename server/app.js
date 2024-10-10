const express = require('express');
const connectDB = require('./config/database');
const dotenv = require('dotenv');
const routes = require('./routes/index');
const cookieParser = require('cookie-parser');



// const bodyParser = require('body-parser');
// const cors = require('cors');


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());



dotenv.config();
const app = express();
connectDB();

// Middleware to parse JSON request bodies 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use('/api', routes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is Connected on PORT ${PORT}`)
});

