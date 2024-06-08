// import { useState } from "react"
// import BarSeg from "./componnents/surveys/BarSeg"
// import LineSeg from "./componnents/surveys/LineSeg"
// import PieSeg from "./componnents/surveys/PieSeg"
// import { useGetUsersQuery } from "./componnents/users/usersApiSlice"


// const About=()=>{
//     const genderLabels=['זכר','נקבה']
//     const sectorLabels=['חרדי','חילוני','מסורתי','דתי לאומי','לא משתייך']
//     const agesLabels=['0-10','0-20','20-30','30-40','40-50','50-60','60-70','70-80','80-90','90-100','100-120']

//     const[countgender, setCountgender]=useState([0,0]);
//     const[countSector,setCountSector]=useState([0,0,0,0,0]);
//     const [countAge,setCountAge]=useState([0,0,0,0,0,0,0,0,0,0,0]);
//     const{
//         data:users,
//         isLoading:usersIsLoading,
//         isError:usersIsError,
//         error:usersError,
//         isSuccess:usersIsSuccess,
//         refetch:usersRefetch
//         } = useGetUsersQuery()
//         const d=new Date().getFullYear()
//         users?.map((u)=>{
//            if(u.sector==='חרדי'){setCountSector(...countSector,countSector[0]++)}else if(u.sector==='חילוני'){setCountSector(...countSector,countSector[1]++)} else if(u.sector==='מסורתי'){setCountSector(...countSector,countSector[2]++) } else if(u.sector==='דתי לאומי'){setCountSector(...countSector,countSector[3]++)} else if(u.sector==='לא משתייך'){setCountSector(...countSector,countSector[4]++)};
//             if(u.gender==='זכר'){setCountgender(...countgender,countgender[0]++)} else if(u.gender==='נקבה'){setCountgender(...countgender,countgender[1]++)};
//             // d-u.birthDate.getFullYear()>=10 && d-u.birthDate.getFullYear()<=0?countAge[0]++:''
//         })
//         return(
//             <>
//     <BarSeg labels={genderLabels} data={countgender} question={''}/>
//     <PieSeg labels={sectorLabels} data={countSector} question={''}/>
//     <LineSeg labels={agesLabels} data={countAge} question={''}/>
//     </>
//     )
// }
// export default About

import { useEffect, useState } from "react"
import BarSeg from "./componnents/surveys/BarSeg"
import LineSeg from "./componnents/surveys/LineSeg"
import PieSeg from "./componnents/surveys/PieSeg"
import { useGetUsersQuery } from "./componnents/users/usersApiSlice"
const About = () => {
    const genderLabels = ['זכר', 'נקבה'];
    const sectorLabels = ['חרדי', 'חילוני', 'מסורתי', 'דתי לאומי', 'לא משתייך'];
    const agesLabels = ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-120'];

    const [countGender, setCountGender] = useState([0, 0]);
    const [countSector, setCountSector] = useState([0, 0, 0, 0, 0]);
    const [countAge, setCountAge] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    const {
        data: users,
        isLoading: usersIsLoading,
        isError: usersIsError,
        error: usersError,
        isSuccess: usersIsSuccess,
        refetch: usersRefetch
    } = useGetUsersQuery();

    const d = new Date().getFullYear();

    useEffect(() => {
        
        if (usersIsSuccess && users) {
            users.forEach((u) => {
                switch (u.sector) {
                    case 'חרדי':
                        setCountSector([countSector[0] + 1, countSector[1], countSector[2], countSector[3], countSector[4]]);
                        break;
                    case 'חילוני':
                        setCountSector([countSector[0], countSector[1] + 1, countSector[2], countSector[3], countSector[4]]);
                        break;
                    case 'מסורתי':
                        setCountSector([countSector[0], countSector[1], countSector[2] + 1, countSector[3], countSector[4]]);
                        break;
                    case 'דתי לאומי':
                        setCountSector([countSector[0], countSector[1], countSector[2], countSector[3] + 1, countSector[4]]);
                        break;
                    case 'לא משתייך':
                        setCountSector([countSector[0], countSector[1], countSector[2], countSector[3], countSector[4] + 1]);
                        break;
                    default:
                        break;
                }

                if (u.gender === 'זכר') {
                    setCountGender([countGender[0] + 1, countGender[1]]);
                } else if (u.gender === 'נקבה') {
                    setCountGender([countGender[0], countGender[1] + 1]);
                }

                if (u.birthDate instanceof Date && !isNaN(u.birthDate)) {
                    const age = d - new Date(u.birthDate).getFullYear();
                    if (age >= 0 && age <= 10) {
                        setCountAge([countAge[0] + 1, countAge[1], countAge[2], countAge[3], countAge[4], countAge[5], countAge[6], countAge[7], countAge[8], countAge[9], countAge[10]]);
                    } else if (age > 10 && age <= 20) {
                        setCountAge([countAge[0], countAge[1] + 1, countAge[2], countAge[3], countAge[4], countAge[5], countAge[6], countAge[7], countAge[8], countAge[9], countAge[10]]);
                    } // Add similar conditions for other age ranges
                   
                }
            });
        }
    }, [users, usersIsSuccess, d]);
    console.log(countAge);
    console.log(countGender);
    console.log(countSector);


    return (
        <>
           <BarSeg labels={genderLabels} data={countGender} question={''} />
           <PieSeg labels={sectorLabels} data={countSector} question={''} />
           <LineSeg labels={agesLabels} data={countAge} question={''} />
        </>
    );
};

export default About;