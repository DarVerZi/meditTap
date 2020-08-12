import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconLabelButtons from './IconLabelButtons';
import ComboBox from './ComboBox';
import FormHC from './FormHC';
import HCCheckBoxes from './CheckBoxes-HC';
import HCDescriptions from './Descriptions-HC';
import MenuAppBar from './MenuAppBar2';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
  export default function VistaHCMed() {
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
                {/* Buscador de pacientes */}
                <div className="col-12">
                <div>
                    <ComboBox/>
                    <br></br>
                </div>
                </div>
                <div className="col-12">
                {/* Formulario de datos personales */}
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputNombre">Nombres</label>
                            <input type="text" class="form-control" id="inputNombre"/>
                        </div>
    <div class="form-group col-md-6">
      <label for="inputApellido">Apellidos</label>
      <input type="text" class="form-control" id="inputApellido"/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputDNI">Nro Documento</label>
      <input type="text" class="form-control" id="inputDNI"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputFNac">Fecha de Nacimiento</label>
      <input type="text" class="form-control" id="inputFNac"/>
    </div>
  <div class="form-group col-md-4">
      <label for="inputGenero">Genero</label>
      <select id="inputGenero" class="form-control">
        <option selected>Seleccione...</option>
        <option>Hombre</option>
        <option>Mujer</option>
      </select>
    </div>
    </div>
    <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputDomicilio">Domicilio</label>
    <input type="text" class="form-control" id="inputDomicilio" placeholder="Calle, número, depto, etc."/>
  </div>
  <div class="form-group col-md-6">
    <label for="inputEmail">Email</label>
    <input type="email" class="form-control" id="inputEmail"/>
  </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputTelPrin">Telefono Principal</label>
    <input type="text" class="form-control" id="inputTelPrin"/>
  </div>
  <div class="form-group col-md-6">
    <label for="inputCel">Telefono Celular</label>
    <input type="text" class="form-control" id="inputCel"/>
  </div>
  </div>
  <div class="form-group">
    <label for="inputObser">Observaciones</label>
    <textarea type="text" class="form-control" id="inputObser" placeholder="Aclaraciones sobre los campos anteriores"/>
  </div>
  {/*<button type="submit" class="btn btn-primary">Sign in</button>*/}
</form>
                </div>
                <div className="col-12">
                {/* Formulario de datos médicos */}
                <div className="col-12">
                <div class="form-group row">
    <div class="col-sm-6">Se encuentra Ud. en buen estado de salud?</div>
    <div class="col-sm-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          Sí
        </label>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          No
        </label>
      </div>
    </div>
  </div>
                </div>
            </div>
        </div>
        </div></div>
  );
}