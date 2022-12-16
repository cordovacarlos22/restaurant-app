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
          
        <div className="menu-container" >
          <Menu/>
        </div>

        <section className="chef-container">
          <Chef />
        </section>

        <div className="video-container">
          <Video/>
        </div>

        <div className="container-lauerels">
          <Laurels/>
        </div>
        <figure className="gallery-container">
          <Gallery />
        </figure>

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