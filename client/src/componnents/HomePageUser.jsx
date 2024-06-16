import { Navigate } from 'react-router-dom'
import logo from "../componnents/logo/userHomePage.mp4"
const HomePageUser=()=>{
    return(
        <>
<div className='homePage'>
        <video alt="logo" src={logo} width={"60%"} className="vi" autoPlay muted loop  onClick={()=>{Navigate('/user')}} style={{marginTop:'200px'}}></video>
      </div> </>
       
    )
}
export default HomePageUser