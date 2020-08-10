import React , {component, Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Intra from './components/Intra';


class Router extends Component {
    render() {

        return (
            
                <BrowserRouter>
                    <Switch>
                        {/*Configurar las rutas y paginas */}
                        <Route path="/ruta-prueba" component={Intra} />
                    </Switch>
                </BrowserRouter>

        );

    }


}
export default Router;
