const Survey = require("../models/Survey");
const add=async(req,res)=>{
    console.log("add server");
    let {title,sex,sector,age,questions} = req.body
    // sector=='h'?sector='חרדי':sector=='hi'?sector='חילוני':sector=='l'?sector='לא משתייך':sector=='m'?sector='מסורתי':sector=='d'?sector='דתי לאומי':sector=null;
    // sex=='m'?sex='זכר':sex=='f'?sex='נקבה':sex=null;
console.log("survey");
    console.log("add survey");
    if (!title) {
        console.log('!title');
        return res.status(400).json({message:'required field is missing'})
        }
    if(questions){questions.forEach(q => {
        if(!q.body)
            return res.status(409).json({message:"required"})
        q.answers?.forEach(a=>{if(!a.body)  return res.status(409).json({message:"required"})}
        )
    })};
    const survey = await Survey.create({title,sex,sector,age,questions})
    if(survey){
        // if(questions)
        // {
        //    return questions.forEach(q => {addQuestionWithSurvey(survey,q.key,q.val,res)
        //     });
        // }
       return res.status(201).json({success:true,
            message:`survey ${survey.title}created successfuly`,
            data:survey
            })
    }
    return res.status(401).json({message:'survey not found'})
   
}
    
const getAllSurveys=async(req,res)=>{

    const {status}=req.query
    
    let surveys=null
    if(status)
    {
   
            surveys=await Survey.find({status}).lean()
        }

        
    // }  
    else
    {
        surveys=await Survey.find().lean()
        console.log('8'+surveys);

    }
        


    if(!surveys)
    {
        console.log('nooooooooooooooooooooooooooooooooooooooooooooo');
        console.log('3');

        return res.status(401).json({message:"not found"})
    }
    console.log(surveys[0]);

    return res.json(surveys)
}
const getSurveyById=async(req,res)=>{
    const {_id}=req.body
    const survey=await Survey.findById(_id).lean()
    if(!survey)
    {
        
            return  res.status(401).json({message:"not found"})
    }
        return res.json(survey)
    

}
const updateSurvey=async(req,res)=>{
    const {_id,title,sex,sector,birthDate,age,questions}=req.body
    
   
   sex?console.log(sex):console.log('!sex');
   const survey=await Survey.findById(_id).exec()

    if(!survey){
    return res.status(401).json({message:"not found"})
    }
  
        if(title){
            survey.title=title
        }
             if(sex){
            const arr=['זכר','נקבה','לא מוגבל'];
            const sexx=arr.find(s=>s==sex);
            if(!sexx)
            return res.status(401).json({message:"status is not valid"})
            survey.sex=sex
        }
        
        if(sector){
        const arr1=["חרדי","חילוני","דתי לאומי","מסורתי","לא משתייך"]
        const sec=arr1.find(sector=>sector==sector)
        if(!sec)
            return res.status(401).json({message:"status is not valid"})
        survey.sector=sector
        }
       
        if(age)
            survey.age=age;
        
  
        if(questions){
        survey.questions=questions
        
      }

        const MyUpdatesurvey=await survey.save()
        return res.status(201).json({success:true,
            message:`survey ${survey.title}updated successfuly`,
            })
    }
  

const deleteSurvey=async(req,res)=>{
    const {_id}=req.body
    const survey=await Survey.findById(_id).exec()
if(!survey){
    return res.status(401).json({message:"not found"})

    }
        await survey.deleteOne()
        return res.status(201).json({success:true,
            message:`one survey deleted successfuly`
            })
        }
       
const changeStatus=async(req,res)=>{
    const {_id,status}=req.body
   console.log('welcome');
    const survey=await Survey.findById(_id).exec()

    if(!survey){

        console.log('!survey');

    return res.status(401).json({message:"not found"})
    }
    
    
        if(status){
            
            console.log(status);
            const arr1=["creating","in process","closed","completed" ]
            const s=arr1.find(s=>s==status)
            if(!s)
            {
                console.log('!s');

                 return res.status(401).json({message:"status is not valid"})
            }
            survey.status=status
                    
        
       
        const MyUpdatesurvey=await survey.save()
        console.log('after');
        return res.status(201).json({success:true,
            message:`survey ${survey.title} updated successfuly`,
            })}
            else{
                return res.status(400).json({message:'no status'})
            }
    }
    const changeCount=async(req,res)=>{
        const {_id}=req.body
       
        const survey=await Survey.findById(_id).exec()
    
        if(!survey){
        return res.status(401).json({message:"not found"})
        }
      
        survey.count=survey.count+1;
            
        
            const MyUpdatesurvey=await survey.save()
            return res.status(201).json({success:true,
                message:`survey ${survey.title}updated successfuly`
                })
        }
        
       
     module.exports={add,getAllSurveys,deleteSurvey,updateSurvey,getSurveyById,changeStatus,changeCount}