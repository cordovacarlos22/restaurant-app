import React from 'react';
import { useState,useEffect} from "react";
import {collection, getDocs } from "firebase/firestore/lite";
import Spoon from "/Users/carloscordova/Desktop/restaurant-app/src/assets/spoon.svg";
import './SpecialMenu.css';
import Menuimg from "/Users/carloscordova/Desktop/restaurant-app/src/assets/menu.png";
import Card from "/Users/carloscordova/Desktop/restaurant-app/src/components/WineCard/WineCard.jsx";
import db from "/Users/carloscordova/Desktop/restaurant-app/src/assets/Firebase.js";
const  SpecialMenu = () => {
  // const [Wine, setWine] = useState([

  //   {
  //     title: "Chapel Hill Shiraz",
  //     price: "$56",
  //     tags: "AU | Bottle",
  //   },
  //   {
  //     title: "Catena Malbee",
  //     price: "$59",
  //     tags: "AU | Bottle",
  //   },
  //   {
  //     title: "La Vieillw Rose",
  //     price: "$44",
  //     tags: "FR | 750 ml",
  //   },
  //   {
  //     title: "Rhino Pale Ale",
  //     price: "$31",
  //     tags: "CA | 750 ml",
  //   },
  //   {
  //     title: "Irish Guinness",
  //     price: "$26",
  //     tags: "IE | 750 ml",
  //   },

  // ]);

  // const [Cocktail, setCoktail] = useState([
  //   {
  //     title: "Aperol Sprtiz",
  //     price: "$20",
  //     tags: "Aperol | soda | 30 ml",
  //   },
  //   {
  //     title: "Dark 'N' Stormy",
  //     price: "$16",
  //     tags: "Dark rum |Ginger beer",
  //   },
  //   {
  //     title: "Daiquiri",
  //     price: "$10",
  //     tags: "Rum | Citrus juice ",
  //   },
  //   {
  //     title: "Old Fashioned",
  //     price: "$31",
  //     tags: "Bourbon | Brown sugar ",
  //   },
  //   {
  //     title: "Negroni",
  //     price: "$26",
  //     tags: "Gin|Sweet Vermouth ",
  //   },
  // ]);

  

   const [wines, setWines] = useState("");

   //! Get a list of wines from your database
   async function getWines() {
     const winesCol = collection(db, "wines");
     const winesSnapshot = await getDocs(winesCol);
     const winesList = winesSnapshot.docs.map((doc) => doc.data());
     // console.log(winesList)
     setWines(winesList);
   }

  

    const [cocktails, setCoktail] = useState("");

    // Get a list of cocktails from your database
    async function getCocktails() {
      const cocktailsCol = collection(db, "cocktail");
      const cocktailsSnapshot = await getDocs(cocktailsCol);
      const cocktailsList = cocktailsSnapshot.docs.map((doc) => doc.data());
      
      setCoktail(cocktailsList);
    }

     useEffect(() => {
       getWines();
       getCocktails();
     }, []);

   



  return (
    <div className="special-menu-main-container">
      <div className="gap"></div>
      <div></div> <br></br>
      <br></br>
      <br></br>
      <div className="specia-menu-title-container">
        <span className="special-menu-span">Menu That Fist Your Palette</span>
        <img className="special-menu-spoon" src={Spoon} alt="spoon"></img>
        <h1 className="specia-menu-title">Today's Special</h1>

        <div className="menu-container">
          <div className="beer-wine-container">
            <h4>Beer & Wine</h4>
            <div>
              {wines &&
                wines.map((el) => {
                  return (
                    <Card
                      key={el.key}
                      title={el.title}
                      price={el.price}
                      tags={el.tags}
                    />
                  );
                })}
            </div>
          </div>
          <div className="menu-img-container">
            <img className="menu-img" src={Menuimg} alt="drink"></img>
          </div>
          <div className="cocktails-container">
            <h4>Cocktails</h4>
            <div>
              {cocktails &&
                cocktails.map((el) => {
                  return (
                    <Card
                      key={el.key}
                      title={el.title}
                      price={el.price}
                      tags={el.tags}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
export default SpecialMenu;
