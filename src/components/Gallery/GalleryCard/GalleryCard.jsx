import React from 'react';

import './Gallery.css';

const GalleryCard = (props) => (
  <div className='gallery-main-container'>
    <img src={props.gallery} alt='gallery'></img>
  </div>
);

export default GalleryCard;
