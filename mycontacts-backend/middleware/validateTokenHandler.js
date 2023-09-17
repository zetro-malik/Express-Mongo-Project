const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');


const validateToken = asyncHandler(async(req,res,next)=>{
    let token;
    // either from headers or from auth section
    let authHeader = req.headers.authorization || req.headers.Authorization
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(' ')[1]
        jwt.verify(token,process.env.ACCESS_TOKEN_SECERT, (err,decoded)=>{
            if(err){
                res.status(401);
                throw new Error('User is not authorized')
            }
            req.user = decoded.user
            next();
        });
        if(!token){
            res.status(401);
            throw new Error('Tokken is missing');
        }
    }
})

module.exports = validateToken