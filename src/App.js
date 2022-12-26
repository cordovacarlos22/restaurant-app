import React  from 'react';
import './App.css';
import Home from './components/Home/Home';
import {Route,Routes,BrowserRouter} from "react-router-dom";
import Menuitem from "./components/Menuitem/MenuItem";
import BookTable from "./components/Booking/BookTable";
import Aboutus from "./components/AboutUs/AboutUs";
import ContactUs from "/Users/carloscordova/Desktop/restaurant-app/src/components/ContactUs/ContactUs.jsx";
import Navbars from "/Users/carloscordova/Desktop/restaurant-app/src/components/Navbar/Navbar.jsx";
// import FindUs from './components/Findus/FindUs';
function App() {

  return (
    <div className="App">
      <div className="links-container">
        <BrowserRouter>
          <Navbars></Navbars>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menuitem />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/booktable" element={<BookTable />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App







