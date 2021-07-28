import React from 'react'
import img from '../image.png';                      //importing the img as 'image'



function Image() {
  return (
    
    <div className="image_div">
      <img src={img} alt="img" className="product_image"/>
      <a href="." className="likebtn"><ion-icon name="heart-outline" className="like"></ion-icon></a>
      
      
      {/* {document.getElementsByClassName('like').addEventListener('click', function(){
        console.log(123);
      });
        } */}

    </div>
  );
};


export default Image