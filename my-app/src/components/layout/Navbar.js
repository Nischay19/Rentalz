import React from 'react';
import './Navbar.css'
import { FaOpencart } from 'react-icons/fa';
import { Button } from 'reactstrap';


import {Link} from 'react-router-dom';


 const Navbar = ({title}) => {
  return (

      <nav className="navbar bg">
        <Link to='/'>
        <h2><ion-icon name="cart-outline"></ion-icon> <FaOpencart/> {title}</h2>
        </Link>

        <Button outline color="primary" className="button">
          <p className='login-link'>
            <Link to='/login'>Login</Link>   
          </p>
          </Button>{' '}

        
      </nav>
      

  )
}

export default Navbar;