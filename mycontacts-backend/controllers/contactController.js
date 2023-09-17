//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContacts = async(req,res)=>{
    res.status(200).json({message:`Getting all contacts`})
}


//@desc Get contact
//@route Get /api/contacts/:id
//@access public

const getContact = async(req,res)=>{
    res.status(200).json({message:`Getting contacts for ${req.params.id}`})
}

//@desc Create New contact
//@route POST /api/contacts
//@access public
const createContact = async(req,res)=>{
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error('all fields are mandatory !')
    }
    res.status(201).json({message:"Created Contact",data:req.body})
}



//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = async(req,res)=>{
    res.status(200).json({message:`Update contact for ${req.params.id}`})
}


//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = async(req,res)=>{
    res.status(200).json({message:`Delete contact for ${req.params.id}`})
}






module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}