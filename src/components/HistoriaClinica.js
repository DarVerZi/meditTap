import React from 'react';
import IconLabelButtons from './IconLabelButtons';
import CheckboxList from './CheckboxList';
import ComboBox from './ComboBox';
import VistaHCMed from './VistaHCMed';
import VistaHCPac from './VistaHCPac';
import VistaHCSec from './VistaHCSec';
import Home1 from './Home1';

export default function HistoriaClinica() {
    const valor = localStorage.getItem('rol');

    if (valor==="secretaria") {
      return <VistaHCSec/>;
      }
    else  if (valor==="paciente") {
      return <VistaHCPac/>;
      }
    else  if (valor==="medico") {
      return <VistaHCMed/> ;
    }
  else{
      return <Home1
      />
    };

    
  }
