import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>Research Scholar's Day</h3>
        <p>
          Made with <span class="heart">&#10084;</span> by Lambda
        </p>
        <ul className="socials">
          <li>
            <a href="#">
              <FaGoogle size={30} color="#4285F4" />
            </a>
          </li>
          {/* <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li> */}
          <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin size={30} color="#0077B5" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="footer-contr">
          <p>
            Copyright &copy; <a href="https://iith.dev">Lambda</a>{" "}
          </p>
          <p>Contributors Jash Jhatakia and Arin Kulkarni</p>
        </div>
        <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;