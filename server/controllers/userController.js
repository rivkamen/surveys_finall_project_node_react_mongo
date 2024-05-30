const User = require("../models/User");
const add=async(req,res)=>{
    const {username,password,name,birthDate,sex,sector,email} = req.body
    if (!name || !username || !password) {
        return res.status(400).json({message:'required field is missing'})
        }
        if(!(sex in ["זכר","נקבה"]) || !(sector in ["חרדי","חילוני","דתי לאומי","מסורתי","לא משתייך"]) )
        {
            return res.status(401).json({message:"sex or sector are not valid"})
        }
    let roles;
    const duplicate=await User.findOne({username:username}).lean()
    if(duplicate)
        res.status(409).json({message:"duplicate username"})
    
    if(password==process.env.ADMIN)
    {
        roles='admin';
    }
    const hashedPwd = await bcrypt.hash(password, 10)
    const userObject= {username,password:hashedPwd,name,email,phone}
    const user = await User.create(username,password,name,birthDate,sex,sector,email,roles)
    if(user){
       return res.status(201).json({success:true,
            message:`user ${user.name}created successfuly`,
            })
    }
    else
        return res.status(400).json({message:"failed"})
      
}
const getAllUsers=async(req,res)=>{
    const users=await User.find({},{password:0,username:0}).lean()
    if(!users)
    {
        return res.status(401).json({message:"not found"})
    }
    return res.json(users)
}
const getUserById=async(req,res)=>{
    let {id}=req.query
    id=req.user._id;

    // let myId=req.user._id;
    // if(id==='')
    // {
    //     id=req.user._id
    // } 
    
    // console.log(id);
        
    const user=await User.findById({_id:id},{password:0}).lean()
    console.log(user);
    if(!user)
    {
            return  res.status(401).json({message:"not found"})
    }
    if(user._id==req.user._id){
        return res.json(user)
    }
    console.log(user._id);
    console.log(req.user._id);
    return res.status(405).json({message:"unaouthorisedid"})

}
const UpdateUser=async(req,res)=>{
    const {_id,username,password,name,sector,email}=req.body
    console.log("11111");
    const user=await User.findById(_id).exec()

    if(!user){
    return res.status(401).json({message:"not found"})
    }
    if(user._id==req.user._id){
        if(username){
            user.username=username
        }
        if(password){
            user.password=password
        }
        if(name){
            user.name=name;
        }
        if(sector){
            console.log("22222");

            if(!sector in ["חרדי","חילוני","דתי לאומי","מסורתי","לא משתייך"])
            {
                console.log(sector);
                 user.sector=sector;
            }
           
        }
        if(email)
        {
            user.email=email;
        }
        
    
        const MyUpdateUser=await user.save()
        return res.status(201).json({success:true,
            message:`user ${user.name}updated successfuly`,
            })
    }

return res.status(405).json({message:"unaouthorised"})

}
// const updateUserSurvey=async(req,res)=>{
//     const {_id,survey}=req.body
//     console.log("11111");
//     const user=await User.findById(_id).exec()
//     if(!user){
//         return res.status(401).json({message:"not found"})
//         }
//         if(user._id==req.user._id){
//             if(survey){
//                 user.surveys=[...surveys,survey._id]
//             }
//             const MyUpdateUser=await user.save()
//             return res.status(201).json({success:true,
//                 message:`user ${user.name}updated successfuly`,
//                 })
//         }
    
//     return res.status(405).json({message:"unaouthorised"})
    
// }
const deleteUser=async(req,res)=>{
    const {_id}=req.body
    const user=await User.findById(_id).exec()
if(!user){
    return res.status(401).json({message:"not found"})

    }
    if(user._id==req.user._id){
        await user.deleteOne()
        return res.status(201).json({success:true,
            message:`one user deleted successfuly`
            })
        }
    return res.status(405).json({message:"unaouthorised"})
        /* const {id}=req.params
    const user=await User.findById(id).exec()
if(!user){
    return res.status(401).json({message:"not found"})

    }
     if(user._id==req.user._id){
        await user.deleteOne()
        return res.status(201).json({success:true,
            message:`one user deleted successfuly`
            })
        }
    return res.status(405).json({message:"unaouthorised"})*/
}
const addSurvey=async(req,res)=>{
    const {_id,survey}=req.body
   
    const user=await User.findById(_id).exec()
    if(!user){
        return res.status(401).json({message:"not found"})
        }
    if(user._id==req.user._id){
        user.surveys=[...user.surveys,survey]
    
    const MyUpdateUser=await user.save()
        return res.status(201).json({success:true,
            message:`user ${user.name}updated successfuly`,
            })
    }
    return res.status(405).json({message:"unaouthorised"})


}
module.exports={add,getAllUsers,deleteUser,UpdateUser,getUserById,addSurvey}