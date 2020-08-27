import React from 'react';
import VistaRecetasPac from './VistaRecetasPac';
import VistaRecetasMed from './VistaRecetasMed';
import Home1 from './Home1';

export default function Recetas() {
    const valor = localStorage.getItem("rol");
    
    if (valor==="paciente") {
        return <VistaRecetasPac/>;
        }
        else if (valor==="admin" ||valor==="medico" || valor==="secretaria"){
            return <VistaRecetasMed/> ;
          }
        else{
        return <Home1/> ;
      };
    
        

}