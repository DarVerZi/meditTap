import React from 'react';
import VistaHorarios from './VistaHorarios';
import VistaHCPac from './VistaHCPac';
import VistaHCSec from './VistaHCSec';

export default function HistoriaClinica(props) {
    const valor = props.pru;
    
    if (valor==="secretaria") {
      return <VistaHCSec/>;
      }
    else  if (valor==="paciente") {
      return <VistaHCPac/>;
      }
  else{
      return <VistaHorarios/> ;
    };

    
  }
