/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';

const listarMedicos = async _ => {
  let response = await axios.get("/api/medicos/list");
  var medicos = response.data;
  var length = medicos.length;
  let prueba = [];
  for(let i=0; i<length; i++){
    let aux = "/api/usuario/find/dni/"+medicos[i].dni;
    let resp = await axios.get(aux);
    let dni = resp.data.dni;
    let nombre = resp.data.nombre;
    let apellido = resp.data.apellido;
    prueba.push("{ name: "+nombre+" "+apellido+"}");
  }
  //return alert(prueba);
}

var opciones = listarMedicos();


export default function ComboBox2() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={opciones}
      getOptionLabel={(option) => option.name}
      style={{ width: "80%" }}
      renderInput={(params) => <TextField {...params} label="Medico" variant="outlined" color="secondary" />}
    />
  );
}
const top100Films = [
  { name: 'Dario Vergara'},
];