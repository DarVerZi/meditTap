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

export default function DuracionTurnos() {
  const theme = createMuiTheme();
  return (
    
    <Autocomplete
      id="combo-box-demo"
      options={intervalos}
      getOptionLabel={(option) => option.name}
      style={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label="Pacientes" variant="outlined" color="secondary" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const intervalos = [
  { name: '30 min'},
  { name: '60 min'},
];