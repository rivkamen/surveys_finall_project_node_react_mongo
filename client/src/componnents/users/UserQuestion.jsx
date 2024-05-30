

import React, { useRef, useState } from 'react';

import { InputText } from 'primereact/inputtext';

import UserAnswer from './UserAnswer';
import { RadioButton } from 'primereact/radiobutton';
import { Card } from 'primereact/card';
import '../../index.css';
import { Fieldset } from 'primereact/fieldset';


const UserQuestion=(props)=> {
const {select,setSelect,refetch,question,survey}=props
const index=select.indexOf(select.find(q=>q._id==question._id))
const [selectedCategory, setSelectedCategory] =  useState(select[index].select);
let bodyAnswers=question.answers.map(a=>{return {key:a._id,name:a.body}});



const categories = bodyAnswers
    return (
        // <div className="card">
           
        //       <div className="flex flex-wrap gap-3">
        //     <h3>{question.body} </h3>
        // </div>
           
               
                   
        //              {categories.map((category) => {
        //             return ( 
        //             <span classclassName="p-input-icon-left">
           
        //             <Card>
                     
        //               <div  key={category.key} dir='rtl'  className="flex align-items-center" style={{ position: 'sticky', top: 200,fontFamily:'Yehuda CLM'}}>

        //                 {console.log('cccccccc'+category.key)}
        //                     <RadioButton inputId={category.key} name="category" value={category.key} onChange={(e) =>{select[index].select=e.value; setSelectedCategory(e.value.checked);setSelect(select)}} checked={selectedCategory===category.key}/>
        //                     <label htmlFor={category.key} className="ml-2">{category.name}</label>
        //                 </div></Card>
              
       
                   
        //        </span>
                        
        //             );
        //         })}
           
        // </div>
<>
<Fieldset legend={<span style={{fontFamily:'Yehuda CLM',minWidth:'160px', textAlign:'center',minHeight:'15px', fontSize:'20px'}}>{question.body} </span>}>
    <p className="m-0"  >
      
   
       <div className="card">  
              {/* <div className="card" style={{fontFamily:'Yehuda CLM'}}>
            
        </div> */} 
           
        {categories.map((category) => {
                    return (
                        // <span className="p-input-icon-left" > 
                        // <div className='answersCard' style={{border:'1px', borderColor:'#e5e7eb'}}>
                           
                                <div key={category.key} className="flex align-items-center">
                                        <RadioButton inputId={category.key} name="category" value={category.key} onChange={(e) =>{select[index].select=e.value;setSelect(select);setSelectedCategory(e.value);console.log(selectedCategory);}} 
                                        checked={selectedCategory=== category.key} />
                                        <label htmlFor={category.key} className="ml-2">{category.name}</label><br/><br/><br/>
                                </div>
                                // </div> 
                        // </span>               
                    );
                })} </div>
                </p>
</Fieldset><br/><br/><br/>
       </>           
    )
}
export default UserQuestion



        


