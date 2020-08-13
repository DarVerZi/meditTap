/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox2() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Medico" variant="outlined" />}
    />
  );
}


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Dr. Gomez'},
  { title: 'Dr. Rodriguez'},
  { title: 'Dr. Lopez'},
  { title: 'Dra. Gimenez'},
  { title: 'Dra. Martinez'},
];