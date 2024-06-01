
// import React, { useEffect, useState } from "react";
// import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
// import { useDeleteSurveyMutation, useStatusSurveyMutation } from "./surveysApiSlice";
// import { useSendMailMutation } from "../service/mailApiSlice";
// import { useGetUsersQuery } from "../users/usersApiSlice";


// const SendSurvey=(props)=>{
//    const {setVisible,setVisibleS,visible,survey,refetch}=props

   
//    const [changeStatusFunc, {isError:changeStatusIsError, error:changeStatusError, isSuccess,data:changeStatus}] =useStatusSurveyMutation()
//    const [sendMailFunc, {isError:sendIsError, error:sendError, isSuccess:sendIsSuccess,data:send}] = useSendMailMutation()
//    let surveysForUsers=[]
//   let exist;
//     const {
//     data:users,
//     isLoading:il,
//     isError:ie,
//     error:e,
//     isSuccess:is,
//     refetch:rusers
//     } = useGetUsersQuery()
//     const match=(u)=>{
//         const d=new Date(u.birthDate)

//         const age=(Date.now()-d)/1000/60/60/24/365
//                 return (u.gender===survey.data.gender || survey.data.gender==='לא מוגבל') &&
//         (u.sector===survey.data.sector || survey.data.sector==='לא מוגבל') && 
//         (survey.data.age[0] <= age) &&
//         (survey.data.age[1]>=age||survey.data.age==='')

//     }
//     useEffect(()=>{
//         if(is){
//        console.log(users);
//             sendE();
    
//      } },[isSuccess])
//    const sendE=async()=>{  
    
    
//     surveysForUsers=await users.filter((u)=>match(u))
//          surveysForUsers=surveysForUsers.map(f=>f.email)//  {exist=u.surveys.find(us=>us._id==survey._id)
//         //     if(!exist)}
// console.log(surveysForUsers);
//    await sendMailFunc({ to: [surveysForUsers], title: `מערכת הסקרים שלנו🖐 `, html:` סקר חדש מחכה לך!!!!!! הנך מוזמן/ת לענות על סקר: ${survey.data.title}  ` })
 
//    }
//    const changestatus = async (e) => {
//     // await addSurveyFunc({title:title.current.value,gender:selectedSex.name,sector:selectedSector.name,age:ages,questions:questions}).then(()=>
//    changeStatusFunc({_id:survey?.data?._id,status:"in process"}).then(()=>refetch())
//    window.location.reload(true)
//    }
//     const footerContent = (
//         <div>
//             <Button label="לא עכשיו" icon="pi pi-times" onClick={async() =>{ await setVisible(false);setVisibleS(false)}} className="p-button-text" />
//             <Button label="שלח" icon="pi pi-check" onClick={async() => {setVisible(false); await changestatus(); await sendE(); setVisibleS(false) }} autoFocus />
//         </div>
//     );

//     return (
//         <div className="card flex justify-content-center">
//             <Dialog visible={visible} style={{ width: '30vw' }} onHide={async() =>{ await setVisible(false);setVisibleS(false)}} footer={footerContent}>
//                 <p className="m-0" style={{textAlign:'center'}}>
//                     ?מזל טוב!, סקר חדש נוסף! לשלוח את הסקר למשתמשים </p>
//             </Dialog>
//         </div>
//     )
// }
// export default SendSurvey
        


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
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
console.log(u.gender);
console.log(survey);

        const age=(Date.now()-d)/1000/60/60/24/365
                return (u.gender===survey.gender || survey.gender==='לא מוגבל') &&
        (u.sector===survey.sector || survey.sector==='לא מוגבל') && 
        (survey.age[0] <= age) &&
        (survey.age[1]>=age||survey.age==='')

    }
    useEffect(()=>{
        if(is){
       console.log(users);
            sendE();
    
     } },[isSuccess])
   const sendE=async()=>{  
    
    
    surveysForUsers=await users.filter((u)=>match(u))
         surveysForUsers=surveysForUsers.map(f=>f.email)//  {exist=u.surveys.find(us=>us._id==survey._id)
        //     if(!exist)}
console.log(surveysForUsers);
   await sendMailFunc({ to: [surveysForUsers], title: `מערכת הסקרים שלנו🖐 `, html:` סקר חדש מחכה לך!!!!!! הנך מוזמן/ת לענות על סקר: ${survey.title}  ` })
 
   }
   const changestatus = async (e) => {
    // await addSurveyFunc({title:title.current.value,gender:selectedSex.name,sector:selectedSector.name,age:ages,questions:questions}).then(()=>
   await changeStatusFunc({_id:survey?._id,status:"in process"}).then(()=>refetch())
    window.location.reload(true)
   }
    const footerContent = (
        <div>
            <Button label="לא עכשיו" icon="pi pi-times" onClick={async() =>{ await setVisible(false);setVisibleS(false)}} className="p-button-text" />
            <Button label="שלח" icon="pi pi-check" onClick={async() => {setVisible(false); await changestatus(); await sendE(); setVisibleS(false) }} autoFocus />
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
        