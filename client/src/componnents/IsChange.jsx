
import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useStatusSurveyMutation } from "./surveys/surveysApiSlice";


const IsChange=(props)=>{
   const {setVisible,setVisibleS,visible,survey,refetch}=props
   const [changeStatusFunc, {isError:changeStatusIsError, error:changeStatusError, isSuccess:changeStatusIsSuccess,data:changeStatus}] =useStatusSurveyMutation()
   
   

   const changestatus = (e) => {
    //    e.preventDefault();
       changeStatusFunc({_id:survey._id,status:"closed"}).then(refetch())
       // window.location.reload(true)

       };
    const footerContent = (
        <div>
            <Button label="ביטול" icon="pi pi-times" onClick={async() =>{ await setVisibleS(false)}} className="p-button-text" />
            <Button label="אישור" icon="pi pi-check" onClick={async() => {await changestatus(); setVisibleS(false) }} autoFocus />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Dialog visible={visible} style={{ width: '30vw' }} onHide={async() =>{ await setVisibleS(false)}} footer={footerContent}>
                <p className="m-0" style={{textAlign:'center'}}>
                    ?לנעול סקר</p>
            </Dialog>
        </div>
    )
}
export default IsChange
        
