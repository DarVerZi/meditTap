import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FullWidthTabs from './TabPanel';
import CarouselNov from './CarouselNov';
import MenuAppBar from './MenuAppBar2';
import Home1 from './Home1';


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
  const classes = useStyles();
  
  if (!localStorage.getItem("rol")) {
    return <Home1/>
  }
  else {
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
}