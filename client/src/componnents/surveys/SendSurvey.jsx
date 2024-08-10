

import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useDeleteSurveyMutation, useStatusSurveyMutation } from "./surveysApiSlice";
import { useSendMailMutation } from "../service/mailApiSlice";
import { useGetUsersQuery } from "../users/usersApiSlice";


const SendSurvey=(props)=>{
   const {setVisible,setVisibleS,visible,survey,refetch}=props

   const [deleteFunc, {isError, error, isSuccess,data}] =
   useDeleteSurveyMutation()
   const [changeStatusFunc, {isError:changeStatusIsError, error:changeStatusError, isSuccess:changeStatusIsSuccess,data:changeStatus}] =useStatusSurveyMutation()
   const [sendMailFunc, {isError:sendIsError, error:sendError, isSuccess:sendIsSuccess,data:send}] = useSendMailMutation()
   let surveysForUsers=[]
  let exist;
    const {
    data:users,
    isLoading:il,
    isError:ie,
    error:e,
    isSuccess:is,
    refetch:rusers
    } = useGetUsersQuery()
    const match=(u)=>{
        const d=new Date(u.birthDate)
        /**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

        const age=(Date.now()-d)/1000/60/60/24/365
                return (u.gender===survey.gender || survey.gender==='לא מוגבל') &&
         (((Array.isArray(survey.sector) ? survey.sector : [survey.sector]).find(s => s === u.sector)) || ((Array.isArray(survey.sector) ? survey.sector : [survey.sector]).includes('לא מוגבל')))&&
         (((Array.isArray(survey.age) ? Object.values(survey.age) : Object.values([survey.age])).find(a =>{ console.log("a");console.log(age);console.log(parseInt(`${a}`.split('-')[0],10)); return parseInt(`${a}`.split('-')[0],10) <= age && parseInt(`"${a}"`.split('-')[2],10)>=age})) || ((Array.isArray(survey.age) ? survey.age : [survey.age]).includes('לא מוגבל')))


    }
    useEffect(()=>{
        if(is){
       console.log(users);
            sendE();
    
     } },[isSuccess])
   const sendE=async()=>{  
    console.log("match");
    
    surveysForUsers=await users.filter((u)=>match(u))
         surveysForUsers=surveysForUsers.map(f=>f.email)//  {exist=u.surveys.find(us=>us._id==survey._id)
        //     if(!exist)}
console.log(surveysForUsers);
   await sendMailFunc({to:[surveysForUsers], title: `מערכת הסקרים שלנו🖐 `,        html: `
    <div dir='rtl' style="text-align: center; font-size: 18px; color: #333; background-color: #f2f2f2; padding: 20px;">
        <h1 style="color: #007bff;">סקר חדש מחכה לך!</h1>
        <p>הנך מוזמן/ת לענות על סקר: ${survey.title}</p>
        <p>להשתתפות בסקר:</p>
        <a href="https://surway.onrender.com" style="color: #007bff; text-decoration: none;">https://surway.onrender.com</a>
    </div>
`
   })
 
   }
   const changestatus = async (e) => {
    // await addSurveyFunc({title:title.current.value,gender:selectedgender.name,sector:selectedSector.name,age:ages,questions:questions}).then(()=>
   await changeStatusFunc({_id:survey?._id,status:"in process"})//.then(()=>refetch())
    window.location.reload(true)
   }
    const footerContent = (
        <div>
            <Button label="יותר מאוחר" icon="pi pi-times" onClick={async() =>{ await setVisible(false);setVisibleS(false)}} className="p-button-text" />
            <Button label="שלח" icon="pi pi-check" onClick={async() => {setVisible(false); await changestatus(); await sendE(); /*setVisibleS(false)*/ }} autoFocus />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Dialog visible={visible} style={{ width: '30vw' }} onHide={async() =>{ await setVisible(false);setVisibleS(false)}} footer={footerContent}>
                <p className="m-0" style={{textAlign:'center'}}>
                    ?מזל טוב!, סקר חדש נוסף! לשלוח את הסקר למשתמשים </p>
            </Dialog>
        </div>
    )
}
export default SendSurvey
        