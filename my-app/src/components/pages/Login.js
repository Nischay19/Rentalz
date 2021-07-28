import React ,{useState} from 'react';
import {Link} from 'react-router-dom';

import { Button } from 'reactstrap';

import './Login.css';




 const Login = () => {

  const [mail, setMail] = useState('');


  const onChange =(e) =>{
    setMail(e.target.value);
  }

  const onSubmit =(e) => {
    e.preventDefault();
    console.log(mail);

  }

// {  document.getElementsByClassName('number-input').addEventListener('click' , setNumber(''))
// }

  return (



    <div className="login-component">
      <div className="box">


      <div className='login-image'>Login Image</div>
      <div className='login-pane'>
        <div className='login-para'>Enter your Mail<br/>to Signup or Login</div>

        <form  onSubmit={onSubmit} className='login-form'>
        <input type="email" 
                 className="number-input"
                 name="mail"
                 placeholder="Enter Your Mail*" 
                 value={mail} 
                 onChange={onChange}
                 /><br/><br/>
        
          <Button  color="primary" size="lg" block className="submit-button">Continue</Button>
          </form>
          <div style={{textAlign:'center',width:'17.5rem'}}><Button color="danger" className="google-button" style={{width:'10rem'}}> <ion-icon name="logo-google"></ion-icon> Google</Button></div>

      </div>

      </div>
    </div>
  )
}


export default Login;