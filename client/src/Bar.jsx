import React from "react";
import { Menubar } from 'primereact/menubar';
import {useNavigate} from "react-router-dom"

const Bar = (props) => {

    const navigate=useNavigate()
    const {role}=props
    const myAccount = () => {
        if(localStorage.getItem("token")) {
            navigate(`/Surveys`)
        }
        else{
            navigate(`/login`)
        }
    }

    const barArr =role==2? [
        {
            label:"my surveys", 
            command: myAccount
        },
        {
            label:"user surveys", 
            command: ()=>{navigate(`/UserSurveys`)}
        },
        {
            label:"segmentation", 
            command: ()=>{navigate(`/surveySegmentation`)}
        },
        {
            label:"segmented", 
            command: ()=>{navigate(`/segments`)}
        }
    ]:role==1?
    [ {
        label:"my surveys", 
        command: myAccount
    },
    {
        label:"user surveys", 
        command: ()=>{navigate(`/UserSurveys`)}
    },]:
    [ {
        label:"login", 
        command: ()=>{navigate(`/login`)}
    },
    {
        label:"user surveys", 
        command: ()=>{navigate(`/UserSurveys`)}
    },]


    return (
        <div className="card">
            <Menubar model={barArr} />
        </div>
    )
}
export default Bar
