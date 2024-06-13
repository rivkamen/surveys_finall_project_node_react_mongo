
// import { useGetSurveysQuery } from '../surveys/surveysApiSlice';

// import Segment from './Segment';
// import { useEffect, useState } from 'react';

// import { Dialog } from 'primereact/dialog';

// import SegmentItem from './SegmentItem';
// import { ScrollTop } from 'primereact/scrolltop';
// import { InputText } from 'primereact/inputtext';
// const Segments=()=>{

// const {data :surveys=[],isLoading,isError,error, refetch}= useGetSurveysQuery({status:"completed",sector:'',gender:'',birthDate:''})

// // const [sortKey, setSortKey] = useState('');
// // const [sortOrder, setSortOrder] = useState(0);
// // const [sortField, setSortField] = useState('');
// // const [visible, setVisible] = useState(false);
// // const [visibleNew, setVisibleNew] = useState(false);
// // const sortOptions = [
// //     { label: 'Price High to Low', value: '!price' },
// //     { label: 'Price Low to High', value: 'price' }
// // ];
// // const [add,setAdd]=useState(false)
// // const [survey,setSurvey]=useState(false)
// // const[edit,setEdit]=useState(false)
// // const[del,setDel]=useState(false)
// const [searchText, setSearchText] = useState('');
// const [filteredSurveys, setFilteredSurveys] = useState([]);
// useEffect(() => {
//     if (searchText === '') {
//         setFilteredSurveys(surveys); // show all surveys when search text is empty
//     } else {
//         const filteredResults = surveys.filter(survey =>
//             survey.title && survey.title.toLowerCase().includes(searchText.toLowerCase())
//         );
//         setFilteredSurveys(filteredResults);
//     }
// }, [surveys, searchText]);

// const handleSearchChange = (e) => {
//     const { value } = e.target;
//     setSearchText(value);
// };
// // const onSortChange = (event) => {
// //     const value = event.value;

// //     if (value.indexOf('!') === 0) {
// //         setSortOrder(-1);
// //         setSortField(value.substring(1, value.length));
// //         setSortKey(value);
// //     } else {
// //         setSortOrder(1);
// //         setSortField(value);
// //         setSortKey(value);
// //     }
// // };




// return (
//     <>
      
//     {surveys.map((s)=><SegmentItem survey={s}refetch={refetch}/>)}
       
    
           
//     <ScrollTop />
                

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
//                         <InputText dir='rtl' placeholder="חפש סקר לפי שם..." value={searchText} onChange={handleSearchChange} />
//                     {/* Other content */}
//                 </div>
            
                
// </>
// )

// }
// export default Segments



import { useEffect, useState } from 'react';
import { useGetSurveysQuery } from '../surveys/surveysApiSlice';
import SegmentItem from './SegmentItem';
import { ScrollTop } from 'primereact/scrolltop';
import { InputText } from 'primereact/inputtext';

const Segments = () => {
    const { data: surveys = [], isLoading, isError, refetch } = useGetSurveysQuery({ status: "completed", sector: '', gender: '', birthDate: '' });

    const [searchText, setSearchText] = useState('');
    const [filteredSurveys, setFilteredSurveys] = useState([]);

    useEffect(() => {
        if (searchText === '') {
            setFilteredSurveys(surveys); // Show all surveys when search text is empty
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
         <div className="cardSurvey" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
         <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' ,marginRight:'20%' }}>
            {filteredSurveys.map((s) => <SegmentItem key={s.id} survey={s} refetch={refetch} />)}

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
                    <br/><br/><br/>
                    <InputText dir='rtl' placeholder="חפש סקר לפי שם..." value={searchText} onChange={handleSearchChange} /><br/><br/><br/>
                    {/* Other content */}
              
                <div style={{color:"#14B8A6", fontSize:'20pt'}}> שמחים שבחרת לענות <br/>"הרוב קובע"<br/>צעד קטן לאדם<br/>התקדמות גדולה לאנושות <br/>מקוים שנהנית<br/>...נפגש בהמשך</div><br/><br/><br/><br/><br/>
                               <img style={{width:'250px'}}src="image/הרוב-קובעע.gif" alt="My Image" />
            </div>
            </div>
                
        </>
    );
};

export default Segments;

