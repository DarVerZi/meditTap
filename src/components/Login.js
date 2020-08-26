import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
//import AlertDialog from './AlertDialog'; 
//import AlertDialog from './AlertDialog';
import {withRouter} from 'react-router-dom';
import MiComponente from './MiComponente';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {loginGrupo} from "../controllers/medictap.controller.js";


 

import {
  Redirect
} from "react-router-dom";

 

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(16),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  color: {
  margin: '0% auto ',
  // backgroundImage: 'url(https://www.hospitalitaliano.org.ar/images/minisitios/encabezado_acerca.jpg)',
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover',
  // backgroundPosition: 'center',
  backgroundColor: '#d4d4d4',
  },
});

const validarLogin = async function () {
  let login = {
    dni: this.state.dni,
    pass: this.state.password
  }
  
  let getLogin = await loginGrupo(login);
  if (getLogin.rdo===0) {
     alert("Hola " + localStorage.getItem("nombre") + " !!! Bienvenido zapallo");
     
     if (localStorage.getItem("nombre")==="medico") {
          console.log(this.state.rol)
          localStorage.setItem('rol', this.state.rol);
          this.props.history.push({
            pathname: '/home',
            state: {
              rol: this.state.rol
            }      
        }
        );
    }
    else if (localStorage.getItem("nombre")==="admin") {
          console.log(this.state.rol1)
          localStorage.setItem("rol", this.state.rol1);
          this.props.history.push({
          pathname: '/home',
          state: {
            rol1: this.state.rol1
          }
      });
    }
    else if (localStorage.getItem("nombre")==="secretaria") {
        console.log(this.state.rol2)
        localStorage.setItem('rol', this.state.rol2);
        this.props.history.push({
          pathname: '/home',
          state: {
            rol: this.state.rol2
          }
        });
    }
    else if (localStorage.getItem("nombre")==="paciente") {
        console.log(this.state.rol3)
        localStorage.setItem('rol', this.state.rol3);
        this.props.history.push({
          pathname: '/home',
          state: {
            rol: this.state.rol3
          }
        });
      }
    else {
        this.setState({fallo: true})
        localStorage.clear(); //limpia las variables
      }
  }
};


class Ingreso extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dni: "",
      password: "",
      rol: "medico",
      rol1: "admin",
      rol2: "secretaria",
      rol3: "paciente",
      isLogged: false,
      fallo: false,
    }
  }

    //Capturar el mail y pwd cuando la ingresas en el estao
    presionarBotonLogin = () => {

      if (this.state.dni!=="" && this.state.password!=="") {
        validarLogin();
      }   else {
        alert("Debe completar su DNI y contraseña");
      }

  };

 
  cambiarTextoDni = (event) => {
    this.setState({
      dni: event.target.value,
    });
  };
  cambiarTextoPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  render(){
  const { classes } = this.props;
  return (
    <Grid container component="main" className={classes.color}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" >
          Ingresar
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            // variant="outlined"
            margin="normal"
            required
            fullWidth
            id="dni"
            label="DNI"
            name="dni"
            autoComplete="dni"
            onChange={this.cambiarTextoDni}
            autoFocus
            color="secondary"
            style={{
              backgroundColor: "white"
            }}
          />
          <TextField
            // variant="outlined"
            margin="normal"
            required
            fullWidth
            name="contraseña"
            label="Contraseña"
            type="contraseña"
            id="contraseña"
            color="secondary"
            autoComplete="current-password"
            onChange={this.cambiarTextoPassword}
            style={{
              backgroundColor: "white"
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={this.presionarBotonLogin}
          >
            Ingresar
          </Button>
          <Grid container>
            <Grid item>
              <Link href="Registrar" variant="body2" color="secondary">
                {"No tiene una cuenta? Registrese"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Grid>
  );
}
}
export default withStyles(useStyles, { withTheme: true })(Ingreso);