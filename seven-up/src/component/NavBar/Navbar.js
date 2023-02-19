import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";

function Navbar() {
  return (
    <div className="header">
      <div className="container">
        <img src="./Assets/logo.png" alt="log" />
        <div className="search">
          <input type="text" placeholder="Search " />
          <BiSearchAlt2 className="search-icon" />
        </div>
        <nav className="nav-menu">
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to="/tips">Tips</Link>
            </li>
          </ul>
        </nav>
        <MdOutlineDarkMode color="#fff" className="icon-mode" />
      </div>
    </div>
  );
}

export default Navbar;
