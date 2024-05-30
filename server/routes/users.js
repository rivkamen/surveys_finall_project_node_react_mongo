const express=require("express")
const verifyJWT=require('../middleware/verifyJWT')
const verifyAdmin=require('../middleware/verifyAdmin')

//const cors=require("cors")
const User=require("../models/User")
const userController=require("../controllers/userController")
const router =express.Router()
console.log('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111');

router.post("/add",verifyJWT,userController.add)
router.get("/"/*,[verifyJWT,verifyAdmin]*/,userController.getAllUsers)
router.get("/id",verifyJWT,userController.getUserById)
router.put("/update",verifyJWT,userController.UpdateUser)
router.delete("/delete",verifyJWT,userController.deleteUser)
router.put("/surveys",verifyJWT,userController.addSurvey)

console.log('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111');

/*router.delete("/delete/:_id",verifyJWT,userController.deleteUser)*/
module.exports=router
