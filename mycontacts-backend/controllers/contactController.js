const asyncHandler = require('express-async-handler');
/**
 * @type {import('../models/contactModel').Contact}
 */
const Contact = require('../models/contactModel');


//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContacts =asyncHandler(async(req,res)=>{
    const constacts = await Contact.find();
    res.status(200).json(constacts)
})


//@desc Get contact
//@route Get /api/contacts/:id
//@access public

const getContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if (!contact){
        res.status(404);
        throw new Error('Contact not Found')
    }
    res.status(200).json({message:`Getting contact`,data:contact})   
})

//@desc Create New contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async(req,res)=>{
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error('all fields are mandatory !')
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json({message:"Created Contact",data:contact})
})



//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if (!contact){
        res.status(404);
        throw new Error('Contact not Found')
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updatedContact)
})


//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if (!contact){
        res.status(404);
        throw new Error('Contact not Found')
    }
    await contact.remove();
    res.status(200).json({message:`Delete contact for ${req.params.id}`})
})






module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}