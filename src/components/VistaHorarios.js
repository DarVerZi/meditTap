import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuAppBar from './MenuAppBar2';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import DiasSemana from './DiasSemana';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import StartTime from './ComboBox-Horario';
import EndTime from './ComboBoxFin';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
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
    formControl: {
      margin: theme.spacing(3),
    },
    }));
    
  
  export default function VistaHorarios() {
    const classes = useStyles();
  const [state, setState] = React.useState({
    
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const dias = [{dia: 1}, {dia: 2}, {dia: 3}, {dia: 4}, {dia: 5}, {dia: 6}];

return (
    <div className={classes.root}>
      <div className="container-fluid">
        <div className="row">
          {/* Barra con menú y logout */}
          <div className="col-12">
            <MenuAppBar/>
            <br></br>
          </div>
          <div className="col-12"><h2>Disponibilidad de Turnos</h2></div>
          {/* Buscador de pacientes */}
          <div className="col-12">
              <form>
              <div class="form-row">
                <div class="form-group col-md-4">
                <FormControl component="fieldset" className={classes.formControl} error>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox checked={state.lunes} onChange={handleChange} name="lunes"/>}
            label="Lunes"
          />
          <FormControlLabel
            control={<Checkbox checked={state.martes} onChange={handleChange} name="martes"/>}
            label="Martes"
          />
          <FormControlLabel
            control={<Checkbox checked={state.miercoles} onChange={handleChange} name="miercoles"/>}
            label="Miercoles"
          />
          <FormControlLabel
            control={<Checkbox checked={state.jueves} onChange={handleChange} name="jueves"/>}
            label="Jueves"
          />
          <FormControlLabel
            control={<Checkbox checked={state.viernes} onChange={handleChange} name="viernes"/>}
            label="Viernes"
          />
                    <FormControlLabel
            control={<Checkbox checked={state.sabado} onChange={handleChange} name="sabado"/>}
            label="Sabado"
          />
        </FormGroup>
      </FormControl>
                  {/*<DiasSemana/>*/}
                </div>
                <div class="form-group col-md-4">
                  <StartTime/>
                </div>
                <div class="form-group col-md-4">
                  <EndTime/>
                </div>
              </div>
              </form>
          </div>
  {/*Botones*/}
  <div className="col-12">
  <Button
        variant="contained"
        color="secondary"
        onClick={() => { alert('clicked') }}
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Aceptar
      </Button>
      <Button
        variant="contained"
        color="default"
        onClick={() => { alert('clicked') }}
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
