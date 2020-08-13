import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
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

export default function ButtonMail() {
    const classes = useStyles();

    return (
        <form>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<MailIcon />}
            >
                
      </Button>
        </form>
    );
}

