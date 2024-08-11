import { createSlice } from "@reduxjs/toolkit";
const surveySlice = createSlice({
name:"edit",
initialState:{
token: localStorage.getItem("token") || "" ,
isUserLoggedIn: localStorage.getItem("token")?true: false,
userFullName: ""
},
reducers:{
setToken:(state, action)=>{
    
const token = action.payload.token
state.token = token
state.isUserLoggedIn = true
localStorage.setItem("token", token)
},
removeToken: (state)=>{
state.token = ""
state.isUserLoggedIn = false
localStorage.removeItem("token")
}
}
})
export default surveySlice.reducer
export const{ setToken, removeToken} = surveySlice.actions