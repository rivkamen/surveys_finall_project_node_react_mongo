const jwt=require('jsonwebtoken')
const verifyAdmin=(req,res,next)=>{
    // const authHeader=req.headers.authorization||req.headers.Authorization
    // if(!authHeader?.startsWith('Bearer'))
    //     return res.status(401).json({message:"unauthorized"})
    // const token=authHeader.split(' ')[1]
    // jwt.verify(
    //     token,
    //     process.env.ACCESS_TOKEN_SECRET,
    //     (err,decoded)=>{
    //         if(err) return res.status(403).json({message:'forbidden'})
    //         req.user=decoded
    console.log(req.user);
    if(!req.user.roles=='admin')
    {
        return res.status(403).json({message:'forbiddenad'})
    }
      next()
}   
module.exports=verifyAdmin