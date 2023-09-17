const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")
const jwt  = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const dotevn = require('dotenv').config();

//@desc Register User
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async(req,res)=>{
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error('all fields are mandatory !')
    }
    const userAvailable = await User.findOne({email})
    if (userAvailable){
        res.status(400);
        throw new Error("User already registered!")
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({
        username,
        email,
        password:hashedPassword
    })
    if(user){
        console.log(user)
        res.status(201).json({_id:user.id,email:user.email})
    }else{
        res.status(400);
        throw new Error("User data is not valid")
    }
})

//@desc Login User
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    if( !email || !password){
        res.status(400);
        throw new Error('all fields are mandatory !')
    }
    const userAvailable = await User.findOne({email});
    if (userAvailable && (await bcrypt.compare(password, userAvailable.password))){
        const accessToken = jwt.sign({
            user:{
                username:userAvailable.username,
                email:userAvailable.email,
                id:userAvailable.id,
            }
        },
        process.env.ACCESS_TOKEN_SECERT,
        {
            expiresIn:"5m"
        }
        )
        console.log(accessToken);
        res.status(201).json({accessToken})
      
    }else{
        res.status(400);
        throw new Error("Incorrent email or password")
    }

    

})


//@desc Current User
//@route Get /api/users/current
//@access private
const currentUser = asyncHandler(async (req,res)=>{
    res.json(req.user)
})

module.exports = {
    registerUser,
    loginUser,
    currentUser
};