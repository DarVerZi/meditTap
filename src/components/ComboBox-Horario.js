/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    linea: {
      main: '#301210',
    },
  }
});



export default function StartTime() {
  const theme = createMuiTheme();
  return (
    
    <Autocomplete
      id="combo-box-demo"
      options={inicio}
      getOptionLabel={(option) => option.startTime}
      style={{ width: "80%" }}
      renderInput={(params) => <TextField {...params} label="Inicio" variant="outlined" color="secondary" required="true"/>}
    />
  );
}

const inicio = [
  { startTime: '08:00' },
  { startTime: '08:30' },
  { startTime: '09:00' },
  { startTime: '09:30' },
  { startTime: '10:00' },
  { startTime: '10:30' },
  { startTime: '11:00' },
  { startTime: '11:30' },
  { startTime: '12:00' },
  { startTime: '12:30' },
  { startTime: '13:00' },
  { startTime: '13:30' },
  { startTime: '14:00' },
  { startTime: '14:30' },
  { startTime: '15:00' },
  { startTime: '15:30' },
  { startTime: '16:00' },
  { startTime: '16:30' },
  { startTime: '17:00' },
  { startTime: '17:30' },
  { startTime: '18:00' },
  { startTime: '18:30' },
  { startTime: '19:00' },
  { startTime: '19:30' },
];