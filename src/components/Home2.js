import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FullWidthTabs from './TabPanel';
import CarouselNov from './CarouselNov';
import MenuAppBar from './MenuAppBar2';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid(props) {
  var rol = localStorage.getItem('rol');
  const classes = useStyles();
  
 
  return (
    <div className="container-fluid">
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
           <MenuAppBar/>
            <CarouselNov/>
            <FullWidthTabs/>
        </Grid>
        {/*<Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>*/}
      </Grid>
    </div>
    </div>
  );
}