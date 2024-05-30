const express=require("express")
const verifyJWT=require('../middleware/verifyJWT')
const verifyAdmin=require('../middleware/verifyAdmin')
const questionController=require("../controllers/questionController")
const router =express.Router()
router.put("/addQuestion",[verifyJWT,verifyAdmin],questionController.addQuestion)
router.put("/updateQuestion",[verifyJWT,verifyAdmin],questionController.updateQuestion)
router.put("/deleteQuestion",[verifyJWT,verifyAdmin],questionController.deleteQuestion)
router.put("/chooseSeg",[verifyJWT,verifyAdmin],questionController.chooseSeg)


/*router.delete("/delete/:_id",verifyJWT,userController.deleteUser)*/
module.exports=router
