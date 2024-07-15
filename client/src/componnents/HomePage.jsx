import { Navigate } from 'react-router-dom'
import logo from "../componnents/logo/לדף הבית_1.mp4"
const HomePage=()=>{
    return(
        <>

        <video className="vi" alt="logo" src={logo} width={"60%"} /*className="mr-2"*/ autoPlay muted loop  /*style={{marginTop:'200px'}}*/></video>
       </>
       
    )
}
export default HomePage