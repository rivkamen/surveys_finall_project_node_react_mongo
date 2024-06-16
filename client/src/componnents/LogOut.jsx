
// import React, { useState,useEffect } from "react";
// import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
// import { InputText } from 'primereact/inputtext';
// import { Checkbox } from "primereact/checkbox";
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { Password } from 'primereact/password';
// import apiSlice from "../app/apiSlice";
// import { removeToken } from "../app/features/auth/authSlice";

// export default function Logout() {
//     const dispatch = useDispatch()

//     const navigate=useNavigate();
//     useEffect(()=>{
//         dispatch(removeToken())
//         dispatch(apiSlice.util.resetApiState())
//         navigate("/")
//     })

//     return(

//         <>
//         </>
//     )
// }
        
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import apiSlice from "../app/apiSlice";
import { removeToken } from "../app/features/auth/authSlice";

export default function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(removeToken());
        dispatch(apiSlice.util.resetApiState());
        navigate("/user");
    }, []);

    return null;
}