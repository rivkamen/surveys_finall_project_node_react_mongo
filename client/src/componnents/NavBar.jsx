import { TabMenu } from 'primereact/tabmenu';
import { Menubar } from 'primereact/menubar';


import React, { useEffect, useRef } from 'react'; 
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Register from '../app/features/auth/Register';
import {useLoginMutation} from '../app/features/auth/authApiSlice'
import { setToken } from '../app/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate,NavLink } from 'react-router-dom';
import UsersNavBar from './users/UsersNavBar';
import { useGetUserQuery } from './users/usersApiSlice';
// import useAuth from "./auth/useAuth";
import { useState } from "react"
import {  useSelector } from 'react-redux';
export default function NavBar(props){
    const {isUserLoggedIn} = useSelector((state)=>state.auth)
    const {role}=props
    const username=useRef()
    const password=useRef()
    const[register,setRegister]=useState(false)
    const [loginFunc, {isError, error, isSuccess,data}] = useLoginMutation();
   const[loginSuccess,setLoginSuccess]=useState(false)
        const dispatch = useDispatch()
        const navigate = useNavigate()
    //const {_id,username, permission, name, email, phone, isAdmin, isClient,isWorker,isShiftManager}=useAuth()
    //  const{
    //     data:myUser,
    //     isLoading:userIsLoading,
    //     isError:userIsError,
    //     error:userError,
    //     isSuccess:userIsSuccess,
    //     refetch:userRefetch
    //     } = useGetUserQuery({id:''})
    // useEffect(()=>{
    // if(isSuccess){
    // dispatch(setToken(data))
//          if(userIsSuccess)
//          {
// // <NavBar role={myUser.roles}/>}
//         myUser.roles=='admin'?navigate('/NavBar'):navigate('/UsersNavBar')}
    
        // navigate('/UsersNavBar')
        // {<UsersNavBar/>}
//         setLoginSuccess(true)
// console.log(data.password);
//   navigate(data.roles==='admin'?'/Surveys':'UsersNavBar')
// }
// else{

// }
//     },[isSuccess,userIsSuccess])
//      console.log("navbar");
     let items=[];
     if(role==='admin'){
    items = [
        { label: 'דף הבית', icon: 'pi pi-home',command:()=>{navigate('/')} },
        { label: 'התנתק', icon: 'pi pi-check-circle',command:()=>{navigate('/login')}},
        { label: 'סקרים למשתמשים', icon: 'pi pi-list',command:()=>{navigate('UserSurveys')} },
        { label: 'כל סקרים', icon: 'pi pi-inbox',command:()=>{navigate('/Surveys')} },
        { label: 'סקרים לפילוח', icon: 'pi pi-inbox',command:()=>{navigate('/surveySegmentation')} },
        { label: 'סקרים מפולחים', icon: 'pi pi-inbox',command:()=>{navigate('/segments')} }
    ]}
    else{
        if(role==='user'){
       items = [
            { label: 'home', icon: 'pi pi-home',command:()=>{navigate('/user')} },
            { label: 'userSurveys', icon: 'pi pi-list',command:()=>{navigate('/UserSurveys')} },
            { label: 'segmented', icon: 'pi pi-inbox',command:()=>{navigate('/segments')} }

    ]} else{
        items = [
            { label: 'כניסה', icon: 'pi pi-check-circle',command:()=>{navigate('/login')} },
            { label: 'דף הבית', icon: 'pi pi-home',command:()=>{navigate('/user')} },
            { label: '?מי אנחנו', icon: 'pi pi-inbox',command:()=>{navigate('/we')} }

    ]
    }
    }
   
    // const navigate=useNavigate()

    // const home = () => {
    //     console.log("!!!!!!");
    //     if(localStorage.getItem("user")) {
    //         navigate(`/myAccount`)
    //     }
    //     navigate(`/auth`)
    // }

    // const barArr = [
    //     {
    //         label:"home", 
    //         command: ()=>{navigate(`/home`)}
    //     },
    //     {
    //         label:"login", 
    //         command: ()=>{navigate(`/login`)}
    //     },
    //     {
    //         label:"השתתפות בסקר", 
    //         command: ()=>{navigate(`'UserSurveys'`)}
    //     },
    //     {
    //         label:"", 
    //         command: ()=>{navigate(`/orders`)}
    //     },


    // ]
    // const barArrChef=[...barArr,
    //     {
    //         label:"my product", 
    //         command: ()=>{navigate(`/table`)}
    //     }, 
    // ]

    return (
        <div className="card" style={{position:"fixed"}}>
            <Menubar model={items} />
        </div>
    )
}
         



/*import React from "react";
import { Menubar } from 'primereact/menubar';
import {useNavigate} from "react-router-dom"
import useAuth from "./auth/useAuth";
import { useState } from "react";



const NavBar = () => {
    const {role}=useAuth()
    )
     
    

    const navigate=useNavigate()

    const myAccount = () => {
        console.log("!!!!!!");
        if(localStorage.getItem("user")) {
            navigate(`/myAccount`)
        }
        navigate(`/auth`)
    }

    const barArr = [
        {
            label:"my account", 
            command: myAccount
        },
        {
            label:"products", 
            command: ()=>{navigate(`/countries`)}
        },
        {
            label:"my basket", 
            command: ()=>{navigate(`/basket`)}
        },
        {
            label:"orders", 
            command: ()=>{navigate(`/orders`)}
        },


    ]
    const barArrChef=[...barArr,
        {
            label:"my product", 
            command: ()=>{navigate(`/table`)}
        }, 
    ]*/