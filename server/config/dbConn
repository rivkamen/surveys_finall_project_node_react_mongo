const mongoose=require("mongoose")
const conectDB=async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URI)

        }
        catch(err){
            console.error("error conection to DB"+err)
        }
    }
    module.exports=conectDB