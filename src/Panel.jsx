import React from "react";
import "./Aboutnav.css";
import Footer from "./Footer";
import khoj from "./assets/khoj.png";
import speaker1a from "./assets/VG Sekaran.jpg";
import speaker2 from "./assets/raji.jpeg";
import speaker3 from "./assets/Kotaro.jpg";
import speaker4 from "./assets/saptarishi.jpg";
import speaker5 from "./assets/Mahati_Chittem.jpg";
import speaker6 from "./assets/Usha-Chivukula.png";


function Panel() {
  return (
    <div className="lloll">
      <div className="about">
        <h1 className="he">Panel Discussion</h1>
        <div className="evegrid">
          <div className="d1 discussion">
            <h1>1. Nurturing Brilliance</h1>
            <h1>"Research Futures: Home & Abroad"</h1>
            <div className="discussionmain">
              <img src={speaker1a} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
                Dr. V.G.Sekaran
              </h4>
              <div className="kk">
                <p>Father of AGNI-5 Missile</p>
              </div>
            </div>
            <div className="discussionmain">
              <img src={speaker2} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
                Prof. P.Rajalaxmi
              </h4>
              <div className="kk">
                <p>Director NMICPS TiHAN</p>
              </div>
            </div>
            <div className="discussionmain">
              <img src={speaker3} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
                Dr. Kotaro Kataoka
              </h4>
              <div className="kk">
                <p>Associate Prof.(CS Dept.)</p>
              </div>
            </div>
          </div>
          <div className="d3 discussion">
            <h1>2. Harmonizing Brilliance</h1>
            <h1>"Nurturing Mental Health & Well Being in Academia"</h1>
            <div className="discussionmain">
              <img src={speaker6} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
              Dr. Chivukula Usha
              </h4>
              <div className="kk">
                <p>Centre for Health Psychology(University of Hyderabad) </p>
              </div>
            </div>
            <div className="discussionmain">
              <img src={speaker4} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
              Prof. Saptarshi Majumdar
              </h4>
              <div className="kk">
                <p>Prof. IITH(Chemical Engineering)</p>
                <p>Former Dean Academics</p>
              </div>
            </div>
            <div className="discussionmain">
              <img src={speaker5} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
                Dr. Mahati Chittem
              </h4>
              <div className="kk">
                <p>Asso.Proffessor(Health & Medical Psychology)</p>
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
