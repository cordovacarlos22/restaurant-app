import React from 'react';
import './Header.css';
import Welcome from "/Users/carloscordova/Desktop/restaurant-app/src/assets/welcome.png";
import Spoon from "/Users/carloscordova/Desktop/restaurant-app/src/assets/spoon.svg";
import { Link } from 'react-router-dom';

const Header = (props) => (
  <div className="header-main-container">
    <div className="header-container">
      <span>Chase The New Flavour</span>
      <img className="header-span-img" src={Spoon} alt="spoon"></img>
      <h1 className="header-title">The key to Fine Dining</h1>
      <span className="header-paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, magnam
        est. Magni labore odio deserunt suscipit, recusandae quo quos quas et
        sapiente rerum iure impedit ab id minus pariatur tenetur?
      </span>

      <Link id="button-link" as={Link} to="/menu">
        
        <button id='header-button' type="button" class="btn btn-light">
          Explore Menu
        </button>
      </Link>
    </div>
    <div className="header-img-container">
      <img className="header-img" src={Welcome} alt="chicken plate"></img>
    </div>
  </div>
);

export default Header;
