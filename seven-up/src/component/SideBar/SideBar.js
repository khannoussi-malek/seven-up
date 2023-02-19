import React, { useState } from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom'
import { AiOutlineLogin ,AiFillLeftCircle,AiFillRightCircle } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { GoSignIn } from "react-icons/go"

function SideBar() {

    const [classDisp,setClassDisp]=useState(true)
    const[classOpen,setClassOpen]=useState("open");

    const handleArrows=()=>{
        setClassOpen(!classDisp?"open":"");
        setClassDisp(!classDisp);
        if(classDisp===false){

        }

    }

    return (
        <div   className={`${classOpen} sideBar`}>
            <ul  className={` links`}>

            <li  className={`${classDisp?"disp":"hidden"} leftArr`} onClick={handleArrows}><AiFillLeftCircle/></li>
           
            <li className={`${!classDisp?"disp":"hidden"} rightArr`} onClick={handleArrows}><AiFillRightCircle/></li>
                  <li className={`${!classDisp?"disp":"hidden"}`}   >
                    <div className={` link`}>
                        <AiOutlineLogin className='icons' />
                        <Link  to="login" className={`${classDisp===true && "disp"} rightArr`}>Log In</Link>
                    </div>
                    </li>

                    <li  className={`${!classDisp?"disp":"hidden"}`} >
                        <div className='link'>
                            <GoSignIn className='icons' />
                            <Link to="signin" className={`${classDisp===true && "disp"}`}>Sign In</Link>
                        </div>
                    </li>

                

                <li  className={`${!classDisp?"disp":"hidden"}`} >
                    <div className='link'>
                        <BsFillPersonFill className='icons' />
                        <Link to="Q&A" className={`${classDisp===true && "disp"}`}>Q&A</Link>
                    </div>
                </li>


            </ul>
        </div>
    )
}

export default SideBar