import React from 'react'
import { BiRupee } from 'react-icons/bi';




const Content=({icon})=> {
  return (
    <div > 
    <div className="Description">
      <div className="pricetag"><span className="rent">Rent</span><span className="price">200<BiRupee className="rupee_icon"/>/mo</span></div>
      <p className="Title">
        Rowling Bookshelf (S)
      </p>
    </div>
    {/* <div className="small_description"><p>Lorem ipsum</p></div> */}
    <div className="details_btn"><span className="btn_text">See more</span></div>
    </div>
    
  )
}

export default Content
