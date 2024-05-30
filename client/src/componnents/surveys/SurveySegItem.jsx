import { Button } from "primereact/button"
import { Card } from "primereact/card"
import { Dialog } from "primereact/dialog"
import { Divider } from "primereact/divider"
import React, { useState } from "react"
import SegSurvey from "./SegSurvey"

const SurveySegItem=(props)=>{
    const {survey,refetch}=props
    const [visible,setVisible]=useState(false)
    const endContent = (
        <React.Fragment>
            <div className="flex align-items-center gap-3">
                       
                        <Button icon="pi pi-chart-line" className="p-button-rounded" style={{color:'#10aaaa',backgroundColor:'#e5e7eb'}}
                        onClick={()=>{setVisible(true)}}
                        ></Button>
                        
                    </div>
        </React.Fragment>
    );
    return(
        <>
        <div className="card " >
            <Card style={{BlockSize:'250px',width:'50%'}}>
            <h1>{survey.title}</h1>
<div className="card flex justify-content-center">
            <Divider layout="vertical" />
            <p style={{width:'30%',marginRight:0}}>
                {endContent}
            </p>
        </div></Card>
        </div>
        <Dialog 
            header={survey.title} 
            visible={visible} style={{ width: '50vw', height:'100vw' }} onHide={() => setVisible(false)}>
            <p className="m-0">
                <SegSurvey refetch={refetch} survey={survey}/>
            </p>
        </Dialog>

       
        </>
    )
}
export default SurveySegItem