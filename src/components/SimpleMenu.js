import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { createStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';

/*
function useState<S>(initialState: (() => S) | S) {
    const dispatcher = resolveDispatcher();
    return dispatcher.useState(initialState);
  }


const myTheme = createMuiTheme({
    overrides: {
        MuiMenuItem: createStyles({
            root: {
                color: "#000000",
            },
        }),
    },
});*/

export default function SimpleMenu() {

    /*const classes = createStyles();*/
    
    const [anchorEl, setAnchorEl] = React.useState(0);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };    

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" color="secondary" onClick={handleClick}>
                Menu
      </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><NavLink to="/Home">Home</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/GestionDeUsuarios">Gestion De Usuarios</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/Turnos">Turnos</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/HistoriaClinica">Historia Clinica</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/Recetas">Recetas</NavLink></MenuItem>
                
            </Menu>
        </div>
    );
}
//export default SimpleMenu(); 