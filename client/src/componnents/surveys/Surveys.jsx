
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { useGetSurveysQuery } from './surveysApiSlice';
import Survey from './Survey';
import { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import SurveyItem from './SurveyItem';
import { ScrollTop } from 'primereact/scrolltop';
import AddSurvey from './AddSurvey';
import { Checkbox } from 'primereact/checkbox';
const Surveys=(props)=>{
const{setCurrentPage}=props
const {data :surveys=[],isLoading,isError,error, refetch}= useGetSurveysQuery({status:''})

const [visibleNew, setVisibleNew] = useState(false);


return (
    <>
   
    <div className="cardSurvey"> 
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 /*,width:'80%'*/ }}>
                <Button icon="pi pi-plus" style={{color:'#10bbbb', backgroundColor:'#e5e7eb', position:'fixed'}}label="&nbsp;סקר חדש&nbsp;" onClick={()=>{setVisibleNew(true)}}  rounded />
            </div>
            <div style={{ flex: 2/*,marginLeft:'25%'*/}}>
    
                {surveys.map((s)=><SurveyItem survey={s}refetch={refetch}/>)}
                <Dialog visible={visibleNew} style={{ width: '80vw', height:'200vw' }} onHide={() => setVisibleNew(false)}>
                <p className="m-0">
                    <AddSurvey setVisibleNew={setVisibleNew} refetch={refetch}/>
                </p>
                </Dialog> 
                <ScrollTop/>
            </div>
        </div>
    </div>
</>

)

}
export default Surveys

