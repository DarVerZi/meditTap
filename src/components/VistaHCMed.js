import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconLabelButtons from './IconLabelButtons';
import ComboBox from './ComboBox';
import FormHC from './FormHC';
import HCCheckBoxes from './CheckBoxes-HC';
import HCDescriptions from './Descriptions-HC';

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
  
  export default function VistaHCMed() {
    const classes = useStyles();

return (
    <div className={classes.root}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="col-sm-6 col-xs-12">
                    bloque
                    </div>
                </div>
                <div className="col-12">
                    bloque
                </div>
                <div className="col-12">
                    bloque
                </div>
                <div className="col-12">
                    bloque
                </div>
            </div>
        </div>
    </div>
  );
}