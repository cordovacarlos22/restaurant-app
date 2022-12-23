import React from "react";
import './WineCard.css'

const Card = (props) => {
  return (
    <div className="Product-Card-container" key={props.keys}>
      <p className="wine-menu-title">
        {props.title} <span className="wine-menu-span">  {props.price}</span>
      </p>
      <p className="wine-menu-tags">{props.tags}</p>
      <hr></hr>
    </div>
  );
};

export default Card;
