const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();


const authMiddleware = (req, res, next ) => {
    const token = res.cookies.jwt;

    if(!token){
        return res.status(401).json({Message: "Unauthorized"})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch(error){
        console.error("AuthMiddleware Error", error);
        res.status(401).json({Message: "Unauthorized"})
    }
}

module.exports = authMiddleware;