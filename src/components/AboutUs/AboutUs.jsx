import React from 'react';
import './AboutUs.css';
import Knife from '/Users/carloscordova/Desktop/restaurant-app/src/assets/knife.png';
import Spoon from "/Users/carloscordova/Desktop/restaurant-app/src/assets/spoon.svg";
const AboutUs = () => (
  <div className="aboutusmain-container">
    <div className="about-us-container">
      <h1 className="about-us-title">About us </h1>
      <img className="about-us-spoon" src={Spoon} alt="spoon"></img> <br></br>
      <p className="about-us-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quas
        incidunt quasi doloremque sapiente voluptatibus, id excepturi itaque
        modi quod. Eius dolore voluptatem ullam voluptas delectus assumenda
        repudiandae nobis culpa!
      </p>
    </div>
    <div className="knife-main-container">
      <img className="about-us-knife" src={Knife} alt="knife"></img>
    </div>
    <div className="our-history-container">
      <h1 className="our-history-title">Our History</h1>
      <img className="our-history-spoon" src={Spoon} alt="spoon"></img>{" "}
      <br></br>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quas
        incidunt quasi doloremque sapiente voluptatibus, id excepturi itaque
        modi quod. Eius dolore voluptatem ullam voluptas delectus assumenda
        repudiandae nobis culpa!
      </p>
    </div>
  </div>
);

export default AboutUs;
