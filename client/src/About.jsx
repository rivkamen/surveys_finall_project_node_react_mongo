

import { useEffect, useState } from "react"
import BarSeg from "./componnents/surveys/BarSeg"
import LineSeg from "./componnents/surveys/LineSeg"
import PieSeg from "./componnents/surveys/PieSeg"
import BigBarSeg from "./componnents/surveys/BigBarSeg"

import { useGetUsersQuery } from "./componnents/users/usersApiSlice"
import { Card } from "primereact/card"
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
                    if (u.birthDate) {
                        const birthYear = new Date(u.birthDate).getFullYear();
                        const age = d - birthYear;
                
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
                        }  else if (age > 20 && age <= 30) {
                            return [
                                prevCountAge[0], prevCountAge[1], prevCountAge[2]+1, prevCountAge[3], prevCountAge[4],
                                prevCountAge[5], prevCountAge[6], prevCountAge[7], prevCountAge[8], prevCountAge[9], prevCountAge[10]
                            ];
                        }  else if (age > 30 && age <= 40) {
                            return [
                                prevCountAge[0], prevCountAge[1], prevCountAge[2], prevCountAge[3]+1, prevCountAge[4],
                                prevCountAge[5], prevCountAge[6], prevCountAge[7], prevCountAge[8], prevCountAge[9], prevCountAge[10]
                            ];
                        }  else if (age > 40 && age <= 50) {
                            return [
                                prevCountAge[0], prevCountAge[1], prevCountAge[2], prevCountAge[3], prevCountAge[4]+1,
                                prevCountAge[5], prevCountAge[6], prevCountAge[7], prevCountAge[8], prevCountAge[9], prevCountAge[10]
                            ];
                        }  else if (age > 50 && age <= 60) {
                            return [
                                prevCountAge[0], prevCountAge[1], prevCountAge[2], prevCountAge[3], prevCountAge[4],
                                prevCountAge[5]+1, prevCountAge[6], prevCountAge[7], prevCountAge[8], prevCountAge[9], prevCountAge[10]
                            ];
                        } else if (age > 60 && age <= 70) {
                            return [
                                prevCountAge[0], prevCountAge[1], prevCountAge[2], prevCountAge[3], prevCountAge[4],
                                prevCountAge[5], prevCountAge[6]+1, prevCountAge[7], prevCountAge[8], prevCountAge[9], prevCountAge[10]
                            ];
                        }  else if (age > 70 && age <= 80) {
                            return [
                                prevCountAge[0], prevCountAge[1], prevCountAge[2], prevCountAge[3], prevCountAge[4],
                                prevCountAge[5], prevCountAge[6], prevCountAge[7]+1, prevCountAge[8], prevCountAge[9], prevCountAge[10]
                            ];
                        }  else if (age > 80 && age <= 90) {
                            return [
                                prevCountAge[0], prevCountAge[1] , prevCountAge[2], prevCountAge[3], prevCountAge[4],
                                prevCountAge[5], prevCountAge[6], prevCountAge[7], prevCountAge[8]+1, prevCountAge[9], prevCountAge[10]
                            ];
                        }   else if (age > 90 && age <= 100) {
                            return [
                                prevCountAge[0], prevCountAge[1], prevCountAge[2], prevCountAge[3], prevCountAge[4],
                                prevCountAge[5], prevCountAge[6], prevCountAge[7], prevCountAge[8], prevCountAge[9]+1, prevCountAge[10]
                            ];
                        }  else if (age > 100 && age <= 120) {
                            return [
                                prevCountAge[0], prevCountAge[1], prevCountAge[2], prevCountAge[3], prevCountAge[4],
                                prevCountAge[5], prevCountAge[6], prevCountAge[7], prevCountAge[8], prevCountAge[9], prevCountAge[10]+1
                            ];
                        } //// Add similar conditions for other age ranges
                
                        return prevCountAge;
                    } else {
                        return prevCountAge;
                    }
                });
            });
        }
    }, [users, usersIsSuccess, d]);



    return (
        <>
       <div style={{marginTop:'150px'}} className="chart-container">
        <div className="chart">
        <Card id="about" className="charta">
           <BarSeg labels={genderLabels} data={countGender} question={''} /></Card><br/><br/><br/>
           <Card id="about2" className="charta">
           <PieSeg labels={sectorLabels} data={countSector} question={''} /></Card><br/><br/><br/>
           <Card id="about3" className="charta">
           <LineSeg labels={agesLabels} data={countAge} question={''} /></Card></div>
           {/* <Card id="about4" className="charta"> */}
           {/* <BigBarSeg secLabels={sectorLabels} labels={sectorLabels} /></Card><br/><br/><br/> */}

           </div>
        </>
    );
};

export default About;