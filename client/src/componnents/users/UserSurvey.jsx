// import { Button } from "primereact/button"
// import { useEffect, useRef, useState } from "react"
// // import { useAddQuestionMutation } from "../surveys/questions/questionApiSlice"
// // import QuestionDialog from "../surveys//questions/QuestionDialog"
// // import Question from "../surveys/questions/Question"
// import { useAddSurveyMutation, useCountSurveyMutation, useChangeStatusMutation, useUpdateSurveyMutation } from "../surveys/surveysApiSlice"
// // import { Dialog } from "primereact/dialog"
// // import { Inplace, InplaceContent, InplaceDisplay } from "primereact/inplace"
// // import { InputText } from "primereact/inputtext"
// import UserQuestion from "./UserQuestion"
// // import axios from 'axios'
// import { useChangeAnswerDataMutation } from "../answers/ansApiSlice"
// import { useAddUserSurveyMutation } from "./usersApiSlice"
// import { Navigate } from "react-router-dom"
// const UserSurvey = (props) => {
//     const { setVisible, visible, refetch, survey, user } = props
   
//     let [select, setSelect] = useState(survey.questions.map(q => { return { _id: q._id, select: q.select } }))


//     const [countFunc, { isError1, error1, isSuccess1, data1 }] = useCountSurveyMutation()
//     const [addUserSurveyFunc, { isErrorSU, errorSU, isSuccessSU }] = useAddUserSurveyMutation()

   
//     const count = () => {
//         countFunc({ _id: survey._id })
//     }
//     const addSurveyForUser = () => {
//         addUserSurveyFunc({_id: user._id, survey: survey })

//     }

//     const [ChangeAnswerDataFunc, { isError, error, isSuccess, data }] = useChangeAnswerDataMutation()
//     const chooseSegment =  (e) => {
//         console.log("chooseSegment");
//         if (select) {
//             select.map(q => ChangeAnswerDataFunc({ _id: survey._id, questionId: q._id, answerId: select[select.indexOf(select.find(i => i._id == q._id))].select }).then(() => refetch()))
//         }
//         else {
//             console.log('no select');
//         }
        
//     };

//     return (
//         <>



//             <div  style={{ display: 'flex', flexDirection: 'column', minHeight: '70vh' }}>


//                 <div dir='rtl' style={{ position: 'sticky', top: 200, fontSize: '20px', fontFamily: 'Yehuda CLM', top: '10px' }}>

//                     <div dir='rtl' style={{fontWeight:'bold',fontSize: '30px', fontFamily: 'Yehuda CLM', backgroundColor: "white", textAlign: 'center', top: '0px', position: 'sticky' }}>{survey.title}</div><br /><br />
//                     {survey?.questions.map(q => <UserQuestion select={select} setSelect={setSelect} refetch={refetch} question={q} survey={survey} />)}

//                 </div> <div style={{ flex: 1 }}> 


//                 </div>

//             </div>  <footer style={{ textAlign: 'center', padding: '10px' }}>
//                 <p> <Button id="butUserSurvey"onClick={async () => {
//                      await addSurveyForUser(); await count(); await chooseSegment(); setVisible(false)

//                 }} label='&nbsp;שמור' icon="pi pi-save" /> </p>
//             </footer>


//         </>
//     )
// }
// export default UserSurvey



// // import React from 'react';
// // import { Button } from 'primereact/button';
// // import { useEffect, useRef, useState } from "react"
// // import { useAddSurveyMutation, useCountSurveyMutation, useChangeStatusMutation, useUpdateSurveyMutation } from "../surveys/surveysApiSlice"
// // import UserQuestion from "./UserQuestion"
// // import { useChangeAnswerDataMutation } from "../answers/ansApiSlice"
// // import { useAddUserSurveyMutation } from "./usersApiSlice"
// // import { Navigate } from "react-router-dom"

// // const UserSurvey = (props) => {
// //     const { setVisible, refetch, survey, user } = props;
// //     const [select, setSelect] = useState(survey.questions.map(q => ({ _id: q._id, select: q.select })));
// //     const [loading, setLoading] = useState(false);

// //     const countFunc = useCountSurveyMutation()[0];
// //     const addUserSurveyFunc = useAddUserSurveyMutation()[0];
// //     const changeAnswerDataFunc = useChangeAnswerDataMutation()[0];

// //     const count = async () => {
// //         await countFunc({ _id: survey._id });
// //     };

// //     const addSurveyForUser = async () => {
// //         await addUserSurveyFunc({ _id: user._id, survey: survey });
// //     };

// //     const chooseSegment = async () => {
// //         if (select) {
// //             await Promise.all(select.map(q => changeAnswerDataFunc({ _id: survey._id, questionId: q._id, answerId: select[select.indexOf(select.find(i => i._id === q._id))].select })));
// //             refetch();
// //         } else {
// //             console.log('no select');
// //         }
// //     };

// //     const handleButtonClick = async () => {
// //         setLoading(true);

// //         try {
// //             await addSurveyForUser();
// //             await count();
// //             await chooseSegment();
// //             setVisible(false);
// //             // Simulate animation duration
// //             setTimeout(() => {
// //                 setLoading(false);
// //                 window.location.reload(true); // Reload window after animation duration
// //             }, 2000); // 2000 milliseconds (2 seconds) animation duration
// //         } catch (error) {
// //             console.error('An error occurred:', error);
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <>
// //             <div style={{ display: 'flex', flexDirection: 'column', minHeight: '70vh' }}>
// //                 {/* Survey questions rendering code here */}
// //             </div>
// //             <footer style={{ textAlign: 'center', padding: '10px' }}>
// //                 <p>
// //                     <Button
// //                         id="butUserSurvey"
// //                         onClick={handleButtonClick}
// //                         label='&nbsp;שמור'
// //                         icon="pi pi-save"
// //                         disabled={loading} // Disable button while loading
// //                     />
// //                     {loading && <span>Loading...</span>} {/* Show loading message or spinner */}
// //                 </p>
// //             </footer>
// //         </>
// //     );
// // };

// // export default UserSurvey;

import { Button } from "primereact/button"
import { useEffect, useRef, useState } from "react"
import { useAddSurveyMutation, useCountSurveyMutation, useChangeStatusMutation, useUpdateSurveyMutation } from "../surveys/surveysApiSlice"
import UserQuestion from "./UserQuestion"
import { useChangeAnswerDataMutation } from "../answers/ansApiSlice"
import { useAddUserSurveyMutation } from "./usersApiSlice"
import { Navigate } from "react-router-dom"

const UserSurvey = (props) => {
    const { setVisible, refetch, survey, user } = props;
    const [select, setSelect] = useState(survey.questions.map(q => ({ _id: q._id, select: q.select })));
    const [loading, setLoading] = useState(false);

    const countFunc = useCountSurveyMutation()[0];
    const addUserSurveyFunc = useAddUserSurveyMutation()[0];
    const changeAnswerDataFunc = useChangeAnswerDataMutation()[0];

    const count = async () => {
        await countFunc({ _id: survey._id });
    };

    const addSurveyForUser = async () => {
        await addUserSurveyFunc({ _id: user._id, survey: survey });
    };

    const chooseSegment = async () => {
        if (select) {
            await Promise.all(select.map(q => changeAnswerDataFunc({ _id: survey._id, questionId: q._id, answerId: select[select.indexOf(select.find(i => i._id === q._id))].select })));
            refetch();
        } else {
            console.log('no select');
        }
    };

    const handleButtonClick = async () => {
        setLoading(true);

        try {
            await addSurveyForUser();
            await count();
            await chooseSegment();
            setVisible(false);
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            setLoading(false);
            window.location.reload(true); // Reload window after segmentation change
        }
    };

    return (
        <>
        <div  style={{ display: 'flex', flexDirection: 'column', minHeight: '70vh' }}>


                 <div dir='rtl' style={{ position: 'sticky', top: 200, fontSize: '20px', fontFamily: 'Yehuda CLM', top: '10px' }}>

                     <div dir='rtl' style={{fontWeight:'bold',fontSize: '30px', fontFamily: 'Yehuda CLM', backgroundColor: "white", textAlign: 'center', top: '0px', position: 'sticky' }}>{survey.title}</div><br /><br />
                     {survey?.questions.map(q => <UserQuestion select={select} setSelect={setSelect} refetch={refetch} question={q} survey={survey} />)}

                 </div> <div style={{ flex: 1 }}> 


                 </div>

             </div>  <footer style={{ textAlign: 'center', padding: '10px' }}>
                 <p>
                 <Button
                        id="butUserSurvey"
                        onClick={handleButtonClick}
                        label='&nbsp;שמור'
                        icon="pi pi-save"
                        disabled={loading} // Disable button while loading
                    />
                    {loading && <span>Loading...</span>} {/* Show loading message or spinner */}
                
                </p>
            </footer>


            
            
        </>
    );
};

export default UserSurvey;
