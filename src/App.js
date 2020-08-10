import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider';
import MenuAppBar from './components/MenuAppBar';
//import CenteredGrid from './components/CenteredGrid';
import Router from './Router';

import CenteredGrid from './components/CenteredGrid';
import Recetas from './components/Recetas';
import HistoriaClinica from './components/HistoriaClinica';
import Turnos from './components/Turnos';

import { Container } from '@material-ui/core';
import FullWidthTabs from './components/TabPanel';
import CarouselNov from './components/CarouselNov';

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
          {/*<temporal>Hola Mary</temporal*/}  
          <temporal>Hola Mary</temporal>  
          <div className="pru_body">

            <h1>Hola Mary</h1>
            
            <Router/>
            {/*
              <CenteredGrid/>
            */}  
            
            <CarouselNov/>
            <CenteredGrid/>
            <Recetas/>
            <HistoriaClinica/>
            <Turnos/>

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
