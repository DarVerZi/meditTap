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

export default function SimpleMenu(props) {
    const rol = props.rol;
    /*const classes = createStyles();*/
    
    const [anchorEl, setAnchorEl] = React.useState(0);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };    

    if(rol==="admin") {
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
                    <MenuItem onClick={handleClose}><NavLink to={"/Home/"+rol}>Home</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to={"/GestionDeUsuarios/"+rol}>Gestion De Usuarios</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to={"/Turnos/"+rol}>Turnos</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to={"/HistoriaClinica/"+rol}>Historia Clinica</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to={"/Recetas/"+rol}>Recetas</NavLink></MenuItem>
                    
                </Menu>
            </div>
        );
    }
    
    else {
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
                    <MenuItem onClick={handleClose}><NavLink to={"/Home/"+rol}>Home</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to={"/Turnos/"+rol}>Turnos</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to={"/HistoriaClinica/"+rol}>Historia Clinica</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to={"/Recetas/"+rol}>Recetas</NavLink></MenuItem>
                    
                </Menu>
            </div>
        );

    }
}
