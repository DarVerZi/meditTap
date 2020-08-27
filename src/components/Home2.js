import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

export default function CenteredGrid() {
  var rol = localStorage.getItem("rol");
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
      </Grid>
    </div>
    </div>
  );
}