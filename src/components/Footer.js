import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logoClaro from './medictapClaro.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));
  
  export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <div className="container-fluid">
            <div className="row">
            <div className="col-12">
                <div class="form-row">
  <div class="form-group col-md-3">
  <img src={logoClaro} alt="Logo" width="150px"/>
  </div>
  <div class="form-group col-md-9">
  <p>© 2020 MedicTap | INDEPENDENTLY OWNED AND OPERATED | Privacidad | Términos y Codiciones</p>
  <p>Av. Warnes 932, 3º "9", C1414AAW, CABA, Argentina | Lunes a Viernes de 9hs a 16hs | Email: medictap@gmail.com | Teléfono: 5411 4123 1234</p>
  </div>
  </div>
  </div>
  </div>
</div>
        </div>
    );
}