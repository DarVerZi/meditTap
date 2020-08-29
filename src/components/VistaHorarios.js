import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuAppBar from './MenuAppBar2';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import MultiCheckBox from './DiasSemana';
//import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import StartTime from './ComboBox-Horario';
import EndTime from './ComboBoxFin';
import Home1 from './Home1';
import ComboBox2 from './ComboBox-Medicos';

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
    const rol = localStorage.getItem("rol");
  const [state, setState] = React.useState({
    
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

//if (rol==="medico") {
    return (
        <div className={classes.root}>
          <div className="container-fluid">
            <div className="row">
              {/* Barra con menú y logout */}
              <div className="col-12">
                <MenuAppBar/>
                <br></br>
              </div>
              <div className="col-12">
              <div>
          <ComboBox2/>
          </div>
          <br></br>
          <div className="card text-center">
          <h4 className="card-header">Disponibilidad de Turnos</h4>
          <div className="card-body">
                  <form>
                  <div class="form-row">
                    <div class="form-group col-12">
                      <MultiCheckBox/>
                    </div>
                  </div>
                  </form>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
    );
  }