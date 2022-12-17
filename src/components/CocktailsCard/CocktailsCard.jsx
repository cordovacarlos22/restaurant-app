import React from "react";
import './CocktailCard.css'

const CocktailsCard = (props) => {
  return (
    <div className="Product-Card-container">
      <p className="card-title">{props.title}</p>
      <p>{props.price}</p>
      <p>{props.tags}</p>
    </div>
  );
};

export default CocktailsCard;
