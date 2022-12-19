import React from 'react';
import meal from "/Users/carloscordova/Desktop/restaurant-app/src/assets/meal.mp4";
import './Laurels.css';

const Laurels = () => (
  <div className="video-container">
    <video  controls autoPlay loop muted>
      <source src={meal} type="video/mp4" />
    </video>
  </div>
);

export default Laurels;
