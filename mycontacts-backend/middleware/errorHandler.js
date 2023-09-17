
// this middleware will work for error
const errorHandler = (err,req,res,next)=>{
 
 const statusCode =  res.statusCode ? res.statusCode : 500;
 switch(statusCode){
    case 400:
 res.json({title:"Validation Failed", message:err.message,stackTrace:err.stack})

        break;
 }
 res.json({title:"Not Found", message:err.message,stackTrace:err.stack})
 next();
}

module.exports = errorHandler