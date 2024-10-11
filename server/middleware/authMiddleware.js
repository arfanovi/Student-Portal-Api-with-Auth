const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


dotenv.config();


const authMiddleware = (req, res, next ) => {
    
    // const token = req.cookies.jwt;
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    console.log("Received Token", token);

    if(!token){
        return res.status(401).json({Message: "Unauthorized"})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        req.user_id = decoded.id;
        next();
    } catch(error){
        console.error("AuthMiddleware Error", error);
        res.status(401).json({Message: "Unauthorized"})
    }
}

module.exports = authMiddleware;