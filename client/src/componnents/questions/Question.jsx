
import { Accordion, AccordionTab } from 'primereact/accordion';
import Answer from '../answers/Answer';
import { Button } from 'primereact/button';
import React, { useRef, useState } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import { StyleClass } from 'primereact/styleclass';
import { InputText } from 'primereact/inputtext';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { useDeleteQuestionMutation, useUpdateQuestionMutation } from './questApiSlice';
import { useAddAnswerMutation } from '../answers/ansApiSlice';
import { AutoComplete } from 'primereact/autocomplete';
import { Divider } from 'primereact/divider';

const Question=(props)=> {
const {refetch,question,index,survey}=props
let {questions,setQuestions,newQuestions,setNewQuestions}=props
const [addAnswerFunc,{isError:addAnswerIsError,error:addAnswerError,isSuccess:addAnswerIsSuccess,data:addAnswerData={}}]=useAddAnswerMutation()
 const addAnswer=()=>{
    questions[index].answers=[...questions[index].answers,{body:'תשובה חדשה'}];
    refetch()
       //addAnswerFunc({_id:survey._id,questionId:question._id,body:'enter answer'}).then(()=>refetch())
    }
const [updateQuestionFunc, {isError1, error1, isSuccess1,data1}] = useUpdateQuestionMutation()
    var [visible, setVisible] = useState(true);

    const update = (e) => {
        // console.log("updateQuestion");
            //e.preventDefault();
            updateQuestionFunc({_id:survey._id,questionId:question._id,body:text})};
const [delFunc, {isError, error, isSuccess,data}] = useDeleteQuestionMutation()
    var [visible, setVisible] = useState(true);

    const delet = (e) => {
        // console.log("delQuestion");
        questions.splice(index,1);
        refetch();
            //e.preventDefault();
            // delFunc({_id:survey._id,questionId:question._id}).then(()=>refetch())
        };
       
const bodyQ=useRef(question.body!=' '?question.body:"שאלה חדשה")
// console.log("22222222"+bodyQ.current.value);

    const toast = useRef(null);
    //const router = useRouter();
    const [text, setText] = useState('');

    const toggleBtnRef = useRef(null);
    const items = [
        // {
        //     label: 'Update',
        //     icon: 'pi pi-plus',
        //     command: () => {
        //         toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        //     }
        // },
        {
            label: 'Add',
            icon: 'pi pi-plus',
            command: async() => {
                await addAnswer()
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });   
                 refetch();

            }
        },
        
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: async() => {
                await delet();
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                refetch();

            }
        },
        // {
        //     label: 'Upload',
        //     icon: 'pi pi-upload',
        //     command: () => {
        //        // router.push('/fileupload');
        //     }
        // },
        // {
        //     label: 'React Website',
        //     icon: 'pi pi-external-link',
        //     command: () => {
        //         window.location.href = 'https://react.dev/';
        //     }
        // }
    ];
    return (
        <div className="card">
             <div style={{ position: 'relative', bottom:'50px', left:'10%', width:'10px' }}>
        {/* <Toast ref={toast} /> */}
         {/* <SpeedDial model={items} direction="right" showIcon='pi pi-ellipsis-v' hideIcon="pi pi-ellipsis-v" style={{ top: 'calc(50% - 2rem)',MozTabSize:'50px' }} /> */}
         
     </div>
            <Accordion multiple activeIndex={[0]} style={{width:'100%'}}>
            <AccordionTab  header={question.body!=' '?question.body:"שאלה חדשה"}> 
            <div dir="rtl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button  label="&nbsp; הוסף תשובה " icon='pi pi-plus'rounded  onClick={addAnswer}> </Button> &nbsp;
          <Button label="&nbsp; מחק שאלה" icon='pi pi-trash' rounded onClick={delet} style={{color:'#10bbbb', backgroundColor:'#e5e7eb'}}></Button> </div>
           
            <div className="card p-fluid p-inputtext-lg" dir='rtl'>
            <StyleClass nodeRef={toggleBtnRef} selector="@next" toggleClassName="p-disabled" />
            {/* <Button ref={toggleBtnRef} icon={icon} onClick={()=>{update();changeIcon()}}/>&nbsp;&nbsp; */}

            <InputText ref={bodyQ}  defaultValue={bodyQ.current} onChange={()=>{if(questions){questions[index].body=bodyQ.current.value}}}/>
        </div>          
        <Divider></Divider>
                {question?.answers?.map((a,i)=>
                <p className="m-0">
                    <Answer question={question} questions={questions} qIndex={index} index={i} survey={survey} answer={a}refetch={refetch}/>
                 </p> 
                  )}
             </AccordionTab>
             </Accordion>
        </div>
        // <div className="card">
        //     <Accordion multiple activeIndex={[0]}>

        //         <AccordionTab header={<div className="card">
        //     <Inplace closable closeIcon={'pi pi-save'} onClose={update}>
        //         <InplaceDisplay>{text || "Click to edit"}</InplaceDisplay>
        //         <InplaceContent>
        //             <InputText placeholder={question.body} value={text} onChange={(e) => setText(e.target.value)}/>
        //         </InplaceContent>
        //     </Inplace>
       

                
        //     <div style={{ position: 'relative', bottom:'50px', left:'10%', width:'10px' }}>
        //         <Toast ref={toast} />
                
        //         <SpeedDial model={items} direction="right" style={{ top: 'calc(50% - 2rem)',MozTabSize:'50px' }} />
        //     </div> </div> }>
       
        //         {addAnswerData?.answers?.map(a=>
        //         <p className="m-0">
        //             <Answer question={question} survey={survey} refetch={refetch} answer={a}/>
        //          </p> 
        //           )}
        //      </AccordionTab>
        //      </Accordion>
        // </div>
    )
}
export default Question


/*



        */