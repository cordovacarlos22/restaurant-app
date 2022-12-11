import React from 'react';
import './Navbar.css';
import {Link,Routes,Route} from 'react-router-dom'
import Home  from "../Home/Home";
import Menuitem from '../Menuitem/MenuItem'
import BookTable from '../Booking/BookTable'
import ContactUs from '../ContactUs/ContactUs';

const Navbar = () => (
  <div className='navbar-container'>
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/booktable">Book Table</Link>
      </div>
      <div className="Body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menuitem />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/booktable" element={<BookTable />} />
        </Routes>
      </div>
  </div>
);

export default Navbar;
