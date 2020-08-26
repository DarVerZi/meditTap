import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function DiasSemana(_,) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { lunes, martes, miercoles, jueves, viernes, sabado } = state;
  const dias = [{dia: 1}, {dia: 2}, {dia: 3}, {dia: 4}, {dia: 5}, {dia: 6}];

  return (
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox checked={lunes} onChange={handleChange} name={dias[0]}/>}
            label="Lunes"
          />
          <FormControlLabel
            control={<Checkbox checked={martes} onChange={handleChange} name={dias[1]}/>}
            label="Martes"
          />
          <FormControlLabel
            control={<Checkbox checked={miercoles} onChange={handleChange} name={dias[2]}/>}
            label="Miercoles"
          />
          <FormControlLabel
            control={<Checkbox checked={jueves} onChange={handleChange} name={dias[3]}/>}
            label="Jueves"
          />
          <FormControlLabel
            control={<Checkbox checked={viernes} onChange={handleChange} name={dias[4]}/>}
            label="Viernes"
          />
                    <FormControlLabel
            control={<Checkbox checked={sabado} onChange={handleChange} name={dias[5]}/>}
            label="Sabado"
          />
        </FormGroup>
      </FormControl>
  );
}