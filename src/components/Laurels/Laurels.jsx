import React from "react";
import "./Laurels.css";
import { useState } from "react";
import laurels from "/Users/carloscordova/Desktop/restaurant-app/src/assets/laurels.png";
import LaurelsCard from "./LaurelsCards/LaurelsCards";
import award01 from "/Users/carloscordova/Desktop/restaurant-app/src/assets/award01.png";
import award02 from "/Users/carloscordova/Desktop/restaurant-app/src/assets/award02.png";
import award03 from "/Users/carloscordova/Desktop/restaurant-app/src/assets/award03.png";
import award05 from "/Users/carloscordova/Desktop/restaurant-app/src/assets/award05.png";
import spoon from "/Users/carloscordova/Desktop/restaurant-app/src/assets/spoon.svg";
const Laurels = () => {
  const [awards, setawards] = useState([
    {
      title: "Bib Gourmond",
      img: award02,
      paragraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus sed expedita temporibus rem, obcaecati pariatur veritatis nihil dolorem autem, minima qui facere ipsa atque accusamus nulla dolore dicta. Ab, culpa?",
    },
    {
      title: "Rising Start",
      img: award01,
      paragraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus sed expedita temporibus rem, obcaecati pariatur veritatis nihil dolorem autem, minima qui facere ipsa atque accusamus nulla dolore dicta. Ab, culpa?",
    },
    {
      title: "AA Hospitality",
      img: award05,
      paragraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus sed expedita temporibus rem, obcaecati pariatur veritatis nihil dolorem autem, minima qui facere ipsa atque accusamus nulla dolore dicta. Ab, culpa?",
    },
    {
      title: "Outstanding Chef",
      img: award03,
      paragraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus sed expedita temporibus rem, obcaecati pariatur veritatis nihil dolorem autem, minima qui facere ipsa atque accusamus nulla dolore dicta. Ab, culpa?",
    },
  ]);

  return (
    <div className="laurel-main-container">
      <div className="laurels-title-container">
        <span className="laurels-span">Awards & recognition</span>
        <img className="laurels-spoon" src={spoon} alt="spoon"></img>
        <h1 className="laurels-title">Our Laurels</h1>
      </div>
      
        <div className="awards-container">
          {awards.map((el) => {
            return (
              <LaurelsCard
                img={el.img}
                title={el.title}
                paragraph={el.paragraph}
              />
            );
          })}
        </div>
        <div className="awards-container-img">
          <img className="awards-img" src={laurels} alt="food-dish"></img>
        </div>
      </div>
    
  );
};

export default Laurels;
