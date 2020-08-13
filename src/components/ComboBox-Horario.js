/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Pacientes" variant="outlined" />}
    />
  );
}


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: '09:00' },
  { title: '10:00' },
  { title: '11:00' },
  { title: '12:00' },
  { title: '14:00' },
  { title: '15:00' },
  { title: '16:00' },
  { title: '17:00' },
];