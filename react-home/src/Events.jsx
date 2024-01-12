import React, { useState, useEffect } from "react";
import "./Events.css";
const logo = require("../src/assets/logoiith.png");

function Events() {
  const eventsData = [
    {
      title: "Expert Talk",
      description: "Join us for insightful talks by industry experts.",
    },
    {
      title: "Seminar",
      description: "Participate in engaging seminars on cutting-edge topics.",
    },
    {
      title: "Poster Presentation",
      description: "Showcase your research through captivating poster presentations.",
    },
    {
      title: "3 Minute Talk",
      description: "Present your ideas concisely in our 3-minute talk sessions.",
    },
    {
      title: "Sci-Art Exhibition",
      description: "Explore the intersection of science and art in our exhibition.",
    },
    {
      title: "Keynote",
      description: "Don't miss our impactful keynote address on the main theme.",
    },
  ];

  const [currentEvent, setCurrentEvent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;

    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentEvent((prevEvent) => (prevEvent + 1) % eventsData.length);
      }, 1500); 
    }

    return () => clearInterval(interval);
  }, [isHovered, eventsData.length]);

  const handleHover = () => {
    setIsHovered((prevIsHovered) => !prevIsHovered);
  };

  return (
    <div className="events-container" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <h1>Events</h1>
      <div className="event">
        <img className="event-icon" src={logo} alt={eventsData[currentEvent].title} />
        <h2>{eventsData[currentEvent].title}</h2>
        <p>{eventsData[currentEvent].description}</p>
      </div>
    </div>
  );
}

export default Events;
