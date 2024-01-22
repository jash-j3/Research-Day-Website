import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./Navbar.css";
//const logo = require("../src/assets/logoiith.png");
const logo = require("../src/assets/khoj.png");

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div class="nav-items">
          <img src={logo} alt="iith-logo" className="iithlogo" />
          <div className="navtxt">
            <Link to="/" className="itm">Home</Link>
            <Link to="/Aboutnav" className="itm">Events</Link>
            <Link to="/Schedule" className="itm">Schedule</Link>
            <Link to="/Registration" className="itm">Registration</Link>
            <Link to="/Sponsorship" className="itm">Sponsorship</Link>
          </div>
        </div>
      </div>
        <main><Outlet /></main>
    </div>
  );
}

export default Navbar;
