const express=require("express")
const verifyJWT=require('../middleware/verifyJWT')
const verifyAdmin=require('../middleware/verifyAdmin')
const answerController=require("../controllers/answerController")
const router =express.Router()
router.put("/addAnswer",[verifyJWT,verifyAdmin],answerController.addAnswer)
router.put("/updateAnswer",[verifyJWT,verifyAdmin],answerController.updateAnswer)
router.put("/deleteAnswer",[verifyJWT,verifyAdmin],answerController.deleteAnswer)
router.put("/changeAnswerData",verifyJWT,answerController.changeAnswerData)


/*router.delete("/delete/:_id",verifyJWT,userController.deleteUser)*/
module.exports=router
