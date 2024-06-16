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
  
  const [ChooseSegQuestionFunc, {isError, error, isSuccess,data}] =useChooseSegQuestionMutation()
    const chooseSegment = (e) => {
        if(select){
         select.map(q=>ChooseSegQuestionFunc({_id:survey._id,questionId:q._id,kind:q.select.cname,note:text[text.indexOf(text.find(i=>i._id==q._id))].text}).then(()=>refetch()))}
         else{
         }
    };

    const [StatusSurveyFunc, {isError1, error1, isSuccess1,data1}] =useStatusSurveyMutation()
    const changeStatus = (e) => {


         StatusSurveyFunc({_id:survey._id,status:'completed'}).then(()=>{console.log('in trouble');refetch()}) 
        
    };
    
    

    return(
        <>

       
        {survey?.questions.map(q=><SegQuestion select={select} setSelect={setSelect} text={text} setText={setText} question={q}/>)}
        <Button  onClick={chooseSegment} icon="pi pi-save" label="שמור" rounded style={{backgroundColor:"#e5e7eB", color:"#14B8A6"}}/> 
        <Button  disabled={saveDisable} style={{backgroundColor:"#e5e7eB", color:"#14B8A6"}} onClick={async()=>{await chooseSegment(); await setSaveDisable(true); changeStatus();}} icon="pi pi-send" label="שלח" rounded /> 
        </>
    )
}
export default SegSurvey



/*
*/