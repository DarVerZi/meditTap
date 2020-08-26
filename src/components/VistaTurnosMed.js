import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ComboBox from './ComboBox';
import ComboBox2 from './ComboBox-Medicos';
import ComboBox3 from './ComboBox-Horario';
import MenuAppBar from './MenuAppBar2';
import DatePicker from './DatePicker-TS';
import CalendarTurno from './CalendarTurno';

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
  
  export default function VistaTurnosSec() {
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
                <h2>Asignar Turno</h2>
                <ComboBox/>
                </div>
                {/*<div class="form-row">
    <div class="form-group col-md-6">
    
  </div>
  <div class="form-group col-md-2">
  <DatePicker/>
  </div>
  <div class="form-group col-md-4">
  <ComboBox3/>
  </div>
  </div>
  </div>*/}
  <div className="col-12">
  <div>
  <CalendarTurno/>
  </div>
  </div>
<div className="col-12"> 
 <div class="form-row">
  <div class="form-group col-md-3">
  <p></p>
  </div>
  <div class="form-group col-md-3">
  <button type="submit" class="btn btn-danger btn-lg">Asignar Turno</button>
  </div>
  <div class="form-group col-md-3">
  <button type="submit" class="btn btn-secondary btn-lg">Cancelar</button>
  </div>
  <div class="form-group col-md-3">
  <p></p>
  </div>
  </div></div></div>
                </div>
                {/*Tabla de recetas*/}
                <h1>Turnos Activos</h1>
                <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col-sm-4">Paciente</th>
      <th scope="col-sm-4">Fecha</th>
      <th scope="col-sm-4">Hora</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Juan Perez</th>
      <td>15/08/2020</td>
      <td>10:30</td>
    </tr>
    <tr>
      <th scope="row">Jose Diaz</th>
      <td>14/08/2020</td>
      <td>14:30</td>
    </tr>
    <tr>
      <th scope="row">Maria Perez</th>
      <td>14/08/2020</td>
      <td>13:30</td>
    </tr>
  </tbody>
</table></div>
  );
}