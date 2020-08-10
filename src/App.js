import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider';
import MenuAppBar from './components/MenuAppBar';
//import CenteredGrid from './components/CenteredGrid';
import Router from './Router';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <img src="https://www.brandbucket.com/sites/default/files/logo_uploads/259178/large_medictap.png"/>
        </div>
        <MenuAppBar/>
        <Slider/>
        {/*<h1>hola mundo</h1>*/}
        
      </header>
      
      <body className="App-body">
          <div className="pru_body">
            <h1>Hola Mary</h1>
            
            <Router/>
            {/*
              <CenteredGrid/>
            */}  
            
          
          
          
          </div>
      </body>
      
      <footer className='App-footer'>
        <p>
          Footer de prueba
        </p>
      </footer> 

    
    </div>
  );
}

export default App;
