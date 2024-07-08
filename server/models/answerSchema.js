const mongoose=require("mongoose")
const answerSchema=new mongoose.Schema({
    
    body:{
        type:String,
        require:true
    },

   
    count:{
            type:Number,
            default:0
        },
    sector:{חרדי:{type:Number,default:0},חילוני:{type:Number,default:0},דתל:{type:Number,default:0},לאמשתייך:{type:Number,default:0},מסורתי:{type:Number,default:0}},
    age:{tens:{type:Number,default:0},twentys:{type:Number,default:0},thirdys:{type:Number,default:0},fourthys:{type:Number,default:0},fiftys:{type:Number,default:0},sixtys:{type:Number,default:0},seventys:{type:Number,default:0},eightys:{type:Number,default:0},nintys:{type:Number,default:0},full:{type:Number,default:0},old:{type:Number,default:0}},
    gender:{זכר:{type:Number,default:0},נקבה:{type:Number,default:0}}
   },
    {
        timestamps:true
    })
module.exports=answerSchema