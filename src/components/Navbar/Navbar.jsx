import React from "react";
import "./Navbar.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Menuitem from "../Menuitem/MenuItem";
import BookTable from "../Booking/BookTable";
import Aboutus from "../AboutUs/AboutUs";
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
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <div className="links-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menuitem />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/booktable" element={<BookTable />} />
            </Routes>
          </div>
        </div>
      </nav>
    </div>
  </div>
);

export default Navbar;
