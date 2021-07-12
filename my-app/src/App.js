import './App.css';
import React, { Component } from 'react'

import Image from './components/layout/Image'

import Title from './components/layout/Title';


class App extends Component {
  
  render(){
    return (
      <div className="App">
        <div className="Product">
          <Image />
        </div>
        <Title />
      </div>
    );
  }
}

export default App;


