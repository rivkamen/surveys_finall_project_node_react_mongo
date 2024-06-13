

import { Button } from 'primereact/button';
import { useGetSurveysQuery } from './surveysApiSlice';
import { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import SurveyItem from './SurveyItem';
import { ScrollTop } from 'primereact/scrolltop';
import AddSurvey from './AddSurvey';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';

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

    const [selectedCategories, setSelectedCategories] = useState([categories.find(category => category.key === 'all')]);    const [filteredSurveys, setFilteredSurveys] = useState([]);


    useEffect(() => {
        if (selectedCategories.some(category => category.key === 'all')) {
            setFilteredSurveys(surveys);
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
        console.log("filter");
        console.log(surveys);
        filtered= surveys.filter(survey => survey.title && survey.title.toLowerCase().includes(searchText.toLowerCase()));
        console.log(searchText);
        console.log(filtered);
setFilteredSurveys(filtered);
          };
    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked) {
            if (e.value.key === 'all') {
                _selectedCategories = categories.filter(c => c.key !== 'all'); // Select all categories except "all"
            } else {
                _selectedCategories.push(e.value);
                // Ensure "all" is unchecked if other checkboxes are checked
                _selectedCategories = _selectedCategories.filter(category => category.key !== 'all');
            }
        } else {
            if (e.value.key === 'all') {
                _selectedCategories = [];
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
                    overflowY: 'auto'
                }}>
                   
                    <div className="card flex justify-content-center" style={{ width: '100%' }}>
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
                        </div>
                    </div>

<InputText placeholder="חיפוש סקר..." value={searchText} onChange={onSearchChange} dir='rtl'/>
<br/><br/><br/><br/>
                    <Button
                        icon="pi pi-plus"
                        style={{ color: '#10bbbb', backgroundColor: '#e5e7eb', marginBottom: '20px', height:'15%'}}
                        label="&nbsp;סקר חדש&nbsp;"
                        onClick={() => { setVisibleNew(true); }}
                        rounded
                    />
                </div>
            </div>
        </>
    );
};

export default Surveys; 



