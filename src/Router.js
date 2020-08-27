import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Intra from './components/Intra';
import VistaGestionUsuarios from './components/VistaGestionUsuarios';
import Recetas from './components/Recetas';
import HistoriaClinica from './components/HistoriaClinica';
import Error from './components/Error';
import Turnos from './components/Turnos';
import Login from './components/Login';
import Registrar from './components/Registrar';
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Footer from './components/Footer';
import MiPerfil from './components/MiPerfil';
import VistaHorarios from './components/VistaHorarios';
import Header from './components/Header';



class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <header className="App-header">
                <Header/>
                </header>
                <body className="App-body">
                <Switch>
                    {/*Configurar el route con render, nos permite enviar parametros con props */}
                    <Route exact path="/" render={() => {
                        return (
                            <div rol="content">
                            <Home1/>
                            </div>
                        );
                    }} />

                    
                    <Route exact path="/home" render={() => {
                        return (
                            <div rol="content">                                
                            <Home2/>
                            </div>
                        );
                    }} />
                    
                    <Route exact path="/GestionDeUsuarios" render={() => {
                        return (
                            <div rol="content">
                            <VistaGestionUsuarios/>
                            </div>
                        );
                    }} />

                    <Route exact path="/Turnos" render={() => {
                        return (
                            <div rol="content">
                            <Turnos/>
                            </div>
                        );
                    }} />


                    <Route exact path="/HistoriaClinica" render={() => {
                        return (
                            <div rol="content">
                            <HistoriaClinica/>
                            </div>
                        );
                    }} />                    
                    <Route exact path="/Recetas" render={() => {
                        return (
                            <div rol="content">
                            <Recetas/>
                            </div>
                        );
                    }} />
                    <Route exact path="/Perfil" render={() => {
                        return (
                            <div rol="content">
                            <MiPerfil/>
                            </div>
                        );
                    }} />
                    <Route exact path="/Horarios" render={() => {
                        return (
                            <div rol="content">
                            <VistaHorarios/>
                            </div>
                        );
                    }} />

                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Registrar" component={Registrar} />
                    
                    
                    <Route component={Error} />
                </Switch>
                </body>
                <footer className='App-footer'>
                <Footer/>
                </footer>
            </BrowserRouter>
        
        );

    }

}
export default Router;
