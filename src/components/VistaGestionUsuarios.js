import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
//import ComboBox from './ComboBox';
import MenuAppBar from './MenuAppBar2';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
      margin: theme.spacing(1),
    },
  }));
  
  export default function VistaGestionUsuarios() {
    const classes = useStyles();

return (
    <div className={classes.root}>
        <div className="container-fluid">
            <div className="row">
            {/* Barra con menú y logout */}
                <div className="col-12">
                    <MenuAppBar/>
                    <br></br>
                </div>               
                {/* Formulario de datos personales */}
                <div className="col-12">
                <h1>Datos del Usuario</h1>
                <form>
                <div class="form-row">
                <div class="form-group col-md-4">
                <label for="inputGenero">Usuario</label>
      <select id="inputGenero" class="form-control">
        {/*<option selected>Seleccione...</option>*/}
        <option selected>dariovergara@gmail.com</option>
      </select>
    </div>
    <div class="form-group col-md-4">
      <label for="inputPassword">Contraseña</label>
      <input type="text" value="**********" class="form-control" id="inputPassword"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputRol">Rol</label>
      <select id="inputRol" class="form-control">
        {/*<option selected>Seleccione...</option>*/}
        <option>Admin</option>
        <option selected>Médico</option>
        <option>Paciente</option>
        <option>Secretaria</option>
      </select>
    </div>
    </div>
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
    <div class="form-group col-md-3">
    <label for="inputTelPrin">Telefono Principal</label>
    <input type="text" value="54 011 1234 5678" class="form-control" id="inputTelPrin"/>
  </div>
  <div class="form-group col-md-3">
    <label for="inputCel">Telefono Celular</label>
    <input type="text" value="54 911 1234 5678" class="form-control" id="inputCel"/>
  </div>
  </div>
  {/*<button type="submit" class="btn btn-primary">Sign in</button>*/}
</form>
                </div>
  {/*Botones*/}
  <div className="col-12">
  <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Aceptar
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Cancelar
        </Button>
        </div>
        </div>
        <br></br>
        </div>
        </div>
  );
}
