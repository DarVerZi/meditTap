import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function DatePicker() {
    const classes = useStyles();

    return (
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                label="Fecha"
                type="date"
                defaultValue="2020-08-13"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}

            />
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<EventAvailableIcon />}
            >
                Reservar
      </Button>
        </form>
    );
}
