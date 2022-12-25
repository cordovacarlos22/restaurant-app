import React from 'react';
import spoon from "/Users/carloscordova/Desktop/restaurant-app/src/assets/spoon.svg";
import './ContacUs.css'
const ContactUs = () => (
  <div>
    <div className="footer-subscribe-letter-container">
      <span>Newsletter</span>
      <img className="subscribe-letter-spoon" src={spoon} alt="spoon"></img>
      <h1 className="subscribe-letter-title">Subscribe to Our Newsletter</h1>
      <span className="subscribe-letter-span-never-miss-lastest">
        And never miss latest Updates!
      </span>
      <form>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="subscribe-letter-InputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email Address"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <button type="submit" class="btnd  btn-susbcribe">
          Susbcribe
        </button>
      </form>
    </div>
  </div>
);

export default ContactUs;
