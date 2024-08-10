import React, { useState } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import { Steps } from 'primereact/steps';
import { Dialog } from 'primereact/dialog';
import UserSurvey from './UserSurvey';
import { Divider } from 'primereact/divider';
import DeleteDialog from '../surveys/DeleteDialog';
import { useChangeStatusMutation } from '../surveys/surveysApiSlice';
import { Card } from 'primereact/card';
import 'primeicons/primeicons.css';

const UserSurveyItem=(props)=> {
    console.log(props);
    const {survey,refetch,user}=props
    const [visible,setVisible]=useState(false)
    const [del,setDel]=useState(false)
    
    const endContent = (
       
                        <Button icon="pi pi-file-edit" label='ענה על הסקר' className="p-button-rounded" style={{color:'#10aaaa',backgroundColor:'#e5e7eb'}}
                        onClick={()=>{setVisible(true)}}
                        ></Button>
                  
    );
   
    return (<>
       
        <div className="card" id="userCard">
            <Card >
            <h1 dir='rtl'>{survey.title}</h1>
         

<div className="card flex justify-content-center">
        
            
            <p style={{width:'30%',marginRight:0}}>
                {endContent}
            </p>
        </div></Card>
        </div>
     
        <Dialog 
            header={<div>סקר<i className="pi pi-file-edit"></i></div>}
            visible={visible} style={{ width: '50vw', height:'100vw' }} onHide={() => setVisible(false)}>
            <p className="m-0">
                <UserSurvey user={user} visible={visible}  setVisible={setVisible} refetch={refetch} survey={survey}/>
            </p>
        </Dialog>

       
        </>
    );
   
}
export default UserSurveyItem