import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import gericht from "/Users/carloscordova/Desktop/restaurant-app/src/assets/gericht.png";

const Navbar = () => (
<div className="nav-main-container">
    <div className="navbar-container">
      <img className="navlogo" src={gericht} alt="logo"></img>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/booktable">Book Table</Link>
      </div>
      
      
    </div>
  </div>
);

export default Navbar;
