import React from 'react';
import VistaTurnosPac from './VistaTurnosPac';
import VistaTurnosMed from './VistaTurnosMed';
import VistaTurnosSec from './VistaTurnosSec';

export default function Turnos(props) {
    var rol = props.pru;
  
    return (
      <div>
        {rol}
    </div>
    );
}