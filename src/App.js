import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Slider from './components/Slider'; Este componente no creo que lo utilicemos

import Router from './Router';


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
      
      <body className="App-body">
          <div className="pru_body">        
            <Router/>
          </div>
      </body>
    
    </div>
    </div>
  );
}

export default App;
