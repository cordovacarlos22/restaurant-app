import React from 'react';
import './Navbar.css';
import {Link,Routes,Route} from 'react-router-dom'
import Home  from "../Home/Home";
import Menuitem from '../Menuitem/MenuItem'
import BookTable from '../Booking/BookTable'
import ContactUs from '../ContactUs/ContactUs';
import gericht from '/Users/carloscordova/Desktop/restaurant-app/src/assets/gericht.png'
const Navbar = () => (
  <div className='nav-main-container'>
    <div className='navbar-container'>
    <img 
    className='navlogo'
    src={gericht}  
    alt='logo'></img>
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/booktable">Book Table</Link>
      </div>
      <div className="links-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menuitem />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/booktable" element={<BookTable />} />
        </Routes>
      </div>
  </div>
  </div>
);

export default Navbar;
