import React, { component, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Intra from './components/Intra';
import MiComponente from './components/MiComponente';
import CenteredGrid from './components/CenteredGrid';
import Recetas from './components/Recetas';
import HistoriaClinica from './components/HistoriaClinica';
import Error from './components/Error';
import Turnos from './components/Turnos';

class Router extends Component {
    render() {

        return (
            <BrowserRouter>
                <header className="App-header">
                    <div>
                        <img src="https://www.brandbucket.com/sites/default/files/logo_uploads/259178/large_medictap.png" />
                    </div>

                </header>

                <Switch>
                    {/*Configurar el route con render, nos permite enviar parametros con props */}
                    <Route exact path="/" component={CenteredGrid} />
                    <Route exact path="/GestionDeUsuarios" component={MiComponente} />
                    <Route exact path="/Turnos" component={Turnos} />
                    <Route exact path="/HistoriaClinica" component={HistoriaClinica} />
                    <Route exact path="/Recetas" component={Recetas} />
                    <Route component={Error} />

                </Switch>


                <footer className='App-footer'>
                    <p>
                        Footer de prueba
        </p>
                </footer>
            </BrowserRouter>

        );

    }


}
export default Router;
