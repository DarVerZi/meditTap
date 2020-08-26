import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logoColor from './medictapColor.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));
  
  export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <div className="container-fluid">
            <div className="row">
            <div className="col-12">
  <img src={logoColor} alt="Logo" width="250px"/>
  </div>
  </div>
  </div>
  </div>
    );
}