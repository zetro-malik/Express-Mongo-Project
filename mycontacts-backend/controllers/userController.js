const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")

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
    
    res.status(200).json("registered")
})

//@desc Login User
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async(req,res)=>{
    res.json({message:"login the user"})
})


//@desc Current User
//@route Get /api/users/current
//@access private
const currentUser = asyncHandler(async (req,res)=>{
    res.json({message:"this is the current user"})
})

module.exports = {
    registerUser,
    loginUser,
    currentUser
};