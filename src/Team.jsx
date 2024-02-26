import React from "react";
import "./Team.css";
import Footer from "./Footer";
const p = require("../src/assets/logoiith.png");
const ak = require("../src/assets/ak.jpeg");
const jj = require("../src/assets/jj.jpeg");

const mt = require("../src/assets/maheshthombare.jpeg");

const an = require("../src/assets/anaghak.jpg");
const pk = require("../src/assets/pawankirar.jpeg");
const nk = require("../src/assets/naveenkumar.jpeg");
const gt = require("../src/assets/gaytri.jpeg");
const sb = require("../src/assets/Sayani Barman.JPG");
const jv = require("../src/assets/Vishnu.jpeg");

const rs = require("../src/assets/rohanseth.JPG");
const sc = require("../src/assets/shubhamchakr.jpeg");
const ni = require("../src/assets/nikitanimbark.jpeg");
const ikc = require("../src/assets/IKC.jpeg");

const sd = require("../src/assets/sindhura.jpeg");
const at = require("../src/assets/amit.jpeg");
const pa = require("../src/assets/Priyanka Aggarwal.jpeg");
function Team() {
  return (
    <div>
      <div className="first">
        <h2 className="subone">Team</h2>
        <h1 className="lmao">RSD ' 2024</h1>
        <div className="box">
          <img
            src={mt}
            alt="iithlogo"
            className="w-40 bg-cover rounded-full mx-auto h-40"
          />
          <h1 className="title">Mahesh Ramesh Thombare</h1>
          <p id="subtitle"> Overall Coordinator</p>
        </div>

        <div className="grid-cont">
          <div id="ind">
            <img
              src={pk}
              alt="iithlogo"
              className="w-40 bg-cover rounded-full mx-auto h-40"
            />
            <h1 className="title">Dr. Pawan Kirar</h1>
            <p id="subtitle">Finance Coordinator</p>
          </div>
          <div id="ind">
            <img
              src={nk}
              alt="iithlogo"
              className="w-40 bg-cover rounded-full mx-auto h-40"
            />
            <h1 className="title">Naveen Kumar K R</h1>
            <p id="subtitle">Event Coordinator</p>
          </div>
          <div id="ind">
            <img
              src={an}
              alt="iithlogo"
              className="w-40 bg-cover rounded-full mx-auto h-40"
            />
            <h1 className="title">Anagha K</h1>
            <p id="subtitle">Design Coordinator</p>
          </div>

          <div id="ind">
            <img
              src={sb}
              alt="iithlogo"
              className="w-40 bg-cover rounded-full mx-auto h-40"
            />
            <h1 className="title">Sayani Barman</h1>
            <p id="subtitle">Sponsorship Head</p>
          </div>

          <div id="ind">
            <img
              src={pa}
              alt="iithlogo"
              className="w-40 bg-cover rounded-full mx-auto h-40"
            />
            <h1 className="title">Priyanka Aggarwal</h1>
            <p id="subtitle">Food Coordinator</p>
          </div>

          {/* <div id="ind">
            <img src={pg} alt="iithlogo" className="w-40 bg-cover rounded-full mx-auto h-40" />
            <h1 className="title"></h1>
            <p id="subtitle">Promotion & PR Team</p>
          </div> */}

          <div id="ind">
            <img
              src={at}
              alt="iithlogo"
              className="w-40 bg-cover rounded-full mx-auto h-40"
            />
            <h1 className="title">Amit Malla</h1>
            <p id="subtitle">Registration, Logistics Head</p>
          </div>
          <div id="ind">
            <img
              src={sc}
              alt="iithlogo"
              className="w-40 bg-cover rounded-full mx-auto h-40"
            />
            <h1 className="title">Shubham Chakraborty</h1>
            <p id="subtitle">Sci - Art Head</p>
          </div>

          <div id="ind">
            <img
              src={ni}
              alt="iithlogo"
              className="w-40 bg-cover rounded-full mx-auto h-40"
            />
            <h1 className="title">Nikita Nimbark</h1>
            <p id="subtitle">3 Minute Talk Head</p>
          </div>

          <div id="ind">
            <img
              src={p}
              alt="iithlogo"
              className="w-40 bg-cover rounded-full mx-auto h-40"
            />
            <h1 className="title">Yashwant Singh</h1>
            <p id="subtitle">Poster Presentation Head</p>
          </div>
          <div id="ind">
            <img
              src={sd}
              alt="iithlogo"
              className="w-40 bg-cover rounded-full mx-auto h-40"
            />
            <h1 className="title">Bhagvathula Sindhura</h1>
            <p id="subtitle">Hospitality Head</p>
          </div>

          <div id="ind">
            <img
              src={ikc}
              alt="iithlogo"
              className="w-40 bg-cover rounded-full mx-auto h-40"
            />
            <h1 className="title">Ishsirjan Kaur Chandok</h1>
            <p id="subtitle">Anchoring Head</p>
          </div>
          <div id="ind">
            <img
              src={gt}
              alt="iithlogo"
              className="w-40 bg-cover rounded-full mx-auto h-40"
            />
            <h1 className="title">Gayatri Aluwala</h1>
            <p id="subtitle">Photography & Content Curation</p>
          </div>

          <div id="ind">
            <img
              src={rs}
              alt="iithlogo"
              className="w-40 bg-cover rounded-full mx-auto h-40"
            />
            <h1 className="title">Rohan Seth</h1>
            <p id="subtitle">Photography & Content Curation</p>
          </div>

          <div id="ind">
            <img
              src={p}
              alt="iithlogo"
              className="w-40 bg-cover rounded-full mx-auto h-40"
            />
            <h1 className="title">Ketan Warghat</h1>
            <p id="subtitle">Publicity & Promotion</p>
          </div>

          <div id="ind">
            <img
              src={jv}
              alt="iithlogo"
              className="w-40 bg-cover rounded-full mx-auto h-40"
            />
            <h1 className="title">Dr.Jyothir Vishnu Bharadwaja Perugu</h1>
            <p id="subtitle">Design & Event</p>
          </div>

          {/* <div id="ind">
            <img src={p} alt="iithlogo" className="w-40 bg-cover rounded-full mx-auto h-40" />
            <h1 className="title">Anvesh Sangadi</h1>
            <p id="subtitle">Anchor & Moderator for Panel discussion</p>
          </div> */}
        </div>
      </div>

      <div className="jojo">
        <h1 className="kkkk">Website Developers</h1>

        <div className="lambda">
          <a href="https://www.linkedin.com/in/jash-jhatakia-04897b226/">
            <div>
              <img src={jj} alt="iithlogo" className="img2" />
              <h1 className="title">Jash Jhatakia</h1>
            </div>
          </a>

          <div>
            <img src={ak} alt="iithlogo" className="img2" />
            <h1 className="title">Arin Kulkarni</h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Team;
