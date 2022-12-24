import React from "react";
import "/Users/carloscordova/Desktop/restaurant-app/src/components/Gallery/Gallery.css";
import GalleryCard from "/Users/carloscordova/Desktop/restaurant-app/src/components/Gallery/GalleryCard/GalleryCard.jsx";
import spoon from "/Users/carloscordova/Desktop/restaurant-app/src/assets/spoon.svg";
import { useState } from "react";
import gallery01 from "/Users/carloscordova/Desktop/restaurant-app/src/assets/gallery01.png";
import gallery02 from "/Users/carloscordova/Desktop/restaurant-app/src/assets/gallery02.png";
import gallery03 from "/Users/carloscordova/Desktop/restaurant-app/src/assets/gallery03.png";
import gallery04 from "/Users/carloscordova/Desktop/restaurant-app/src/assets/gallery04.png";
 const Gallery = () =>{

   const [gallerys, setGallerys] = useState([
     {
       
       img: gallery01,
       key: 1,
     },
     {
      
       img: gallery03,
       key: 2,
     },
     {
       
       img: gallery02,
       key: 3,
     },
     {
       
       img: gallery04,
       key: 4,
     },
   ]);

  return (
    <div className="d-flex bg-black justify-contect-spaceevenly  align-items-center m-20px p-20px">
      <div className="gallery-title-container ">
        <span className="gallery-title-span">Instagram</span>
        <h1 className="gallery-title">Photo Gallery</h1>
        <img className="gallery-title-img" src={spoon} alt="spoon"></img>
        <p className="galley-title-paragrpah">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non
          fugiat, voluptate perspiciatis quisquam amet et quas recusandae
          numquam hic animi suscipit fugit explicabo. Aut neque maxime itaque
          officia doloribus!
        </p>
      </div>
      <div className="gallery-main-container">
        {gallerys &&
          gallerys.map((el) => {
            return <GalleryCard gallery={el.img} key={el.key} />;
          })}
      </div>
    </div>
  );
}

export default Gallery;