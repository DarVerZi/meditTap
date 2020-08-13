import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import SimpleMenu from './SimpleMenu';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#991B1E",
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="container-fluid">
    
      <div className={classes.root}>

        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              {/*<MenuIcon />
              <div class="d-flex flex-row bd-highlight mb-3">
              <ul class="nav">
              <div class="p-2 bd-highlight">
  <li class="nav-item">
    <a class="nav-link, text-white" href="/">Home</a>
  </li>
  </div>
  <div class="p-2 bd-highlight">
  <li class="nav-item">
    <a class="nav-link, text-white" href="/GestionDeUsuarios">Gestion De Usuarios</a>
  </li>
  </div>
  <div class="p-2 bd-highlight">
  <li class="nav-item">
    <a class="nav-link, text-white" href="/Turnos">Turnos</a>
  </li>
  </div>
  <div class="p-2 bd-highlight">
  <li class="nav-item">
    <a class="nav-link, text-white" href="/HistoriaClinica">Historia Clinica</a>
  </li>
  </div>
  <div class="p-2 bd-highlight">
  <li class="nav-item">
    <a class="nav-link, text-white" href="/Recetas">Recetas</a>
  </li>
  </div>
  {/*<li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
</div>*/}
              </IconButton>

            <Typography variant="h6" className={classes.title}>
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                > 
                  <MenuItem onClick={handleClose}><NavLink to="/Login">Login</NavLink></MenuItem>
                  <MenuItem onClick={handleClose}><NavLink to="/Registrar">Registrarse</NavLink></MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}