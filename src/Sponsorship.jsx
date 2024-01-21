import React from "react";
import { useEffect } from "react";
import "./Sponsorship.css";
import Footer from './Footer';
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
    { type: "diamond", title: "Diamond Sponsor", description: "Diamond sponsors " },
    { type: "platinum", title: "Platinum Sponsor", description: "Platinum sponsors receive exclusive perks..." },
    { type: "gold", title: "Gold Sponsor", description: "Gold sponsors get valuable exposure..." },
    { type: "silver", title: "Silver Sponsor", description: "Silver sponsors receive exclusive perks..." },
    { type: "bronze", title: "Bronze Sponsor", description: "Bronze sponsors get valuable exposure..." },
  ];


  return (
    <div className="sponsorship-container">
      <h2>Sponsorship Details</h2>

      {sponsorshipSlabs.map((slab) => (
        <div key={slab.type} className={`sponsorship-slab ${slab.type}`}>
          <h3>{slab.title}</h3>
          <p>{slab.description}</p>
        </div>
      ))}

      <div>
        <p>For more info, refer:
          
        </p>
      </div>

      <div className="logos">
        <h1>Previous Sponsors</h1>
        <div className="slide">
          <img src={l1} alt="a" />
          <img src={l2} alt="b" />
          <img src={l3} alt="c" />
          <img src={l4} alt="d" />
          <img src={l5} alt="e" />
          <img src={l6} alt="f" />
          <img src={l7} alt="g" />
          <img src={l8} alt="h" />
          <img src={l9} alt="i" />
          <img src={l0} alt="j" />
          <img src={l11} alt="k" />
          <img src={l12} alt="l" />
        </div>

      
      </div>
    {/*}  <Footer/> */}
    
    {/*    let copy_logo = document.querySelector(".slide").cloneNode(true);
        document.querySelector(".logo").appendChild(copy_logo); */}
      
    </div>
    

  );
}

export default Sponsorship;
