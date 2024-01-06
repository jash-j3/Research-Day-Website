import React from "react";
import "./Navbar.css";
const logo = require("../src/assets/logoiith.png");

function Navbar() {
  return (
    <div className="navbar">
      <div class="nav-items">
        <img src={logo} alt="iith-logo" className="iithlogo" />
        <div className="navtxt">
            <div className="itm">Home</div>
            <div className="itm">About</div>
            <div className="itm">Programme</div>
            <div className="itm">Registeration</div>
            <div className="itm">Events & Schedule</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
