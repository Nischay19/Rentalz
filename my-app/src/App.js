import './App.css';
import React, { Component } from 'react'

import Image from './components/layout/Image'

import Content from './components/layout/Content';







class App extends Component {
  
  render(){
    return (
      <div className="App">
        
        <Image />
        
        <Content />
      </div>
    );
  }
}











export default App;