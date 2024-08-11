import { Button } from "primereact/button"
import { useEffect, useRef, useState } from "react"
// import { useAddQuestionMutation } from "../surveys/questions/questionApiSlice"
// import QuestionDialog from "../surveys//questions/QuestionDialog"
// import Question from "../surveys/questions/Question"
import { useAddSurveyMutation, useCountSurveyMutation, useChangeStatusMutation, useUpdateSurveyMutation } from "../surveys/surveysApiSlice"
// import { Dialog } from "primereact/dialog"
// import { Inplace, InplaceContent, InplaceDisplay } from "primereact/inplace"
// import { InputText } from "primereact/inputtext"
import UserQuestion from "./UserQuestion"
// import axios from 'axios'
import { useChangeAnswerDataMutation } from "../answers/ansApiSlice"
import { useAddUserSurveyMutation } from "./usersApiSlice"
import { Navigate } from "react-router-dom"
const UserSurvey = (props) => {
    const { setVisible, visible, refetch, survey, user } = props
   
    let [select, setSelect] = useState(survey.questions.map(q => { return { _id: q._id, select: q.select } }))


    const [countFunc, { isError1, error1, isSuccess1, data1 }] = useCountSurveyMutation()
    const [addUserSurveyFunc, { isErrorSU, errorSU, isSuccessSU }] = useAddUserSurveyMutation()

   
    const count = () => {
        countFunc({ _id: survey._id })
    }
    const addSurveyForUser = () => {
        addUserSurveyFunc({_id: user._id, survey: survey })

    }

    const [ChangeAnswerDataFunc, { isError, error, isSuccess, data }] = useChangeAnswerDataMutation()
    const chooseSegment = (e) => {
        console.log("chooseSegment");
        if (select) {
            select.map(q => ChangeAnswerDataFunc({ _id: survey._id, questionId: q._id, answerId: select[select.indexOf(select.find(i => i._id == q._id))].select }).then(() => refetch()))
        }
        else {
            console.log('no select');
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
                <p> <Button id="butUserSurvey"onClick={async () => {
                    await addSurveyForUser(); await count(); await chooseSegment(); window.location.reload(true); setVisible(false)

                }} label='&nbsp;שמור' icon="pi pi-save" /> </p>
            </footer>


        </>
    )
}
export default UserSurvey
