import React from "react";
import "./Aboutnav.css";
import Footer from "./Footer";
import speaker1a from "./assets/amit.jpeg";
import sponsor1  from "./assets/a.png"
import seminar2 from "./assets/Shantanu_chakrabarty (1).jpeg"
import seminar1 from "./assets/KrishnaRaghav.jpg"

function Seminars() {
  return (
    <div className="lloll">
      <div className="about">
        <h1 className="he">Seminars</h1>
        <div className="evegrid">
          <div className="d1 discussion">
            <h1>1. Unlocking Brilliance Part 1</h1>
            <div className="discussionmain">
              <h4 className="subhead" id="a">
                <h1>"Mastering the Art of Scientific Writing with AI Elegance"</h1>
                <h1></h1>
                 <img src={seminar1} className="img1"/>
                Guest Speaker : Dr.Krishna Raghav Chaturved
                <p>Who is better person than an editor to enlighten us about publishing paper.Learn the art of paper writing from Development Editor of Americal Chemical Society</p>
              </h4>
            </div>
          </div>
          <div className="d3 discussion">
            <h1>2. Unlocking Brilliance Part 2</h1>
            <div className="discussionmain">
              <h4 className="subhead" id="a">
                <h1>"The Art of Presenting Research in 1,3,5,10 mins"</h1>
                <h1></h1>
                  <img src={seminar2} className="img1"/>
                  Guest Speaker : Dr. Shantanu Chakrabarty
                  <h1>Presenting years of work in 10-20 minutes is our forte, but condensing it into 1-3 minutes for industry or interviews is an art. Join us with Dr. Shantanu Chakraborty to master this skill</h1>
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
