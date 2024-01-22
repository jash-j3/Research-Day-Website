import React from "react";
import "./About.css";
const logo = require("../src/assets/logoiith.png");
// const bg = require("../src/assets/bg-iith.png");
function About() {
  return (
    <div className="about-container">
      <div className="black-bg">
        <div className="message">
          <img className="profile-img" src={logo} alt="Director" />
          <div className="text-content">
            <h2>Message from Director</h2>
            <p>
              {" "}
              Welcome to our organization! Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque non elit auctor, faucibus mauris id,
              bibendum lectus. Integer quis metus a quam varius fermentum. Sed
              aliquet ipsum ut quam vestibulum, at vulputate nulla dapibus.
              Curabitur vel nunc vel justo viverra laoreet ut vel ipsum. Nullam
              vel mi et urna tincidunt rhoncus. Integer non dolor nec tellus
              accumsan feugiat. Aenean eu velit euismod, lacinia sem ut,
              scelerisque quam. Suspendisse potenti. Duis bibendum fringilla
              ligula, sit amet dapibus libero tincidunt sit amet. Nulla facilisi.
              Ut aliquam tortor ut tortor tincidunt, in laoreet justo scelerisque.
              Nulla facilisi. Suspendisse potenti. Sed nec quam ac metus lacinia
              dictum. Duis ac augue id ligula auctor tincidunt non et ex. Sed in
              ultrices risus, a auctor enim. Sed malesuada, ipsum vitae varius
              rhoncus, ex augue sollicitudin sapien, nec hendrerit sem velit eu
              purus.
            </p>
          </div>
        </div>
        <div className="message">
          <img className="profile-img" src={logo} alt="Dean" />
          <div className="text-content">
            <h2>Message from Dean</h2>
            <p>
              {" "}
              Welcome to our organization! Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque non elit auctor, faucibus mauris id,
              bibendum lectus. Integer quis metus a quam varius fermentum. Sed
              aliquet ipsum ut quam vestibulum, at vulputate nulla dapibus.
              Curabitur vel nunc vel justo viverra laoreet ut vel ipsum. Nullam
              vel mi et urna tincidunt rhoncus. Integer non dolor nec tellus
              accumsan feugiat. Aenean eu velit euismod, lacinia sem ut,
              scelerisque quam. Suspendisse potenti. Duis bibendum fringilla
              ligula, sit amet dapibus libero tincidunt sit amet. Nulla facilisi.
              Ut aliquam tortor ut tortor tincidunt, in laoreet justo scelerisque.
              Nulla facilisi. Suspendisse potenti. Sed nec quam ac metus lacinia
              dictum. Duis ac augue id ligula auctor tincidunt non et ex. Sed in
              ultrices risus, a auctor enim. Sed malesuada, ipsum vitae varius
              rhoncus, ex augue sollicitudin sapien, nec hendrerit sem velit eu
              purus.
            </p>
          </div>
        </div>
        <div className="message">
          <img className="profile-img" src={logo} alt="OC" />
          <div className="text-content">
            <h2>Message from OC</h2>
            <p>
              {" "}
              Welcome to our organization! Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque non elit auctor, faucibus mauris id,
              bibendum lectus. Integer quis metus a quam varius fermentum. Sed
              aliquet ipsum ut quam vestibulum, at vulputate nulla dapibus.
              Curabitur vel nunc vel justo viverra laoreet ut vel ipsum. Nullam
              vel mi et urna tincidunt rhoncus. Integer non dolor nec tellus
              accumsan feugiat. Aenean eu velit euismod, lacinia sem ut,
              scelerisque quam. Suspendisse potenti. Duis bibendum fringilla
              ligula, sit amet dapibus libero tincidunt sit amet. Nulla facilisi.
              Ut aliquam tortor ut tortor tincidunt, in laoreet justo scelerisque.
              Nulla facilisi. Suspendisse potenti. Sed nec quam ac metus lacinia
              dictum. Duis ac augue id ligula auctor tincidunt non et ex. Sed in
              ultrices risus, a auctor enim. Sed malesuada, ipsum vitae varius
              rhoncus, ex augue sollicitudin sapien, nec hendrerit sem velit eu
              purus..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
