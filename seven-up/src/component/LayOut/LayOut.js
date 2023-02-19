
import { useAuthContext } from "../../Providers/AuthContext";
import Navbar from "../NavBar/Navbar";
import SideBar from "../SideBar/SideBar";

const Layout=({children})=>{
    const { isConnected } = useAuthContext();
    return(
        <div>
            
            {isConnected && <div style={{minHeight:"80px"}} />}
            {isConnected && <Navbar/>}
            {!isConnected && <SideBar/>}
            {children}
        </div>


    )

}

export default Layout