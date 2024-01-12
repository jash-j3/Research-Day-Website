import React from "react";
import "./Events.css";
const logo = require("../src/assets/logoiith.png");


function Events() {
  return (
    <div className="events-container">
      <h1 className="aa">
        Events
      </h1>
      <div className="event">
        <img
          className="event-icon"
          src={logo}
          alt="Expert Talk"
        />
        <h2>Expert Talk</h2>
        <p>Join us for insightful talks by industry experts.</p>
      </div>
      <div className="event">
        <img
          className="event-icon"
          src={logo}
          alt="Seminar"
        />
        <h2>Seminar</h2>
        <p>Participate in engaging seminars on cutting-edge topics.</p>
      </div>
      <div className="event">
        <img
          className="event-icon"
          src= {logo}
          alt="Poster Presentation"
        />
        <h2>Poster Presentation</h2>
        <p>Showcase your research through captivating poster presentations.</p>
      </div>
      <div className="event">
        <img
          className="event-icon"
          src= {logo}
        />
        <h2>3 Minute Talk</h2>
        <p>Present your ideas concisely in our 3-minute talk sessions.</p>
      </div>
      <div className="event">
        <img
          className="event-icon"
          src={logo}
          alt="Sci-Art Exhibition"
        />
        <h2>Sci-Art Exhibition</h2>
        <p>Explore the intersection of science and art in our exhibition.</p>
      </div>
      <div className="event">
        <img
          className="event-icon"
          src= {logo}
          alt="Keynote"
        />
        <h2>Keynote</h2>
        <p>Don't miss our impactful keynote address on the main theme.</p>
      </div>
    </div>
  )
}

export default Events