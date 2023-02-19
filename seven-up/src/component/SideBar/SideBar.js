import React from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom'
import { AiOutlineLogin } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { GoSignIn } from "react-icons/go"
import logo from "../../Assets/logo.jpg"

function SideBar() {

    return (
        <div className='sideBar'>
            <ul className='links'>
                  <li>
                    <div className='link'>
                        <AiOutlineLogin className='icons' />
                        <Link to="login">Log In</Link>
                    </div>
                    </li>

                    <li>
                        <div className='link'>
                            <GoSignIn className='icons' />
                            <Link to="signin">Sign In</Link>
                        </div>
                    </li>

                

                <li>
                    <div className='link'>
                        <BsFillPersonFill className='icons' />
                        <Link to="Q&A">Q&A</Link>
                    </div>
                </li>


            </ul>
        </div>
    )
}

export default SideBar