

import { Button } from 'primereact/button';
import { useGetSurveysQuery } from './surveysApiSlice';
import { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import SurveyItem from './SurveyItem';
import { ScrollTop } from 'primereact/scrolltop';
import AddSurvey from './AddSurvey';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { Accordion, AccordionTab } from 'primereact/accordion';

const Surveys = (props) => {
    const { setCurrentPage } = props;
    const { data: surveys = [], isLoading, isError, error, refetch } = useGetSurveysQuery({ status: '' });
    let filtered=[];
    const [visibleNew, setVisibleNew] = useState(false);
    const [searchText, setSearchText] = useState('');


    const categories = [
        { name: 'סקרים ביצירה', key: 'creating' },
        { name: 'סקרים פתוחים לתשובות', key: 'in process' },
        { name: 'סקרים לפילוח', key: 'closed' },
        { name: 'סקרים מפולחים', key: 'completed' },
        { name: 'בחר הכל', key: 'all' }, // New "all" category
    ];

    const [selectedCategories, setSelectedCategories] = useState([categories.find(category => category.key === 'all')]);  
      const [filteredSurveys, setFilteredSurveys] = useState([]);


    useEffect(() => {
        if (selectedCategories.some(category => category.key === 'all')) {
            setFilteredSurveys(surveys);
            // filterSurveys(surveys)
            filterSurveys(surveys,searchText)
        } else {
            let selectedKeys = selectedCategories.map(c => c.key);
            filtered = surveys.filter(s => selectedKeys.includes(s.status));
            setFilteredSurveys(filtered);
            filterSurveys(filtered,searchText);

        }
       
    }, [selectedCategories, surveys,searchText]);
    const onSearchChange = (e) => {
        setSearchText(e.target.value);
      };

const filterSurveys = (surveys, searchText) => {
    let filteredSurveys = [];
    if (selectedCategories.some(category => category.key === 'all')) {
        filteredSurveys = surveys.filter(survey => survey.title.toLowerCase().includes(searchText.toLowerCase()));
    } else {
        let selectedKeys = selectedCategories.map(category => category.key);
        filteredSurveys = surveys.filter(survey => selectedKeys.includes(survey.status) && survey.title.toLowerCase().includes(searchText.toLowerCase()));
    }
    
    setFilteredSurveys(filteredSurveys);
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


    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];
    
        if (e.checked) {
            if (e.value.key === 'all') {
                _selectedCategories = [categories.find(category => category.key === 'all')]; // Select "כל הסקרים" only
                setFilteredSurveys(surveys); // Show all surveys when selecting "כל הסקרים"
            } else {
                _selectedCategories.push(e.value);
                // Ensure "כל הסקרים" is unchecked if other checkboxes are checked
                _selectedCategories = _selectedCategories.filter(category => category.key !== 'all');
            }
        } else {
            if (e.value.key === 'all') {
                _selectedCategories = []; // Uncheck all other categories when "כל הסקרים" is unchecked
            } else {
                _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);
            }
        }
    
        setSelectedCategories(_selectedCategories);
    };
    return (
        <>
            <div className="cardSurvey" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center',marginRight:'20%' }}>
                    {filteredSurveys.map((s) => <SurveyItem key={s.id} survey={s} refetch={refetch} />)}
                    
                    <Dialog visible={visibleNew} style={{ width: '80vw', height: '200vw' }} onHide={() => setVisibleNew(false)}>
                        <p className="m-0">
                            <AddSurvey setVisibleNew={setVisibleNew} refetch={refetch} />
                        </p>
                    </Dialog>
                    <ScrollTop />
                </div>
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'fixed',
                    right: '0',
                    top: '130px', // Adjusted from 70px to 150px to move further down
                    bottom: '0',
                    padding: '20px',
                    backgroundColor: '#f9f9f9',
                    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                    overflowY: 'auto',
                    width:'300px'

                }}>
                   
           <br/> <br/>                 

<InputText placeholder="חיפוש סקר..." value={searchText} onChange={onSearchChange} dir='rtl'/>
<br/>
<div className="card flex justify-content-center" style={{ width: '100%' }}>
                    <Accordion id="surveysAcord"className="w-full md:w-16rem">
                    <AccordionTab header={<div><i className='pi pi-bookmark-fill'></i>&nbsp;&nbsp;סנן לפי קטגוריה</div>}>
                        <div className="flex flex-column gap-3" >
                            {categories.map((category) => {
                                return (
                                    <div key={category.key} className="flex justify-content-between align-items-center">


                                        <label htmlFor={category.key} className="mr-2"> 
                                            {category.name}
                                        </label>
                                        <Checkbox
                                            inputId={category.key}
                                            name="category"
                                            value={category}
                                            onChange={onCategoryChange}
                                            checked={selectedCategories.some((item) => item.key === category.key)}
                                        />
                                    </div>
                                );
                            })}
                        </div></AccordionTab></Accordion>
                    </div>
                    <p dir="rtl"style={{marginRight:5}}>מיון לפי תאריך:</p>
                    <Button
    icon={iconn}
    style={{ color: '#10bbbb', backgroundColor: '#e5e7eb', marginBottom: '20px' }}
    label={sortText}
    onClick={handleSortButtonClick}
    rounded
/> 

<br/><br/>

                    <Button
                        icon="pi pi-plus"
                        style={{ color: '#10bbbb', backgroundColor: '#e5e7eb', marginBottom: '20px', height:'10%'}}
                        label="&nbsp;סקר חדש&nbsp;"
                        onClick={() => { setVisibleNew(true); }}
                        rounded
                    />
                                    <img className="logoImg"style={{width:'250px'}} src="image/הרוב-קובעע.gif" alt="My Image" />

                </div>
            </div>
        </>
    );
};

export default Surveys; 



