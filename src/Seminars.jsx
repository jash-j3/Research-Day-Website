import React from "react";
import "./Aboutnav.css";
import Footer from "./Footer";
import speaker1a from "./assets/amit.jpeg";

function Seminars() {
  return (
    <div className="lloll">
      <div className="about">
        <h1 className="he">Seminars</h1>
        <div className="evegrid">
          <div className="d1 discussion">
            <h1>1. Seminar a</h1>
            <div className="discussionmain">
              <h4 className="subhead" id="a">
                Coming Soon...
              </h4>
            </div>
          </div>
          <div className="d3 discussion">
            <h1>2. Seminar b</h1>
            <div className="discussionmain">
              <h4 className="subhead" id="a">
                Coming Soon...
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Seminars;
