import { Button } from "primereact/button"
// import {useAddQuestionMutation}from './questions/questApiSlice'
// import Question from "./questions/Question"
import { useRef, useState } from "react"
// import QuestionDialog from "../surveys/questions/QuestionDialog"
import { useParams } from "react-router-dom"
import { useAddSurveyMutation, useStatusSurveyMutation, useUpdateSurveyMutation } from "./surveysApiSlice"
import { Inplace, InplaceContent, InplaceDisplay } from "primereact/inplace"
import { InputText } from "primereact/inputtext"
import { CascadeSelect } from 'primereact/cascadeselect';
import SegQuestion from "./SegQuestion"
import { useChooseSegQuestionMutation } from "../questions/questApiSlice"
const SegSurvey=(props)=>{
    const {survey,refetch}=props
    // let {type}=props
    let editor = useRef('')
const [saveDisable,setSaveDisable]=useState(false)
    let [text, setText] = useState(survey.questions.map(q=>{return{_id:q._id,text:q.segmentation.note}}));
    let [select,setSelect]=useState(survey.questions.map(q=>{return{_id:q._id,select:q.segmentation.kind}})||{_id:'',select:''})
    // const [ed,setEd]=useState(false)
    // const title=useRef('')
    //const [editt,setEditt]=useState(false)
//     const [text,setText]=useState(survey.title)
//     const [addSurveyFunc,{isError1,error1,isSuccess1,data1}]=useAddSurveyMutation()
//     // const [addQuestionFunc,{isError2,error2,isSuccess2,data2}]=useAddQuestionMutation()
  const [ChooseSegQuestionFunc, {isError, error, isSuccess,data}] =useChooseSegQuestionMutation()
    const chooseSegment = (e) => {
        // e.preventDefault();
        if(select){
         select.map(q=>ChooseSegQuestionFunc({_id:survey._id,questionId:q._id,kind:q.select.cname,note:text[text.indexOf(text.find(i=>i._id==q._id))].text}).then(()=>refetch()))}
         else{
            // console.log('no select');
         }
    };

    const [StatusSurveyFunc, {isError1, error1, isSuccess1,data1}] =useStatusSurveyMutation()
    const changeStatus = (e) => {
        // e.preventDefault();


        // console.log('errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
         StatusSurveyFunc({_id:survey._id,status:'completed'}).then(()=>{console.log('in trouble');refetch()}) 
        //  console.log('after all');
    };
    
    

    return(
        <>

       
        {survey?.questions.map(q=><SegQuestion select={select} setSelect={setSelect} text={text} setText={setText} question={q}/>)}
        {/* <Button onClick={()=>{addQuestion()}} icon="pi pi-plus" rounded />  */}
        <Button onClick={chooseSegment} icon="pi pi-save" rounded /> 
        <Button disabled={saveDisable} onClick={async()=>{await chooseSegment(); await setSaveDisable(true); changeStatus();}} icon="pi pi-send" rounded /> 
        </>
    )
}
export default SegSurvey



/*

        */