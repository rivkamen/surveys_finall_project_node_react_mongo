const mongoose=require("mongoose")
const Survey = require("./Survey")
const usereSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    birthDate:{
        type:Date,
        immuteable:true
    },
       
    sex:{
        type:String,
        enum:["זכר","נקבה"],


    },
    sector:{
        type:String,
        enum:["חרדי","חילוני","דתי לאומי","מסורתי","לא משתייך"],
        
    },
    email:{
        type:String,
        lowercase:true,
        trim:true
    },
     roles:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    surveys:{
        type:[mongoose.Types.ObjectId],
        ref:Survey
    }
    },
    
    {
        timestamps:true
        }
    

 )
module.exports=mongoose.model("User",usereSchema)