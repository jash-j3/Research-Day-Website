import React from "react";
import "./About.css";
import coordinator from "./assets/prakahr_gupta.jpeg"
import director from "./assets/bsmurthy.jpeg"
import dean from "./assets/Venkatasubbaiah.jpeg"

const logo = require("../src/assets/logoiith.png");
// const bg = require("../src/assets/bg-iith.png");
function About() {
  return (
    <div className="about-container">
      <div className="black-bg">
        <div className="message">
          <img className="profile-img" src={director} alt="Director" />
          <div className="text-content">
            <h2>Message from Director</h2>
            <p>
              {" "}
              Dear friends,
It brings me immense pleasure to know that our research scholars are organising the 9 th edition of
the Research Scholars’ Day-KHOJ 2024, on the February 28-29, 2024. I am happy to note that
the primary objective behind this event is to spotlight the world-class research endeavours that
are underway at IIT Hyderabad. This can foster better collaboration and networking within our
IITH academic community, thereby enhancing the interdisciplinary research environment.
I am sure that this provides our budding researchers a platform not only showcase their research
achievements but also to develop a broader understanding of the diverse research landscape
within the institute I anticipate that this exchange of knowledge and ideas will not only enrich
individual research pursuits but also contribute to the overall academic excellence of IIT
Hyderabad. 
I extend my heartfelt best wishes and blessings to the entire community of PhD scholars at IIT
Hyderabad for organizing KHOJ 2024. May your academic journeys be filled with success,
growth, and the fulfilment of your aspirations. May you continue to excel in your pursuits and
contribute significantly to the academic and research excellence of our esteemed institution.
Wishing you all the very best in your endeavours.

…… Prof. B.S. Murty
            </p>
          </div>
        </div>
        <div className="message">
          <img className="profile-img" src={dean} alt="Dean" />
          <div className="text-content">
            <h2>Message from Dean</h2>
            <p>
              {" "}
              Research scholars’ day is an initiative by the research scholars of IIT Hyderabad to make research more accessible. It is a platform for scholars to collaborate with the prominent personalities of their field by sharing their knowledge through short talks and poster presentations. This event is an effort by the scholars of IITH to bring academic research to the real-world. Scholars get an opportunity to showcase their research work and interact with prominent scientists.
Poster presentation and 3-minute talk are the two main events for the scholars. These events are ways to present the research work in limited words. My best wishes to the team for the success of this event."
<h1>Prof. Venkata Subbaiah</h1>
<h1>....Dean Students</h1>
            </p>
          </div>
        </div>
        <div className="message">
          <img className="profile-img" src={coordinator} alt="OC" />
          <div className="text-content">
            <h2>Message from FIC-SA</h2>
            <p>
              {" "}
              Welcome to the highly awaited Research Scholars' Day, an event that serves as a testament to the unwavering commitment and intellectual prowess of the vibrant research community of IIT Hyderabad. On behalf of the student organizing committee, it brings me immense pleasure to extend a warm welcome to all participants and attendees.
              This day stands as a celebration of knowledge, innovation, and the relentless pursuit of excellence that defines our research at IIT Hyderabad. As we gather here, we embark on a journey to explore the frontiers of discovery, exchange ideas, and foster meaningful collaborations that will undoubtedly shape the future of our respective fields. The diverse array of research topics and projects on display today reflects the richness of our academic community.
              To our esteemed guests, thank you very much for joining us on this intellectual odyssey; your presence adds immense value to the event.I encourage everyone to actively participate in the two-day event filled with engaging presentations, stimulating discussions, and invaluable networking opportunities. Let us collectively embrace the spirit of collaboration and exchange research ideas that have the power to transform our understanding.
              Finally, I extend heartfelt congratulations to my team, students who have worked tirelessly, day and night, to ensure the grand success of this event.
              Once again, a warm welcome to the Research Scholars' Day.
              <h1></h1>
              <h1>Dr. Prakhar Gupta</h1>
             <h1>FIC KHOJ-24</h1>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
