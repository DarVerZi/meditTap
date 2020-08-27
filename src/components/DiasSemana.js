import React from 'react';
import StartTime from './ComboBox-Horario';
import EndTime from './ComboBoxFin';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import MenuAppBar from './MenuAppBar2';

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
  

class MultiCheckBox extends React.Component{
  constructor(){
    super();
    this.state = {
      fecha: [],
      idMedico: 1,
      horas:"9:00",
      fin:"12:00"
    }
  }

  handleInputChange(event) {
    const target = event.target;
    //var value = target.value;
    const fecha = this.state.fecha
    let index
    if(target.checked){
      fecha.push(+event.target.value)
    } else {
      index = fecha.indexOf(+event.target.value)
      fecha.splice(index, 1)
    }
    this.setState({fecha: fecha})
  }

  handleSubmit = async (e) => {
    e.preventDefault();
  const medicos= this.state.idMedico,
  fecha=this.state.fecha.toString(),
  horas = this.state.horas,
  fin = this.state.fin;
  try {
    await axios.post("/api/medicohorarios/create", {
      medicos,
      fecha,
      horas,
      fin
    });
  } catch (err) {
    console.log('Error');
  }
}

  submit(){
    console.log(this.state)}

  render(){
    //const classes = useStyles();
    const rol = localStorage.getItem("rol");
    return(
      //<div className={classes.root}>
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
            <div class="form-row">
              <div class="form-group col-md-4">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" name="daysOfWeek" id="inlineCheckboxh1" value={1} onChange={this.handleInputChange.bind(this)}/>
                  <label class="form-check-label" for="inlineCheckboxh1">Lunes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" name="daysOfWeek" id="inlineCheckboxh2" value={2} onChange={this.handleInputChange.bind(this)}/>
                  <label class="form-check-label" for="inlineCheckboxh2">Martes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" name="daysOfWeek" id="inlineCheckboxh3" value={3} onChange={this.handleInputChange.bind(this)}/>
                  <label class="form-check-label" for="inlineCheckboxh3">Miercoles</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" name="daysOfWeek" id="inlineCheckboxh4" value={4} onChange={this.handleInputChange.bind(this)}/>
                  <label class="form-check-label" for="inlineCheckboxh4">Jueves</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" name="daysOfWeek" id="inlineCheckboxh5" value={5} onChange={this.handleInputChange.bind(this)}/>
                  <label class="form-check-label" for="inlineCheckboxh5">Viernes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" name="daysOfWeek" id="inlineCheckboxh6" value={6} onChange={this.handleInputChange.bind(this)}/>
                  <label class="form-check-label" for="inlineCheckboxh6">Sabado</label>
                </div>
              </div>
                    <div class="form-group col-md-4">
                      <StartTime/>
                    </div>
                    <div class="form-group col-md-4">
                      <EndTime/>
                    </div>
                    </div>
            <button class="btn btn-danger btn-lg" type="submit" onClick={this.handleSubmit}>Aceptar</button>
          </div>
        </form>
        </div>
                  </div>
              </div>
      //</div>
    )
  }
}
export default MultiCheckBox;