const express = require('express')
const router = express.Router()
const sendEmailToUser = require('../services/mail');


router.post('/', (req,res)=>{
    try{
        if(sendEmailToUser(req.body.to,req.body.title,req.body.html))
            return res.json({ msg: "ההודעה נשלחה בהצלחה" })
        else res.status(503).json({ msg: "שליחת ההודעה נכשלה" })
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router