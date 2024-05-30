const Survey=require('../models/Survey')
const addQuestion=async(req,res)=>{
    const{_id,body,answers}=req.body
    // console.log(body);
    // console.log(_id);

    if(!body){
        console.log('not body');

        return res.status(409).json({message:"require"})
    }
    const survey=await Survey.findById(_id).exec()
    if(!survey)
    {
        console.log('not survey');

        return res.status(400).json({message:"Survey not foundd"})    }

    const arr=[...survey.questions,{body:body,answers:answers}]
    let ind=arr.length-1;
    survey.questions=arr
    // if(answers)
    // {
    //     if(survey.questions[ind].body===body)
    //     {
    //         answers.forEach(a => {addAnswer(_id,survey.questions[ind]._id,a)
    //         });
    //     }
    // }
    console.log("survey#################################&&&&&&&&&&&&&&&&&&");
        console.log(survey.questions);
    const updatesurvey= await survey.save()
    return res.status(200).json({success:true,
        message:`question successfuly`,
    data:survey})
}

const updateQuestion=async(req,res)=>{
    const{_id,questionId,body}=req.body
    if(!body){
        return res.status(409).json({message:"require"})
    }
    const survey=await Survey.findById(_id).exec()
    if(!survey)
    {        
        console.log('1111111111111111111111111111111111111');
        return res.status(400).json({message:"Survey not found"})
    }
    const question=survey.questions.find(q=>q._id==questionId)
    if(!question)
    {
        console.log('2222222222222222222222222222222222222');

        return res.status(400).json({message:"Question not found"})
    }
        question.body=body
    const updatesurvey= await survey.save()
    return res.status(200).json({success:true,
        message:`Question updated successfuly`
        })
}
const deleteQuestion=async(req,res)=>{
    const{_id,questionId}=req.body
    const survey=await Survey.findById(_id).exec()
    
    if(!survey){
        return res.status(400).json({message:"Survey not found"})
    }
    const question=survey.questions.find(q=>q._id==questionId)
    if(!question)
    {
        return res.status(400).json({message:"Question not found"})
    }
    survey.questions.splice(survey.questions.indexOf(question),1)
    const updatesurvey= await survey.save()   
    return res.status(200).json({success:true,
            message:`Question deleted successfuly`
            })
    

}
const chooseSeg=async(req,res)=>{
    const{_id,questionId,kind,note}=req.body
    const survey=await Survey.findById(_id).exec()
    if(!survey){
        return res.status(400).json({message:"Survey not found"})
    }
    const question=survey.questions.find(q=>q._id==questionId)
    if(!question)
    {
        return res.status(400).json({message:"Survey not found"})
    }
if(kind)
{

    const kindArr=["תרשים עוגה","גרף","היסטוגרמה"]
    const k=kindArr.find(s=>s==kind)
    if(!k)
    {
        return res.status(401).json({message:"kind are not valid"})
    }
    
    question.segmentation.kind=kind
}

if(note)
    question.segmentation.note=note
const updatesurvey= await survey.save()   
return res.status(201).json({success:true,
            message:`Question updated successfuly`
            })
}



module.exports={addQuestion,updateQuestion,deleteQuestion,chooseSeg}