import React from 'react';
import logo from './logo.svg';
import './Intra.css';
import MenuAppBar from './components/MenuAppBar';
import CenteredGrid from './components/CenteredGrid';

function Intra() {
  return (
    <div className="Intra">
      <header className="App-header">
       <MenuAppBar/>
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>hola mundo</h1>
        
      </header>
      
      <body className="Intra-body">
          <div className="pru_body">
            <h1>Hola Mary</h1>
            <CenteredGrid/>
          </div>

      </body>
      
      <footer className='Intra-footer'>
        <p>
          Footer de prueba
        </p>
      </footer> 

    
    </div>
  );
}

export default Intra;
