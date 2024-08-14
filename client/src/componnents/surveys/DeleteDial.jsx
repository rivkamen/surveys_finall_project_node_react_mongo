
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useDeleteSurveyMutation } from "./surveysApiSlice";

const DeleteDial=(props)=>{
   const {setVisible,visible,survey,refetch}=props

   const [deleteFunc, {isError, error, isSuccess,data}] =
   useDeleteSurveyMutation()
   
   const del = async(e) => {
   //e.preventDefault();
//    console.log('id:'+survey._id);
  await deleteFunc({_id:survey._id}).then(()=>refetch()) 
   window.location.reload(true)


   };
    const footerContent = (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={() => {setVisible(false); del()}} autoFocus />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Dialog visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
                <p className="m-0" style={{textAlign:'center'}}>
                    ?אתה בטוח שאתה רוצה למחוק
                </p>
            </Dialog>
        </div>
    )
}
export default DeleteDial
        
