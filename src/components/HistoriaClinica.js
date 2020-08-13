import React from 'react';
import IconLabelButtons from './IconLabelButtons';
import CheckboxList from './CheckboxList';
import ComboBox from './ComboBox';
import VistaHCMed from './VistaHCMed';
import VistaHCPac from './VistaHCPac';

export default function HistoriaClinica(props) {
    const valor = props.pru;
    
    if (valor==="medico") {
      return <VistaHCMed/>;
      }
      return <VistaHCPac/> ;
    }
    
   
