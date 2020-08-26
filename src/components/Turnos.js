import React from 'react';
import VistaTurnosPac from './VistaTurnosPac';
import VistaTurnosMed from './VistaTurnosMed';
import VistaTurnosSec from './VistaTurnosSec';

export default function Turnos() {
    var rol = localStorage.getItem('rol');
  
    if (rol==="paciente") {
      return <VistaTurnosPac/>;
      }
    else  if (rol==="medico") {
    return <VistaTurnosMed/>;
    }
  else{
      return <VistaTurnosSec/> ;
    };


}