import { useState } from "react"
import BarSeg from "./componnents/surveys/BarSeg"
import LineSeg from "./componnents/surveys/LineSeg"
import PieSeg from "./componnents/surveys/PieSeg"
import { useGetUsersQuery } from "./componnents/users/usersApiSlice"

const About=()=>{
    const sexLabels=['זכר','נקבה']
    const sectorLabels=['חרדי','חילוני','מסורתי','דתי לאומי','לא משתייך']
    const agesLabels=['0-10','0-20','20-30','30-40','40-50','50-60','60-70','70-80','80-90','90-100','100-120']

    const[countSex, setCountSex]=useState([1,3]);
    const[countSector,setCountSector]=useState([5,3,7,4,4]);
    const [countAge,setCountAge]=useState([1,2,1,3,2,1,5,8,0,0,0]);
    const{
        data:users,
        isLoading:usersIsLoading,
        isError:usersIsError,
        error:usersError,
        isSuccess:usersIsSuccess,
        refetch:usersRefetch
        } = useGetUsersQuery()
        const d=new Date().getFullYear()
        // users?.map((u)=>{
        //    if(u.sector==='חרדי'){setCountSector(...countSector,countSector[0]++)}else if(u.sector==='חילוני'){setCountSector(...countSector,countSector[1]++)} else if(u.sector==='מסורתי'){setCountSector(...countSector,countSector[2]++) } else if(u.sector==='דתי לאומי'){setCountSector(...countSector,countSector[3]++)} else if(u.sector==='לא משתייך'){setCountSector(...countSector,countSector[4]++)};
        //     if(u.sex==='זכר'){setCountSex(...countSex,countSex[0]++)} else if(u.sex==='נקבה'){setCountSex(...countSex,countSex[1]++)};
        //     // d-u.birthDate.getFullYear()>=10 && d-u.birthDate.getFullYear()<=0?countAge[0]++:''
        // })
        return(
            <>
    <BarSeg labels={sexLabels} data={countSex} question={''}/>
    <PieSeg labels={sectorLabels} data={countSector} question={''}/>
    <LineSeg labels={agesLabels} data={countAge} question={''}/>
    </>
    )
}
export default About