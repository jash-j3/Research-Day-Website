import React from "react";
import "./About.css";
import coordinator from "./assets/maheshthombare.jpeg"
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
              Coming Soon
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
          <img className="profile-img" src={coordinator} alt="OC" />
          <div className="text-content">
            <h2>Message from OC</h2>
            <p>
              {" "}
              Welcome to the much-anticipated Research Scholars' Day, an event that stands as a testament to
the unwavering commitment and intellectual prowess of our vibrant research community. On behalf
of the Organizing Committee, it is our distinct pleasure to extend a warm welcome to all
participants, collaborators, and attendees. This day is a celebration of knowledge, innovation, and
the relentless pursuit of excellence that defines our research scholars. As we gather here, we
embark on a journey to explore the frontiers of discovery, exchange ideas, and foster meaningful
collaborations that will undoubtedly shape the future of our respective fields. The diverse array of
research topics and projects on display today reflects the richness of our academic community. From
groundbreaking discoveries to pioneering methodologies, the Research Scholars' Day serves as a
platform to showcase the intellectual acumen and dedication that drive our scholars to push the

boundaries of knowledge. We extend our gratitude to all the scholars who have contributed to
making this event possible. Your dedication to advancing research and sharing insights with the
broader community is truly commendable. To our esteemed guests, thank you for joining us on this
intellectual odyssey. Your presence adds immense value to the dialogue and strengthens the bonds
that unite us in our shared pursuit of knowledge. As we delve into a day filled with engaging
presentations, stimulating discussions, and invaluable networking opportunities, we encourage
everyone to embrace the spirit of collaboration and exchange ideas that have the power to
transform our collective understanding.
Once again, welcome to the Research Scholars' Day. May this event inspire, enlighten, and foster a
sense of camaraderie among all participants. Together, let us propel the frontiers of knowledge and
make a lasting impact on the world through our shared passion for research.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
