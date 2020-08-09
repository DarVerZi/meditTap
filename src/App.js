import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleMenu from './components/SimpleMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
        <h1>hola mundo</h1>
        <SimpleMenu/>
      </header>
      
      <body className="App-body">
          <div className="pru_body">
          
            <h1>Hola Mary</h1>

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
