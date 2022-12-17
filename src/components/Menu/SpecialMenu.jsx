import React from 'react';
import { useState } from "react";
import Spoon from "/Users/carloscordova/Desktop/restaurant-app/src/assets/spoon.svg";
import './SpecialMenu.css';
import Menuimg from "/Users/carloscordova/Desktop/restaurant-app/src/assets/menu.png";
import Card from "/Users/carloscordova/Desktop/restaurant-app/src/components/WineCard/WineCard.jsx";

const  SpecialMenu = () => {

  const [Wine, setWine] = useState([
    {
      title: "Chapel Hill Shiraz",
      price: "$56",
      tags: "AU | Bottle",
    },
    {
      title: "Catena Malbee",
      price: "$59",
      tags: "AU | Bottle",
    },
    {
      title: "La Vieillw Rose",
      price: "$44",
      tags: "FR | 750 ml",
    },
    {
      title: "Rhino Pale Ale",
      price: "$31",
      tags: "CA | 750 ml",
    },
    {
      title: "Irish Guinness",
      price: "$26",
      tags: "IE | 750 ml",
    },
    {
      title: "Flaming Dr.Pepper",
      price: "$30",
      tags: "CA | 750 ml",
    },
  ]);



  const [Cocktail, setCoktail] = useState([
    {
      title: "Aperol Sprtiz",
      price: "$20",
      tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
    },
    {
      title: "Dark 'N' Stormy",
      price: "$16",
      tags: "Dark rum | Ginger beer | Slice of lime",
    },
    {
      title: "Daiquiri",
      price: "$10",
      tags: "Rum | Citrus juice | Sugar",
    },
    {
      title: "Old Fashioned",
      price: "$31",
      tags: "Bourbon | Brown sugar | Angostura Bitters",
    },
    {
      title: "Negroni",
      price: "$26",
      tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
    },
  ]);



 return (
   <div className="special-menu-main-container">
     <div className="specia-menu-title-container">
       <span className="special-menu-span">Menu That Fist Your Palette</span>
       <img className="special-menu-spoon" src={Spoon} alt="spoon"></img>
       <h1 className="specia-menu-title">Today's Special</h1>

       <div className="menu-container">
         <div className="beer-wine-container">
           <h4>Beer & Wine</h4>
           <div>
             {Wine.map((el) => {
               return <Card title={el.title} price={el.price} tags={el.tags} />;
             })}
           </div>
         </div>
         <div className="menu-img-container">
           <img className="menu-img" src={Menuimg} alt="drink"></img>
         </div>
         <div className="cocktails-container">
           <h4>Cocktails</h4>
           <div>
             {Cocktail.map((el) => {
               return <Card title={el.title} price={el.price} tags={el.tags} />;
             })}
           </div>
         </div>
       </div>
     </div>
   </div>
 );
} 
export default SpecialMenu;
