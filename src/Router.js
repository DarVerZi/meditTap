import React, { component, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Intra from './components/Intra';
import MiComponente from './components/MiComponente';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import Recetas from './components/Recetas';
import VistaHCMed from './components/VistaHCMed';
import Error from './components/Error';
import Turnos from './components/Turnos';
import Login from './components/Login';
import Registrar from './components/Registrar';
import Home1 from './components/Home1';
import CenteredGrid from './components/Home2';


class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <header className="App-header">
                <div className="container" justify = "center" alignItems = "center">
                        <img src="https://www.brandbucket.com/sites/default/files/logo_uploads/259178/large_medictap.png" height="80px" width="180px"/>
                    </div>
                </header>
                <body className="App-body">
                <Switch>
                    {/*Configurar el route con render, nos permite enviar parametros con props */}
                    <Route exact path="/" component={Home1} />
                    <Route exact path="/home" component={CenteredGrid} />
                    <Route exact path="/GestionDeUsuarios" component={MiComponente} />
                    <Route exact path="/Turnos" component={Turnos} />
                    <Route exact path="/HistoriaClinica" component={VistaHCMed} />
                    <Route exact path="/Recetas" component={Recetas} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Registrar" component={Registrar} />
                    
                    <Route component={Error} />

                </Switch>
                </body>
                <footer className='App-footer'>
                LEA ATENTAMENTE LOS SIGUIENTES TÉRMINOS Y CONDICIONES DE USO DEL SISTEMA DE TURNOS WEB. VERSIÓN VIGENTE 13/07/2020:
Este contrato describe los términos y condiciones generales (los "Términos y Condiciones Generales") aplicables al uso de los servicios ofrecidos por MedicTap S.A., ("los Servicios") dentro del Cualquier persona (en adelante "Usuario" o en plural "Usuarios") que desee acceder y/o usar el sitio o los Servicios podrá hacerlo sujetándose a los Términos y Condiciones Generales respectivos, junto con todas las demás políticas y principios que los rigen y que son incorporados al presente por referencia. CUALQUIER PERSONA QUE NO ACEPTE ESTOS TÉRMINOS Y CONDICIONES GENERALES, LOS CUALES TIENEN UN CARÁCTER OBLIGATORIO Y VINCULANTE, DEBERÁ ABSTENERSE DE UTILIZAR EL PORTAL, el Usuario debe leer, entender y aceptar todas las condiciones establecidas en los Términos y Condiciones Generales y en las Políticas de Privacidad, así como en los demás documentos incorporados a los mismos por referencia, previo a su registración como Usuario.
                </footer>
            </BrowserRouter>
        
        );

    }


}
export default Router;
