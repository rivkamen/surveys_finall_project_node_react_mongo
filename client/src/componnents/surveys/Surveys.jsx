
// // // // // // // import { Button } from 'primereact/button';
// // // // // // // import { Dropdown } from 'primereact/dropdown';
// // // // // // // import { useGetSurveysQuery } from './surveysApiSlice';
// // // // // // // import Survey from './Survey';
// // // // // // // import { useEffect, useState } from 'react';
// // // // // // // import { Dialog } from 'primereact/dialog';
// // // // // // // import SurveyItem from './SurveyItem';
// // // // // // // import { ScrollTop } from 'primereact/scrolltop';
// // // // // // // import AddSurvey from './AddSurvey';
// // // // // // // import { Checkbox } from 'primereact/checkbox';

// // // // // // // const Surveys = (props) => {
// // // // // // //     const { setCurrentPage } = props;
// // // // // // //     const { data: surveys = [], isLoading, isError, error, refetch } = useGetSurveysQuery({ status: '' });

// // // // // // //     const [visibleNew, setVisibleNew] = useState(false);
// // // // // // //     const [selectedCategories, setSelectedCategories] = useState([]);
// // // // // // //     const [filteredSurveys, setFilteredSurveys] = useState([]);

// // // // // // //     const categories = [
// // // // // // //         { name: 'סקרים ביצירה', key: 'creating' },
// // // // // // //         { name: 'סקרים פתוחים לתשובות', key: 'in process' },
// // // // // // //         { name: 'סקרים לפילוח', key: 'closed' },
// // // // // // //         { name: 'סקרים מפולחים', key: 'completed' },
// // // // // // //         { name: 'בחר הכל', key: 'all' }, // New "all" category
// // // // // // //     ];

// // // // // // //     useEffect(() => {
// // // // // // //         if (selectedCategories.some(category => category.key === 'all')) {
// // // // // // //             setFilteredSurveys(surveys);
// // // // // // //         } else {
// // // // // // //             let selectedKeys = selectedCategories.map(c => c.key);
// // // // // // //             let filtered = surveys.filter(s => selectedKeys.includes(s.status));
// // // // // // //             setFilteredSurveys(filtered);
// // // // // // //         }
// // // // // // //     }, [selectedCategories, surveys]);

// // // // // // //     const onCategoryChange = (e) => {
// // // // // // //         let _selectedCategories = [...selectedCategories];

// // // // // // //         if (e.checked) {
// // // // // // //             if (e.value.key === 'all') {
// // // // // // //                 _selectedCategories = categories; // Select all categories, including "all"
// // // // // // //             } else {
// // // // // // //                 _selectedCategories.push(e.value);
// // // // // // //                 // Remove "all" if it's not checked
// // // // // // //                 _selectedCategories = _selectedCategories.filter(category => category.key !== 'all');
// // // // // // //             }
// // // // // // //         } else {
// // // // // // //             if (e.value.key === 'all') {
// // // // // // //                 _selectedCategories = [];
// // // // // // //             } else {
// // // // // // //                 _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);
// // // // // // //             }
// // // // // // //         }

// // // // // // //         setSelectedCategories(_selectedCategories);
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <>
// // // // // // //             <div className="cardSurvey">
// // // // // // //                 <div className="card flex justify-content-center">
// // // // // // //                     <div className="flex flex-column gap-3">
// // // // // // //                         {categories.map((category) => {
// // // // // // //                             return (
// // // // // // //                                 <div key={category.key} className="flex align-items-center">
// // // // // // //                                     <Checkbox
// // // // // // //                                         inputId={category.key}
// // // // // // //                                         name="category"
// // // // // // //                                         value={category}
// // // // // // //                                         onChange={onCategoryChange}
// // // // // // //                                         checked={selectedCategories.some((item) => item.key === category.key)}
// // // // // // //                                     />
// // // // // // //                                     <label htmlFor={category.key} className="ml-2">
// // // // // // //                                         {category.name}
// // // // // // //                                     </label>
// // // // // // //                                 </div>
// // // // // // //                             );
// // // // // // //                         })}
// // // // // // //                     </div>
// // // // // // //                 </div>
// // // // // // //                 <div style={{ display: 'flex' }}>
// // // // // // //                     <div style={{ flex: 1 }}>
// // // // // // //                         <Button
// // // // // // //                             icon="pi pi-plus"
// // // // // // //                             style={{ color: '#10bbbb', backgroundColor: '#e5e7eb', position: 'fixed', marginTop: '25px', marginLeft: '0px' }}
// // // // // // //                             label="&nbsp;סקר חדש&nbsp;"
// // // // // // //                             onClick={() => { setVisibleNew(true); }}
// // // // // // //                             rounded
// // // // // // //                         />
// // // // // // //                     </div>
// // // // // // //                     <div style={{ flex: 2 }}>
// // // // // // //                         {filteredSurveys.map((s) => <SurveyItem key={s.id} survey={s} refetch={refetch} />)}
// // // // // // //                         <Dialog visible={visibleNew} style={{ width: '80vw', height: '200vw' }} onHide={() => setVisibleNew(false)}>
// // // // // // //                             <p className="m-0">
// // // // // // //                                 <AddSurvey setVisibleNew={setVisibleNew} refetch={refetch} />
// // // // // // //                             </p>
// // // // // // //                         </Dialog>
// // // // // // //                         <ScrollTop />
// // // // // // //                     </div>
// // // // // // //                 </div>
// // // // // // //             </div>
// // // // // // //         </>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default Surveys;

// // // // // // import { Button } from 'primereact/button';
// // // // // // import { Dropdown } from 'primereact/dropdown';
// // // // // // import { useGetSurveysQuery } from './surveysApiSlice';
// // // // // // import Survey from './Survey';
// // // // // // import { useEffect, useState } from 'react';
// // // // // // import { Dialog } from 'primereact/dialog';
// // // // // // import SurveyItem from './SurveyItem';
// // // // // // import { ScrollTop } from 'primereact/scrolltop';
// // // // // // import AddSurvey from './AddSurvey';
// // // // // // import { Checkbox } from 'primereact/checkbox';

// // // // // // const Surveys = (props) => {
// // // // // //     const { setCurrentPage } = props;
// // // // // //     const { data: surveys = [], isLoading, isError, error, refetch } = useGetSurveysQuery({ status: '' });

// // // // // //     const [visibleNew, setVisibleNew] = useState(false);
// // // // // //     const [selectedCategories, setSelectedCategories] = useState([]);
// // // // // //     const [filteredSurveys, setFilteredSurveys] = useState([]);

// // // // // //     const categories = [
// // // // // //         { name: 'סקרים ביצירה', key: 'creating' },
// // // // // //         { name: 'סקרים פתוחים לתשובות', key: 'in process' },
// // // // // //         { name: 'סקרים לפילוח', key: 'closed' },
// // // // // //         { name: 'סקרים מפולחים', key: 'completed' },
// // // // // //         { name: 'בחר הכל', key: 'all' }, // New "all" category
// // // // // //     ];

// // // // // //     useEffect(() => {
// // // // // //         if (selectedCategories.some(category => category.key === 'all')) {
// // // // // //             setFilteredSurveys(surveys);
// // // // // //         } else {
// // // // // //             let selectedKeys = selectedCategories.map(c => c.key);
// // // // // //             let filtered = surveys.filter(s => selectedKeys.includes(s.status));
// // // // // //             setFilteredSurveys(filtered);
// // // // // //         }
// // // // // //     }, [selectedCategories, surveys]);

// // // // // //     const onCategoryChange = (e) => {
// // // // // //         let _selectedCategories = [...selectedCategories];

// // // // // //         if (e.checked) {
// // // // // //             if (e.value.key === 'all') {
// // // // // //                 _selectedCategories = categories.filter(c => c.key !== 'all'); // Select all categories except "all"
// // // // // //             } else {
// // // // // //                 _selectedCategories.push(e.value);
// // // // // //                 // Ensure "all" is unchecked if other checkboxes are checked
// // // // // //                 _selectedCategories = _selectedCategories.filter(category => category.key !== 'all');
// // // // // //             }
// // // // // //         } else {
// // // // // //             if (e.value.key === 'all') {
// // // // // //                 _selectedCategories = [];
// // // // // //             } else {
// // // // // //                 _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);
// // // // // //             }
// // // // // //         }

// // // // // //         setSelectedCategories(_selectedCategories);
// // // // // //     };

// // // // // //     return (
// // // // // //         <>
// // // // // //             <div className="cardSurvey" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
// // // // // //                 <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// // // // // //                     {filteredSurveys.map((s) => <SurveyItem key={s.id} survey={s} refetch={refetch} />)}
// // // // // //                     <Dialog visible={visibleNew} style={{ width: '80vw', height: '200vw' }} onHide={() => setVisibleNew(false)}>
// // // // // //                         <p className="m-0">
// // // // // //                             <AddSurvey setVisibleNew={setVisibleNew} refetch={refetch} />
// // // // // //                         </p>
// // // // // //                     </Dialog>
// // // // // //                     <ScrollTop />
// // // // // //                 </div>
// // // // // //                 <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// // // // // //                     <Button
// // // // // //                         icon="pi pi-plus"
// // // // // //                         style={{ color: '#10bbbb', backgroundColor: '#e5e7eb', marginTop: '25px', marginRight: '0px' }}
// // // // // //                         label="&nbsp;סקר חדש&nbsp;"
// // // // // //                         onClick={() => { setVisibleNew(true); }}
// // // // // //                         rounded
// // // // // //                     />
// // // // // //                     <div className="card flex justify-content-center" style={{ marginTop: '20px' }}>
// // // // // //                         <div className="flex flex-column gap-3">
// // // // // //                             {categories.map((category) => {
// // // // // //                                 return (
// // // // // //                                     <div key={category.key} className="flex align-items-center">
// // // // // //                                         <Checkbox
// // // // // //                                             inputId={category.key}
// // // // // //                                             name="category"
// // // // // //                                             value={category}
// // // // // //                                             onChange={onCategoryChange}
// // // // // //                                             checked={selectedCategories.some((item) => item.key === category.key)}
// // // // // //                                         />
// // // // // //                                         <label htmlFor={category.key} className="ml-2">
// // // // // //                                             {category.name}
// // // // // //                                         </label>
// // // // // //                                     </div>
// // // // // //                                 );
// // // // // //                             })}
// // // // // //                         </div>
// // // // // //                     </div>
// // // // // //                 </div>
// // // // // //             </div>
// // // // // //         </>
// // // // // //     );
// // // // // // };

// // // // // // export default Surveys;

// // // // // import { Button } from 'primereact/button';
// // // // // import { useGetSurveysQuery } from './surveysApiSlice';
// // // // // import { useEffect, useState } from 'react';
// // // // // import { Dialog } from 'primereact/dialog';
// // // // // import SurveyItem from './SurveyItem';
// // // // // import { ScrollTop } from 'primereact/scrolltop';
// // // // // import AddSurvey from './AddSurvey';
// // // // // import { Checkbox } from 'primereact/checkbox';

// // // // // const Surveys = (props) => {
// // // // //     const { setCurrentPage } = props;
// // // // //     const { data: surveys = [], isLoading, isError, error, refetch } = useGetSurveysQuery({ status: '' });

// // // // //     const [visibleNew, setVisibleNew] = useState(false);
// // // // //     const [selectedCategories, setSelectedCategories] = useState([]);
// // // // //     const [filteredSurveys, setFilteredSurveys] = useState([]);

// // // // //     const categories = [
// // // // //         { name: 'סקרים ביצירה', key: 'creating' },
// // // // //         { name: 'סקרים פתוחים לתשובות', key: 'in process' },
// // // // //         { name: 'סקרים לפילוח', key: 'closed' },
// // // // //         { name: 'סקרים מפולחים', key: 'completed' },
// // // // //         { name: 'בחר הכל', key: 'all' }, // New "all" category
// // // // //     ];

// // // // //     useEffect(() => {
// // // // //         if (selectedCategories.some(category => category.key === 'all')) {
// // // // //             setFilteredSurveys(surveys);
// // // // //         } else {
// // // // //             let selectedKeys = selectedCategories.map(c => c.key);
// // // // //             let filtered = surveys.filter(s => selectedKeys.includes(s.status));
// // // // //             setFilteredSurveys(filtered);
// // // // //         }
// // // // //     }, [selectedCategories, surveys]);

// // // // //     const onCategoryChange = (e) => {
// // // // //         let _selectedCategories = [...selectedCategories];

// // // // //         if (e.checked) {
// // // // //             if (e.value.key === 'all') {
// // // // //                 _selectedCategories = categories.filter(c => c.key !== 'all'); // Select all categories except "all"
// // // // //             } else {
// // // // //                 _selectedCategories.push(e.value);
// // // // //                 // Ensure "all" is unchecked if other checkboxes are checked
// // // // //                 _selectedCategories = _selectedCategories.filter(category => category.key !== 'all');
// // // // //             }
// // // // //         } else {
// // // // //             if (e.value.key === 'all') {
// // // // //                 _selectedCategories = [];
// // // // //             } else {
// // // // //                 _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);
// // // // //             }
// // // // //         }

// // // // //         setSelectedCategories(_selectedCategories);
// // // // //     };

// // // // //     return (
// // // // //         <>
// // // // //             <div className="cardSurvey" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
// // // // //                 <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// // // // //                     {filteredSurveys.map((s) => <SurveyItem key={s.id} survey={s} refetch={refetch} />)}
// // // // //                     <Dialog visible={visibleNew} style={{ width: '80vw', height: '200vw' }} onHide={() => setVisibleNew(false)}>
// // // // //                         <p className="m-0">
// // // // //                             <AddSurvey setVisibleNew={setVisibleNew} refetch={refetch} />
// // // // //                         </p>
// // // // //                     </Dialog>
// // // // //                     <ScrollTop />
// // // // //                 </div>
// // // // //                 <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'fixed', right: '0', top: '0', height: '100vh', padding: '20px', backgroundColor: '#f9f9f9', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
// // // // //                     <Button
// // // // //                         icon="pi pi-plus"
// // // // //                         style={{ color: '#10bbbb', backgroundColor: '#e5e7eb', marginBottom: '20px' }}
// // // // //                         label="&nbsp;סקר חדש&nbsp;"
// // // // //                         onClick={() => { setVisibleNew(true); }}
// // // // //                         rounded
// // // // //                     />
// // // // //                     <div className="card flex justify-content-center" style={{ width: '100%' }}>
// // // // //                         <div className="flex flex-column gap-3">
// // // // //                             {categories.map((category) => {
// // // // //                                 return (
// // // // //                                     <div key={category.key} className="flex align-items-center">
// // // // //                                         <Checkbox
// // // // //                                             inputId={category.key}
// // // // //                                             name="category"
// // // // //                                             value={category}
// // // // //                                             onChange={onCategoryChange}
// // // // //                                             checked={selectedCategories.some((item) => item.key === category.key)}
// // // // //                                         />
// // // // //                                         <label htmlFor={category.key} className="ml-2">
// // // // //                                             {category.name}
// // // // //                                         </label>
// // // // //                                     </div>
// // // // //                                 );
// // // // //                             })}
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>
// // // // //             </div>
// // // // //         </>
// // // // //     );
// // // // // };

// // // // // export default Surveys;

// // // // import { Button } from 'primereact/button';
// // // // import { useGetSurveysQuery } from './surveysApiSlice';
// // // // import { useEffect, useState } from 'react';
// // // // import { Dialog } from 'primereact/dialog';
// // // // import SurveyItem from './SurveyItem';
// // // // import { ScrollTop } from 'primereact/scrolltop';
// // // // import AddSurvey from './AddSurvey';
// // // // import { Checkbox } from 'primereact/checkbox';

// // // // const Surveys = (props) => {
// // // //     const { setCurrentPage } = props;
// // // //     const { data: surveys = [], isLoading, isError, error, refetch } = useGetSurveysQuery({ status: '' });

// // // //     const [visibleNew, setVisibleNew] = useState(false);
// // // //     const [selectedCategories, setSelectedCategories] = useState([]);
// // // //     const [filteredSurveys, setFilteredSurveys] = useState([]);

// // // //     const categories = [
// // // //         { name: 'סקרים ביצירה', key: 'creating' },
// // // //         { name: 'סקרים פתוחים לתשובות', key: 'in process' },
// // // //         { name: 'סקרים לפילוח', key: 'closed' },
// // // //         { name: 'סקרים מפולחים', key: 'completed' },
// // // //         { name: 'בחר הכל', key: 'all' }, // New "all" category
// // // //     ];

// // // //     useEffect(() => {
// // // //         if (selectedCategories.some(category => category.key === 'all')) {
// // // //             setFilteredSurveys(surveys);
// // // //         } else {
// // // //             let selectedKeys = selectedCategories.map(c => c.key);
// // // //             let filtered = surveys.filter(s => selectedKeys.includes(s.status));
// // // //             setFilteredSurveys(filtered);
// // // //         }
// // // //     }, [selectedCategories, surveys]);

// // // //     const onCategoryChange = (e) => {
// // // //         let _selectedCategories = [...selectedCategories];

// // // //         if (e.checked) {
// // // //             if (e.value.key === 'all') {
// // // //                 _selectedCategories = categories.filter(c => c.key !== 'all'); // Select all categories except "all"
// // // //             } else {
// // // //                 _selectedCategories.push(e.value);
// // // //                 // Ensure "all" is unchecked if other checkboxes are checked
// // // //                 _selectedCategories = _selectedCategories.filter(category => category.key !== 'all');
// // // //             }
// // // //         } else {
// // // //             if (e.value.key === 'all') {
// // // //                 _selectedCategories = [];
// // // //             } else {
// // // //                 _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);
// // // //             }
// // // //         }

// // // //         setSelectedCategories(_selectedCategories);
// // // //     };

// // // //     return (
// // // //         <>
// // // //             <div className="cardSurvey" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
// // // //                 <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// // // //                     {filteredSurveys.map((s) => <SurveyItem key={s.id} survey={s} refetch={refetch} />)}
// // // //                     <Dialog visible={visibleNew} style={{ width: '80vw', height: '200vw' }} onHide={() => setVisibleNew(false)}>
// // // //                         <p className="m-0">
// // // //                             <AddSurvey setVisibleNew={setVisibleNew} refetch={refetch} />
// // // //                         </p>
// // // //                     </Dialog>
// // // //                     <ScrollTop />
// // // //                 </div>
// // // //                 <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'fixed', right: '0', top: '0', maxHeight: '50vh', overflowY: 'auto', padding: '20px', backgroundColor: '#f9f9f9', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
// // // //                     <Button
// // // //                         icon="pi pi-plus"
// // // //                         style={{ color: '#10bbbb', backgroundColor: '#e5e7eb', marginBottom: '20px' }}
// // // //                         label="&nbsp;סקר חדש&nbsp;"
// // // //                         onClick={() => { setVisibleNew(true); }}
// // // //                         rounded
// // // //                     />
// // // //                     <div className="card flex justify-content-center" style={{ width: '100%' }}>
// // // //                         <div className="flex flex-column gap-3">
// // // //                             {categories.map((category) => {
// // // //                                 return (
// // // //                                     <div key={category.key} className="flex align-items-center">
// // // //                                         <Checkbox
// // // //                                             inputId={category.key}
// // // //                                             name="category"
// // // //                                             value={category}
// // // //                                             onChange={onCategoryChange}
// // // //                                             checked={selectedCategories.some((item) => item.key === category.key)}
// // // //                                         />
// // // //                                         <label htmlFor={category.key} className="ml-2">
// // // //                                             {category.name}
// // // //                                         </label>
// // // //                                     </div>
// // // //                                 );
// // // //                             })}
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>
// // // //         </>
// // // //     );
// // // // };

// // // // export default Surveys;


// // // import { Button } from 'primereact/button';
// // // import { useGetSurveysQuery } from './surveysApiSlice';
// // // import { useEffect, useState } from 'react';
// // // import { Dialog } from 'primereact/dialog';
// // // import SurveyItem from './SurveyItem';
// // // import { ScrollTop } from 'primereact/scrolltop';
// // // import AddSurvey from './AddSurvey';
// // // import { Checkbox } from 'primereact/checkbox';

// // // const Surveys = (props) => {
// // //     const { setCurrentPage } = props;
// // //     const { data: surveys = [], isLoading, isError, error, refetch } = useGetSurveysQuery({ status: '' });

// // //     const [visibleNew, setVisibleNew] = useState(false);
// // //     const [selectedCategories, setSelectedCategories] = useState([]);
// // //     const [filteredSurveys, setFilteredSurveys] = useState([]);

// // //     const categories = [
// // //         { name: 'סקרים ביצירה', key: 'creating' },
// // //         { name: 'סקרים פתוחים לתשובות', key: 'in process' },
// // //         { name: 'סקרים לפילוח', key: 'closed' },
// // //         { name: 'סקרים מפולחים', key: 'completed' },
// // //         { name: 'בחר הכל', key: 'all' }, // New "all" category
// // //     ];

// // //     useEffect(() => {
// // //         if (selectedCategories.some(category => category.key === 'all')) {
// // //             setFilteredSurveys(surveys);
// // //         } else {
// // //             let selectedKeys = selectedCategories.map(c => c.key);
// // //             let filtered = surveys.filter(s => selectedKeys.includes(s.status));
// // //             setFilteredSurveys(filtered);
// // //         }
// // //     }, [selectedCategories, surveys]);

// // //     const onCategoryChange = (e) => {
// // //         let _selectedCategories = [...selectedCategories];

// // //         if (e.checked) {
// // //             if (e.value.key === 'all') {
// // //                 _selectedCategories = categories.filter(c => c.key !== 'all'); // Select all categories except "all"
// // //             } else {
// // //                 _selectedCategories.push(e.value);
// // //                 // Ensure "all" is unchecked if other checkboxes are checked
// // //                 _selectedCategories = _selectedCategories.filter(category => category.key !== 'all');
// // //             }
// // //         } else {
// // //             if (e.value.key === 'all') {
// // //                 _selectedCategories = [];
// // //             } else {
// // //                 _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);
// // //             }
// // //         }

// // //         setSelectedCategories(_selectedCategories);
// // //     };

// // //     return (
// // //         <>
// // //             <div className="cardSurvey" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
// // //                 <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// // //                     {filteredSurveys.map((s) => <SurveyItem key={s.id} survey={s} refetch={refetch} />)}
// // //                     <Dialog visible={visibleNew} style={{ width: '80vw', height: '200vw' }} onHide={() => setVisibleNew(false)}>
// // //                         <p className="m-0">
// // //                             <AddSurvey setVisibleNew={setVisibleNew} refetch={refetch} />
// // //                         </p>
// // //                     </Dialog>
// // //                     <ScrollTop />
// // //                 </div>
// // //                 <div style={{
// // //                     flex: 1,
// // //                     display: 'flex',
// // //                     flexDirection: 'column',
// // //                     alignItems: 'center',
// // //                     position: 'fixed',
// // //                     right: '0',
// // //                     top: '70px', // Assuming 60px navbar height + 10px margin
// // //                     bottom: '0',
// // //                     padding: '20px',
// // //                     backgroundColor: '#f9f9f9',
// // //                     boxShadow: '0 0 10px rgba(0,0,0,0.1)',
// // //                     overflowY: 'auto'
// // //                 }}>
// // //                     <Button
// // //                         icon="pi pi-plus"
// // //                         style={{ color: '#10bbbb', backgroundColor: '#e5e7eb', marginBottom: '20px' }}
// // //                         label="&nbsp;סקר חדש&nbsp;"
// // //                         onClick={() => { setVisibleNew(true); }}
// // //                         rounded
// // //                     />
// // //                     <div className="card flex justify-content-center" style={{ width: '100%' }}>
// // //                         <div className="flex flex-column gap-3">
// // //                             {categories.map((category) => {
// // //                                 return (
// // //                                     <div key={category.key} className="flex align-items-center">
// // //                                         <Checkbox
// // //                                             inputId={category.key}
// // //                                             name="category"
// // //                                             value={category}
// // //                                             onChange={onCategoryChange}
// // //                                             checked={selectedCategories.some((item) => item.key === category.key)}
// // //                                         />
// // //                                         <label htmlFor={category.key} className="ml-2">
// // //                                             {category.name}
// // //                                         </label>
// // //                                     </div>
// // //                                 );
// // //                             })}
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </>
// // //     );
// // // };

// // // export default Surveys;

// // import { Button } from 'primereact/button';
// // import { useGetSurveysQuery } from './surveysApiSlice';
// // import { useEffect, useState } from 'react';
// // import { Dialog } from 'primereact/dialog';
// // import SurveyItem from './SurveyItem';
// // import { ScrollTop } from 'primereact/scrolltop';
// // import AddSurvey from './AddSurvey';
// // import { Checkbox } from 'primereact/checkbox';

// // const Surveys = (props) => {
// //     const { setCurrentPage } = props;
// //     const { data: surveys = [], isLoading, isError, error, refetch } = useGetSurveysQuery({ status: '' });

// //     const [visibleNew, setVisibleNew] = useState(false);
// //     const [selectedCategories, setSelectedCategories] = useState([]);
// //     const [filteredSurveys, setFilteredSurveys] = useState([]);

// //     const categories = [
// //         { name: 'סקרים ביצירה', key: 'creating' },
// //         { name: 'סקרים פתוחים לתשובות', key: 'in process' },
// //         { name: 'סקרים לפילוח', key: 'closed' },
// //         { name: 'סקרים מפולחים', key: 'completed' },
// //         { name: 'בחר הכל', key: 'all' }, // New "all" category
// //     ];

// //     useEffect(() => {
// //         if (selectedCategories.some(category => category.key === 'all')) {
// //             setFilteredSurveys(surveys);
// //         } else {
// //             let selectedKeys = selectedCategories.map(c => c.key);
// //             let filtered = surveys.filter(s => selectedKeys.includes(s.status));
// //             setFilteredSurveys(filtered);
// //         }
// //     }, [selectedCategories, surveys]);

// //     const onCategoryChange = (e) => {
// //         let _selectedCategories = [...selectedCategories];

// //         if (e.checked) {
// //             if (e.value.key === 'all') {
// //                 _selectedCategories = categories.filter(c => c.key !== 'all'); // Select all categories except "all"
// //             } else {
// //                 _selectedCategories.push(e.value);
// //                 // Ensure "all" is unchecked if other checkboxes are checked
// //                 _selectedCategories = _selectedCategories.filter(category => category.key !== 'all');
// //             }
// //         } else {
// //             if (e.value.key === 'all') {
// //                 _selectedCategories = [];
// //             } else {
// //                 _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);
// //             }
// //         }

// //         setSelectedCategories(_selectedCategories);
// //     };

// //     return (
// //         <>
// //             <div className="cardSurvey" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
// //                 <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// //                     {filteredSurveys.map((s) => <SurveyItem key={s.id} survey={s} refetch={refetch} />)}
// //                     <Dialog visible={visibleNew} style={{ width: '80vw', height: '200vw' }} onHide={() => setVisibleNew(false)}>
// //                         <p className="m-0">
// //                             <AddSurvey setVisibleNew={setVisibleNew} refetch={refetch} />
// //                         </p>
// //                     </Dialog>
// //                     <ScrollTop />
// //                 </div>
// //                 <div style={{
// //                     flex: 1,
// //                     display: 'flex',
// //                     flexDirection: 'column',
// //                     alignItems: 'center',
// //                     position: 'fixed',
// //                     right: '0',
// //                     top: '70px', // Assuming 60px navbar height + 10px margin
// //                     bottom: '0',
// //                     padding: '20px',
// //                     backgroundColor: '#f9f9f9',
// //                     boxShadow: '0 0 10px rgba(0,0,0,0.1)',
// //                     overflowY: 'auto'
// //                 }}>
// //                     <Button
// //                         icon="pi pi-plus"
// //                         style={{ color: '#10bbbb', backgroundColor: '#e5e7eb', marginBottom: '20px' }}
// //                         label="&nbsp;סקר חדש&nbsp;"
// //                         onClick={() => { setVisibleNew(true); }}
// //                         rounded
// //                     />
// //                     <div className="card flex justify-content-center" style={{ width: '100%' }}>
// //                         <div className="flex flex-column gap-3">
// //                             {categories.map((category) => {
// //                                 return (
// //                                     <div key={category.key} className="flex align-items-center">
// //                                         <Checkbox
// //                                             inputId={category.key}
// //                                             name="category"
// //                                             value={category}
// //                                             onChange={onCategoryChange}
// //                                             checked={selectedCategories.some((item) => item.key === category.key)}
// //                                         />
// //                                         <label htmlFor={category.key} className="ml-2">
// //                                             {category.name}
// //                                         </label>
// //                                     </div>
// //                                 );
// //                             })}
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // };

// // export default Surveys;


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
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredSurveys, setFilteredSurveys] = useState([]);
    const [searchText, setSearchText] = useState('');


    const categories = [
        { name: 'סקרים ביצירה', key: 'creating' },
        { name: 'סקרים פתוחים לתשובות', key: 'in process' },
        { name: 'סקרים לפילוח', key: 'closed' },
        { name: 'סקרים מפולחים', key: 'completed' },
        { name: 'בחר הכל', key: 'all' }, // New "all" category
    ];

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
                <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                    top: '125px', // Adjusted from 70px to 150px to move further down
                    bottom: '0',
                    padding: '20px',
                    backgroundColor: '#f9f9f9',
                    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                    overflowY: 'auto'
                }}>
                   
                    <div className="card flex justify-content-center" style={{ width: '100%' }}>
                        <div className="flex flex-column gap-3">
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

<InputText placeholder="Search Surveys..." value={searchText} onChange={onSearchChange} />
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



// import { Button } from 'primereact/button';
// import { useGetSurveysQuery } from './surveysApiSlice';
// import { useEffect, useState } from 'react';
// import { Dialog } from 'primereact/dialog';
// import SurveyItem from './SurveyItem';
// import { ScrollTop } from 'primereact/scrolltop';
// import AddSurvey from './AddSurvey';
// import { Checkbox } from 'primereact/checkbox';
// import { InputText } from 'primereact/inputtext';

// const Surveys = (props) => {
//   const { setCurrentPage } = props;
//   const { data: surveys = [], isLoading, isError, error, refetch } = useGetSurveysQuery({ status: '' });

//   const [visibleNew, setVisibleNew] = useState(false);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [filteredSurveys, setFilteredSurveys] = useState([]);
//   const [searchText, setSearchText] = useState('');

//   const categories = [
//     { name: 'סקרים ביצירה', key: 'creating' },
//     { name: 'סקרים פתוחים לתשובות', key: 'in process' },
//     { name: 'סקרים לפילוח', key: 'closed' },
//     { name: 'סקרים מפולחים', key: 'completed' },
//     { name: 'בחר הכל', key: 'all' },
//   ];

//   useEffect(() => {
//     if (selectedCategories.some(category => category.key === 'all')) {
//       setFilteredSurveys(surveys);
//     } else {
//       let selectedKeys = selectedCategories.map(c => c.key);
//       let filtered = surveys.filter(s => selectedKeys.includes(s.status));
//       setFilteredSurveys(filtered);
//     }
//   }, [selectedCategories, surveys]);

//   const onCategoryChange = (e) => {
//     let _selectedCategories = [...selectedCategories];

//     if (e.checked) {
//       if (e.value.key === 'all') {
//         _selectedCategories = categories.filter(c => c.key !== 'all');
//       } else {
//         _selectedCategories.push(e.value);
//         _selectedCategories = _selectedCategories.filter(category => category.key !== 'all');
//       }
//     } else {
//       _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);
//     }

//     setSelectedCategories(_selectedCategories);
//   };

//   const onSearchChange = (e) => {
//     setSearchText(e.target.value);
//   };

//   const filterSurveys = (surveys, searchText) => {
//     return surveys.filter(survey => survey.name && survey.name.toLowerCase().includes(searchText.toLowerCase()));
//   };

//   return (
//     <>
//       <div className="cardSurvey">
//         <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           {filterSurveys(filteredSurveys, searchText).map((s) => <SurveyItem key={s.id} survey={s} refetch={refetch} />)}
//           <Dialog visible={visibleNew} style={{ width: '80vw', height: '200vw' }} onHide={() => setVisibleNew(false)}>
//             <p className="m-0">
//               <AddSurvey setVisibleNew={setVisibleNew} refetch={refetch} />
//             </p>
//           </Dialog>
//           <ScrollTop />
//         </div>
//         <div style={{
//           flex: 1,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           position: 'fixed',
//           right: '0',
//           top: '125px',
//           bottom: '0',
//           padding: '20px',
//           backgroundColor: '#f9f9f9',
//           boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//           overflowY: 'auto'
//         }}>
//           <Button
//             icon="pi pi-plus"
//             style={{ color: '#10bbbb', backgroundColor: '#e5e7eb', marginBottom: '20px' }}
//             label="&nbsp;סקר חדש&nbsp;"
//             onClick={() => { setVisibleNew(true); }}
//             rounded
//           />
//           <InputText placeholder="Search Surveys..." value={searchText} onChange={onSearchChange} />
//           <div className="card flex justify-content-center" style={{ width: '100%' }}>
//             <div className="flex flex-column gap-3">
//               {categories.map((category) => (
//                 <div key={category.key} className="flex justify-content-between align-items-center">
//                   <label htmlFor={category.key} className="mr-2">{category.name}</label>
//                   <Checkbox
//                     inputId={category.key}
//                     name="category"
//                     value={category}
//                     onChange={onCategoryChange}
//                     checked={selectedCategories.some((item) => item.key === category.key)}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Surveys;