import React from "react";
import "./About.css";
const logo = require("../src/assets/logoiith.png");
// const bg = require("../src/assets/bg-iith.png");
function About() {
  return (
    <div className="about-container">
      <div className="black-bg">
        <div className="message">
          <img className="profile-img" src={logo} alt="Director" />
          <div className="text-content">
            <h2>Message from Director</h2>
            <p>
              {" "}
              Coming Soon...
            </p>
          </div>
        </div>
        <div className="message">
          <img className="profile-img" src={logo} alt="Dean" />
          <div className="text-content">
            <h2>Message from Dean</h2>
            <p>
              {" "}
              Coming Soon...
            </p>
          </div>
        </div>
        <div className="message">
          <img className="profile-img" src={logo} alt="OC" />
          <div className="text-content">
            <h2>Message from OC</h2>
            <p>
              {" "}
              Coming Soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
