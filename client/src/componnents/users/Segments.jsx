
import { useGetSurveysQuery } from '../surveys/surveysApiSlice';

import Segment from './Segment';
import { useState } from 'react';

import { Dialog } from 'primereact/dialog';

import SegmentItem from './SegmentItem';
import { ScrollTop } from 'primereact/scrolltop';
const Segments=()=>{

const {data :surveys=[],isLoading,isError,error, refetch}= useGetSurveysQuery({status:"completed",sector:'',sex:'',birthDate:''})

const [sortKey, setSortKey] = useState('');
const [sortOrder, setSortOrder] = useState(0);
const [sortField, setSortField] = useState('');
const [visible, setVisible] = useState(false);
const [visibleNew, setVisibleNew] = useState(false);
const sortOptions = [
    { label: 'Price High to Low', value: '!price' },
    { label: 'Price Low to High', value: 'price' }
];
const [add,setAdd]=useState(false)
const [survey,setSurvey]=useState(false)
const[edit,setEdit]=useState(false)
const[del,setDel]=useState(false)
   

const onSortChange = (event) => {
    const value = event.value;

    if (value.indexOf('!') === 0) {
        setSortOrder(-1);
        setSortField(value.substring(1, value.length));
        setSortKey(value);
    } else {
        setSortOrder(1);
        setSortField(value);
        setSortKey(value);
    }
};




return (
    <>
      
    {surveys.map((s)=><SegmentItem survey={s}refetch={refetch}/>)}
       
    
           
           
            <ScrollTop />
</>
)

}
export default Segments


