import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Dario" {...a11yProps(0)} />
          <Tab label="Gian" {...a11yProps(1)} />
          <Tab label="Mary" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <p7> LEA ATENTAMENTE LOS SIGUIENTES TÉRMINOS Y CONDICIONES DE USO DEL SISTEMA DE TURNOS WEB. VERSIÓN VIGENTE 13/07/2020:
Este contrato describe los términos y condiciones generales (los "Términos y Condiciones Generales") aplicables al uso de los servicios ofrecidos por Institutos Médicos S.A – Sanatorio Clínica Modelo Morón , CUIT 30- 54584921-2, ("los Servicios") dentro del  Cualquier persona (en adelante "Usuario" o en plural "Usuarios") que desee acceder y/o usar el sitio o los Servicios podrá hacerlo sujetándose a los Términos y Condiciones Generales respectivos, junto con todas las demás políticas y principios que los rigen y que son incorporados al presente por referencia. CUALQUIER PERSONA QUE NO ACEPTE ESTOS TÉRMINOS Y CONDICIONES GENERALES, LOS CUALES TIENEN UN CARÁCTER OBLIGATORIO Y VINCULANTE, DEBERÁ ABSTENERSE DE UTILIZAR EL PORTAL, el Usuario debe leer, entender y aceptar todas las condiciones establecidas en los Términos y Condiciones Generales y en las Políticas de Privacidad, así como en los demás documentos incorporados a los mismos por referencia, previo a su registración como Usuario.
          </p7>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Holaaaaaa!!
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          AJDJVHSDUIHVDSFHIO
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}