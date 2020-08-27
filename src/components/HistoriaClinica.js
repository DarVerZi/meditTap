import React from 'react';
import VistaHCMed from './VistaHCMed';
import VistaHCPac from './VistaHCPac';
import VistaHCSec from './VistaHCSec';

export default function HistoriaClinica() {
    const valor = localStorage.getItem("rol");
    
    if (valor==="secretaria") {
      return <VistaHCSec/>;
      }
    else  if (valor==="paciente") {
      return <VistaHCPac/>;
      }
  else{
      return <VistaHCMed/> ;
    };

    
  }
