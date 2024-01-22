import React from "react";
import "./Footer.css";
const h = require("../src/assets/heart.png");

function Footer(){
  return (
    <footer className="footer">
      <p>Made with</p>
      <img src={h} alt="heart" className="heart" />
      <p> by Lambda</p>
    </footer>
  );
}

export default Footer;
