import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './Navbar.css';
//const logo = require("../src/assets/logoiith.png");
const icon = require("../src/assets/icon.png")
const logo = require("../src/assets/khoj.png");

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const closeMenu = () => {
        setIsNavExpanded(false);
    };

    const handleOutsideClick = (event) => {
      if (isNavExpanded && !event.target.closest(".navbar")) {
          closeMenu();
      }
  };

  useEffect(() => {
      document.addEventListener('click', handleOutsideClick);
      return () => {
          document.removeEventListener('click', handleOutsideClick);
      };
  }, [isNavExpanded]); 

    return (
        <div >
            <nav className="navbar">
                <img src={logo} alt="iith-logo" className="iithlogo" />
                <div className={`navtxt ${isNavExpanded ? "expanded" : ""}`}>
                    <Link to="/Research-Day-Website" className="itm" onClick={closeMenu}>Home</Link>
                    <Link to="/Research-Day-Website/Aboutnav" className="itm" onClick={closeMenu}>Events</Link>
                    <Link to="/Research-Day-Website/Schedule" className="itm" onClick={closeMenu}>Schedule</Link>
                    <Link to="/Research-Day-Website/Registration" className="itm" onClick={closeMenu}>Registration</Link>
                    <Link to="/Research-Day-Website/Sponsorship" className="itm" onClick={closeMenu}>Sponsorship</Link>
                    <Link to="/Research-Day-Website/Team" className="itm" onClick={closeMenu}>Team</Link>
                
                </div>
                <button className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>
                    <img src={icon} className="icon" alt="hamburger-menu" />
                </button>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Navbar;
