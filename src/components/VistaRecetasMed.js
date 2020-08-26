import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ComboBox from './ComboBox';
import MenuAppBar from './MenuAppBar2';

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
  
  export default function VistaRecetasMed() {
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
                <h1>Subir Receta</h1>
                <div>
                    <ComboBox/>
                    <br></br>
                </div>
                </div>
                {/* Barra para seleccionar archivo*/}
                <div className="col-12"> 
                <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputTelPrin">Asunto</label>
    <input type="text" value="Gastritis" class="form-control" id="inputTelPrin"/>
  </div>
  <div class="form-group col-md-6">
    <label for="inputCel">Fecha</label>
    <input type="text" value="13/08/2020" class="form-control" id="inputCel"/>
  </div>
  </div>
</div>
<div className="col-12"> 
 <div class="form-row">
    <div class="form-group col-md-5">
    <label for="inputObser">Descripción</label>
    <textarea type="text" class="form-control" id="inputObser" placeholder="Opcional"/>
  </div>
  <div class="form-group col-md-3">
    <form>
  <div class="form-group">
    <label for="exampleFormControlFile1">Cargar receta</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
</form>
  </div>
  <div class="form-group col-md-2">
  <button type="submit" class="btn btn-danger btn-lg">Subir</button>
  </div>
  <div class="form-group col-md-2">
  <button type="submit" class="btn btn-secondary btn-lg">Cancelar</button>
  </div>
  </div></div></div>
                </div>
                {/*Tabla de recetas*/}
                <h1>Historial de Recetas</h1>
                <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col-sm-3">Asunto</th>
      <th scope="col-sm-3">Fecha</th>
      <th scope="col-sm-6">Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Gastritis</th>
      <td>13/08/2020</td>
      <td>Tratamiento para la gastritis</td>
    </tr>
    <tr>
      <th scope="row">Colesterol</th>
      <td>15/07/2020</td>
      <td>Tratamiento para reducir los valores de colesterol</td>
    </tr>
  </tbody>
</table></div>
  );
}