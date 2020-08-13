import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));
  
  export default function Footer() {
    const classes = useStyles();

    return (
    <div className="container-fluid">
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    {/*<p>Aquí va el logo chiquito en blanco (en proceso)</p>*/}
                </Grid>
                <Grid item xs={9}>
                    {/*<p>LEA ATENTAMENTE LOS SIGUIENTES TÉRMINOS Y CONDICIONES DE USO DEL SISTEMA DE TURNOS WEB. VERSIÓN VIGENTE 13/07/2020:
Este contrato describe los términos y condiciones generales (los "Términos y Condiciones Generales") aplicables al uso de los servicios ofrecidos por Institutos Médicos S.A – Sanatorio Clínica Modelo Morón , CUIT 30- 54584921-2, ("los Servicios") dentro del  Cualquier persona (en adelante "Usuario" o en plural "Usuarios") que desee acceder y/o usar el sitio o los Servicios podrá hacerlo sujetándose a los Términos y Condiciones Generales respectivos, junto con todas las demás políticas y principios que los rigen y que son incorporados al presente por referencia. CUALQUIER PERSONA QUE NO ACEPTE ESTOS TÉRMINOS Y CONDICIONES GENERALES, LOS CUALES TIENEN UN CARÁCTER OBLIGATORIO Y VINCULANTE, DEBERÁ ABSTENERSE DE UTILIZAR EL PORTAL, el Usuario debe leer, entender y aceptar todas las condiciones establecidas en los Términos y Condiciones Generales y en las Políticas de Privacidad, así como en los demás documentos incorporados a los mismos por referencia, previo a su registración como Usuario.</p>*/}
                </Grid>
            </Grid>
        </div>
    </div>
    );
}