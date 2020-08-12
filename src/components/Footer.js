import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));
  
  export default function Footer() {
    const classes = useStyles();

    return (
    <div className="container-fluid">
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    {/*<p>Aquí va el logo chiquito en blanco (en proceso)</p>*/}
                </Grid>
                <Grid item xs={9}>
                    {/*<p>Aquí va texto</p>*/}
                </Grid>
            </Grid>
        </div>
    </div>
    );
}