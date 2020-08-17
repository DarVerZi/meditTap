import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ComboBox from './ComboBox';
import MenuAppBar from './MenuAppBar2';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
      margin: theme.spacing(1),
    },
  }));
  
  export default function VistaHCMed() {
    const classes = useStyles();

return (
    <div className={classes.root}>
      <div className="container-fluid">
        <div className="row">
          {/* Barra con menú y logout */}
          <div className="col-12">
            <MenuAppBar/>
            <br></br>
          </div>
          {/* Buscador de pacientes */}
          <div className="col-12">
            <h1>Historia Clínica</h1>
            <div>
              <ComboBox/>
              <br></br>
            </div>
          </div>
          {/* Formulario de datos personales */}
          <div className="col-12">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputNombre">Nombres</label>
                  <input type="text" value="Dario Alberto" class="form-control" id="inputNombre"/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputApellido">Apellidos</label>
                  <input type="text" value="Vergara Zatti" class="form-control" id="inputApellido"/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="inputDNI">Nro Documento</label>
                  <input type="text" value="12345678" class="form-control" id="inputDNI"/>
                </div>
                <div class="form-group col-md-4">
                  <label for="inputFNac">Fecha de Nacimiento</label>
                  <input type="text" value="22/01/1988" class="form-control" id="inputFNac"/>
                </div>
                <div class="form-group col-md-4">
                  <label for="inputGenero">Genero</label>
                  <select id="inputGenero" class="form-control">
                    {/*<option selected>Seleccione...</option>*/}
                    <option selected>Hombre</option>
                    <option>Mujer</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputDomicilio">Domicilio</label>
                  <input type="text" value="25 de Mayo 432, Moron" class="form-control" id="inputDomicilio" placeholder="Calle, número, depto, etc."/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputEmail">Email</label>
                  <input type="email" value="dariovergara@gmail.com" class="form-control" id="inputEmail"/>
                </div>
              </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputTelPrin">Telefono Principal</label>
                        <input type="text" value="54 011 1234 5678" class="form-control" id="inputTelPrin"/>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputCel">Telefono Celular</label>
                        <input type="text" value="54 911 1234 5678" class="form-control" id="inputCel"/>
                      </div>
                    </div>
                    {/*<button type="submit" class="btn btn-primary">Sign in</button>*/}
                </form>
              </div>
              {/* Formulario de datos médicos */}
              <div className="col-12">
                <div class="form-group row">
    <div class="col-sm-6">Se encuentra Ud. en buen estado de salud?</div>
    <div class="col-sm-3">
    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="1.1" name="1.1" class="custom-control-input" defaultChecked= "true"/>
                        <label class="custom-control-label" for="1.1">SI</label>
                    </div>
    </div>
    <div class="col-sm-3">
    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="1.2" name="1.1" class="custom-control-input" />
                        <label class="custom-control-label" for="1.2">NO</label>
                    </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-6">Esta Ud. recibiendo tratamiento medico actualmente?</div>
    <div class="col-sm-3">
    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="2.1" name="2.1" class="custom-control-input" />
                        <label class="custom-control-label" for="2.1">SI</label>
                    </div>
    </div>
    <div class="col-sm-3">
    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="2.2" name="2.1" class="custom-control-input" defaultChecked= "true"/>
                        <label class="custom-control-label" for="2.2">NO</label>
                    </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-6">Ha notado Ud. algun cambio en su salud general durante el ultimo año?</div>
    <div class="col-sm-3">
    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="3.1" name="3.1" class="custom-control-input" />
                        <label class="custom-control-label" for="3.1">SI</label>
                    </div>
    </div>
    <div class="col-sm-3">
    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="3.2" name="3.1" class="custom-control-input" defaultChecked= "true"/>
                        <label class="custom-control-label" for="3.2">NO</label>
                    </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-6">Ha estado Ud. seriamente enfermo alguna vez?</div>
    <div class="col-sm-3">
    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="4.1" name="4.1" class="custom-control-input" />
                        <label class="custom-control-label" for="4.1">SI</label>
                    </div>
    </div>
    <div class="col-sm-3">
    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="4.2" name="4.1" class="custom-control-input" defaultChecked= "true" />
                        <label class="custom-control-label" for="4.2">NO</label>
                    </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-6">Ha estado Ud. hospitalizado?</div>
    <div class="col-sm-3">
    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="5.1" name="5.1" class="custom-control-input" />
                        <label class="custom-control-label" for="5.1">SI</label>
                    </div>
    </div>
    <div class="col-sm-3">
    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="5.2" name="5.1" class="custom-control-input" defaultChecked= "true"/>
                        <label class="custom-control-label" for="5.2">NO</label>
                    </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-6">Conoce Ud. algun problema relacionado con su presion arterial?</div>
    <div class="col-sm-3">
    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="6.1" name="6.1" class="custom-control-input" />
                        <label class="custom-control-label" for="6.1">SI</label>
                    </div>
    </div>
    <div class="col-sm-3">
    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="6.2" name="6.1" class="custom-control-input" defaultChecked= "true"/>
                        <label class="custom-control-label" for="6.2">NO</label>
                    </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-6">Padece Ud. problemas del corazon?</div>
    <div class="col-sm-3">
    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="7.1" name="7.1" class="custom-control-input" />
                        <label class="custom-control-label" for="7.1">SI</label>
                    </div>
    </div>
    <div class="col-sm-3">
    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="7.2" name="7.1" class="custom-control-input" defaultChecked= "true"/>
                        <label class="custom-control-label" for="7.2">NO</label>
                    </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-6">Padece Ud. problemas respiratorios?</div>
    <div class="col-sm-3">
    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="8.1" name="8.1" class="custom-control-input" defaultChecked= "true"/>
                        <label class="custom-control-label" for="8.1">SI</label>
                    </div>
    </div>
    <div class="col-sm-3">
    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="8.2" name="8.1" class="custom-control-input" />
                        <label class="custom-control-label" for="8.2">NO</label>
                    </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-6">Padece Ud. ataques, desmayos o convulsiones recurrentes?</div>
    <div class="col-sm-3">
    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="9.1" name="9.1" class="custom-control-input" />
                        <label class="custom-control-label" for="9.1">SI</label>
                    </div>
    </div>
    <div class="col-sm-3">
    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="9.2" name="9.1" class="custom-control-input" defaultChecked= "true"/>
                        <label class="custom-control-label" for="9.2">NO</label>
                    </div>
    </div>
  </div>
  {/*Solo checkBoxes a partir de aquí*/}
  <div class="form-group row">
    <div class="col-sm-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1" defaultChecked= "true"/>
        <label class="form-check-label" for="gridCheck1">
          Alergias
        </label>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          Infartos
        </label>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          Soplo cardíaco
        </label>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          Diabetes
        </label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          Fiebre reumática
        </label>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          Anemia
        </label>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          Tuberculosis
        </label>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          Artrosis
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label for="inputObser">Observaciones</label>
    <textarea type="text" class="form-control" id="inputObser" placeholder="Aclaraciones sobre los campos anteriores"/>
  </div>
                </div>
                {/*Tabla con novedades*/}
                <h1>Historial de Novedades</h1>
                <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col-sm-3">Asunto</th>
      <th scope="col-sm-3">Fecha</th>
      <th scope="col-sm-6">Novedad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Gastritis</th>
      <td>13/08/2020</td>
      <td>El paciente presentó un cuadro de gastritis aguda y se le recetaron los medicamentos correspondientes</td>
    </tr>
    <tr>
      <th scope="row">Colesterol</th>
      <td>15/07/2020</td>
      <td>Valores de colesterol elevado en los últimos estudios realizados (13/07/2020)</td>
    </tr>
  </tbody>
</table>
{/*Carga de novedades*/}
<div className="col-12">
<h1>Cargar Novedades</h1>
<form>
    <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputAsunto">Asunto</label>
    <input type="text" class="form-control" id="inputAsunto"/>
  </div>
  <div class="form-group col-md-6">
    <label for="inputFecha">Fecha</label>
    <input type="text" class="form-control" id="inputFecha"/>
  </div>
  </div>
<div class="form-group">
    <label for="inputObser">Novedades</label>
    <textarea type="text" class="form-control" id="inputObser" placeholder="Ingrese aquí las novedades del paciente"/>
  </div>
  </form>
  </div>
  {/*Botones*/}
  <div className="col-12">
  <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Aceptar
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Cancelar
        </Button>
        </div>
        </div>
        <br></br>
        </div>
        </div>
  );
}
