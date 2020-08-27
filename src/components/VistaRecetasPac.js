import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ComboBox from './ComboBox';
import MenuAppBar from './MenuAppBar2';
import axios from 'axios';

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

  const handleButtonClick = () => {
    axios.get("/api/usuario/prueba").then(function(response) {
        alert(response.data)
      });
  };
  
  export default function VistaRecetasPac() {
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
                {/* Alerta de nueva notificación */}
                <div className="col-12">
                <h1>Descargar Receta</h1>
                <div class="alert alert-danger fade show" role="alert">
                    <strong>Novedades!</strong> Hay una nueva receta para descargar.
                    <br></br>
                </div>
                </div>
                {/* Tarjetas para descargar archivo*/}
                <div className="col-12"> 
                <div class="form-row">
    <div class="form-group col-md-6">
                <div class="card">
  <div class="card-header">
    13/08/2020
  </div>
  <div class="card-body">
    <h5 class="card-title">Gatritis</h5>
    <p class="card-text">Tratamiento para la gastritis.</p>
    <button class="btn btn-danger btn-lg" onClick={handleButtonClick}>Decargar</button>
  </div>
</div></div>
<div class="form-group col-md-6">
                <div class="card">
  <div class="card-header">
    15/07/2020
  </div>
  <div class="card-body">
    <h5 class="card-title">Colesterol</h5>
    <p class="card-text">Tratamiento para reducir los valores de colesterol.</p>
    <button class="btn btn-danger btn-lg" disabled="true">Decargar</button>
  </div>
</div></div>
</div></div>
          {/*Tabla con recetas*/}
                <h1>Historial de Recetas</h1>
                <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col-sm-3">Asunto</th>
      <th scope="col-sm-3">Fecha</th>
      <th scope="col-sm-4">Descripción</th>
      <th scope="col-sm-2">Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Gastritis</th>
      <td>13/08/2020</td>
      <td>Tratamiento para la gastritis</td>
      <td>Pendiente</td>
    </tr>
    <tr>
      <th scope="row">Colesterol</th>
      <td>15/07/2020</td>
      <td>Tratamiento para reducir los valores de colesterol</td>
      <td>Descargada</td>
    </tr>
  </tbody>
</table></div></div></div>
  );
}