import React from 'react';
import VistaRecetasPac from './VistaRecetasPac';
import VistaRecetasMed from './VistaRecetasMed';

export default function Recetas(props) {
    const valor = props.pru;
    
    if (valor==="paciente") {
        return <VistaRecetasPac/>;
        }
    else{
        return <VistaRecetasMed/> ;
      };
    
        

}