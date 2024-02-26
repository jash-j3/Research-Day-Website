import React from "react";
import "./Aboutnav.css";
import Footer from "./Footer";
import speaker1a from "./assets/logoiith.png";
import speakera from "./assets/Vedachalam.jpeg";
import speakerb from "./assets/bj-rao.png";


function Keynote() {
  return (
    <div className="lloll">
      <div className="about">
        <h1 className="he">Inaugral Keynote Talk</h1>
        <div className="evegrid">
          <div className="d1 discussion">
            <div className="discussionmain">
              <img src={speakera} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
              <h1>Dr. Nagarajan Vedachalam</h1>
              </h4>
              <div className="kk">
                <p>Former Director LPSC(ISRO)</p>
              </div>
               <h1>Date:28th-February-2024</h1>
               <h1>Time: 10:00 - 10:45  am </h1>
            </div>
          </div>
          <div className="d3 discussion">
            <h1>2. Expert Talk 2</h1>
            <div className="discussionmain">
              <img src={speakerb} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
               <h1>Prof. B.J. Rao </h1> 
              </h4>
              <div className="kk">
                <p>Vice Chancellor University of Hyderabad</p>
              </div>
               <h1>Date : 29th-February-2024</h1>
                <h1>Time: 9:30 - 10:15 am </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Keynote;