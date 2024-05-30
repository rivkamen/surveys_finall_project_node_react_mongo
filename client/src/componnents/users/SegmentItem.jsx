import React, { useState } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import { Steps } from 'primereact/steps';
import { Dialog } from 'primereact/dialog';

import { Divider } from 'primereact/divider';
import Segment from './Segment'
const SegmentItem=(props)=> {
    const {refetch,survey}=props
    const [visible,setVisible]=useState(false)
    const endContent = (
        <React.Fragment>
            <div className="flex align-items-center gap-3">
                        <Button icon="pi pi-eye" className="p-button-rounded" style={{color:'#10aaaa',backgroundColor:'#e5e7eb'}}
                        onClick={()=>{setVisible(true)}}
                        ></Button>
                        
                    </div>
        </React.Fragment>
    );
   
    return (<>
       
        <div className="card">
            <h1>{survey.title}</h1>
           

<div className="card flex justify-content-center">
           
            <Divider layout="vertical" />
          
            <Divider layout="vertical" />
            <p style={{width:'30%',marginRight:0}}>
                {endContent}
            </p>
        </div>
        </div>
     

        <Dialog 
             header={survey.title} 
            visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            <p className="m-0">
                <Segment refetch={refetch}survey={survey}/>
            </p>
        </Dialog>
        </>
    );
   
}
export default SegmentItem