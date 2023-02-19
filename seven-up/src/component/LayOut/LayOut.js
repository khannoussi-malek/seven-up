
import Navbar from "../NavBar/Navbar";

const Layout=({children})=>{
    return(
        <div>
            <div style={{minHeight:"80px"}} />
            <Navbar/>
            {children}
        </div>


    )

}

export default Layout