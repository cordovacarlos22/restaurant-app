import React from 'react';
import Chefs from "/Users/carloscordova/Desktop/restaurant-app/src/assets/chef.png";
import Spoon from '/Users/carloscordova/Desktop/restaurant-app/src/assets/spoon.png'
import Quote from "/Users/carloscordova/Desktop/restaurant-app/src/assets/quote.png";
import Sign from "/Users/carloscordova/Desktop/restaurant-app/src/assets/sign.png";
import './Chef.css';


const Chef = () => (
  <div className='chef-main-container'>
    <div className='chef-img'>
      <img className='chef-img' src={Chefs} alt='chef'></img>
    </div>
    <div className='about-chef'>
      <h4>Chef's World</h4>
      <img className='chef-spoon' src={Spoon} alt='spoon'></img>
      <h1 className='chef-title'>What We Belive In</h1>
      <p className='chef-paragraph'><img src={Quote} alt='quote'></img>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet excepturi aliquam voluptatibus, inventore cumque repudiandae veritatis, omnis suscipit maiores molestias expedita alias consectetur ipsam libero voluptate nobis sint nihil error!</p> <br/>
      <h5 className='chef-name'>Kevin Lou</h5>
      <span className='chef-span'>Chef and Cofounder</span> <br/>
      <img className='sign-img' src={Sign} alt='chef-signature'></img>
      
    </div>
  </div>
);

export default Chef;
