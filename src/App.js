import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuAppBar from './components/MenuAppBar';
import CenteredGrid from './components/CenteredGrid';
import { Container } from '@material-ui/core';
import FullWidthTabs from './components/TabPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <img src="https://www.brandbucket.com/sites/default/files/logo_uploads/259178/large_medictap.png"/>
        </div>
        <MenuAppBar/>
        
        {/*<h1>hola mundo</h1>*/}
        
      </header>
      
      <body className="App-body">
          <temporal>Hola Mary</temporal>  
          <div className="pru_body">
            <CenteredGrid/>
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
