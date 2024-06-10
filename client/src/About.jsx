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
            // users.forEach((u) => {
            //     console.log(u);
            //     switch (u.sector) {
            //         case 'חרדי':
            //             setCountSector([countSector[0] + 1, countSector[1], countSector[2], countSector[3], countSector[4]]);
            //             break;
            //         case 'חילוני':
            //             setCountSector([countSector[0], countSector[1] + 1, countSector[2], countSector[3], countSector[4]]);
            //             break;
            //         case 'מסורתי':
            //             setCountSector([countSector[0], countSector[1], countSector[2] + 1, countSector[3], countSector[4]]);
            //             break;
            //         case 'דתי לאומי':
            //             setCountSector([countSector[0], countSector[1], countSector[2], countSector[3] + 1, countSector[4]]);
            //             break;
            //         case 'לא משתייך':
            //             setCountSector([countSector[0], countSector[1], countSector[2], countSector[3], countSector[4] + 1]);
            //             break;
            //         default:
            //             break;
            //     }

            //     if (u.gender === 'זכר') {
            //         setCountGender([countGender[0] + 1, countGender[1]]);
            //     } else if (u.gender === 'נקבה') {
            //         setCountGender([countGender[0], countGender[1] + 1]);
            //     }

            //     if (u.birthDate instanceof Date && !isNaN(u.birthDate)) {
            //         const age = d - new Date(u.birthDate).getFullYear();
            //         if (age >= 0 && age <= 10) {
            //             setCountAge([countAge[0] + 1, countAge[1], countAge[2], countAge[3], countAge[4], countAge[5], countAge[6], countAge[7], countAge[8], countAge[9], countAge[10]]);
            //         } else if (age > 10 && age <= 20) {
            //             setCountAge([countAge[0], countAge[1] + 1, countAge[2], countAge[3], countAge[4], countAge[5], countAge[6], countAge[7], countAge[8], countAge[9], countAge[10]]);
            //         } // Add similar conditions for other age ranges
                   
            //     }
            // });

            users.forEach((u) => {
                setCountSector(prevCountSector => {
                    switch (u.sector) {
                        case 'חרדי':
                            return [prevCountSector[0] + 1, prevCountSector[1], prevCountSector[2], prevCountSector[3], prevCountSector[4]];
                        case 'חילוני':
                            return [prevCountSector[0], prevCountSector[1] + 1, prevCountSector[2], prevCountSector[3], prevCountSector[4]];
                        case 'מסורתי':
                            return [prevCountSector[0], prevCountSector[1], prevCountSector[2] + 1, prevCountSector[3], prevCountSector[4]];
                        case 'דתי לאומי':
                            return [prevCountSector[0], prevCountSector[1], prevCountSector[2], prevCountSector[3] + 1, prevCountSector[4]];
                        case 'לא משתייך':
                            return [prevCountSector[0], prevCountSector[1], prevCountSector[2], prevCountSector[3], prevCountSector[4] + 1];
                        default:
                            return prevCountSector;
                    }
                });
            
                setCountGender(prevCountGender => {
                    if (u.gender === 'זכר') {
                        return [prevCountGender[0] + 1, prevCountGender[1]];
                    } else if (u.gender === 'נקבה') {
                        return [prevCountGender[0], prevCountGender[1] + 1];
                    } else {
                        return prevCountGender;
                    }
                });
            
                setCountAge(prevCountAge => {
                    if (u.birthDate instanceof Date && !isNaN(u.birthDate)) {
                        const age = d - new Date(u.birthDate).getFullYear();
                        if (age >= 0 && age <= 10) {
                            return [
                                prevCountAge[0] + 1, prevCountAge[1], prevCountAge[2], prevCountAge[3], prevCountAge[4],
                                prevCountAge[5], prevCountAge[6], prevCountAge[7], prevCountAge[8], prevCountAge[9], prevCountAge[10]
                            ];
                        } else if (age > 10 && age <= 20) {
                            return [
                                prevCountAge[0], prevCountAge[1] + 1, prevCountAge[2], prevCountAge[3], prevCountAge[4],
                                prevCountAge[5], prevCountAge[6], prevCountAge[7], prevCountAge[8], prevCountAge[9], prevCountAge[10]
                            ];
                        } // Add similar conditions for other age ranges
            
                        return prevCountAge;
                    } else {
                        return prevCountAge;
                    }
                });
            });
        }
    }, [users, usersIsSuccess, d]);
    console.log(countAge);
    console.log(countGender);
    console.log(countSector);


    return (
        <>
       <div style={{marginTop:'150px'}}>
           <BarSeg labels={genderLabels} data={countGender} question={''} />
           <PieSeg labels={sectorLabels} data={countSector} question={''} />
           <LineSeg labels={agesLabels} data={countAge} question={''} />
           </div>
        </>
    );
};

export default About;