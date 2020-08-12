import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import imagen1 from './carousel1.png';
import imagen2 from './carousel2.png';
import imagen3 from './carousel3.png';

export default function CarouselNov(props) {
    const { children, value, index,  ...other } = props;
  
    return (
        <div className="container-fluid" >
        <div className="container" justify = "center" alignItems = "center">
<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={imagen3} alt="Protocolo Covid-19" height="80%" width="100%"/>
      <div class="carousel-caption d-none d-md-block text-body">
        <h5>Medidas Preventivas</h5>
        <p>Recordá que es de uso obligatorio el barbijo o tapabocas cuando asistas a turnos médicos</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={imagen2} alt="Recetas digitalizadas" height="80%" width="100%"/>
      <div class="carousel-caption d-none d-md-block text-body">
        <h5>Descargá tus Recetas</h5>
        <p>A partir de la nueva realidad planteada por el Covid-19, nuestros pacientes podrán contar con sus recetas listas para descargar en una sección especial del portal</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={imagen1} alt="Nuestros servicios" height="80%" width="100%"/>
      <div class="carousel-caption d-none d-md-block text-body">
        <h5>Estamos para Ayudarte</h5>
        <p>Recordá que ante cualquier duda, podés contactarnos a través de nuestra sección de Contacto</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
</div>
);
}