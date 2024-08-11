import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
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
export default userSlice.reducer
export const{ setToken, removeToken} = userSlice.actions