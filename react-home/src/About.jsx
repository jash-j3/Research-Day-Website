import React from "react";
import "./About.css";
const logo = require("../src/assets/logoiith.png");


function About() {
  return (
    <div className="about-container">
 
      <div className="message">
        <img
          className="profile-img"
          src={logo} 
          alt="Director"
        />
        <div className="text-content">
          <h2>Message from Director</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
        </div>
      </div>
      <div className="message">
        <img
          className="profile-img"
          src={logo} 
          alt="Dean"
        />
        <div className="text-content">
          <h2>Message from Dean</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
        </div>
      </div>
      <div className="message">
        <img
          className="profile-img"
          src={logo}
          alt="OC"
        />
        <div className="text-content">
          <h2>Message from OC</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
        </div>
      </div>
    </div>
  )
}

export default About;