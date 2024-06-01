import { ScrollTop } from "primereact/scrolltop";
import { useGetSurveysQuery } from "./surveysApiSlice";
import SurveySegItem from './SurveySegItem'
const SegmentSurveys=()=>{
    const status="closed";
    const {
    data:surveys=[],
    isLoading,
    isError,
    error,
    refetch
    } = useGetSurveysQuery({status:status,sector:'',gender:'',birthDate:''})
   
    return (
        <>
        {console.log("123456")}
         {surveys.map((s)=><SurveySegItem survey={s}refetch={refetch}/>)}
         <ScrollTop />
        </>
    )
}
export default SegmentSurveys