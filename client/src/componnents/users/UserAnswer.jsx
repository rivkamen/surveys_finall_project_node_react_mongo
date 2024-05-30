import React, { useState } from 'react';
import { RadioButton } from "primereact/radiobutton";
import { Toolbar } from 'primereact/toolbar';
// import { Button } from 'primereact/button';
// import { SplitButton } from 'primereact/splitbutton';
// import { InputText } from 'primereact/inputtext';
// import { Inplace, InplaceContent, InplaceDisplay } from 'primereact/inplace';
import {useChangeAnswerDataMutation, useDeleteAnswerMutation, useUpdateAnswerMutation} from '../answers/ansApiSlice'
import { Button } from 'primereact/button';



const UserAnswer=(props)=> {
    const {question,survey,refetch,answers}=props
  
    let bodyAnswers=answers.map(a=>{return {key:a._id,name:a.body}});
    const categories = bodyAnswers
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    
    const [text, setText] = useState('');

     const [changeAnswerDataFunc, {isError1, error1, isSuccess1,data1}] = useChangeAnswerDataMutation()
   

   

    return (
        <div className="card">
            {/* <Toolbar/>  */}
        </div>
    );
}
export default UserAnswer
