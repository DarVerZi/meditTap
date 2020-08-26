import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ComboBoxEspe from './ComboBoxEspe';
import ComboBox2 from './ComboBox-Medicos';
import ComboBox from './ComboBox';
import MenuAppBar from './MenuAppBar2';
import DatePicker from './DatePicker-TS';
import  CalendarTurno from './CalendarTurno';

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
  
  export default function VistaTurnosPac() {
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
                <h2>Elegir Turno</h2>
                <div class="form-row">
                <div class="form-group col-md-4">
    <ComboBox/>
  </div>
                <div class="form-group col-md-4">
                  <ComboBoxEspe/>
                </div>
    <div class="form-group col-md-4">
    <ComboBox2/>
  </div>
  </div>
  <div className="col-12">
  <div>
  <CalendarTurno/>
  </div>
  </div>
  {/*<div class="form-group col-md-2">
  <DatePicker/>
  </div>
  <div class="form-group col-md-4">
  <ComboBox3/>
  </div>*/}
</div>
<div className="col-12"> 
 <div class="form-row">
  <div class="form-group col-md-3">
  <p></p>
  </div>
  <div class="form-group col-md-3">
  <button type="submit" class="btn btn-danger btn-lg">Confirmar Turno</button>
  </div>
  <div class="form-group col-md-3">
  <button type="submit" class="btn btn-secondary btn-lg">Cancelar</button>
  </div>
  <div class="form-group col-md-3">
  <p></p>
  </div>
  </div></div></div>
  {/*Turnos Activos*/}
  <div className="col-12"> 
  <h1>Mis Turnos</h1>
 <div class="form-row">
  <div class="form-group col-md-6">
  <div class="card">
  <div class="card-header">
    Turno Confirmado
  </div>
  <div class="card-body">
    <h5 class="card-title">Dr. Gomez</h5>
    <p class="card-text">14/08/2020</p>
    <p class="card-text">17:30</p>
    <button class="btn btn-secondary btn-lg">Cancelar</button>
  </div>
</div>
  </div>
  <div class="form-group col-md-6">
  <div class="card">
  <div class="card-header">
    Turno Confirmado
  </div>
  <div class="card-body">
    <h5 class="card-title">Dr. Lopez</h5>
    <p class="card-text">23/08/2020</p>
    <p class="card-text">13:30</p>
    <button class="btn btn-secondary btn-lg">Cancelar</button>
  </div>
</div>
  </div>
  </div></div></div>
                {/*Tabla de turnos*/}
                <p><strong>Historial de Turnos</strong></p>
                <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col-sm-3">Medico</th>
      <th scope="col-sm-3">Paciente</th>
      <th scope="col-sm-2">Fecha</th>
      <th scope="col-sm-2">Hora</th>
      <th scope="col-sm-2">Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Dr. Gomez</th>
      <td>Juan Perez</td>
      <td>15/08/2020</td>
      <td>10:30</td>
      <td>Activo</td>
    </tr>
    <tr>
      <th scope="row">Dr. Lopez</th>
      <td>Jose Diaz</td>
      <td>14/08/2020</td>
      <td>14:30</td>
      <td>Activo</td>
    </tr>
    <tr>
      <th scope="row">Dr. Lopez</th>
      <td>Maria Perez</td>
      <td>14/08/2020</td>
      <td>13:30</td>
      <td>Activo</td>
    </tr>
  </tbody>
</table></div>
  );
}