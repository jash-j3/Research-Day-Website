import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import "./Navbar.css";
//const logo = require("../src/assets/logoiith.png");
const icon = require("../src/assets/icon.png");
const logo = require("../src/assets/khoj.png");

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isHoveringHome, setIsHoveringHome] = useState(false);
  const [isHoveringReg, setIsHoveringReg] = useState(false);

  const closeMenu = () => {
    setIsNavExpanded(false);
    setIsHoveringHome(false);
    setIsHoveringReg(false);
  };

  const handleOutsideClick = (event) => {
    if (isNavExpanded && !event.target.closest(".navbar")) {
      closeMenu();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNavExpanded]);

  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="iith-logo" className="iithlogo" />
        <div className={`navtxt ${isNavExpanded ? "expanded" : ""}`}>
          <Link to="/" className="itm" onClick={closeMenu}>
            Home
          </Link>
          <div
            className="itm"
            onMouseEnter={() => setIsHoveringHome(true)}
            onMouseLeave={() => setIsHoveringHome(false)}
          >
            <div className="flex flex-row gap-1 items-center justify-center">
              {" "}
              Events <FaCaretDown size={20} />
            </div>

            {isHoveringHome && (
              <div className="popup-menu">
                <Link to="/Keynote" className="popup-item " onClick={closeMenu}>
                  Keynote
                </Link>
                <Link to="/Panel" className="popup-item " onClick={closeMenu}>
                  Panel Discussion
                </Link>
                <Link
                  to="/Seminars"
                  className="popup-item "
                  onClick={closeMenu}
                >
                  Seminars
                </Link>
                <Link
                  to="/Competitions"
                  className="popup-item "
                  onClick={closeMenu}
                >
                  Competition
                </Link>
                <Link to="/Talks" className="popup-item " onClick={closeMenu}>
                  Expert Talks
                </Link>
              </div>
            )}
          </div>
          <Link to="/Schedule" className="itm" onClick={closeMenu}>
            Schedule
          </Link>
          <div
            className="itm"
            onMouseEnter={() => setIsHoveringReg(true)}
            onMouseLeave={() => setIsHoveringReg(false)}
          >
            <div className="flex flex-row gap-1 items-center justify-center">
              {" "}
              Registration <FaCaretDown size={20} />
            </div>
            {isHoveringReg && (
              <div className="popup-menu">
                <Link
                  to="/Registration"
                  className="popup-item "
                  onClick={closeMenu}
                >
                  IITH Students
                </Link>
                <Link to="/Visitor" className="popup-item " onClick={closeMenu}>
                  Visitor (All)
                </Link>
              </div>
            )}
          </div>
          <Link to="/Sponsorship" className="itm" onClick={closeMenu}>
            Sponsorship
          </Link>
          <Link to="/Team" className="itm" onClick={closeMenu}>
            Team
          </Link>
        </div>
        <button
          className="hamburger"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
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
