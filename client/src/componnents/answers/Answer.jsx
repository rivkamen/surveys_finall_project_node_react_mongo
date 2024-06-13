import React, { useRef, useState } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { InputText } from 'primereact/inputtext';
import { Inplace, InplaceContent, InplaceDisplay } from 'primereact/inplace';
import {useDeleteAnswerMutation, useUpdateAnswerMutation} from './ansApiSlice'
import { StyleClass } from 'primereact/styleclass';
import { AutoComplete } from 'primereact/autocomplete';
const Answer=(props)=> {
    const {survey,question,index,qIndex,answer,refetch}=props
    let {questions}=props
    const [text, setText] = useState('');

    const [updateFunc, {isError1, error1, isSuccess1,data1}] = useUpdateAnswerMutation()
    var [visible, setVisible] = useState(true);

    const update = (e) => {
            //e.preventDefault();
            updateFunc({_id:survey._id,questionId:question._id,answerId:answer._id,body:text})};
    const [delFunc, {isError, error, isSuccess,data}] = useDeleteAnswerMutation()
    var [visible, setVisible] = useState(true);

    const delet = (e) => {
            //e.preventDefault();
            questions[qIndex].answers.splice(index,1);
            refetch();
            // delFunc({_id:survey._id,questionId:question._id,answerId:answer._id}).then(()=>refetch())
        };
    
    
    
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh' 
        },
        {
            label: 'Delete',
            icon: 'pi pi-times' 
        }
    ];

    // const startContent = (
    //     <React.Fragment>
    //     <Button icon="pi pi-trash" onClick={delet} rounded />
    //     </React.Fragment>
    // );

    // const centerContent = (
    //     <span classclassName="p-input-icon-left">
    //         {/* <i classclassName="pi pi-search" /> */}
    //         <div >
    //         <Inplace closable closeIcon='pi pi-save' onClose={update} rounded>
    //             <InplaceDisplay>{text || "Click to edit"}</InplaceDisplay>
    //             <InplaceContent>
    //                 <InputText placeholder={answer.body} value={text} onChange={(e) => setText(e.target.value)} />
    //             </InplaceContent>
    //         </Inplace></div>
       

            
    //     </span>
    // );

    const startContent = (
        <span classclassName="p-input-icon-left">
            {/* <i classclassName="pi pi-search" /> */}
            {/* <Button icon='pi pi-trash' rounded onClick={delet}></Button> */}
        </span>
    );
    const answeRef = useRef(answer.body!=' '?answer.body:"תשובה חדשה");
        // console.log(answeRef.current);
        // console.log(answer.body);

    let [icon,setIcon] =useState('pi pi-save')
    const changeIcon=()=>{
        icon==='pi pi-save'?setIcon('pi pi-send'):setIcon('pi pi-save')
    }
    const centerContent = (
        <span classclassName="p-input-icon-left">
            {/* <i classclassName="pi pi-search" /> */}
            {/* <div className="card p-fluid p-inputtext-lg" dir='rtl'>
           
            <AutoComplete ref={answeRef} defaultValue={answeRef.current} onChange={()=>{questions[qIndex].answers[index].body=answeRef.current.value}}/>
            {/* <InputText ref={answeRef} defaultValue={answeRef.current} onChange={()=>{questions[qIndex].answers[index].body=answeRef.current.value}}/> */}
        {/* </div> */} 
        </span>
    );

    const endContent = (
        <React.Fragment>
            {/* <SplitButton label="Save" model={items} icon="pi pi-check" ></SplitButton> */}
        </React.Fragment>
    );

    return (
             <div className="flex flex-center card p-fluid p-inputtext-lg" dir='rtl'>
           <div style={{width:'80%'}}>
           <InputText ref={answeRef} defaultValue={answeRef.current} /*value={answeRef.current}*/ /*placeholder={answeRef.current}*/ onChange={()=>{questions[qIndex].answers[index].body=answeRef.current.value}}/></div>
           &nbsp;
           <Button icon='pi pi-trash'  onClick={delet} style={{backgroundColor:"white", color:"#14B8A6", height:'50px',  width:'50px'}} rounded></Button>
           {/* <InputText ref={answeRef} defaultValue={answeRef.current} onChange={()=>{questions[qIndex].answers[index].body=answeRef.current.value}}/> */}
           {/* <Toolbar start={startContent} center={centerContent} end={endContent} />  */}
        </div>
            
    );
}
export default Answer