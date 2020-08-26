import React from 'react';
import VistaRecetasPac from './VistaRecetasPac';
import VistaRecetasMed from './VistaRecetasMed';

export default function Recetas() {
    const valor = localStorage.getItem('rol');
    
    if (valor==="paciente") {
        return <VistaRecetasPac/>;
        }
    else{
        return <VistaRecetasMed/> ;
      };
    
        

}