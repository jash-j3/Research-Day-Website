import React from "react";
import "./Aboutnav.css";
import Footer from "./Footer";
import speaker1a from "./assets/logoiith.png";
import speaker2a from "./assets/Faculty-Prof Vinayak Eswaran.jpeg" ;
import speaker3a from "./assets/Sastry.jpg";
import speaker4a from "./assets/kiran_kumar_kuchi.jpg";
import speaker5a from "./assets/R_sai_chandra.jpeg";

function Expert() {
  return (
    <div className="lloll">
      <div className="about">
        <h1 className="he">Expert Talks</h1>
        <div className="evegrid">
          <div className="d1 discussion">
            <h1>1.Expert Talk 1 </h1>
            <div className="discussionmain">
              <img src={speaker2a} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
              Prof. Vinayak Eswaran
              <h1>Date:28th-February-2024</h1>
              <h1>Time:3:15 - 3:45 pm </h1>
              </h4>
              <div className="kk">
                <p>Prof. IIT Hyderabad</p>
              </div>
            </div>
          </div>
          <div className="d3 discussion">
            <h1>2. Expert Talk 2</h1>
            <div className="discussionmain">
              <img src={speaker3a} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
                Prof. Garikapati Narahari Sastry 
                <h1>Date : 29th-February-2024</h1>
                <h1>Time:4:15 - 4:45 pm </h1>
              </h4>
              <div className="kk">
                <p>Prof. IIT Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
        <div className="evegrid">
          <div className="d1 discussion">
            <h1>Tale Of Innovation</h1>
            <div className="discussionmain">
              <img src={speaker4a} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
                Prof. Kiran Kumar Kuchi
              </h4>
              <div className="kk">
                <p>Coming Soon...</p>
              </div>
            </div>
          </div>
          <div className="d3 discussion">
            <h1>Journey Of Enterprenureship</h1>
            <div className="discussionmain">
              <img src={speaker5a} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
                Dr. R Sai Chandra
              </h4>
              <div className="kk">
                <p>COO Green PMU SEMI Private Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Expert;