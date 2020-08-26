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

export default function ComboBox() {
  const theme = createMuiTheme();
  return (
    
    <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.name}
      style={{ width: "80%" }}
      renderInput={(params) => <TextField {...params} label="Paciente" variant="outlined" color="secondary" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { name: 'Dario Vergara'},
];