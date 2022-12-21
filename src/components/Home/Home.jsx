import React from "react";
import './Home.css';
import Header from '../Header/Header';
import Chef from '../Chef/Chef';
import Gallery from '../Gallery/Gallery';
import ContactUs from "../ContactUs/ContactUs";
import Aboutus from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Menu from '/Users/carloscordova/Desktop/restaurant-app/src/components/Menu/SpecialMenu.jsx'
import Video from "../video/Video";
import Laurels from "../Laurels/Laurels";
import FindUs from "../Findus/FindUs";

 const Home = () =>{
  return (
    <div className="body">
      <main>
        <header className="header-container">
          <Header />
        </header>

        <aside className="aboutus-container">
          <Aboutus />
        </aside>

        <div className="menu-container">
          <Menu />
        </div>

        <div className="chef-container">
          <Chef />
        </div>

        <div className="video-container">
          <Video></Video>
        </div>

        <div className="container-lauerels">
          <Laurels />
        </div>

        <div className="gallery-container">
          <Gallery />
        </div>

        <div>
          <FindUs />
        </div>

        <aside className="constacus-container">
          <ContactUs />
        </aside>

        <footer className="footer">
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default Home;