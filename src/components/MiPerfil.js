import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import MenuAppBar from './MenuAppBar2';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
  

class MiPerfil extends React.Component{
  constructor(){
    super();
    this.state = {
      nombre: "",
      apellido: "",
      dni: "",
      fechaNacimiento: "",
      domicilio: "",
      mail: "",
      TelefonoPri: "",
      TelefonoCel: ""
    }
  }

  buscarUsuario = async dni => {
    let url = "/api/usuario/find/dni/"+dni;
    let response = await axios.get(url)
    return response.data;
  }
  


  submit(){
    console.log(this.state)}

  render(){
    //const classes = useStyles();
    const dni = localStorage.getItem("dni");
    const rol = localStorage.getItem("rol");    
    const { classes } = this.props;
    const response = this.buscarUsuario(dni);
        return (
            <Card variant="outlined">
            <CardContent>        
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputNombre">Nombres</label>
                        <input type="text" disabled="true" value={response.nombre} class="form-control" id="inputNombre"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputApellido">Apellidos</label>
                        <input type="text" value={response.apellido} class="form-control" id="inputApellido" disabled="true"/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputDNI">Nro Documento</label>
                        <input type="text" value={response.dni} class="form-control" id="inputDNI" disabled="true"/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputFNac">Fecha de Nacimiento</label>
                        <input type="text" value={response.fechaNacimiento} class="form-control" id="inputFNac" disabled="true"/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputGenero">Genero</label>
                        <select id="inputGenero" class="form-control" disabled="true">
                            <option selected>Seleccione...</option>
                            <option>Hombre</option>
                            <option>Mujer</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputDomicilio">Domicilio</label>
                        <input type="text" value={response.domicilio} class="form-control" id="inputDomicilio" placeholder="Calle, número, depto, etc." disabled="true"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail">Email</label>
                        <input type="email" value={response.mail} class="form-control" id="inputEmail" disabled="true"/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputTelPrin">Telefono Principal</label>
                        <input type="text" value={response.TelefonoPri} class="form-control" id="inputTelPrin" disabled="true"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputCel">Telefono Celular</label>
                        <input type="text" value={response.TelefonoCel} class="form-control" id="inputCel" disabled="true"/>
                    </div>
                </div>
            </form>
            </CardContent>
    </Card>
        );
    }
}

export default MiPerfil;