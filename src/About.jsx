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
            <h1>Dr. Prakhar Gupta</h1>
            <h1>FIC SA</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
