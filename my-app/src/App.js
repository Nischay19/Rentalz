import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react'

import {BrowserRouter as Router, Switch, Route ,Link} from 'react-router-dom';


import Product from './components/layout/product/Product';
import  Navbar  from './components/layout/Navbar';
import Login from './components/pages/Login';


import { Breadcrumb, BreadcrumbItem } from 'reactstrap';



const App= () => {
  return (
    <Router>
      <div className="AppMain">
        <div>
          <Navbar title='Rentalz' />
        <Breadcrumb>
        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>

      <Switch>
        
        <Route exact path='/' component={Product}/>

        <Route exact path='/login' component={Login}/>  
      </Switch>
      </div>
      </div>
    </Router>
  );
}












export default App;