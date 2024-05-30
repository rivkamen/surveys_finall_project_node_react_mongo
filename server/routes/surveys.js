const express=require("express")
const verifyJWT=require('../middleware/verifyJWT')
const verifyAdmin=require('../middleware/verifyAdmin')

//const cors=require("cors")
// const Survey=require("../models/Survey")
const SurveyController=require("../controllers/surveyController")
const router =express.Router()
router.post("/add",[verifyJWT,verifyAdmin],SurveyController.add)
router.get("/",verifyJWT,SurveyController.getAllSurveys)
router.get("/id",[verifyJWT,verifyAdmin],SurveyController.getSurveyById)
router.put("/update",[verifyJWT,verifyAdmin],SurveyController.updateSurvey)
router.delete("/delete",[verifyJWT,verifyAdmin],SurveyController.deleteSurvey)
router.put("/count",[verifyJWT,verifyAdmin],SurveyController.changeCount)
router.put("/status",[verifyJWT,verifyAdmin],SurveyController.changeStatus)


module.exports=router
