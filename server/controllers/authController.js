const User=require("../models/User")
const bcrypt=require("bcrypt")
const jwt= require('jsonwebtoken')
const login=async(req,res)=>{
    const {username, password} = req.body
    if (!username || !password) 
        return res.status(400).json({message:'required field is missing'})
    const user=await User.findOne({username}).lean()
    if(user){
        const match = await bcrypt.compare(password,user.password)
        if(match){
            const userInfo= {_id:user._id,name:user.name,username:user.username,roles:user.roles}
            const token = jwt.sign(userInfo,process.env.ACCESS_TOKEN_SECRET)
            return res.json({token:token})
        }
        else
            return res.status(401).json({message:"unauthorized"})
    }
    else
        res.status(401).json({message:"unauthorized"})
}
const register=async(req,res)=>{
   

    const {username,password,name,birthDate,sex,sector,email} = req.body
   
    let roles;
    if (!name || !username || !password) {
        console.log(name);
        console.log(username);
        console.log(password);

        console.log("here");
        return res.status(400).json({message:'required field is missing'})
        }
    const duplicate=await User.findOne({username:username}).lean()
    if(duplicate)
       return res.status(409).json({message:"duplicate username"})
    if(password==process.env.ADMIN)
    {
            roles='admin';
    }
    const hashedPwd = await bcrypt.hash(password, 10)
    const userObject= {username,password:hashedPwd,name,birthDate,sex,sector,email,roles}
    const user = await User.create(userObject)
    if(user){
       return res.status(201).json({success:true,
            message:`user ${user.name}created successfuly`,
            })
    }
    else
        return res.status(400).json({message:"failed"})
}
module.exports={login,register}