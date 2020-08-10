import React , {component, Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import Intra from './components/Intra';
import MiComponente from './components/MiComponente';
import CenteredGrid from './components/CenteredGrid';

class Router extends Component {
    render() {

        return (
            
                <BrowserRouter>
                    <Switch>
                        {/*Configurar las rutas y paginas */}
                        <Route exact path="/" component={CenteredGrid} />
                        <Route exact path="/GestionDeUsuarios" component={MiComponente} />
                        <Route exact path="/Turnos" component={MiComponente} />
                        <Route exact path="/HistoriaClinica" component={MiComponente} />
                        <Route exact path="/Recetas" component={MiComponente} />
                        
                    </Switch>
                </BrowserRouter>

        );

    }


}
export default Router;
