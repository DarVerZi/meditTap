import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import esLocale from '@fullcalendar/core/locales/es';
import interactionPlugin from "@fullcalendar/interaction";
import axios from 'axios';
import Button from '@material-ui/core/Button';


const buscarMedico = async (_) => {
  var dni = localStorage.getItem("dni");
  let aux = "/api/medicos/find/dni/"+dni;
  let response = await axios.get(aux);
  let idMedico = response.data.idMedico;
  var resp = await axios.get('/api/medicohorarios/find/idMedico/'+idMedico);
  return resp.data.horas;
} 


/*function buscarMedico() {
  var dni = localStorage.getItem("dni");
  let aux = "/api/medicos/find/dni/"+dni;
  let response = axios.get(aux);
  let idMedico = response.data.idMedico;
  var resp = axios.get('/api/medicohorarios/find/idMedico/'+idMedico);
  return resp.data;
} */

export default class CalendarTurno extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[ timeGridPlugin, interactionPlugin ]}
        initialView="timeGridWeek"
        selectable={true}
        //events={turnos}
        slotLabelFormat={{hour: '2-digit', minute: '2-digit', hour12: false}}
        allDaySlot={false}
        locale={esLocale}
        titleFormat={{day: 'numeric', month: 'long', year: 'numeric'}}
        slotLabelInterval={'00:30:00'}
        slotDuration={'00:30:00'}
        defaultTimedEventDuration={'00:30:00'}
        height="600px"
        businessHours={[ // specify an array instead
            {
            daysOfWeek: [1, 2, 3], // Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
            startTime: buscarMedico(), // 8am
            endTime: '13:00' // 1pm
            }/*,
            {
            daysOfWeek: [ 1, 2, 3, 4, 5 ], // Monday, Tuesday, Wednesday, Thursday, Friday
            startTime: '14:00', // 2pm
            endTime: '20:00' // 8pm
            }*/
        ]}
        selectConstraint="businessHours"
      />
    )
  }
}