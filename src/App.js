import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuAppBar from './components/MenuAppBar';
import CenteredGrid from './components/CenteredGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <MenuAppBar/>
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>hola mundo</h1>
        
      </header>
      
      <body className="App-body">
          <FullWidthTabs/>
          <div className="pru_body">
            <h1>Hola Mary</h1>
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
