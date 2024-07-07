const mongoose=require("mongoose")
const answerSchema= require("./answerSchema")
const questionSchema=new mongoose.Schema({
    body:{
        type:String,
        required:true
    },
    answers:[answerSchema],
segmentation:{
    kind:{
        type:String,
        enum:["תרשים מקלות מורכב","תרשים עוגה","גרף","היסטוגרמה"],
        default:"תרשים עוגה"
    },
    note:{
        type:String
    },
    choose:{
        type:String,
        enum:["גיל","מגדר","מגזר"],
        default:"מגזר"
    }

}
},
    {
        timestamps:true
    })
module.exports=questionSchema