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
                    <Route exact path="/" component={Home1} />
                    
                    <Route exact path="/home/:rol" render={(props) => {
                        var rol = props.match.params.rol;
                        return (
                            <div rol="content">
                            <Home2 pru={rol}/>
                            </div>
                        );
                    }} />
                    <Route exact path="/" component={Home1} />
                    
                    <Route exact path="/GestionDeUsuarios/:rol" render={(props) => {
                        var rol = props.match.params.rol;
                        return (
                            <div rol="content">
                            <VistaGestionUsuarios pru={rol}/>
                            </div>
                        );
                    }} />

                    <Route exact path="/Turnos/:rol" render={(props) => {
                        var rol = props.match.params.rol;
                        return (
                            <div rol="content">
                            <Turnos pru={rol}/>
                            </div>
                        );
                    }} />


                    {/*<Route exact path="/HistoriaClinica" component={HistoriaClinica} />*/}
                    <Route exact path="/HistoriaClinica/:rol" render={(props) => {
                        var rol = props.match.params.rol;
                        return (
                            <div rol="content">
                            <HistoriaClinica pru={rol}/>
                            </div>
                        );
                    }} />                    
                    <Route exact path="/Recetas/:rol" render={(props) => {
                        var rol = props.match.params.rol;
                        return (
                            <div rol="content">
                            <Recetas pru={rol}/>
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
