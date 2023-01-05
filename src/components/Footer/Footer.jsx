import React, { useState } from "react";
import spoon from "/Users/carloscordova/Desktop/restaurant-app/src/assets/spoon.svg";
import "./Footer.css";
import facebook from "/Users/carloscordova/Desktop/restaurant-app/src/assets/u_facebook-f.svg";
import intagram from "/Users/carloscordova/Desktop/restaurant-app/src/assets/u_instagram.svg";
import twitter from "/Users/carloscordova/Desktop/restaurant-app/src/assets/u_twitter-alt.svg";
import db from "/Users/carloscordova/Desktop/restaurant-app/src/assets/Firebase.js";
import { collection, addDoc } from "firebase/firestore/lite";
import { Link } from "react-router-dom";
function Footer() {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input) {
      console.log(input);
      //!add to fire base
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "subscribeletter"), {
        email: input,
      });
      console.log("Document written with ID: ", docRef.id);
      setInput("");
      alert("susbcription sucessfull");
    }
  };

  return (
    <div className="footer-main-container">
      <div className="footer-subscribe-letter-container">
        <span>Newsletter</span>
        <img className="subscribe-letter-spoon" src={spoon} alt="spoon"></img>
        <h1 className="subscribe-letter-title">Subscribe to Our Newsletter</h1>
        <span className="subscribe-letter-span-never-miss-lastest">
          And never miss latest Updates!
        </span>
        <form onSubmit={handleSubmit} id="subscribe-letter-form">
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email-input"
              aria-describedby="emailHelp"
              placeholder="Email Address"
              onChange={handleInput}
              value={input}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <button type="submit" className="btnd  btn-susbcribe">
            Susbcribe
          </button>
        </form>
      </div>
      <div className="footer-container">
        <div className="footer-card-1">
          <h4 className="footer-card-1-contact-us">Contact Us</h4>
          <p className="footer-card1-paragraph">
            Lane Ends Bungalow Hail Los Angeles CA 00000 USA
          </p>
          <aside>Cell Phone : +1 323 0001 0002</aside>
        </div>
        <div className="footer-card-2">
          <h2 className="footer-card-2-title ">Gerícht</h2>
          <p className="footer-card2-paragraph">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img className="footer-card2-spoon" src={spoon} alt="spoon"></img>
          <div className="footer-card2-social-media">
            <img
              className="footer-facebook"
              src={facebook}
              alt="facebook"
            ></img>
            <img
              className="footer-instagram"
              src={intagram}
              alt="instagram"
            ></img>
            <img className="footer-twitter" src={twitter} alt="twitter"></img>
            <Link className=" btn btn-secondary" as={Link} to="/dbadmin" >Admin Screen </Link>
          </div>
          
            
         
        </div>
        <div className="footer-card-3">
          <h3 className="footer-work-hours">Working Hours</h3>
          <span className="footer-week-schedule">
            Mon-Fri : 10:00 am - 10:00 pm
          </span>{" "}
          <br></br>
          <span className="footer-weekend-schedule">
            Sat-Sun : 10:00 am - 10:00 pm
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
