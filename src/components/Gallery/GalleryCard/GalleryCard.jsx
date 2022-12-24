import React from 'react';

import './GalleryCard.css';

const GalleryCard = (props) => (
  <div className='gallery-card-main-container'>
    <img className='gallery-img' src={props.gallery} alt='gallery'></img>
  </div>
);

export default GalleryCard;
