import React, { useEffect, useState } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import { Steps } from 'primereact/steps';
import { Dialog } from 'primereact/dialog';
import Survey from './Survey';
import { Divider } from 'primereact/divider';
import DeleteDialog from './DeleteDialog';
import { useStatusSurveyMutation } from './surveysApiSlice';
import { Card } from 'primereact/card';
import DeleteDial from './DeleteDial';
import SegSurvey from './SegSurvey';
import Segment from '../users/Segment';
import IsChange from '../IsChange';

const SurveyItem=(props)=> {
    const {refetch,survey}=props
    const [visible,setVisible]=useState(false)
    const [visible1,setVisible1]=useState(false)
    const [visible2,setVisible2]=useState(false)
    const [visible3,setVisible3]=useState(false)

    const [del,setDel]=useState(false)
    const status=["creating","in process","closed","completed"]
    
   
const [activeIndex, setActiveIndex] = useState(0);

useEffect(() => {
    const index = status.indexOf(survey.status);
    if (index !== -1) {
        setActiveIndex(index);
    }
}, [survey.status]);
    const [changeStatusFunc, {isError, error, isSuccess,data}] =useStatusSurveyMutation()      
    const changestatus = (e) => {
            //    e.preventDefault();
               changeStatusFunc({_id:survey._id,status:"closed"}).then(refetch())
               };
    const itemRenderer = (item, itemIndex) => {
        const isActiveItem = activeIndex === itemIndex;
        const backgroundColor = isActiveItem ? 'var(--primary-color)' : 'var(--surface-b)';
        const textColor = isActiveItem ? 'var(--surface-b)' : 'var(--text-color-secondary)';

        return (
            
            <span
            className="inline-flex align-items-center justify-content-center align-items-center border-circle border-primary border-1 h-3rem w-3rem z-1 cursor-pointer"
            style={{ backgroundColor: backgroundColor, color: textColor, marginTop: '-25px' }}
         onClick={() => statusFunc()}
        >
            <i className={`${item.icon} text-xl`} />
        </span>
        );
};
const statusFunc=()=>{
    survey.status==='creating'?setVisible(true):
    survey.status==='in process'?setVisible3(true):
    survey.status==='closed'?setVisible1(true):
    setVisible2(true)
}

const items = [
    {
        icon: 'pi pi-wrench',
        template: (item) => itemRenderer(item, 0)
    },
    
    {
        icon: 'pi pi-lock',
        template: (item) => itemRenderer(item, 1)
    },
    {
        icon: 'pi pi-chart-line',
        template: (item) => itemRenderer(item, 2)
    },
{
        icon: 'pi pi-eye',
       template: (item) => itemRenderer(item, 3)
    },
];

    const startContent = (
        <React.Fragment>
           
             <Avatar className="p-overlay-badge" icon="pi pi-user" size="large" shape="circle">
                            <Badge value={survey.count} size={'normal'}/>
                            </Avatar>
        </React.Fragment>
    );

    const centerContent = (
        <div  >
        <Steps model={items} activeIndex={activeIndex} readOnly={activeIndex+1} className="m-2 pt-4" 
        />
   </div>
    );

    const endContent = (
        <React.Fragment>
            <div>
                       
                        <Button icon="pi pi-eraser" label='מחק סקר' className="p-button-rounded"style={{color:'#10aaaa',backgroundColor:'#e5e7eb'}}disabled={survey.status === 'in process'}
                        onClick={()=>{setDel(true); }}></Button> 
                    </div>
        </React.Fragment>
    );
    
    return (
    <>
       
        <div className="card" id='surveyCard' style={{textAlign:'center' }}>
            <Card>
            <h1>{survey.title}</h1>
           
<div className="card flex justify-content-center">
            <p style={{width:'30%'}}>
              {startContent}
            </p>
            <Divider layout="vertical" />
            <p style={{width:'30%'}}>
               {centerContent}
            </p>
            <Divider layout="vertical" />
            <p style={{width:'30%',marginRight:0}}>
                {endContent}
                 {del && <DeleteDial visible={del} setVisible={setDel} refetch={refetch} survey={survey}/> }
            </p>
        </div>
        </Card>
        
        </div>
     

        <Dialog 
            visible={visible} style={{ width: '60vw', height:'130vh' }} onHide={() => setVisible(false)}>
            <p className="m-0">
                <Survey refetch={refetch}survey={survey} setVisible1={setVisible}/>
            </p>
        </Dialog>

        <Dialog
            visible={visible1} style={{ width: '50vw' }} onHide={() => setVisible1(false)}>
            <p className="m-0">
                <SegSurvey refetch={refetch}survey={survey}setVisible1={setVisible1}/>
            </p>
        </Dialog>

        <Dialog
            visible={visible2} style={{ width: '50vw' }} onHide={() => setVisible2(false)}>
            <p className="m-0">
                <Segment refetch={refetch}survey={survey}/>
            </p>
        </Dialog>
        {visible3&&<IsChange setVisibleS={setVisible3} visible={visible3} survey={survey} refetch={refetch}/>}

        
        </>
    );
   
}
export default SurveyItem