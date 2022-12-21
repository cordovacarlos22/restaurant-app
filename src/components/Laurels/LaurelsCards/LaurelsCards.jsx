import React from "react";
import './LaurelsCard.css'


const LaurelsCard = (props) => {

  return (
    <div className="laurels-card">
      <img className="laurel-img" src={props.img} alt="award logo"></img>
        <h1 className="laurel-title">{props.title}</h1>
        <p className="laurel-paragraph">{props.paragraph}</p>
      </div>
  );
}


export default LaurelsCard;
