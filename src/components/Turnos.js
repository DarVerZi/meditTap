import React from 'react';
import VistaTurnosPac from './VistaTurnosPac';
import VistaTurnosMed from './VistaTurnosMed';
import VistaTurnosSec from './VistaTurnosSec';
import VistaHorarios from './VistaHorarios';


export default function Turnos(props) {
    var rol = props.pru;
  
    if (rol==="paciente") {
      return <VistaTurnosPac/>;
      }
    else  if (rol==="medico") {
    return <VistaTurnosMed/>;
    }
  else{
      return <VistaTurnosSec rol={rol}/> ;
    };


}