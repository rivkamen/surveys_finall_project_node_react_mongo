// // import { ScrollTop } from "primereact/scrolltop";
// // import { useGetSurveysQuery } from "./surveysApiSlice";
// // import SurveySegItem from './SurveySegItem'
// // const SegmentSurveys=()=>{
// //     const status="closed";
// //     const {
// //     data:surveys=[],
// //     isLoading,
// //     isError,
// //     error,
// //     refetch
// //     } = useGetSurveysQuery({status:status,sector:'',gender:'',birthDate:''})
   
// //     return (
// //         <>
// //         {console.log("123456")}
// //          {surveys.map((s)=><SurveySegItem survey={s}refetch={refetch}/>)}
// //          <ScrollTop />
// //         </>
// //     )
// // }

// // export default SegmentSurveys


// import { useEffect, useState } from 'react';
// import { useGetSurveysQuery } from './surveysApiSlice';
// import SurveySegItem from './SurveySegItem';
// import { ScrollTop } from "primereact/scrolltop";
// import { InputText } from 'primereact/inputtext';

// const SegmentSurveys = () => {
//     const status = "closed";
//     const { data: surveys = [], isLoading, isError, error, refetch } = useGetSurveysQuery({ status: status, sector: '', gender: '', birthDate: '' });

//     const [searchText, setSearchText] = useState('');

//     const handleSearchChange = (e) => {
//         const { value } = e.target;
//         setSearchText(value);
//     };

//     return (
//         <>
//             <div className="cardSurvey" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//                 <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                     {surveys.map((s) => <SurveySegItem key={s.id} survey={s} refetch={refetch} />)}
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

// export default SegmentSurveys;



import { useEffect, useState } from 'react';
import { useGetSurveysQuery } from './surveysApiSlice';
import SurveySegItem from './SurveySegItem';
import { ScrollTop } from "primereact/scrolltop";
import { InputText } from 'primereact/inputtext';

const SegmentSurveys = () => {
    const status = "closed";
    const { data: surveys = [], isLoading, isError, refetch } = useGetSurveysQuery({ status: status, sector: '', gender: '', birthDate: '' });

    const [searchText, setSearchText] = useState('');
    const [filteredSurveys, setFilteredSurveys] = useState([]);

    useEffect(() => {
        if (searchText === '') {
            setFilteredSurveys(surveys); // show all surveys when search text is empty
        } else {
            const filteredResults = surveys.filter(survey =>
                survey.title && survey.title.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredSurveys(filteredResults);
        }
    }, [surveys, searchText]);

    const handleSearchChange = (e) => {
        const { value } = e.target;
        setSearchText(value);
    };

    return (
        <>
            <div className="cardSurvey" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center',marginRight:'20%'  }}>
                    {filteredSurveys.map((s) => <SurveySegItem key={s.id} survey={s} refetch={refetch} />)}
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

export default SegmentSurveys;