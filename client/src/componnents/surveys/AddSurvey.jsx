
import { classNames } from 'primereact/utils';
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
import { Message } from "primereact/message"
import { Toast } from "primereact/toast"
import { useFormik } from 'formik';
import { AutoComplete } from 'primereact/autocomplete';
import SendSurvey from './SendSurvey';
import { PanelMenu } from 'primereact/panelmenu';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { MultiSelect } from 'primereact/multiselect';
const AddSurvey=(props)=>{
    const {refetch,setVisibleNew}=props
    let [questions,setQuestions]=useState([]); 
    const [ed,setEd]=useState(false)
    const [quest,setQuest]=useState(false) 
    const [selectedgender, setSelectedgender] = useState()
    const [selectedSector, setSelectedSector] = useState()
  //const [selectedAge, setSelectedAge] = useState({name:null,code:''});
    const [selectedBirthDate, setSelectedBirthDate] = useState(Date)
    const title=useRef('סקר ללא שם')
    const [text,setText]=useState('')
    const [send,setSend]=useState(false)
    const [addSurveyFunc,{data:survey={},isError:addSurveyIsError,error:addSurveyError,isSuccess:addSurveyIsSuccess}]=useAddSurveyMutation()
    const [addQuestionFunc,{isError:addQuestionIsError,error:addQuestionError,isSuccess:addQuestionIsSuccess,data:surveyQuestion}]=useAddQuestionMutation()
    // const [changeStatusFunc, {isError:changeStatusIsError, error:changeStatusError, isSuccess:changeStatusIsSuccess,data:changeStatus}] =useStatusSurveyMutation()
    const [updateSurveyFunc, {isError:updateSurveyIsError, error:updateSurveyError, isSuccess:updateSurveyIsSuccess,data:updatesurvey}] = useUpdateSurveyMutation()
    const [visibleS,setVisibleS]=useState(false);
    const add = async (e) => { 
    //    let quest=[{body:"try",answers:[{body:"catch"}]},{body:"tryagain",answers:[{body:"catchagain"}]}]
        // console.log("add");    //e.preventDefault();  
       console.log("huuuuuu");
let selectSector;
    selectSector= await selectedSectors.map(select=>select.name)
let selectAge;
    selectAge= await selectedAges.map(age=>age.name)
       await addSurveyFunc({title:text,gender:selectedgender,sector:selectSector,age:selectAge,questions:questions}).then(()=>refetch())
       //await updateSurveyFunc({_id:survey?.data?._id,title:title.current.value,gender:selectedgender.name,sector:selectedSector.name,age:ages}).then(()=>refetch())
    }

    const toastCenter = useRef(null);
    const showMessage = (event, ref, severity) => {
        const label = event.target.innerText;
        ref.current.show({ severity: severity, summary: "שדה חובה", detail: "שדה כותרת הינו שדה חובה", life: 3000 });
    };
    // const edit = async (e) => {
    //             //e.preventDefault();
                

    //         await updateSurveyFunc({_id:survey?.data?._id,title:title.current.value,gender:selectedgender.name,sector:selectedSector.name,age:ages}).then(()=>refetch()) 
    //     }
    // const changestatus = async (e) => {
    //     // await addSurveyFunc({title:title.current.value,gender:selectedgender.name,sector:selectedSector.name,age:ages,questions:questions}).then(()=>
    //    changeStatusFunc({_id:survey?.data?._id,status:"in process"}).then(()=>refetch())
    //    }

    const addQuestion=async()=>{
        setQuestions([...questions,{body:"שאלה חדשה",answers:[{body:"תשובה חדשה"}]}])
      //  <Question question={questions} /*survey={surveyQuestion.data} */ refetch={refetch}/>
        // await addQuestionFunc({_id:survey.data._id,body:'enter question'}).then(()=>refetch())
        // console.log(survey?.data?.questions);
        // setQuest(true)
    }
    
  
    const gender = [
        { label: 'לא מוגבל',icon:'pi pi-circle',command:()=>{setSelectedgender('לא מוגבל')} },
        { label: 'זכר',command:()=>{setSelectedgender('זכר')} },
        { label: 'נקבה',command:()=>{setSelectedgender('נקבה')}}
    ];
    // const sector = [
    //     { label: 'לא מוגבל',command:()=>{setSelectedSector('לא מוגבל')} },
    //     { label: 'לא משתייך',command:()=>{setSelectedSector('לא משתייך')} },
    //     { label: 'מסורתי',command:()=>{setSelectedSector('מסורתי')}},
    //     { label: 'חרדי',command:()=>{setSelectedSector('חרדי')}},
    //     { label: 'חילוני',command:()=>{setSelectedSector('חילוני')}},
    //     { label: 'דתי לאומי',command:()=>{setSelectedSector('דתי לאומי')}}
       
       
    // ];
    const [selectedSectors, setSelectedSectors] = useState(null);
    
        const sector = [
            { name: 'לא מוגבל'},
            { name: 'לא משתייך' },
            { name: 'מסורתי'},
            { name: 'חרדי'},
            { name: 'חילוני'},
            { name: 'דתי לאומי'}
        ];
        const [selectedAges, setSelectedAges] = useState(null);
    
        const ages = [
            { name: 'לא מוגבל'},
            { name: "0 - 10"},
            { name: "10 - 20" },
            { name: "20 - 30"},
            { name: "30 - 40"},
            { name: "40 - 50"},
            { name: "50 - 60"},
            { name: "60 - 70" },
            { name: "70 - 80"},
            { name: "80 - 90"},
            { name: "90 - 100"},
            { name: "100 - 120"}
        ];
       console.log(selectedSectors);
    // const [ages, setAges] = useState([0,120]);
    const items = [
        {
            label: selectedgender||'מגדר',
            icon: 'pi pi-user',
            items: gender,
        },
        // {
        //     label: selectedSector||'מגזר',
        //     icon: 'pi pi-tag',
        //     items: sector
        // }
    ]

   
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

    /***************************************************************************************************************************** */
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
           console.log('onSubmit');
            await add();
            await setSend(true);
            refetch();

        }
    });
    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

const getFormErrorMessage = (name) => {
return isFormFieldInvalid(name) ?  <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
};
/********************************************************************************************************************************** */
    return(
        <> 
            <div className="card p-fluid p-inputtext-lg" dir="rtl" style={{position:'sticky',top:0,zIndex:100,fontFamily:'Yehuda CLM'}}>
            <h2>שם הסקר</h2>
        <AutoComplete ref={title} defaultValue={title.current||'סקר ללא שם'} 
        value={formik.values.title} /*placeholder={title.current}*/
        name='title'
                     className={classNames({ 'p-invalid': isFormFieldInvalid('title') })}
                     onChange={(e) => {
                        // console.log(title.current);
                        setText(e.value)
                         formik.setFieldValue('title', e.value);
                     }}
                 />
                 {getFormErrorMessage('title')}           
        </div>
       <div style={{ display: 'flex' }}>

     <div style={{ position: 'sticky', top: 200, height: '0vh', width: '300px',fontFamily:'Yehuda CLM'}}>
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?למי מיועד הסקר</h2>
        <div style={{alignItems:'center'}}>
        &nbsp;&nbsp; <PanelMenu model={items} className="w-full md:w-20rem"></PanelMenu>
         <div className="card flex justify-content-center">
            <MultiSelect value={selectedSectors} onChange={(e) => setSelectedSectors(e.value)} options={sector} optionLabel="name" display="chip" 
                placeholder={<div style={{color:"black",fontWeight:"bold",margin:"5px"}}><i className='pi pi-sort-numeric-up-alt'></i>&nbsp;&nbsp;מגזר</div>} maxSelectedLabels={5} className="w-full md:w-20rem" />
                
        </div>
        <div className="card flex justify-content-center">

        <MultiSelect id="multiSel"value={selectedAges} onChange={(e) => setSelectedAges(e.value)} options={ages} optionLabel="name" display="chip" 
                placeholder={<div style={{color:"black",fontWeight:"bold",margin:"5px"}}><i className='pi pi-sort-numeric-up-alt'></i>&nbsp;&nbsp;גיל</div>} maxSelectedLabels={5} className="w-full md:w-20rem" />  
                </div>
                </div>
    
    <Button label="הוסף שאלה" onClick={async()=>{addQuestion()}} icon="pi pi-plus" rounded style={{width:'50%',color:'#10bbbb', backgroundColor:'#e5e7eb',marginLeft:'19%'}}/> {/* This is the menu */}
    <br/><br/>
    <Button label="שמור סקר" type='submit' onClick={formik.handleSubmit /*setSend(true)*/} icon="pi pi-save" rounded style={{width:'50%',color:'#10bbbb', backgroundColor:'#e5e7eb',marginLeft:'19%'}}/> 
        </div>
        
      <div style={{ flex: 1, textAlign: 'center' }}> 
        {questions?.map((q,i)=><Question question={q} questions={questions} index={i} refetch={refetch}/>)} 

{send && <SendSurvey visible={send} setVisible={setSend} setVisibleS={setVisibleNew} refetch={refetch} survey={survey.data}/>}
</div> 
</div> 

        </>
    )
}
export default AddSurvey


/*import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function ChipsDemo() {
    const [selectedSectors, setSelectedSectors] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedSectors} onChange={(e) => setSelectedSectors(e.value)} options={cities} optionLabel="name" display="chip" 
                placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
    );
}*/