const mongoose  = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const DB = async() => {
    try{
        await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch{
        console.error('MongoDB Connection Error', error);
        process.exit(1);
    }
};

module.exports = DB;