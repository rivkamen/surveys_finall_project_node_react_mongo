// // import { Button } from 'primereact/button';

// // import { ScrollTop } from 'primereact/scrolltop';
// // import { useEffect, useRef, useState } from 'react';
// // import { useGetSurveysQuery } from '../surveys/surveysApiSlice';

// // import UserSurvey from './UserSurvey';
// // import { Dialog } from 'primereact/dialog';

// // import UserSurveyItem from './UserSurveyItem';
// // import { useGetUserQuery } from './usersApiSlice';
// // const UserSurveys=(props)=>{
   
 
// // const status="in process";

// //  const{
// //     data:myUser,
// //     isLoading:userIsLoading,
// //     isError:userIsError,
// //     error:userError,
// //     isSuccess:userIsSuccess,
// //     refetch:userRefetch
// //     } = useGetUserQuery({id:''})
// //     console.log(myUser);
    
// // const{
// // data:surveys,
// // isLoading,
// // isError,
// // error,
// // isSuccess:survesIsSuccess,

// // refetch
// // } =  useGetSurveysQuery({status:status/*,gender:'',sector:'',birthDate:''*/})
// // let filteredSurveys=[]

// // const filt=()=>{
// //     if(myUser?.roles==='admin')
// //         filteredSurveys=surveys
// //     else{
// // filteredSurveys=surveys?.filter(s=>((s.gender===myUser?.gender || s.gender==='לא מוגבל') && (s.sector===myUser?.sector || s.sector==='לא מוגבל') && (s.age[0]<=age&&s.age[1]>=age||s.age==='') ) && (myUser?.surveys?.find(us=>us===s._id)==undefined))
// // console.log(filteredSurveys);}}





// // const d = new Date(myUser?.birthDate);
// // const y1=d.getFullYear()
// // const y2=new Date().getFullYear()
// // const age=(y2-y1)
// // // console.log(Date.now()-myUser?.birthDate,'333333333333333333');


// // // useEffect(()=>{
// // //     if(true)
// //     filt(); 
// // //  },[survesIsSuccess,userIsSuccess])
  

// // //filteredSurveys=surveys?.filter(s=>s.gender==myUser.gender || s.gender==''||s.gender==undefined && s.sector==myUser.sector || s.sector=='' ||s.sector==undefined && s.birthDate>=myUser.birthDate||s.birthDate=='' || s.birthDate==undefined)
// // const [visible1,setVisible1]=useState(false)



// //     if (isLoading) return <h1>Loading</h1>
// //     if(isError) return <h2>{error}</h2>
// //     return (
// //         <div className="cardSurvey" id="cardSurveyId" >

// //             {filteredSurveys?.map((s)=><UserSurveyItem user={myUser} refetch ={refetch} survey={s}/>)}
            
               
// //             <ScrollTop />


            
// //         </div>
        
     
// //     )
// // }
// // export default UserSurveys
// // // import { ScrollTop } from 'primereact/scrolltop';
// // // import { useGetSurveysQuery } from '../surveys/surveysApiSlice';
// // // import UserSurveyItem from './UserSurveyItem';
// // // import { useGetUserQuery } from './usersApiSlice';
// // // const UserSurveys=(props)=>{
// // //     const {setCurrentPage}=props
// // // const status="in process";
// // // const{
// // //     data:myUser,
// // //     isLoading:userIsLoading,
// // //     isError:userIsError,
// // //     error:userError,
// // //     isSuccess:userIsSuccess,
// // //     refetch:userRefetch
// // //     } = useGetUserQuery({id:''})
// // //     const {
// // //     data:surveys,
// // //     isLoading,
// // //     isError,
// // //     error,
// // //     refetch
// // //     } = useGetSurveysQuery({status:status})
// // //     const d = new Date(myUser?.birthDate);
// // //     const y1=d.getFullYear()
// // //     const y2=new Date().getFullYear()
// // //     const age=(y2-y1)
// // //     let filteredSurveys
// // //     surveys?.forEach(s=>console.log(s.gender,' ',s.sector,' ',s.title))
// // //     filteredSurveys=surveys?.filter(s=>(s.gender===myUser?.gender || s.gender==='לא מוגבל')&& (s.sector===myUser.sector || s.sector==='לא מוגבל') && s.age[0]<=age&&s.age[1]>=age)
// // //     if (isLoading) return <h1>Loading</h1>
// // //     if(isError) return <h2>{error}</h2>


// // //     return (
// // //         <>
// // //         {()=>setCurrentPage('User Surveys')}
// // //         <div className="cardSurvey">
// // //             {filteredSurveys?.map((s)=><UserSurveyItem refetch ={refetch} survey={s} user={myUser}/>)}
// // //             <ScrollTop />
// // //         </div>
// // //          </>
// // //     )
// // // }
// // // export default UserSurveys

// import { Button } from 'primereact/button';
// import { ScrollTop } from 'primereact/scrolltop';
// import { useEffect, useRef, useState } from 'react';
// import { useGetSurveysQuery } from '../surveys/surveysApiSlice';
// import UserSurvey from './UserSurvey';
// import { Dialog } from 'primereact/dialog';
// import UserSurveyItem from './UserSurveyItem';
// import { useGetUserQuery } from './usersApiSlice';

// const UserSurveys = (props) => {
//     const status="in process";
//     const{
//             data:myUser,
//             isLoading:userIsLoading,
//             isError:userIsError,
//             error:userError,
//             isSuccess:userIsSuccess,
//             refetch:userRefetch
//             } = useGetUserQuery({id:''})
//             console.log(myUser);
            
//         const{
//         data:surveys,
//         isLoading,
//         isError,
//         error,
//         isSuccess:survesIsSuccess,
        
//         refetch
//         } =  useGetSurveysQuery({status:status/*,gender:'',sector:'',birthDate:''*/})
//         let filteredSurveys=surveys

//     const [searchText, setSearchText] = useState('');
//     const [filteredSurveysByName, setFilteredSurveysByName] = useState([]);

//     const filterSurveysByName = (name) => {
//         const filteredByName = filteredSurveys.filter(survey => survey.name.toLowerCase().includes(name.toLowerCase()));
//         setFilteredSurveysByName(filteredByName);
//     };

//     const handleSearchChange = (e) => {
//         const { value } = e.target;
//         setSearchText(value);
//         filterSurveysByName(value);
//     };

//     return (
//         <div className="cardSurvey" id="cardSurveyId">
//             <input
//                 type="text"
//                 placeholder="Search by survey name..."
//                 value={searchText}
//                 onChange={handleSearchChange}
//             />
//             {filteredSurveysByName.map((s) => (
//                 <UserSurveyItem user={myUser} refetch={refetch} survey={s} />
//        ))} 
//             <ScrollTop />
//         </div>
//     );
// };

// export default UserSurveys;



// import { Button } from 'primereact/button';
// import { ScrollTop } from 'primereact/scrolltop';
// import { useEffect, useRef, useState } from 'react';
// import { useGetSurveysQuery } from '../surveys/surveysApiSlice';
// import UserSurvey from './UserSurvey';
// import { Dialog } from 'primereact/dialog';
// import UserSurveyItem from './UserSurveyItem';
// import { useGetUserQuery } from './usersApiSlice';

// const UserSurveys = (props) => {
//     const status = "in process";
//     const {
//         data: myUser,
//         isLoading: userIsLoading,
//         isError: userIsError,
//         error: userError,
//         isSuccess: userIsSuccess,
//         refetch: userRefetch
//     } = useGetUserQuery({ id: '' });

//     const {
//         data: surveys,
//         isLoading,
//         isError,
//         error,
//         isSuccess: survesIsSuccess,
//         refetch
//     } = useGetSurveysQuery({ status: status });

//     const [searchText, setSearchText] = useState('');
//     const [filteredSurveysByName, setFilteredSurveysByName] = useState([]);
    
//     useEffect(() => {
//         if (surveys) {
//             setFilteredSurveysByName(surveys);
//         }
//     }, [surveys]);

//     const filterSurveysByName = (title) => {
//         const filteredByName = surveys.filter(survey => survey.title.toLowerCase().includes(title.toLowerCase()));
//         setFilteredSurveysByName(filteredByName);
//     };

//     const handleSearchChange = (e) => {
//         const { value } = e.target;
//         setSearchText(value);
//         filterSurveysByName(value);
//     };

//     return (
//         <div className="cardSurvey" id="cardSurveyId">
//             <input
//                 type="text"
//                 placeholder="Search by survey name..."
//                 value={searchText}
//                 onChange={handleSearchChange}
//             />
//             {filteredSurveysByName.map((s) => (
//                 <UserSurveyItem user={myUser} refetch={refetch} survey={s} />
//             ))}
//             <ScrollTop />
//         </div>
//     );
// };

// export default UserSurveys;

// import { Button } from 'primereact/button';
// import { ScrollTop } from 'primereact/scrolltop';
// import { useEffect, useRef, useState } from 'react';
// import { useGetSurveysQuery } from '../surveys/surveysApiSlice';
// import UserSurvey from './UserSurvey';
// import { Dialog } from 'primereact/dialog';
// import UserSurveyItem from './UserSurveyItem';
// import { useGetUserQuery } from './usersApiSlice';
// import { InputText } from 'primereact/inputtext';

// const UserSurveys = (props) => {
//     const status = "in process";
//     const {
//         data: myUser,
//         isLoading: userIsLoading,
//         isError: userIsError,
//         error: userError,
//         isSuccess: userIsSuccess,
//         refetch: userRefetch
//     } = useGetUserQuery({ id: '' });

//     const {
//         data: surveys,
//         isLoading,
//         isError,
//         error,
//         isSuccess: survesIsSuccess,
//         refetch
//     } = useGetSurveysQuery({ status: status });

//     const [searchText, setSearchText] = useState('');
//     const [filteredSurveysByName, setFilteredSurveysByName] = useState([]);
//     let filteredSurveys=[]
//     const d = new Date(myUser?.birthDate);
//     const y1=d.getFullYear()
//     const y2=new Date().getFullYear()
//     const age=(y2-y1)
//     useEffect(() => {
//         if (surveys) {
//             filt();
//             setFilteredSurveysByName(surveys);
//              }
//     }, [surveys]);
// console.log(filteredSurveys);
//     const filterSurveysByName = (title) => {
//         const filteredByName = filteredSurveys?.filter(survey => survey.title && survey.title.toLowerCase().includes(title.toLowerCase()));
//        console.log("try");
//         console.log(filteredByName);
//         setFilteredSurveysByName(filteredByName);
//     };

//     const handleSearchChange = (e) => {
//         const { value } = e.target;
//         console.log(value);
//         setSearchText(value);
//         filterSurveysByName(value);
//     };
   
//     const filt=()=>{
//             if(myUser?.roles==='admin')
//             {console.log("hiii");
//                 filteredSurveys=surveys}
//             else{
//         filteredSurveys=surveys?.filter(s=>((s.gender===myUser?.gender || s.gender==='לא מוגבל') && (s.sector===myUser?.sector || s.sector==='לא מוגבל') && (s.age[0]<=age&&s.age[1]>=age||s.age==='') ) && (myUser?.surveys?.find(us=>us===s._id)==undefined))
//         console.log("tryy");

//         console.log(filteredSurveys);}}
//         const awaitfilter=async()=>{{await filt();  setFilteredSurveysByName(surveys);
//         }}
//     return (
//         <>
//             <div className="cardSurvey" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//                 <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                     {filteredSurveysByName.map((s) => <UserSurveyItem key={s.id} user={myUser} refetch={refetch} survey={s} />)}
                    
//                     <ScrollTop />
//                 </div>

//                 <div style={{
//                     flex: 1,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     position: 'fixed',
//                     right: '0',
//                     top: '130px', // Adjusted from 70px to 150px to move further down
//                     bottom: '0',
//                     padding: '20px',
//                     backgroundColor: '#f9f9f9',
//                     boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//                     overflowY: 'auto'
//                 }}>
//                     <br/><br/><br/>
//                     <InputText dir='rtl' placeholder="חפש סקר לפי שם..." value={searchText} onChange={handleSearchChange} /><br/><br/><br/>
//                     <div style={{color:"#14B8A6", fontSize:'20pt'}}> שמחים שבחרת לענות <br/>"הרוב קובע"<br/>!!!!בהצלחה<br/>מחכים להציג לך <br/>!תוצאות אמת<br/>!שווה לעקוב</div><br/><br/><br/><br/><br/>
//                     <img style={{width:'250px'}}src="image/הרוב-קובעע.gif" alt="My Image" />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default UserSurveys;
// import { useEffect, useState } from 'react';
// import { useGetSurveysQuery } from '../surveys/surveysApiSlice';
// import UserSurveyItem from './UserSurveyItem';
// import { InputText } from 'primereact/inputtext';
// import { useGetUserQuery } from './usersApiSlice';
// import { ScrollTop } from 'primereact/scrolltop';

// const UserSurveys = (props) => {
//     const status = "in process";
//         const {
//             data: myUser,
//             isLoading: userIsLoading,
//             isError: userIsError,
//             error: userError,
//             isSuccess: userIsSuccess,
//             refetch: userRefetch
//         } = useGetUserQuery({ id: '' });
    
//         const {
//             data: surveys,
//             isLoading,
//             isError,
//             error,
//             isSuccess: survesIsSuccess,
//             refetch
//         } = useGetSurveysQuery({ status: status });
    
//     const [searchText, setSearchText] = useState('');
//     const [filteredSurveys, setFilteredSurveys] = useState([]);

//     const age = myUser ? new Date().getFullYear() - new Date(myUser?.birthDate).getFullYear() : 0;

//     useEffect(() => {
//         if (surveys) {
//             filterSurveys();
//         }
//     }, [surveys, myUser]);

//     const filterSurveys = () => {
//         let surveysToDisplay = [...surveys];
        
//         if (myUser && myUser.roles !== 'admin') {
//             surveysToDisplay = surveysToDisplay.filter(survey =>
//                 (survey.gender === myUser.gender || survey.gender === 'לא מוגבל') &&
//                 (survey.sector === myUser.sector || survey.sector === 'לא מוגבל') &&
//                 ((survey.age[0] <= age && survey.age[1] >= age) || survey.age === '') &&
//                 !myUser.surveys.includes(survey._id)
//             );
//         }
        
//         if (searchText) {
//             surveysToDisplay = surveysToDisplay.filter(survey => 
//                 survey.title && survey.title.toLowerCase().includes(searchText.toLowerCase())
//             );
//         }

//         setFilteredSurveys(surveysToDisplay);
//     };

//     const handleSearchChange = (e) => {
//         const { value } = e.target;
//         setSearchText(value);
//         filterSurveys();
//     };
   
//     return (
//         <>
//             <div className="cardSurvey" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//                 <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                     {filteredSurveys.map((survey) => {
//                         return (
//                             <UserSurveyItem key={survey.id} user={myUser} refetch={refetch} survey={survey} />
//                         );
//                     })}
//                     <ScrollTop />
//                 </div>

//                 <div style={{
//                     flex: 1,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     position: 'fixed',
//                     right: '0',
//                     top: '130px',
//                     bottom: '0',
//                     padding: '20px',
//                     backgroundColor: '#f9f9f9',
//                     overflowY: 'auto'
//                 }}>
//                     <InputText dir='rtl' placeholder="חפש סקר לפי שם..." value={searchText} onChange={handleSearchChange} />
//                     {/* Other content */}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default UserSurveys;
import { useEffect, useState } from 'react';
import { useGetSurveysQuery } from '../surveys/surveysApiSlice';
import UserSurveyItem from './UserSurveyItem';
import { InputText } from 'primereact/inputtext';
import { useGetUserQuery } from './usersApiSlice';
import { ScrollTop } from 'primereact/scrolltop';

const UserSurveys = (props) => {
    const status = "in process";
        const {
            data: myUser,
            isLoading: userIsLoading,
            isError: userIsError,
            error: userError,
            isSuccess: userIsSuccess,
            refetch: userRefetch
        } = useGetUserQuery({ id: '' });
    
        const {
            data: surveys,
            isLoading,
            isError,
            error,
            isSuccess: survesIsSuccess,
            refetch
        } = useGetSurveysQuery({ status: status });
    

const [searchText, setSearchText] = useState('');
const [filteredSurveys, setFilteredSurveys] = useState([]);

const age = myUser ? new Date().getFullYear() - new Date(myUser?.birthDate).getFullYear() : 0;

const debouncedSearch = useDebounce(searchText, 300);

useEffect(() => {
    if (surveys) {
        filterSurveys();
    }
}, [surveys, myUser, debouncedSearch]);

const filterSurveys = () => {
    let surveysToDisplay = [...surveys];

    if (myUser && myUser.roles !== 'admin') {
        surveysToDisplay = surveysToDisplay.filter(survey =>
            (survey.gender === myUser.gender || survey.gender === 'לא מוגבל') &&
            (survey.sector === myUser.sector || survey.sector === 'לא מוגבל') &&
            ((survey.age[0] <= age && survey.age[1] >= age) || survey.age === '') &&
            !myUser.surveys.includes(survey._id)
        );
    }

    if (debouncedSearch) {
        surveysToDisplay = surveysToDisplay.filter(survey =>
            survey.title && survey.title.toLowerCase().includes(debouncedSearch.toLowerCase())
        );
    }

    setFilteredSurveys(surveysToDisplay);
};

const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
};

return (
    <>
        <div className="cardSurvey" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {filteredSurveys.map((survey) => (
                    <UserSurveyItem key={survey.id} user={myUser} refetch={refetch} survey={survey} />
                ))}
                <ScrollTop />
            </div>

            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'fixed',
                right: '0',
                top: '130px',
                bottom: '0',
                padding: '20px',
                backgroundColor: '#f9f9f9',
                overflowY: 'auto'
            }}>
                <InputText dir='rtl' placeholder="חפש סקר לפי שם..." value={searchText} onChange={handleSearchChange} />
                {/* Other content */}
            </div>
        </div>
    </>
);
};

function useDebounce(value, delay) {
const [debouncedValue, setDebouncedValue] = useState(value);

useEffect(() => {
    const handler = setTimeout(() => {
        setDebouncedValue(value);
    }, delay);

    return () => {
        clearTimeout(handler);
    };
}, [value, delay]);

return debouncedValue;
}

export default UserSurveys;
