import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import MenuAppBar from './MenuAppBar2';

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function MiPerfil(props) {

    const rol = props.rol;
    const classes = useStyles();

    if(rol==="paciente") {

        return (
            <Card variant="outlined">
            <CardContent>        
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputNombre">Nombres</label>
                        <input type="text" disabled="true" value="Dario Alberto" class="form-control" id="inputNombre"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputApellido">Apellidos</label>
                        <input type="text" value="Vergara Zatti" class="form-control" id="inputApellido" disabled="true"/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputDNI">Nro Documento</label>
                        <input type="text" value="12345678" class="form-control" id="inputDNI" disabled="true"/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputFNac">Fecha de Nacimiento</label>
                        <input type="text" value="22/01/1988" class="form-control" id="inputFNac" disabled="true"/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputGenero">Genero</label>
                        <select id="inputGenero" class="form-control" disabled="true">
                            {/*<option selected>Seleccione...</option>*/}
                            <option selected>Hombre</option>
                            <option>Mujer</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputDomicilio">Domicilio</label>
                        <input type="text" value="25 de Mayo 432, Moron" class="form-control" id="inputDomicilio" placeholder="Calle, número, depto, etc." disabled="true"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail">Email</label>
                        <input type="email" value="dariovergara@gmail.com" class="form-control" id="inputEmail" disabled="true"/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputTelPrin">Telefono Principal</label>
                        <input type="text" value="54 011 1234 5678" class="form-control" id="inputTelPrin" disabled="true"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputCel">Telefono Celular</label>
                        <input type="text" value="54 911 1234 5678" class="form-control" id="inputCel" disabled="true"/>
                    </div>
                </div>
            </form>
            </CardContent>
    </Card>
        );
    }
    
    else {

        return (
            <div className={classes.root}>
            <div className="container-fluid">
                <div className="col-12">
            <MenuAppBar/>
            </div>
            </div>
            <div class="card">
  <div class="card-body">       
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputNombre">Nombres</label>
                        <input type="text" value="Dario Alberto" class="form-control" id="inputNombre"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputApellido">Apellidos</label>
                        <input type="text" value="Vergara Zatti" class="form-control" id="inputApellido"/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputDNI">Nro Documento</label>
                        <input type="text" value="12345678" class="form-control" id="inputDNI"/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputFNac">Fecha de Nacimiento</label>
                        <input type="text" value="22/01/1988" class="form-control" id="inputFNac"/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputGenero">Genero</label>
                        <select id="inputGenero" class="form-control">
                            {/*<option selected>Seleccione...</option>*/}
                            <option selected>Hombre</option>
                            <option>Mujer</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputDomicilio">Domicilio</label>
                        <input type="text" value="25 de Mayo 432, Moron" class="form-control" id="inputDomicilio" placeholder="Calle, número, depto, etc."/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail">Email</label>
                        <input type="email" value="dariovergara@gmail.com" class="form-control" id="inputEmail"/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputTelPrin">Telefono Principal</label>
                        <input type="text" value="54 011 1234 5678" class="form-control" id="inputTelPrin"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputCel">Telefono Celular</label>
                        <input type="text" value="54 911 1234 5678" class="form-control" id="inputCel"/>
                    </div>
                </div>
            </form>
        <Button type="submit" class="btn btn-danger btn-sm">Guardar</Button>
    <br></br>
    </div>
            </div>
            </div>
        );
    }
}