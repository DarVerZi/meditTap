import React from 'react';
import StartTime from './ComboBox-Horario';
import EndTime from './ComboBoxFin';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
 

class MultiCheckBox extends React.Component{
  constructor(){
    super();
    this.state = {
      fecha: [],
      idMedico: 1,
      horas:"9:00",
      fin:"12:00",
    }
    this.datos = {
      opciones: []
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
    const id = localStorage.getItem("dni");
    const rol = localStorage.getItem("rol");
    return(
      //<div className={classes.root}>
      
              <form>
              <div class="form-row">
              <div class="form-group col-md-4">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" name="daysOfWeek" id="inlineCheckboxh1" value={1} onChange={this.handleInputChange.bind(this)}/>
                  <label class="form-check-label" for="inlineCheckboxh1" fontSize="12pt">Lunes</label>
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
        </form>
    )
  }
}
export default MultiCheckBox;