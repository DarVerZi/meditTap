import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function CarouselNov(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div className="container-fluid">
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleControls" data-slide-to="1"></li>
    <li data-target="#carouselExampleControls" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <p7 class="d-block w-150"> LEA ATENTAMENTE LOS SIGUIENTES TÉRMINOS Y CONDICIONES DE USO DEL SISTEMA DE TURNOS WEB. VERSIÓN VIGENTE 13/07/2020:
Este contrato describe los términos y condiciones generales (los "Términos y Condiciones Generales") aplicables al uso de los servicios ofrecidos por Institutos Médicos S.A – Sanatorio Clínica Modelo Morón , CUIT 30- 54584921-2, ("los Servicios") dentro del  Cualquier persona (en adelante "Usuario" o en plural "Usuarios") que desee acceder y/o usar el sitio o los Servicios podrá hacerlo sujetándose a los Términos y Condiciones Generales respectivos, junto con todas las demás políticas y principios que los rigen y que son incorporados al presente por referencia. CUALQUIER PERSONA QUE NO ACEPTE ESTOS TÉRMINOS Y CONDICIONES GENERALES, LOS CUALES TIENEN UN CARÁCTER OBLIGATORIO Y VINCULANTE, DEBERÁ ABSTENERSE DE UTILIZAR EL PORTAL, el Usuario debe leer, entender y aceptar todas las condiciones establecidas en los Términos y Condiciones Generales y en las Políticas de Privacidad, así como en los demás documentos incorporados a los mismos por referencia, previo a su registración como Usuario.
          </p7>
    </div>
    <div class="carousel-item">
      <img src="https://www.brandbucket.com/sites/default/files/logo_uploads/259178/large_medictap.png" class="d-block w-150"/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-150" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>);
}