import { Button } from 'primereact/button';

import { ScrollTop } from 'primereact/scrolltop';
import { useEffect, useRef, useState } from 'react';
import { useGetSurveysQuery } from '../surveys/surveysApiSlice';

import UserSurvey from './UserSurvey';
import { Dialog } from 'primereact/dialog';

import UserSurveyItem from './UserSurveyItem';
import { useGetUserQuery } from './usersApiSlice';
const UserSurveys=(props)=>{
   
 
const status="in process";

 const{
    data:myUser,
    isLoading:userIsLoading,
    isError:userIsError,
    error:userError,
    isSuccess:userIsSuccess,
    refetch:userRefetch
    } = useGetUserQuery({id:''})
    console.log(myUser);
    
const{
data:surveys,
isLoading,
isError,
error,
isSuccess:survesIsSuccess,

refetch
} =  useGetSurveysQuery({status:status/*,gender:'',sector:'',birthDate:''*/})
let filteredSurveys=[]

const filt=()=>{
    if(myUser?.roles==='admin')
        filteredSurveys=surveys
    else{
filteredSurveys=surveys?.filter(s=>((s.gender===myUser?.gender || s.gender==='לא מוגבל') && (s.sector===myUser?.sector || s.sector==='לא מוגבל') && (s.age[0]<=age&&s.age[1]>=age||s.age==='') ) && (myUser?.surveys?.find(us=>us===s._id)==undefined))
console.log(filteredSurveys);}}





const d = new Date(myUser?.birthDate);
const y1=d.getFullYear()
const y2=new Date().getFullYear()
const age=(y2-y1)
// console.log(Date.now()-myUser?.birthDate,'333333333333333333');


// useEffect(()=>{
//     if(true)
    filt(); 
//  },[survesIsSuccess,userIsSuccess])
  

//filteredSurveys=surveys?.filter(s=>s.gender==myUser.gender || s.gender==''||s.gender==undefined && s.sector==myUser.sector || s.sector=='' ||s.sector==undefined && s.birthDate>=myUser.birthDate||s.birthDate=='' || s.birthDate==undefined)
const [visible1,setVisible1]=useState(false)



    if (isLoading) return <h1>Loading</h1>
    if(isError) return <h2>{error}</h2>
    return (
        <div className="cardSurvey" id="cardSurveyId" >

            {filteredSurveys?.map((s)=><UserSurveyItem user={myUser} refetch ={refetch} survey={s}/>)}
            
               
            <ScrollTop />


            
        </div>
        
     
    )
}
export default UserSurveys
// import { ScrollTop } from 'primereact/scrolltop';
// import { useGetSurveysQuery } from '../surveys/surveysApiSlice';
// import UserSurveyItem from './UserSurveyItem';
// import { useGetUserQuery } from './usersApiSlice';
// const UserSurveys=(props)=>{
//     const {setCurrentPage}=props
// const status="in process";
// const{
//     data:myUser,
//     isLoading:userIsLoading,
//     isError:userIsError,
//     error:userError,
//     isSuccess:userIsSuccess,
//     refetch:userRefetch
//     } = useGetUserQuery({id:''})
//     const {
//     data:surveys,
//     isLoading,
//     isError,
//     error,
//     refetch
//     } = useGetSurveysQuery({status:status})
//     const d = new Date(myUser?.birthDate);
//     const y1=d.getFullYear()
//     const y2=new Date().getFullYear()
//     const age=(y2-y1)
//     let filteredSurveys
//     surveys?.forEach(s=>console.log(s.gender,' ',s.sector,' ',s.title))
//     filteredSurveys=surveys?.filter(s=>(s.gender===myUser?.gender || s.gender==='לא מוגבל')&& (s.sector===myUser.sector || s.sector==='לא מוגבל') && s.age[0]<=age&&s.age[1]>=age)
//     if (isLoading) return <h1>Loading</h1>
//     if(isError) return <h2>{error}</h2>


//     return (
//         <>
//         {()=>setCurrentPage('User Surveys')}
//         <div className="cardSurvey">
//             {filteredSurveys?.map((s)=><UserSurveyItem refetch ={refetch} survey={s} user={myUser}/>)}
//             <ScrollTop />
//         </div>
//          </>
//     )
// }
// export default UserSurveys


