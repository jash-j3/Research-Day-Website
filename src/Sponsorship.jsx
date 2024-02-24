import React from "react";
import "./Sponsorship.css";
import Footer from "./Footer";
import Amrutha from "./assets/Amrutha Systems and Solutions Pvt Ltd.jpeg"
import Arctic from "./assets/Arctic Aircon Pvt Ltd Product list.jpeg"
import Bronkhorst from "./assets/Bronkhorst Instrumentation India Pvt Ltd.jpg"
import Dwarka from "./assets/Dwaraka Scientifics.jpg"
import WriteM from "./assets/WriteM.png"
import Boffin from "./assets/Boffin Butler Pvt Ltd.png"
const l1 = require("../src/assets/a.png");
const l2 = require("../src/assets/b.png");
const l3 = require("../src/assets/c.png");
const l4 = require("../src/assets/d.png");
const l5 = require("../src/assets/e.png");
const l6 = require("../src/assets/f.png");
const l7 = require("../src/assets/g.png");
const l8 = require("../src/assets/h.png");
const l9 = require("../src/assets/i.png");
const l0 = require("../src/assets/j.png");
const l11 = require("../src/assets/k.png");
const l12 = require("../src/assets/l.png");

function Sponsorship() {
  const sponsorshipSlabs = [
    {
      type: "diamond",
      title: "Diamond Sponsor",
      description: "Slab range : 3,00,000 INR +",
    },
    {
      type: "platinum",
      title: "Platinum Sponsor",
      description: "Slab range : 2,00,000 INR +",
    },
    {
      type: "gold",
      title: "Gold Sponsor",
      description: "Slab range : 1,00,000 INR +",
    },
    {
      type: "silver",
      title: "Silver Sponsor",
      description: "Slab range : 50,000 INR +",
    },
    {
      type: "bronze",
      title: "Bronze Sponsor",
      description: "Slab range : 25,000 INR +",
    },
  ];

  const details = [
    {
      type: "a",
      name: "Mahesh Ramesh Thombare",
      post: "Overall Coordinator, KHOJ 2024 & Doctoral Representative",
      email: "phd_rep@gymkhana.iith.ac.in",
    },

    {
      type: "b",
      name: "Dr. Pawan Kirar",
      post: "Finance Coordinator, KHOJ 2024",
      email: "ch18m20p000001@iith.ac.in",
    },

    {
      type: "c",
      name: "Sayani Barman",
      post: "Sponsorship Head, KHOJ 2024",
      email: "cy21resch11015@iith.ac.in",
    },
  ];

  return (
    <div className="maindiv">
      <div className="sponsorship-container">
      <div className="newsp">
        <h1>New Sponsors</h1>
        <div className="slide">
          <h1>GOLD Sponsorship</h1>
            <img src={Bronkhorst} alt="a" />
            <h1>GOLD Sponsorship</h1>
            <img src={Dwarka} alt="b" />
            <h1>Silver Sponsorship</h1>
            <img src={Arctic} alt="c" />
            <h1>Silver Sponsorship</h1>
            <img src={WriteM} alt="d" />
            <h1>Bronze Sponsorship</h1>
            <img src={Boffin} alt="e" />
            <h1>Bronze SPonsorship</h1>
            <img src={Amrutha} alt="f" />
          </div>
      </div>
        <div className="logos">
        </div>
        {/*}  <Footer/> */}

        {/*    let copy_logo = document.querySelector(".slide").cloneNode(true);
        document.querySelector(".logo").appendChild(copy_logo); */}
        <div id="arin">
          <h1 id="name">Contact Details</h1>
          {details.map((det) => (
            <div key={det.type} className={`details ${det.type}`}>
              <h3>{det.name}</h3>
              <h4>{det.post}</h4>
              <p>{det.email}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Sponsorship;
