import { Navigate } from 'react-router-dom'
import logo from "../componnents/logo/survid.mp4"
const HomePage=()=>{
    return(
        <>
        <video alt="logo" src={logo} width={"40%"} className="mr-2" autoPlay muted loop  onClick={()=>{Navigate('/')}} style={{marginTop:'200px'}}></video>
       </>
       
    )
}
export default HomePage