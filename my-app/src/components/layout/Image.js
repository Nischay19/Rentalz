import React from 'react'
import img from './image.png';                      //importing the img as 'image'


function Image() {
  return (
    <div>
      <img src={img} alt="img" className="product_image"/>
    </div>
  );
};


export default Image