
import { useEffect, useState } from 'react';
import { useGetSurveysQuery } from '../surveys/surveysApiSlice';
import UserSurveyItem from './UserSurveyItem';
import { InputText } from 'primereact/inputtext';
import { useGetUserQuery } from './usersApiSlice';
import { ScrollTop } from 'primereact/scrolltop';
import { Button } from 'primereact/button';

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
                <div style={{color:"#14B8A6", fontSize:'20pt'}}> שמחים שבחרת לענות <br/>"הרוב קובע"<br/>!!!!בהצלחה<br/>מחכים להציג לך <br/>!תוצאות אמת<br/>!שווה לעקוב</div><br/>
                               <img  className="logoImg" style={{width:'250px'}}src="image/הרוב-קובעע.gif" alt="My Image" />

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
