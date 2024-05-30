
// import logo from '../logo.svg';
// import '../App.css';
// import Start from './Start'
// import { BrowserRouter, Link, Route, Router, Routes, useNavigate } from 'react-router-dom';
// import SurveyList from './surveys/Surveys';
// import Surveys from './surveys/Surveys';
// import SurveyDialog from './surveys/SurveyDialog';
// import DeleteDialog from './surveys/DeleteDialog';
// import Quest from './questions/Question';
// import Survey from './surveys/Survey'
// import HomePage from './HomePage';
// import NavBar from './NavBar';
// import UserSurveys from './users/UserSurveys';
// import SegmentSurveys from './surveys/SegmentSurveys';
// // import SegmentSurveys from './componnents/surveys/SegmentSurveys.jsx';
// // import Segments from './componnents/users/Segments'
// import Segments from './users/Segments'
// import Diagram from '../Diagram';
// import UsersNavBar from './users/UsersNavBar';
// import { useGetUserQuery } from './users/usersApiSlice';
// import About from '../About';
// import BaseNavBar from './users/BaseNavBar';
// import { Provider, useSelector } from 'react-redux';
// import store from '../app/store'
// import { useEffect, useState } from 'react';
// import { removeToken, setToken } from '../app/features/auth/authSlice';
// import { useDispatch } from 'react-redux';
// import {useLoginMutation} from '../app/features/auth/authApiSlice'
// import Bar from '../Bar';
// import { useSendMailMutation } from './service/mailApiSlice';
// import "../index.css";
// import DecodeToken from '../DecodeToken';
// import apiSlice from '../app/apiSlice';
// import { Menubar } from 'primereact/menubar';
// // import apiSlice from "../app/apiSlice"
// export default function TemplateDemo() {
//     const navigate=useNavigate();
//     const decodeToken=DecodeToken()
//    const users=decodeToken?.roles
   
//     const itemRenderer = (item) => (
//         <Link to={item.label=='יציאה' ? isUserLoggedIn?item.url:item.secondUrl:item.url}> 
//             <span className="mx-2" class="bar">{item.label=='יציאה' ? isUserLoggedIn?item.label:item.secondLabel:item.label}</span>
//             <span className={item.label=='יציאה' ? isUserLoggedIn?item.icon:item.secondIcon:item.label=='משתמשים'? users && item.icon :item.icon} style={{color:'white'}} />
//             {/* {item.icon && <Badge className="mx-2" value={item.icon} />} */}
//             {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.icon}</span>}
        
//         </Link>
   
//     );
//     const itemRenderer1 = (item) => (
//         <Link to={item.url}>
//             <span className="mx-2" style={{color:'white',width:'250px'}}>{item.label}</span>
            
//             <span className={item.icon}  style={{color:'white'}}/>
            
//             {/* {item.badge && <Badge className="ml-auto" value={item.badge} />} */}
//             {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.icon}</span>}
//         </Link>
//     );
   
//     const items =users==='admin'? [
//                 { label: 'דף הבית', icon: 'pi pi-home',template: itemRenderer,url:'/' },
//                 {
//                     label: 'יציאה',secondLabel:'התחברות',icon: 'pi pi-sign-out',
//                     secondIcon:'pi pi-sign-in',
//                     template: itemRenderer,
//                     url: 'logout',
//                     secondUrl:'login',
//                 },
//                 // { label: 'התנתק', icon: 'pi pi-check-circle',command:()=>{navigate('/login')}},
//                 { label: 'סקרים למשתמשים', icon: 'pi pi-list',template: itemRenderer,url:'/UserSurveys'},
//                 { label: 'כל סקרים', icon: 'pi pi-inbox',template: itemRenderer,url:'/Surveys' },
//                 { label: 'סקרים לפילוח', icon: 'pi pi-inbox',template: itemRenderer,url:'/surveySegmentation' },
//                 { label: 'סקרים מפולחים', icon: 'pi pi-inbox',template: itemRenderer,url:'/surveySegmentation'},
//                 { label: '?מי אנחנו', icon: 'pi pi-inbox',template: itemRenderer,url:'/we'}
//             ]:users==='user'?
//             [{ label: 'דף הבית', icon: 'pi pi-home',template: itemRenderer,url:'/' },
//             {
//                 label: 'יציאה',secondLabel:'התחברות',icon: 'pi pi-sign-out',
//                 secondIcon:'pi pi-sign-in',
//                 template: itemRenderer,
//                 url: 'logout',
//                 secondUrl:'login',
//             },
//             // { label: 'התנתק', icon: 'pi pi-check-circle',command:()=>{navigate('/login')}},
//             { label: 'סקרים למשתמשים', icon: 'pi pi-list',template: itemRenderer,url:'/UserSurveys'},
//             { label: 'סקרים מפולחים', icon: 'pi pi-inbox',template: itemRenderer,url:'/surveySegmentation'},
//             { label: '?מי אנחנו', icon: 'pi pi-inbox',template: itemRenderer,url:'/we'}]: [{ label: 'דף הבית', icon: 'pi pi-home',template: itemRenderer,url:'/' },
//             {
//                 label: 'יציאה',secondLabel:'התחברות',icon: 'pi pi-sign-out',
//                 secondIcon:'pi pi-sign-in',
//                 template: itemRenderer,
//                 url: 'logout',
//                 secondUrl:'login',
//             },{ label: '?מי אנחנו', icon: 'pi pi-inbox',template: itemRenderer,url:'/we'}]
       

//     const navBarlogo = <video alt="logo" src={logo} height="50" className="mr-2" autoPlay muted loop  onClick={()=>{navigate('/')}}></video>;
//     // const searchInput = (
//     //     <InputText type="text" className="w-8rem sm:w-auto" class="search" />
//     // )
//     const {isUserLoggedIn} = useSelector((state)=>state.auth)
//     const dispatch = useDispatch()
//     // const navigate = useNavigate()
//     const handleLogoutClick = () =>{
//     dispatch(removeToken())
//     dispatch(apiSlice.util.resetApiState())
//     navigate("/")
//     }
//     return (
//         <div className="nav">
//             <Menubar model={items} end={navBarlogo} />
//             {console.log("aaa")}
//             {/* {isUserLoggedIn &&  <button onClick={handleLogoutClick} className='pi pi-sign-out'> Logout </button> } */}
//         </div>
//     )
// }


import logo from '../logo.svg';
import '../App.css';
import {Link, useNavigate } from 'react-router-dom';
import {useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import "../index.css";
import DecodeToken from '../DecodeToken';
import { Menubar } from 'primereact/menubar';
export default function TemplateDemo() {
    const navigate=useNavigate();
    const decodeToken=DecodeToken()
   const users=decodeToken?.roles
    const itemRenderer = (item) => (
        <Link to={item.label=='יציאה' ? isUserLoggedIn?item.url:item.secondUrl:item.url}> 
            <span className="mx-2" class="bar">{item.label=='יציאה' ? isUserLoggedIn?item.label:item.secondLabel:item.label}</span>
            <span className={item.label=='יציאה' ? isUserLoggedIn?item.icon:item.secondIcon:item.label=='משתמשים'? users && item.icon :item.icon} style={{color:'white'}} />
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.icon}</span>}
        
        </Link>
   
    );
   
   
    const items = users==='admin'?[
                { label: 'דף הבית', icon: 'pi pi-home',template: itemRenderer,url:'/' },
                {
                    label: 'יציאה',secondLabel:'התחברות',icon: 'pi pi-sign-out',
                    secondIcon:'pi pi-sign-in',
                    template: itemRenderer,
                    url: 'logout',
                    secondUrl:'login',
                },
                { label: 'סקרים למשתמשים', icon: 'pi pi-list',template: itemRenderer,url:'/UserSurveys'},
                { label: 'כל סקרים', icon: 'pi pi-inbox',template: itemRenderer,url:'/Surveys' },
                { label: 'סקרים לפילוח', icon: 'pi pi-inbox',template: itemRenderer,url:'/surveySegmentation' },
                { label: 'סקרים מפולחים', icon: 'pi pi-inbox',template: itemRenderer,url:'/segments'},
                { label: '?מי אנחנו', icon: 'pi pi-inbox',template: itemRenderer,url:'/we'}
            ]:users==='user'?[
                { label: 'דף הבית', icon: 'pi pi-home',template: itemRenderer,url:'/' },
                {
                    label: 'יציאה',secondLabel:'התחברות',icon: 'pi pi-sign-out',
                    secondIcon:'pi pi-sign-in',
                    template: itemRenderer,
                    url: 'logout',
                    secondUrl:'login',
                },
                { label: 'סקרים למשתמשים', icon: 'pi pi-list',template: itemRenderer,url:'/UserSurveys'},
                { label: 'סקרים מפולחים', icon: 'pi pi-inbox',template: itemRenderer,url:'/segments'},
                { label: '?מי אנחנו', icon: 'pi pi-inbox',template: itemRenderer,url:'/we'}
            ]:[
                { label: 'דף הבית', icon: 'pi pi-home',template: itemRenderer,url:'/' },
                {
                    label: 'יציאה',secondLabel:'התחברות',icon: 'pi pi-sign-out',
                    secondIcon:'pi pi-sign-in',
                    template: itemRenderer,
                    url: 'logout',
                    secondUrl:'login',
                },
                { label: '?מי אנחנו', icon: 'pi pi-inbox',template: itemRenderer,url:'/we'}
            ]
       

    const navBarlogo = <video alt="logo" src={logo} height="50" className="mr-2" autoPlay muted loop  onClick={()=>{navigate('/')}}></video>;

    const {isUserLoggedIn} = useSelector((state)=>state.auth)
    const dispatch = useDispatch()
    return (
        <div className="nav">
            <Menubar model={items} end={navBarlogo} />
        </div>
    )
}