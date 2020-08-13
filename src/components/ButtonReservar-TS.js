import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

export default function ButtonReservar() {
    const classes = useStyles();

    return (
        <form>
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