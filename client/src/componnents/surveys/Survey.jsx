import { Button } from "primereact/button"
import { useRef, useState } from "react"
import { useAddQuestionMutation } from "../questions/questApiSlice"
import QuestionDialog from "../questions/QuestionDialog"
import Question from "../questions/Question"
import { useAddSurveyMutation, useStatusSurveyMutation, useUpdateSurveyMutation } from "./surveysApiSlice"
import { Dialog } from "primereact/dialog"
import { Inplace, InplaceContent, InplaceDisplay } from "primereact/inplace"
import { InputText } from "primereact/inputtext"
import { Dropdown } from 'primereact/dropdown';
import { StyleClass } from "primereact/styleclass"
import { Slider } from "primereact/slider"
import { Accordion, AccordionTab } from "primereact/accordion"
import { PanelMenu } from "primereact/panelmenu"
import { AutoComplete } from "primereact/autocomplete"
import { useFormik } from 'formik';
import { classNames } from "primereact/utils"
import SendSurvey from "./SendSurvey"

const Survey=(props)=>{
    const {visible1,setVisible1,refetch,survey}=props
    const [send,setSend]=useState(false)
    const [selectedgender, setSelectedgender] = useState(survey.gender);
    const [selectedSector, setSelectedSector] = useState(survey.sector);
    // const [selectedAge, setSelectedAge] = useState({name:survey.age,code:''});
    // const [selectedBirthDate, setSelectedBirthDate] = useState(Date);
const title=useRef(survey.title)
const [text,setText]=useState(survey.title)
let [questions,setQuestions]=useState(survey.questions.map(q=>{return{_id:q._id,body:q.body,createdAt:q.createdAt,answers:q.answers.map(a=>{return{_id:a._id,body:a.body,createdAt:a.createdAt}})}}));
let [newQuestions,setNewQuestions]=useState([]);

const [updateFunc, {isError2, error2, isSuccess2,data2}] = useUpdateSurveyMutation()
const edit = async (e) => {
   
        
    // await newQuestions.forEach(q=>{console.log("**************************"+q.body);addQuestionFunc({_id:survey._id,body:q.body,answers:q.answers})})
    await updateFunc({_id:survey._id,title:title.current.value,gender:selectedgender.name,sector:selectedSector.name,age:ages,questions:questions,newQuestions:newQuestions}).then(refetch());
    // type='edit'
};
const formik = useFormik({
    initialValues: {
       title:survey.title
        
    },
    validate: (data) => {
        let errors = {};

        if (!data.title){
            errors.title = 'שדה חובה';
        }
       
        return errors;
    },
    onSubmit: async() => {
        await edit();
        await setSend(true);
        refetch();

    }
});
const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

const getFormErrorMessage = (name) => {
return isFormFieldInvalid(name) ?  <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
}; 
   const [addQuestionFunc,{isError3,error3,isSuccess3,data3}]=useAddQuestionMutation()
   
       const addQuestion=()=>{
            //  addQuestionFunc({_id:survey._id,body:'enter question'}).then(()=>refetch())
            setQuestions([...questions,{_id:null,body:"שאלה חדשה",createdAt:null,answers:[{_id:null,body:"enter an answer", createdAt:null}]}])
          //  <Question question={questions} /*survey={surveyQuestion.data} */ refetch={refetch}/>
            // await addQuestionFunc({_id:survey.data._id,body:'enter question'}).then(()=>refetch())
            // console.log(survey?.data?.questions);
            // setQuest(true)
        
     }
    // const [editt,setEditt]=useState(false)
    const [changeStatusFunc, {isError, error, isSuccess,data}] =useStatusSurveyMutation()
    const changestatus = (e) => {
      // e.preventDefault();
       changeStatusFunc({_id:survey._id,status:"in process"}).then(refetch())
    }

    const toggleBtnRef = useRef(null);
    let [icon,setIcon] =useState('pi pi-save')
    const changeIcon=()=>{
        icon==='pi pi-save'?setIcon('pi pi-send'):setIcon('pi pi-save')
    }
   


    const gender = [
        { label: 'לא מוגבל',icon:'pi pi-circle',command:()=>{setSelectedgender('לא מוגבל')} },
        { label: 'זכר',command:()=>{setSelectedgender('זכר')} },
        { label: 'נקבה',command:()=>{setSelectedgender('נקבה')}}
    ];
    const sector = [
        { label: 'לא מוגבל',command:()=>{setSelectedSector('לא מוגבל')} },
        { label: 'לא משתייך',command:()=>{setSelectedSector('לא משתייך')} },
        { label: 'מסורתי',command:()=>{setSelectedSector('מסורתי')}},
        { label: 'חרדי',command:()=>{setSelectedSector('חרדי')}},
        { label: 'חילוני',command:()=>{setSelectedSector('חילוני')}},
        { label: 'דתי לאומי',command:()=>{setSelectedSector('דתי לאומי')}}
       
       
    ];
    const items = [
        {
            label: selectedgender||'מגדר',
            icon: 'pi pi-user',
            items: gender,
        },
        {
            label: selectedSector||'מגזר',
            icon: 'pi pi-tag',
            items: sector
        }
    ]

const[ages,setAges]=useState(survey.age);
    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code}`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code}`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };
    return(
        <>
        <div className="card p-fluid p-inputtext-lg" dir="rtl" style={{position:'sticky',top:0,zIndex:100,fontFamily:'Yehuda CLM'}}>
            <h2>שם הסקר</h2>
        <AutoComplete ref={title} defaultValue={title.current||'סקר ללא שם'} 
        value={formik.values.title} /*placeholder={title.current}*/
        name='title'
                     className={classNames({ 'p-invalid': isFormFieldInvalid('title') })}
                     onChange={(e) => {
                        setText(e.value)
                         formik.setFieldValue('title', e.value);
                     }}
                 />
                 {getFormErrorMessage('title')}           
        </div>
       <div style={{ display: 'flex' }}>

     <div style={{ position: 'sticky', top: 200, height: '0vh', width: '300px',fontFamily:'Yehuda CLM'}}>
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?למי מיועד הסקר</h2>
        
         <PanelMenu model={items} className="w-full md:w-20rem"></PanelMenu>
         <Accordion className="w-full md:w-20rem">
    <AccordionTab header={<div><i className='pi pi-sort-numeric-up-alt'></i>&nbsp;&nbsp;גיל</div>}>
            <div>
                <InputText value={ages} onChange={(e) => setAges(e.target.value)} className="w-full" disabled/>
                <Slider value={ages} onChange={(e) => setAges(e.value)} className="w-17.5rem" range step={10}min={0}max={120}/>
            </div>
    </AccordionTab>
    </Accordion>
    <br/><br/>
    
    <Button label="הוסף שאלה" onClick={async()=>{addQuestion()}} icon="pi pi-plus" rounded style={{width:'50%',color:'#10bbbb', backgroundColor:'#e5e7eb',marginLeft:'19%'}}/> {/* This is the menu */}
    <br/><br/>
    <Button label="שמור סקר" type='submit' onClick={formik.handleSubmit /*setSend(true)*/} icon="pi pi-save" rounded style={{width:'50%',color:'#10bbbb', backgroundColor:'#e5e7eb',marginLeft:'19%'}}/> 
        </div>
        
      <div style={{ flex: 1, textAlign: 'center' }}> 
        {questions?.map((q,i)=><Question question={q} questions={questions} index={i} refetch={refetch}/>)} 

{send && <SendSurvey visible={send} setVisible={setSend} setVisibleS={setVisible1} refetch={refetch} survey={survey}/>}
</div> 
</div> 
        </>
    )
}
export default Survey

/*       

*/