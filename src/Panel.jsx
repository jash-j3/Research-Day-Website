import React from "react";
import "./Aboutnav.css";
import Footer from "./Footer";
import speaker1a from "./assets/logoiith.png";

function Panel() {
  return (
    <div className="lloll">
      <div className="about">
        <h1 className="he">Panel Discussion</h1>
        <div className="evegrid">
          <div className="d1 discussion">
            <h1>1. Discussion a</h1>
            <div className="discussionmain">
              <img src={speaker1a} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
                [Speaker Name]
              </h4>
              <div className="kk">
                <p>Coming Soon...</p>
              </div>
            </div>
            <div className="discussionmain">
              <img src={speaker1a} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
                [Speaker Name]
              </h4>
              <div className="kk">
                <p>Coming Soon...</p>
              </div>
            </div>
            <div className="discussionmain">
              <img src={speaker1a} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
                [Speaker Name]
              </h4>
              <div className="kk">
                <p>Coming Soon...</p>
              </div>
            </div>
            <div className="discussionmain">
              <img src={speaker1a} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
                [Speaker Name]
              </h4>
              <div className="kk">
                <p>Coming Soon...</p>
              </div>
            </div>
          </div>
          <div className="d3 discussion">
            <h1>2. Discussion b</h1>
            <div className="discussionmain">
              <img src={speaker1a} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
                [Speaker Name]
              </h4>
              <div className="kk">
                <p>Coming Soon...</p>
              </div>
            </div>
            <div className="discussionmain">
              <img src={speaker1a} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
                [Speaker Name]
              </h4>
              <div className="kk">
                <p>Coming Soon...</p>
              </div>
            </div>
            <div className="discussionmain">
              <img src={speaker1a} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
                [Speaker Name]
              </h4>
              <div className="kk">
                <p>Coming Soon...</p>
              </div>
            </div>
            <div className="discussionmain">
              <img src={speaker1a} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
                [Speaker Name]
              </h4>
              <div className="kk">
                <p>Coming Soon...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Panel;
