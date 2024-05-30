import { Button } from "primereact/button"

import UserQuestion from "./UserQuestion"
import SegQuestion from "./SegQuestion"
const Segment=(props)=>{
    const {refetch,survey}=props
   
 



    return(
        <>
        
       
       

        {survey?.questions.map(q=><SegQuestion refetch={refetch} question={q} survey={survey}/>)}
     
       
       

        </>
    )
}
export default Segment
