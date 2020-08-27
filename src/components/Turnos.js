import React from 'react';
import VistaTurnosPac from './VistaTurnosPac';
import VistaTurnosMed from './VistaTurnosMed';
import VistaTurnosSec from './VistaTurnosSec';
//import VistaHorarios from './VistaHorarios';
import Home1 from './Home1';

export default function Turnos() {
    var rol = localStorage.getItem("rol");
  
    if (rol==="paciente") {
      return <VistaTurnosPac/>;
      }
    else  if (rol==="medico" || rol==="admin") {
    return <VistaTurnosMed/>;
    }
    else  if (rol==="secretaria") {
      return <VistaTurnosSec/>;
      }
  else{
      return <Home1/> ;
    };
}