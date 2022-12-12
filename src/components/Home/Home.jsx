import React from "react";
import './Home.css';

import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Chef from '../Chef/Chef';
import Gallery from '../Gallery/Gallery';
import ContactUs from "../ContactUs/ContactUs";
import Aboutus from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Navbars from "../Navbar/Navbar";

 const Home = () =>{
  return(
    <div className="body">
      <Navbars/>
      
      <main>
      
        <header className="header-container">

          <Header/>
      </header>
      <article className="intro">
          <Intro />
       </article>
      <section>
        <Chef />
      </section>
      <figure className="gallery-container">
         <Gallery />
      </figure>
      <aside className="constacus-container">
        <ContactUs />
      </aside>
      <aside className="aboutus-container">
        <Aboutus />
      </aside>
      <footer className="footer">
        <Footer />
      </footer>  
      </main>         
    </div>
  );
}

export default Home;