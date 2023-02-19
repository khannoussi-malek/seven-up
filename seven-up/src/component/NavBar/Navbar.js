import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import {BiSearchAlt2} from "react-icons/bi"

function Navbar() {
  return (
    <div className='header'>
      <div className='container'>
      <img src="/Assets/logo.jpg" alt="logo"/>
      <div className='search'>
        <BiSearchAlt2/> 
        <input type="text" placeholder='Search '/> 
      </div>
        <nav>
            <ul>
              <li><Link to='/'>Home</Link> </li>
              <li><Link to="/tips">Tips</Link></li>
            </ul>  
        </nav>
      </div>
  </div>
  )
}

export default Navbar