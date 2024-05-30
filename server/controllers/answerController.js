const Survey=require('../models/Survey')
const User=require('../models/User')

const addAnswer=async(req,res)=>{
    const{_id,questionId,body}=req.body
    if(!body){
        return res.status(409).json({message:"require"})
    }
    const survey=await Survey.findById(_id).exec()
    if(!survey)
    {
        return res.status(401).json({message:"Survey not found"})
    }
    const question=survey.questions.find(q=>q._id==questionId)
    if(!question)
    {
        return res.status(400).json({message:"Question not found"})
    }
    const arr=[...question.answers,{body}]
    question.answers=arr

    const updatesurvey= await survey.save()
    return res.status(200).json({success:true,
        message:`Answer successfuly`,
        data:question
        })
}

const updateAnswer=async(req,res)=>{
    const{_id,questionId,answerId,body}=req.body
    if(!body){
        return res.status(409).json({message:"require"})
    }
    const survey=await Survey.findById(_id).exec()
    if(!survey)
    {
        return res.status(401).json({message:"Survey not found"})
    }
    const question=survey.questions.find(q=>q._id==questionId)
    if(!question)
    {
        return res.status(400).json({message:"Question not found***************"})
    }
    console.log(question);
    const answer=question.answers.find(a=>a._id==answerId)
            if(!answer)
            {
                return res.status(400).json({message:"No answer founda"})
            }
    answer.body=body
    const updatesurvey= await survey.save()
    return res.status(200).json({success:true,
        message:`answer updated successfuly`
        })
}
const deleteAnswer=async(req,res)=>{
    const{_id,questionId,answerId}=req.body
   
    const survey=await Survey.findById(_id).exec()
    if(!survey)
    {
        return res.status(401).json({message:"Survey not found"})
    }
    const question=survey.questions.find(q=>q._id==questionId)
    if(!question)
    {
        return res.status(400).json({message:"Question not found***************"})
    }
    console.log(question);
    const answer=question.answers.find(a=>a._id==answerId)
            if(!answer)
            {
                return res.status(400).json({message:"No answer founda"})
            }
    question.answers.splice(question.answers.indexOf(answer),1)
    const updatesurvey= await survey.save()   
    return res.status(201).json({success:true,
            message:`one answer deleted successfuly`
            })
    

}

    
        const changeAnswerData=async(req,res)=>{
            const{_id,questionId,answerId}=req.body
            const survey=await Survey.findById(_id).exec()
            const user=await User.findById(req.user._id).exec()
            if(!survey){
                return res.status(400).json({message:"No survey founds"})
            }
            const question=survey.questions.find(q=>q._id==questionId)
            if(!question)
            {
                return res.status(400).json({message:"No question found"})
            }
            const answer=question.answers.find(a=>a._id==answerId)
            if(!answer)
            {
                return res.status(400).json({message:"No answer found"})
            }
            answer.count=answer.count+1
            user.sector=='חרדי'? answer.sector.haradi+=1:
            user.sector=='חילוני'?answer.sector.hiloni+=1:
            user.sector=='מסורתי'?answer.sector.masorty+=1:
            user.sector=='דתי לאומי'?answer.sector.datal+=1:
            answer.sector.loMeshtaieh+=1
            
            user.sex=='זכר'?answer.sex.male+=1:
            answer.sex.female+=1
        
            const age=(Date.now()-user.birthDate)/1000/60/60/24/365
            age<=10?answer.age.tens+=1:
            age>10 && age<=20? answer.age.twentys+=1:
            age>20 && age<=30? answer.age.thirdys+=1:
            age>30 && age<=40? answer.age.fourthys+=1:
            age>40 && age<=50? answer.age.fiftys+=1:
            age>50 && age<=60? answer.age.sixtys+=1:
            age>60 && age<=70? answer.age.seventys+=1:
            age>70 && age<=80? answer.age.eightys+=1:
            age>80 && age<=90? answer.age.nintys+=1:
            age>90 && age<=100? answer.age.old+=1:
            answer.age.full+=1
        console.log(age);
            const MyUpdatesurvey=await survey.save()
            return res.status(201).json({success:true,
                message:`survey ${survey.title} updated successfuly`
                })
            }
   
   
           
            
module.exports={addAnswer,updateAnswer,deleteAnswer,changeAnswerData}