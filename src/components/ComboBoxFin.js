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

export default function EndTime() {
  const theme = createMuiTheme();
  return (
    
    <Autocomplete
      id="combo-box-demo"
      options={fin}
      getOptionLabel={(option) => option.endTime}
      style={{ width: "80%" }}
      renderInput={(params) => <TextField {...params} label="Fin" variant="outlined" color="secondary" required="true" />}
    />
  );
}

const fin = [
  { endTime: '08:30' },
  { endTime: '09:00' },
  { endTime: '09:30' },
  { endTime: '10:00' },
  { endTime: '10:30' },
  { endTime: '11:00' },
  { endTime: '11:30' },
  { endTime: '12:00' },
  { endTime: '12:30' },
  { endTime: '13:00' },
  { endTime: '13:30' },
  { endTime: '14:00' },
  { endTime: '14:30' },
  { endTime: '15:00' },
  { endTime: '15:30' },
  { endTime: '16:00' },
  { endTime: '16:30' },
  { endTime: '17:00' },
  { endTime: '17:30' },
  { endTime: '18:00' },
  { endTime: '18:30' },
  { endTime: '19:00' },
  { endTime: '19:30' },
  { endTime: '20:00' },
];