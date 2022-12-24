import React from 'react';
import spoon from '/Users/carloscordova/Desktop/restaurant-app/src/assets/spoon.svg';
import findus from '/Users/carloscordova/Desktop/restaurant-app/src/assets/findus.png';
import './Findus.css'
const FindUs = () => (
  <div className="find-us-main-container">
    <div className="find-us-title-container">
      <span className="find-us-span">contact</span>
      <img className="find-us-spoon" src={spoon} alt="spoon"></img>
      <h1 className="find-us-title">Find Us</h1>
      <p className="find-us-address">
        Lane Ends Bungalow Hail Los Angeles CA 00000
      </p>
      <p className="find-us-open-hours">Opening Hours</p>
      <span className="find-us-week-schedule">Mon-Fri:10:00 am - 02:00 pm</span>
      <span className="find-us-weekend-schedule">
        Sat-Sun:10:00 am - 03:00 pm
      </span>
      <iframe
        title="find-us-map"
        className="find-us-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2740131323!2d-118.69191653326251!3d34.02016131547099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1671923436081!5m2!1sen!2sus"
        width="250"
        height="250"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className="find-us-img-container d-flex justify-content-center ">
      <img className="find-us-img" src={findus} alt="drink"></img>
    </div>
  </div>
);

export default FindUs;
