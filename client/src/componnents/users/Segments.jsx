
import { useEffect, useState } from 'react';
import { useGetSurveysQuery } from '../surveys/surveysApiSlice';
import SegmentItem from './SegmentItem';
import { ScrollTop } from 'primereact/scrolltop';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

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
    const sortSurveysByUpdateDate = () => {
        const sortedSurveys = [...filteredSurveys].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        setFilteredSurveys(sortedSurveys);
    };
    
    const toggleSortDirection = () => {
        const sortedSurveys = [...filteredSurveys].reverse();
        setFilteredSurveys(sortedSurveys);
    };
    
    
    const [isSortingAscending, setIsSortingAscending] = useState(true);
const [sortText, setSortText] = useState("בסדר עולה");




const [iconn,setIconn]=useState("pi pi-sort-amount-up");
const [isAscending, setIsAscending] = useState(true);

const handleSortButtonClick = () => {
    setIsAscending(!isAscending);
    setSortText(isAscending ? "בסדר יורד" : "בסדר עולה");
    setIconn(isAscending ? "pi pi-sort-amount-down" : "pi pi-sort-amount-up");
    if (isSortingAscending) {
                toggleSortDirection();}
                else{
                            sortSurveysByUpdateDate();

                }
};
    
    
    return (
        <>
         <div className="cardSurvey" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
         <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' ,marginRight:'20%' }}>
            {filteredSurveys.map((s) => <SegmentItem key={s.id} survey={s} refetch={refetch} />)}

            <ScrollTop />
</div>
            <div className='right-column' style={{
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
                    overflowY: 'auto',
                    width:'300px'
                }}>
                    <br/>
                    <InputText dir='rtl' placeholder="חפש סקר לפי שם..." value={searchText} onChange={handleSearchChange} /><br/>
                    {/* Other content */}
                    <p dir="rtl"style={{marginRight:5}}>מיון לפי תאריך:</p>
                    <Button
    icon={iconn}
    style={{ color: '#10bbbb', backgroundColor: '#e5e7eb', marginBottom: '20px' }}
    label={sortText}
    onClick={handleSortButtonClick}
    rounded
/>

<br/>
                <div style={{color:"#14B8A6", fontSize:'20pt'}}> שמחים שבחרת לענות <br/>"הרוב קובע"<br/>צעד קטן לאדם<br/>התקדמות גדולה לאנושות <br/>מקוים שנהנית</div><br/>
                               <img  className="logoImg" style={{width:'250px'}}src="image/הרוב-קובעע.gif" alt="My Image" />
            </div>
            </div>
                
        </>
    );
};

export default Segments;

