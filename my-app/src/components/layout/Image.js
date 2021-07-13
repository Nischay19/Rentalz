import React from 'react'
import img from './image.png';                      //importing the img as 'image'

import { AiFillHeart } from 'react-icons/ai';


function Image() {
  return (
    
    <div className="image_div">
      <img src={img} alt="img" className="product_image"/>
      <a href="." className="likebtn"><AiFillHeart className="like" /></a>
      
      {/* {document.getElementsByClassName('like').addEventListener('click', function(){
        console.log(123);
      });
        } */}

    </div>
  );
};


export default Image